import {Box, Container, Stack, Typography} from "@mui/material";
import Page from "../page";
import {projects} from "../../assets/constants";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function Code() {

    function Project(props) {

        const { project } = props;

        if (project.tags === undefined) {
            return <></>
        }

        return <Stack direction={"column"} gap={2} onClick={() => {
                window.open(project.link, "_blank")
            }} sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                background: "#fff",
                pb: 3,
                p: 2,
            }}>
                <Box component={"img"} src={project.thumbnail} loading={"lazy"} sx={{
                    maxHeight: "600px",
                    objectFit: "cover",
                    width: "100%",
                }} />
                <Stack direction={"column"} gap={0.5} sx={{
                    mx: 2
                }}>
                    <Stack direction={"row"} gap={1} sx={{
                        textTransform: "lowercase",
                        alignItems: "center",
                    }}>
                        <Typography sx={{
                            fontSize: 30,
                        }}>
                            {project.title}
                        </Typography>
                        {/*<Typography sx={{*/}
                        {/*    color: "text.secondary",*/}
                        {/*    fontFamily: "Roboto",*/}
                        {/*    fontSize: 20,*/}
                        {/*}}>*/}
                        {/*        {project.tags.join(", ")}*/}
                        {/*</Typography>*/}
                    </Stack>
                    <Typography sx={{
                        color: "text.secondary",
                        fontFamily: "Roboto",
                        fontSize: 25,
                    }}>
                        {project.description}
                    </Typography>
                </Stack>
            </Stack>

    }

    return (
        <Page>
            <Container maxWidth={"xl"}>
                <Grid2 container gap={8}>
                    {projects.map((project, index) => {
                        if (project.full) {
                            return <Grid2 xs={12}>
                                <Project project={project}/>
                            </Grid2>
                        } else {
                            return <Grid2 xs={12} md={6}>
                                <Project project={project}/>
                            </Grid2>
                        }
                    })}
                </Grid2>
            </Container>
        </Page>
    );
}
