import {Divider, Stack, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {experience} from "../../assets/constants";
import React from "react";

function ExperienceSection(props) {
    return (
        <Stack direction={"column"} gap={1}>
            <Grid2 container>
                <Grid2 xs={12} md={4}>
                    <Typography fontSize={{xs: 12, md: 16}} color={"text.secondary"}>
                        {props.dates}
                    </Typography>
                </Grid2>
                <Grid2 xs={12} md={8}>
                    <Stack direction={"row"} gap={1}>
                        <Typography fontSize={{xs: 14, md: 18}} fontWeight={"bold"}>
                            {props.company}
                        </Typography>
                        <Typography fontSize={{xs: 14, md: 18}}>
                            {props.title}
                        </Typography>
                    </Stack>
                    <Divider sx={{
                        my: 1,
                    }}/>
                    <Typography fontSize={{xs: 12, md: 16}}>
                        {props.description}
                    </Typography>
                </Grid2>
            </Grid2>
        </Stack>
    );
}

export default function Experience() {
    return (
        <Stack id={"experience"} direction={"column"} gap={2} sx={{
            pt: {xs: 4, md: 6},
            zIndex: 1,
        }}>
            <Typography fontSize={{xs: 16, md: 24}} fontWeight={"bold"}>
                Experience
            </Typography>
            {Object.entries(experience).map(([key, value]) => (
                <React.Fragment key={key}>
                    <ExperienceSection
                        title={value.title}
                        company={value.company}
                        description={value.description}
                        dates={value.dates}
                    />
                </React.Fragment>
            ))}
        </Stack>
    );
}
