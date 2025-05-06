import {Box, Chip, Divider, Stack, Typography} from "@mui/material";
import {projects} from "../../assets/constants";
import React from "react";
import SpotlightBorder from "../../lib/SpotlightBorder";

function ProjectSection(props) {
    return (
        <SpotlightBorder inactiveColor={"#222"} activeColor={"#fff"} sx={{
            borderRadius: 4,
            cursor: "pointer",
        }}>
            <Stack direction={"column"} gap={2} sx={{
                p: 3
            }} onClick={() => {
                window.open(props.link, "_blank");
            }}>
                <Box component={"img"} src={props.thumbnail} alt={props.title} sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 4,
                }}/>
                <Divider/>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography fontSize={{xs: 16, md: 20}} fontWeight={"bold"}>
                        {props.title}
                    </Typography>
                    <Stack direction={"row"} gap={1}>
                        {props.technologies.map((technology, index) => (
                            <Chip key={index} label={technology} sx={{
                                fontSize: {xs: 12, md: 16},
                                p: 1,
                                borderRadius: 2,
                            }} size={"small"}/>
                        ))}
                    </Stack>
                </Box>
                <Typography fontSize={{xs: 12, md: 16}}>
                    {props.description}
                </Typography>
            </Stack>
        </SpotlightBorder>
    )
}

export default function Projects() {
    return (
        <Stack id={"projects"} direction={"column"} gap={2} sx={{
            pt: {xs: 4, md: 6},
            zIndex: 1,
        }}>
            <Typography fontSize={{xs: 16, md: 24}} fontWeight={"bold"}>
                Projects
            </Typography>
            {Object.entries(projects).map(([key, value]) => (
                <React.Fragment key={key}>
                    <ProjectSection
                        title={value.title}
                        thumbnail={value.thumbnail}
                        description={value.description}
                        link={value.link}
                        technologies={value.technologies}
                    />
                </React.Fragment>
            ))}
        </Stack>
    );
}
