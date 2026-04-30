"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function useScrollLaunch() {
    const reactionRef = useRef({
        target: 0,
        current: 0,
        boost: 0,
        direction: 1,
        lastScrollY: 0,
        lastTouchY: null
    });

    useEffect(() => {
        const reaction = reactionRef.current;

        const kickRocket = (deltaY) => {
            const power = THREE.MathUtils.clamp(Math.abs(deltaY) / 260, 0.15, 1);

            if (deltaY > 0) {
                // Scroll down: launch
                reaction.target = THREE.MathUtils.clamp(
                    reaction.target + 0.55 + power * 0.5,
                    0,
                    1
                );
                reaction.direction = 1;
            } else {
                // Scroll up: settle back
                reaction.target = THREE.MathUtils.clamp(
                    reaction.target - 0.5 - power * 0.35,
                    0,
                    1
                );
                reaction.direction = -1;
            }

            reaction.boost = THREE.MathUtils.clamp(
                reaction.boost + power * 0.9,
                0,
                1.25
            );
        };

        const handleWheel = (event) => {
            kickRocket(event.deltaY);
        };

        const handleScroll = () => {
            const currentY = window.scrollY || 0;
            const deltaY = currentY - reaction.lastScrollY;

            if (Math.abs(deltaY) > 1) {
                kickRocket(deltaY * 1.25);
            }

            reaction.lastScrollY = currentY;
        };

        const handleTouchStart = (event) => {
            reaction.lastTouchY = event.touches[0]?.clientY ?? null;
        };

        const handleTouchMove = (event) => {
            const touchY = event.touches[0]?.clientY ?? null;

            if (touchY !== null && reaction.lastTouchY !== null) {
                const deltaY = reaction.lastTouchY - touchY;
                kickRocket(deltaY * 1.35);
            }

            reaction.lastTouchY = touchY;
        };

        reaction.lastScrollY = window.scrollY || 0;

        window.addEventListener("wheel", handleWheel, {
            passive: true,
            capture: true
        });
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel, { capture: true });
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return reactionRef;
}

function Rocket({ reactionRef }) {
    const rocketRef = useRef(null);
    const flameRef = useRef(null);
    const innerFlameRef = useRef(null);
    const glowRef = useRef(null);
    const engineLightRef = useRef(null);

    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;
        const reaction = reactionRef.current;

        reaction.current = THREE.MathUtils.damp(
            reaction.current,
            reaction.target,
            4.8,
            delta
        );

        reaction.target = THREE.MathUtils.damp(
            reaction.target,
            0,
            0.85,
            delta
        );

        reaction.boost = THREE.MathUtils.damp(
            reaction.boost,
            0,
            2.6,
            delta
        );

        const launch = reaction.current;
        const boost = reaction.boost;

        if (rocketRef.current) {
            rocketRef.current.position.y =
                Math.sin(time * 1.2) * 0.12 + launch * 2.25 + boost * 0.4;

            rocketRef.current.position.x =
                Math.sin(time * 0.7) * 0.08 + state.pointer.x * 0.1;

            rocketRef.current.rotation.x =
                0.12 - launch * 0.22 + state.pointer.y * 0.05;

            rocketRef.current.rotation.y =
                -0.35 + Math.sin(time * 0.55) * 0.18 + state.pointer.x * 0.12;

            rocketRef.current.rotation.z =
                -0.12 - launch * 0.18 + Math.sin(time * 0.8) * 0.04;

            rocketRef.current.scale.setScalar(0.78 + boost * 0.05);
        }

        if (flameRef.current) {
            const pulse = 1 + Math.sin(time * 16) * 0.15;
            const firePower = 1 + launch * 1.2 + boost * 1.5;

            flameRef.current.scale.set(
                1 + boost * 0.15,
                firePower * pulse,
                1 + boost * 0.15
            );

            flameRef.current.material.opacity = 0.75 + boost * 0.18;
        }

        if (innerFlameRef.current) {
            const pulse = 1 + Math.sin(time * 22) * 0.12;
            const firePower = 1 + launch * 0.8 + boost * 1.1;

            innerFlameRef.current.scale.set(1, firePower * pulse, 1);
        }

        if (glowRef.current) {
            glowRef.current.scale.setScalar(1 + launch * 1.1 + boost * 1.2);
            glowRef.current.material.opacity = 0.12 + launch * 0.15 + boost * 0.22;
        }

        if (engineLightRef.current) {
            engineLightRef.current.intensity = 1.5 + launch * 2 + boost * 3.5;
        }
    });

    return (
        <group ref={rocketRef} rotation={[0.12, -0.35, -0.12]} scale={0.78}>
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.42, 0.5, 2.2, 56]} />
                <meshStandardMaterial
                    color="#e2e8f0"
                    metalness={0.55}
                    roughness={0.2}
                />
            </mesh>

            <mesh position={[0, 0.1, 0.43]}>
                <boxGeometry args={[0.12, 1.55, 0.025]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
            </mesh>

            <mesh position={[0, 1.35, 0]}>
                <coneGeometry args={[0.43, 0.9, 56]} />
                <meshStandardMaterial
                    color="#38bdf8"
                    metalness={0.35}
                    roughness={0.2}
                    emissive="#0ea5e9"
                    emissiveIntensity={0.2}
                />
            </mesh>

            <mesh position={[0, 0.55, 0.44]}>
                <sphereGeometry args={[0.22, 36, 36]} />
                <meshStandardMaterial
                    color="#7dd3fc"
                    metalness={0.12}
                    roughness={0.06}
                    emissive="#38bdf8"
                    emissiveIntensity={0.85}
                />
            </mesh>

            <mesh position={[0, 0.55, 0.435]}>
                <torusGeometry args={[0.235, 0.018, 16, 64]} />
                <meshStandardMaterial
                    color="#0f172a"
                    metalness={0.7}
                    roughness={0.2}
                />
            </mesh>

            <mesh position={[-0.48, -0.85, 0]} rotation={[0, 0, 0.45]}>
                <boxGeometry args={[0.22, 0.85, 0.18]} />
                <meshStandardMaterial
                    color="#7c3aed"
                    metalness={0.35}
                    roughness={0.28}
                    emissive="#4c1d95"
                    emissiveIntensity={0.15}
                />
            </mesh>

            <mesh position={[0.48, -0.85, 0]} rotation={[0, 0, -0.45]}>
                <boxGeometry args={[0.22, 0.85, 0.18]} />
                <meshStandardMaterial
                    color="#7c3aed"
                    metalness={0.35}
                    roughness={0.28}
                    emissive="#4c1d95"
                    emissiveIntensity={0.15}
                />
            </mesh>

            <mesh position={[0, -0.85, -0.48]} rotation={[0.45, 0, 0]}>
                <boxGeometry args={[0.2, 0.85, 0.18]} />
                <meshStandardMaterial
                    color="#4f46e5"
                    metalness={0.35}
                    roughness={0.28}
                    emissive="#312e81"
                    emissiveIntensity={0.15}
                />
            </mesh>

            <mesh position={[0, -1.18, 0]}>
                <cylinderGeometry args={[0.34, 0.42, 0.22, 56]} />
                <meshStandardMaterial
                    color="#111827"
                    metalness={0.85}
                    roughness={0.16}
                />
            </mesh>

            <pointLight
                ref={engineLightRef}
                position={[0, -1.75, 0]}
                intensity={1.5}
                distance={4.2}
                color="#fb923c"
            />

            <mesh ref={flameRef} position={[0, -1.75, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.34, 1.05, 36]} />
                <meshBasicMaterial
                    color="#fb923c"
                    transparent
                    opacity={0.85}
                    depthWrite={false}
                />
            </mesh>

            <mesh
                ref={innerFlameRef}
                position={[0, -1.6, 0]}
                rotation={[Math.PI, 0, 0]}
            >
                <coneGeometry args={[0.17, 0.68, 36]} />
                <meshBasicMaterial
                    color="#fef3c7"
                    transparent
                    opacity={0.96}
                    depthWrite={false}
                />
            </mesh>

            <mesh ref={glowRef} position={[0, -2.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.55, 0.018, 16, 96]} />
                <meshBasicMaterial
                    color="#38bdf8"
                    transparent
                    opacity={0.12}
                    depthWrite={false}
                />
            </mesh>
        </group>
    );
}

function OrbitRings({ reactionRef }) {
    const ringA = useRef(null);
    const ringB = useRef(null);
    const ringC = useRef(null);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const reaction = reactionRef.current;
        const launch = reaction.current;
        const boost = reaction.boost;

        if (ringA.current) {
            ringA.current.rotation.z = time * (0.22 + launch * 0.8 + boost * 0.7);
            ringA.current.scale.setScalar(0.92 + launch * 0.25);
        }

        if (ringB.current) {
            ringB.current.rotation.x = time * (0.18 + launch * 0.7 + boost * 0.55);
            ringB.current.scale.setScalar(0.96 + launch * 0.28);
        }

        if (ringC.current) {
            ringC.current.rotation.y = time * (0.2 + launch * 0.6 + boost * 0.5);
            ringC.current.scale.setScalar(0.9 + launch * 0.18);
        }
    });

    return (
        <group>
            <mesh ref={ringA} rotation={[1.2, 0.2, 0.4]}>
                <torusGeometry args={[2.15, 0.012, 16, 160]} />
                <meshBasicMaterial color="#38bdf8" transparent opacity={0.52} />
            </mesh>

            <mesh ref={ringB} rotation={[0.4, 1.1, -0.35]}>
                <torusGeometry args={[2.55, 0.01, 16, 160]} />
                <meshBasicMaterial color="#a78bfa" transparent opacity={0.42} />
            </mesh>

            <mesh ref={ringC} rotation={[1.65, -0.5, 0.1]}>
                <torusGeometry args={[1.72, 0.009, 16, 160]} />
                <meshBasicMaterial color="#67e8f9" transparent opacity={0.36} />
            </mesh>
        </group>
    );
}

function SpaceParticles({ reactionRef }) {
    const pointsRef = useRef(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(420 * 3);

        for (let i = 0; i < 420; i++) {
            const radius = 1.5 + Math.random() * 3.2;
            const angle = Math.random() * Math.PI * 2;
            const height = (Math.random() - 0.5) * 4.8;

            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = height;
            positions[i * 3 + 2] = Math.sin(angle) * radius;
        }

        return positions;
    }, []);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const reaction = reactionRef.current;
        const launch = reaction.current;
        const boost = reaction.boost;

        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * (0.055 + launch * 0.1);
            pointsRef.current.position.y = -launch * 1.5 - boost * 0.7;
            pointsRef.current.scale.setScalar(1 + launch * 0.18 + boost * 0.15);
            pointsRef.current.material.size = 0.022 + boost * 0.018;
            pointsRef.current.material.opacity = 0.68 + boost * 0.18;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                size={0.022}
                color="#7dd3fc"
                transparent
                opacity={0.68}
                sizeAttenuation
            />
        </points>
    );
}

function SpeedLines({ reactionRef }) {
    const groupRef = useRef(null);

    const lines = useMemo(() => {
        return Array.from({ length: 34 }, () => ({
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 4,
            z: (Math.random() - 0.5) * 2,
            length: 0.35 + Math.random() * 0.55
        }));
    }, []);

    useFrame((state) => {
        const reaction = reactionRef.current;
        const launch = reaction.current;
        const boost = reaction.boost;

        if (groupRef.current) {
            groupRef.current.position.y = -launch * 1.8 - boost * 1.1;
            groupRef.current.visible = launch > 0.04 || boost > 0.05;

            groupRef.current.children.forEach((line, index) => {
                line.position.y -= 0.035 + launch * 0.08 + boost * 0.12;

                if (line.position.y < -2.6) {
                    line.position.y = 2.6;
                }

                line.material.opacity = THREE.MathUtils.clamp(
                    launch * 0.35 + boost * 0.55,
                    0,
                    0.7
                );
            });
        }
    });

    return (
        <group ref={groupRef}>
            {lines.map((line, index) => (
                <mesh key={index} position={[line.x, line.y, line.z]}>
                    <boxGeometry args={[0.012, line.length, 0.012]} />
                    <meshBasicMaterial
                        color={index % 2 === 0 ? "#38bdf8" : "#a78bfa"}
                        transparent
                        opacity={0}
                        depthWrite={false}
                    />
                </mesh>
            ))}
        </group>
    );
}

function TechPanels({ reactionRef }) {
    const groupRef = useRef(null);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const reaction = reactionRef.current;
        const launch = reaction.current;

        if (groupRef.current) {
            groupRef.current.rotation.y = time * (0.12 + launch * 0.25);
            groupRef.current.rotation.x = Math.sin(time * 0.45) * 0.05;
            groupRef.current.position.y = -launch * 0.35;
        }
    });

    const panels = [
        [-2.15, 0.85, -0.35, 0.35],
        [2.05, 0.25, -0.25, -0.25],
        [-1.85, -1.1, 0.25, -0.15],
        [1.75, -1.25, 0.45, 0.3]
    ];

    return (
        <group ref={groupRef}>
            {panels.map(([x, y, z, rot], index) => (
                <Float
                    key={index}
                    speed={1.4}
                    rotationIntensity={0.18}
                    floatIntensity={0.26}
                >
                    <group position={[x, y, z]} rotation={[0.25, rot, 0.15]}>
                        <mesh>
                            <boxGeometry args={[0.82, 0.48, 0.045]} />
                            <meshStandardMaterial
                                color="#0f172a"
                                metalness={0.25}
                                roughness={0.2}
                                transparent
                                opacity={0.78}
                            />
                        </mesh>

                        <mesh position={[-0.22, 0.05, 0.031]}>
                            <boxGeometry args={[0.24, 0.045, 0.015]} />
                            <meshBasicMaterial color="#38bdf8" />
                        </mesh>

                        <mesh position={[0.16, -0.08, 0.031]}>
                            <boxGeometry args={[0.34, 0.045, 0.015]} />
                            <meshBasicMaterial color="#a78bfa" />
                        </mesh>

                        <mesh position={[0.28, 0.12, 0.031]}>
                            <sphereGeometry args={[0.055, 18, 18]} />
                            <meshBasicMaterial color="#67e8f9" />
                        </mesh>
                    </group>
                </Float>
            ))}
        </group>
    );
}

function SceneContent() {
    const reactionRef = useScrollLaunch();

    return (
        <>
            <ambientLight intensity={0.78} />

            <directionalLight
                position={[3, 4, 5]}
                intensity={1.85}
                color="#e0f2fe"
            />

            <pointLight
                position={[-3, 2, 2]}
                intensity={2.1}
                color="#38bdf8"
            />

            <pointLight
                position={[2, -2, 2]}
                intensity={1.65}
                color="#a78bfa"
            />

            <Stars
                radius={45}
                depth={30}
                count={450}
                factor={2.4}
                saturation={0}
                fade
                speed={0.25}
            />

            <Float speed={1.25} rotationIntensity={0.18} floatIntensity={0.18}>
                <Rocket reactionRef={reactionRef} />
            </Float>

            <OrbitRings reactionRef={reactionRef} />
            <TechPanels reactionRef={reactionRef} />
            <SpaceParticles reactionRef={reactionRef} />
            <SpeedLines reactionRef={reactionRef} />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableDamping
                dampingFactor={0.08}
                autoRotate
                autoRotateSpeed={0.18}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.6}
            />
        </>
    );
}

export default function Scene() {
    return (
        <Canvas
            camera={{ position: [0, 0.15, 6.5], fov: 42 }}
            dpr={[1, 1.35]}
            gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        >
            <SceneContent />
        </Canvas>
    );
}