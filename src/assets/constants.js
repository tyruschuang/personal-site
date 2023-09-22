const gradients = require("./gradients.json");

export const pages = {
    about: "/",
    art: "/art",
    code: "/code",
    contact: "/contact",
};

export const projects = [
    {
        thumbnail: require("../assets/images/angel.png"),
        title: "Personal Site",
        description: "This site! Built with React, MUI, and Vercel.",
        link: "https://github.com/omegaladon/personal-site",
        tags: ["Development", "UI/UX"],
        full: true,
    }
]

export const images = [
    {
        image: require("../assets/images/angel.png"),
        title: "Angel",
    },
    {
        image: require("../assets/images/jungle.png"),
        title: "Jungle",
    },
    {
        image: require("../assets/images/castle on a hill.png"),
        title: "Castle on a Hill",
    },
    {
        image: require("../assets/images/arcane.png"),
        title: "Arcane",
    },
    {
        image: require("../assets/images/big oriental.png"),
        title: "Oriental",
    },
    {
        image: require("../assets/images/building.png"),
        title: "Builder",
    },
    {
        image: require("../assets/images/castle.png"),
        title: "Natural Rigidity",
    },
    {
        image: require("../assets/images/castle 2.png"),
        title: "Sunrise",
    },
    {
        image: require("../assets/images/castle 3.png"),
        title: "Night",
    },
    {
        image: require("../assets/images/cyber.png"),
        title: "Dark",
    },
    {
        image: require("../assets/images/fishing in the clouds.png"),
        title: "Cloudy Fishing",
    },
    {
        image: require("../assets/images/horses.png"),
        title: "Horses",
    },
    {
        image: require("../assets/images/industrial.png"),
        title: "Industry",
    },
    {
        image: require("../assets/images/japanese.png"),
        title: "Japan",
    },
    {
        image: require("../assets/images/lone tree.png"),
        title: "Tree",
    },
    {
        image: require("../assets/images/pie.png"),
        title: "Pie",
    },
    {
        image: require("../assets/images/rose.png"),
        title: "Rose",
    },
    {
        image: require("../assets/images/scifi square.png"),
        title: "Square",
    },
    {
        image: require("../assets/images/seahorse.png"),
        title: "Seahorse",
    },
    {
        image: require("../assets/images/twist.png"),
        title: "Robot",
    },
    {
        image: require("../assets/images/spawn.png"),
        title: "Village",
    },
    {
        image: require("../assets/images/whale boat.png"),
        title: "Whale Boat",
    },
];

export const me = require("../assets/me.jpg");

export const getGradient = () => {
    const gradient = gradients[Math.floor(Math.random() * gradients.length)];
    return `linear-gradient(${gradient.direction}, ${gradient.colors.join(", ")})`;
}

export const gradient = getGradient();