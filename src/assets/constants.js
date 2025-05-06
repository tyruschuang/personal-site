import {AccountTree, ContactMail, Home, WorkHistory} from "@mui/icons-material";

export const pages =
    {
        "about": <Home sx={{
            fontSize: 24
        }}/>,
        "experience": <WorkHistory sx={{
            fontSize: 24
        }}/>,
        "projects": <AccountTree sx={{
            fontSize: 24
        }}/>,
        "contact": <ContactMail sx={{
            fontSize: 24
        }}/>
    }

export const experience = [
    {
        dates: "02/2025 - Present",
        company: "Voulay",
        title: "Full Stack Intern",
        description:
            ["Collaborated with development team on Voulay's innovative Living Discount platform, a technology that connects e-commerce businesses with customers through dynamic discount systems.",
                "Designed and developed Firebase/Node.js infrastructure to process user voting blocks, triggering automated workflows for brand promotion.",
                "Built a secure and scalable API to handle user votes, discount allocation, and engagement metrics."]
    },
    {
        dates: "02/2025 - 05/2025",
        company: "American Dog Society",
        title: "Full Stack Intern",
        description:
            ["Spearheaded the design and development of a mobile-first UI for the organization's upcoming application.",
                "Designed and developed 5+ responsive pages following accessibility standards (WCAG 2.1 AA).",
                "Served as the critical bridge between frontend and backend development teams, facilitating efficient collaboration and streamlining development workflows.",
                "Established and implemented standardized development practices, including Git version control workflows and Figma component libraries, which significantly improved team collaboration and reduced redundant work."]
    },
    {
        dates: "04/2023 - 08/2023",
        company: "StylHaus",
        title: "Full Stack Intern",
        description:
            ["Facilitated the design and development of a responsive, user friendly web platforms using WordPress and PHP.",
                "Gained hands-on experience in front-end and back-end development, troubleshooting, and optimizing websites for speed and functionality."]
    },
    {
        dates: "12/2020 - 10/2024",
        company: "Self-employed",
        title: "Game Developer",
        description:
            ["Founded and led teams of up to 20 developers and moderators in creating and managing profitable Minecraft gaming experiences.",
                "Developed 10+ custom Minecraft games, with the most popular server averaging 70 concurrent players.",
                "Generated $20,000 in profit through strategic monetization while maintaining player satisfaction.",
                "Engineered custom core plugins using Java and Kotlin to create unique gameplay mechanics and features.",
                "Managed all operational aspects including community engagement and player retention strategies, technical infrastructure and performance optimization, server maintenance and troubleshooting, and team coordination and project management."]
    }
]

export const projects = [
    {
        thumbnail: require("../assets/projects/personal site.png"),
        title: "Personal Site",
        description: "This site! Built with React, MUI, and Vercel.",
        link: "https://tyrus-chuang.vercel.app/",
        technologies: ["ReactJS", "MUI", "Vercel"]
    },
    {
        thumbnail: require("../assets/projects/torch.png"),
        title: "Torch",
        description: "A Minecraft server query tool featuring a responsive UI, efficient caching systems, and a public RESTful API.",
        link: "https://torch.onrender.com/",
        technologies: ["ReactJS", "MUI", "Render", "GoLang"]
    },
    {
        thumbnail: require("../assets/projects/scouting app.png"),
        title: "972 Scouting App",
        description: "The 972 Iron Claw Robotics scouting app for the 2024 FIRST Robotics Competition.",
        link: "https://scouting-app-2024.onrender.com/",
        technologies: ["ReactJS", "MUI", "Render", "Firebase", "NoSQL"]
    }
]
