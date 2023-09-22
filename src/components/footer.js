import {Box, Container, Typography} from "@mui/material";

function FooterSocialLink(props) {

    const {name, link} = props;

    return <Typography component={"a"} href={link} target={"_blank"} fontSize={17} fontFamily={"Roboto"} sx={{
        my: 1,
        textDecoration: "none",
        color: "inherit",

        "&:hover": {
            cursor: "pointer",
        }
    }}>
        {name}
    </Typography>;
}

export default function Footer() {
    return (
        <Container maxWidth="xl" id={"footer"} sx={{
            zIndex: 5000,
            position: "relative",
        }}>
            <Box
                sx={{
                    marginTop: 12,
                }}
            />
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display={"flex"} flexDirection={"column"}>
                    <Typography fontSize={15}>
                        Tyrus Chuang —
                    </Typography>
                    <Typography fontSize={17} fontFamily={"Roboto"} sx={{
                        my: 1,
                    }}>
                        Aspiring Developer
                    </Typography>
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                    <Typography fontSize={15}>
                        Social —
                    </Typography>
                    <Typography fontSize={17} fontFamily={"Roboto"}>
                        <FooterSocialLink name={"X"} link={"https://twitter.com/omgabuilds"}/>
                        {" / "}
                        <FooterSocialLink name={"Discord"} link={"https://discord.gg/7HCKAQEW"}/>
                    </Typography>

                </Box>
            </Box>
            <Box mb={10}/>
        </Container>
    );
}
