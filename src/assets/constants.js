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

export const socials = {
    email: "mailto:businessomga@gmail.com",
    twitter: "https://twitter.com/omgabuilds",
    instagram: "https://instagram.com/omgabuilds",
    github: "https://github.com/omegaladon",
}

export const experience = [
    {
        dates: "May 2021 - August 2021",
        company: "Company",
        title: "Software Engineer Intern",
        description: "Developed a full stack web application for a client using React, Node.js, and MongoDB."
    }
]

export const projects = [
    {
        thumbnail: require("../assets/projects/personal site.png"),
        title: "Personal Site",
        description: "This site! Built with React, MUI, and Vercel.",
        link: "",
        technologies: ["React", "MUI", "Vercel"]
    }
]
