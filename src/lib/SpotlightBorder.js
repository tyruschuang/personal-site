import {Box} from "@mui/material";
import React from "react";

export default function SpotlightBorder(props) {
    const divRef = React.useRef(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const [position, setPosition] = React.useState({x: 0, y: 0});
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({x: e.clientX - rect.left, y: e.clientY - rect.top});
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <Box
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                ...props.sx,
                position: "relative",
                display: "inline-block",
                border: `1px solid ${props.inactiveColor}`,
            }}
        >
            <Box
                ref={divRef}
                sx={{
                    ...props.sx,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    border: `1px solid ${props.activeColor}`,
                    opacity: opacity,
                    maskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, black 0%, transparent 30%)`,
                    transition: "opacity 0.4s ease",
                }}
            />

            <Box sx={{position: "relative", zIndex: 1}}>{props.children}</Box>
        </Box>
    );
}
