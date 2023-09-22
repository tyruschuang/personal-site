export const hover = {
    position: "relative",

    "&:hover": {
        backgroundColor: "transparent",
    },
    "&:after": {
        content: '""',
        display: "block",
        height: "2px",
        width: "0",
        backgroundColor: "primary.light",
        position: "absolute",
        bottom: "0",
        left: "0",
        transition: "width 0.2s ease-in-out",
    },
    "&:hover:after": {
        width: "100%",
    },
};
