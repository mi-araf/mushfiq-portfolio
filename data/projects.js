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
        shortDescription:
            "A responsive React project for showcasing premium digital tools with product cards, pricing, cart behavior, and checkout feedback.",
        description:
            "DigiTools is a modern digital tools website built with React. It includes product cards, pricing cards, cart item count, duplicate prevention, item removal, total price calculation, and toast feedback for checkout.",
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
        slug: "github-issues-tracker",
        name: "GitHub Issues Tracker",
        type: "Frontend JSON Web App",
        category: "Issue Tracking Web App",
        shortDescription:
            "A clean issue tracking web app with login access, issue listing, search functionality, and dynamic issue details using API data.",
        description:
            "GitHub Issues Tracker is a frontend web application designed to display and manage issue-style data in a simple, organized interface. The project includes a login screen with demo credentials, issue listing, search behavior, dynamic issue detail viewing, and API-based data handling. It helped me practice JavaScript DOM manipulation, API integration, responsive layout, user interaction, and clean frontend structure.",
        images: [
            "/assets/projects/github-issues-tracker-1.png",
            "/assets/projects/github-issues-tracker-2.png",
            "/assets/projects/github-issues-tracker-3.png"
        ],
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "REST API",
            "Netlify"
        ],
        liveLink: "https://mi-project-issues-tracker.netlify.app/",
        githubClient: "https://github.com/mi-araf/b13-a5-github-tracker-issues",
        challenges: [
            "Implementing login-based access with demo credentials in a simple and user-friendly way.",
            "Fetching issue data from an API and displaying it clearly in the interface.",
            "Creating search functionality so users can find issues more easily.",
            "Managing dynamic issue details and keeping the UI organized with vanilla JavaScript.",
            "Making the layout responsive across desktop, tablet, and mobile screens."
        ],
        improvements: [
            "Add real authentication instead of demo credential-based login.",
            "Improve issue filtering with status, priority, category, and date-based sorting.",
            "Add pagination or infinite scrolling for better handling of larger issue lists.",
            "Add loading states, empty states, and better error handling for API requests.",
            "Redesign the dashboard with improved charts, issue statistics, and cleaner visual hierarchy.",
            "Convert the project to React or Next.js for better component structure and scalability."
        ]
    }
];