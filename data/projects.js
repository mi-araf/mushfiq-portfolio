export const projects = [
    {
        slug: "keenkeeper",
        name: "KeenKeeper",
        type: "Frontend",
        category: "Friendship Tracking App",
        shortDescription:
            "A clean friendship and relationship tracking web app for managing connections, viewing timelines, and visualizing interaction activity.",
        description:
            "KeenKeeper helps users stay connected with people who matter most. It includes a friend directory, dynamic friend detail pages, interaction timeline, filtering, searching, and an analytics dashboard for relationship activity.",
        images: [
            "/assets/projects/keenkeeper-1.png",
            "/assets/projects/keenkeeper-2.png",
            "/assets/projects/keenkeeper-3.png"
        ],
        stack: [
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "DaisyUI",
            "React Icons",
            "React Toastify",
            "Recharts"
        ],
        liveLink: "https://keenkeeper-mi-araf.vercel.app/",
        githubClient: "https://github.com/mi-araf/b13-a7-keenkeeper-page",
        challenges: [
            "Creating clean dynamic detail pages for each friend profile.",
            "Managing timeline filtering and searching in a simple, user-friendly way.",
            "Designing a responsive analytics section that looks good across devices.",
            "Keeping the UI clean while showing enough relationship information."
        ],
        improvements: [
            "Add authentication so each user can manage their own private friend list.",
            "Add backend database support for storing real interaction history.",
            "Add reminders or notifications for follow-up dates.",
            "Improve charts with more advanced relationship insights."
        ]
    },
    {
        slug: "digitools",
        name: "DigiTools",
        type: "Frontend Landing Page",
        category: "Digital Tools Landing Page",
        description:
            "DigiTools is a responsive React project for showcasing premium digital tools with product cards, pricing, cart behavior, and checkout feedback.",
        shortDescription:
            "A modern digital tools website built with React. It includes product cards, pricing cards, cart item count, duplicate prevention, item removal, total price calculation, and toast feedback for checkout.",
        images: [
            "/assets/projects/digitools-1.png",
            "/assets/projects/digitools-2.png",
            "/assets/projects/digitools-3.png"
        ],
        stack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
            "React Icons",
            "React Toastify"
        ],
        liveLink: "https://digitools-web-araf.netlify.app/",
        githubClient: "https://github.com/mi-araf/B13-A6-DigiTools-web",
        challenges: [
            "Managing cart state and keeping the navbar count updated instantly.",
            "Preventing duplicate cart items while keeping the experience smooth.",
            "Calculating total price dynamically based on selected tools.",
            "Designing responsive product and pricing cards."
        ],
        improvements: [
            "Add real payment integration in the future.",
            "Add backend support for real products and orders.",
            "Add user authentication and purchase history.",
            "Improve product filtering and sorting."
        ]
    },
    {
        slug: "developer-portfolio",
        name: "Developer Portfolio",
        type: "Full Stack Project",
        category: "Personal Portfolio Website",
        shortDescription:
            "A modern personal portfolio built to present skills, projects, experience, and contact information with smooth responsive design.",
        description:
            "This portfolio showcases personal information, technical skills, project cards, social links, and contact sections. It focuses on clean UI, smooth animations, reusable components, and strong responsive behavior.",
        images: [
            "/assets/projects/portfolio-1.png",
            "/assets/projects/portfolio-2.png",
            "/assets/projects/portfolio-3.png"
        ],
        stack: [
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "Framer Motion",
            "Lucide React",
            "shadcn/ui"
        ],
        liveLink: "#",
        githubClient: "https://github.com/mi-araf",
        challenges: [
            "Making every section responsive across mobile, tablet, and desktop.",
            "Keeping animations smooth without making the page feel heavy.",
            "Designing reusable cards and layouts that match the same visual system.",
            "Balancing visual style with readability."
        ],
        improvements: [
            "Add a blog or case study section.",
            "Add project filtering by technology.",
            "Add better SEO metadata for each page.",
            "Add dark and light mode polish across all sections."
        ]
    }
];