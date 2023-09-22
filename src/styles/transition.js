export function slideup(index, menuOpen) {
    return {
        opacity: menuOpen ? 0 : 1,
        transform: menuOpen ? "translateY(20px)" : "translateY(0)",
        animation: menuOpen ? "fade-in-slide-up 0.5s forwards" : "none",
        animationDelay: `${index * 100}ms`,
        "@keyframes fade-in-slide-up": {
            "0%": {
                opacity: 0,
                transform: "translateY(20px)",
            },
            "100%": {
                opacity: 1,
                transform: "translateY(0)",
            },
        },
    };
}
