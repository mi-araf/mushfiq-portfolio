"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const points = useRef(null);
  const particles = useMemo(() => {
    const count = 850;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.035;
    points.current.rotation.x += delta * 0.012;
  });

  return (
    <Points ref={points} positions={particles} stride={3} frustumCulled>
      <PointMaterial transparent color="#9cc8ff" size={0.013} sizeAttenuation depthWrite={false} opacity={0.65} />
    </Points>
  );
}

function Orb() {
  const group = useRef(null);
  const ring = useRef(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.2;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.32, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, pointer.x * -0.2, 0.05);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.x * 0.24, 0.04);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, pointer.y * 0.18, 0.04);

    if (ring.current) {
      ring.current.rotation.x += delta * 0.18;
      ring.current.rotation.y -= delta * 0.12;
    }
  });

  return (
    <Float speed={1.7} rotationIntensity={0.55} floatIntensity={1.25}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.12, 7]} />
          <MeshDistortMaterial
            color="#7dd3fc"
            roughness={0.28}
            metalness={0.35}
            distort={0.28}
            speed={1.75}
            emissive="#3b82f6"
            emissiveIntensity={0.18}
          />
        </mesh>
        <mesh ref={ring} rotation={[Math.PI / 2.4, 0.35, 0.1]}>
          <torusGeometry args={[1.62, 0.012, 16, 128]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.75} />
        </mesh>
        <mesh rotation={[1.1, 0.2, 0.4]}>
          <torusGeometry args={[1.95, 0.007, 16, 128]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.45} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="h-[420px] w-full sm:h-[520px] lg:h-[620px]" aria-hidden="true">
      <Canvas
        dpr={[1, 1.65]}
        camera={{ position: [0, 0, 4.2], fov: 46 }}
        performance={{ min: 0.5 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.75} />
          <pointLight position={[4, 2, 4]} intensity={22} color="#7dd3fc" />
          <pointLight position={[-3, -1, 3]} intensity={12} color="#a78bfa" />
          <Orb />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
