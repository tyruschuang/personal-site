import {Box, Divider, IconButton, Stack} from "@mui/material";
import {pages} from "../assets/constants";
import React from "react";

function Header() {
    return (
        <Stack
            direction={"row"}
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "sticky",
                p: 1,
                mb: "10%",
                top: "5%",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                borderRadius: 64,
                width: "fit-content",
            }}
            zIndex={25000}
        >
            {Object.entries(pages).map(([key, value]) => (
                <React.Fragment key={key}>
                    <Box
                        sx={{
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            '&:hover': {
                                transform: "scale(1.1)",
                                color: "primary.main",
                                px: 1,
                            },
                        }}
                        onClick={() => {
                            document.getElementById(key).scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        <IconButton>
                            {value}
                        </IconButton>
                    </Box>
                    {key !== Object.keys(pages)[Object.keys(pages).length - 1] &&
                        <Divider orientation={"vertical"} flexItem/>}
                </React.Fragment>
            ))}
        </Stack>
        // <Stack
        //     direction={"row"}
        //     gap={3}
        //     sx={{
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         position: "sticky",
        //         p: 3,
        //         mb: "10%",
        //         top: "5%",
        //         backdropFilter: "blur(16px)",
        //         border: "1px solid rgba(255, 255, 255, 0.16)",
        //         borderRadius: 64,
        //         width: "fit-content",
        //     }}
        //     zIndex={25000}
        // >
        //     {Object.entries(pages).map(([key, value]) => (
        //         <React.Fragment key={key}>
        //             <Box
        //                 sx={{
        //                     cursor: "pointer",
        //                     fontSize: 16,
        //                     transition: "transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
        //                     '&:hover': {
        //                         transform: "scale(1.1)",
        //                         color: "primary.main",
        //                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        //                     },
        //                     '&:active': {
        //                         transform: "scale(0.95)",
        //                         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        //                     },
        //                 }}
        //                 onClick={() => {
        //                     document.getElementById(value).scrollIntoView({ behavior: "smooth" });
        //                 }}
        //             >
        //                 {value}
        //             </Box>
        //             {key !== Object.keys(pages)[Object.keys(pages).length - 1] && <Divider orientation={"vertical"} flexItem />}
        //         </React.Fragment>
        //     ))}
        // </Stack>
    );
}

export default Header;