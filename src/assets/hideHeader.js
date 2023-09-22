import {useCallback} from "react";

export default function useHideHeader() {

    const hideHeader = useCallback(() => {
        const header = document.getElementById("header");
        header.style.color = "transparent";
        header.style.background = "transparent";
        const footer = document.getElementById("footer");
        footer.style.color = "transparent";
    }, []);

    const showHeader = useCallback(() => {
        const header = document.getElementById("header");
        header.style.color = "black";
        header.style.background = "white";
        const footer = document.getElementById("footer");
        footer.style.color = "black";
    }, []);

    return {hideHeader, showHeader}

}