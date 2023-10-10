import {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";

const transition = "cubic-bezier(0.25, 0.1, 0.25, 1)";

export default function FadeIn(props) {

    const duration = props.duration || 650;
    const delay = props.delay || 0;

    const [isVisible, setVisible] = useState(false);
    const [isSeen, setSeen] = useState(false);

    const domRef = useRef();

    useEffect(() => {
        const current = domRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (isSeen) {
                    return;
                }
                setTimeout(() => {
                    setVisible(entry.isIntersecting);
                    setSeen(isVisible);
                }, delay);
            });
        });
        observer.observe(current);
        return () => observer.unobserve(current);
    }, [delay, isVisible, isSeen]);

    return (
        <Box sx={{
            ...props.sx,
            opacity: isVisible ? 1 : 0,
            transition: `opacity ${duration}ms ${transition}, transform ${duration}ms ${transition}`,
            transform: isVisible ? "none" : "translateY(20vh)",
            visibility: isVisible ? "visible" : "hidden",
            willChange: "opacity, transform",
        }} {...props} ref={domRef}>
            {props.children}
        </Box>
    )

}