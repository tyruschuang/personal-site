import {Box, Container, Typography} from "@mui/material";
import {socials} from "../assets/constants";
import React from "react";

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

    const array = Object.entries(socials);

    const pairs = array.reduce(function (pairs, item, index) {
        return (index % 2 === 0 ? pairs.push([item])
            : pairs[pairs.length - 1].push(item)) && pairs;
    }, []);

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
                        {pairs.map((pair, pairIndex) => (
                            <>
                                {pair.map(([key, value], index) => (
                                    <React.Fragment key={key}>
                                        <FooterSocialLink name={key} link={value}/>
                                        {index < pair.length - 1 && " / "}
                                    </React.Fragment>
                                ))}
                                {pairIndex < pairs.length - 1 && <br/>}
                            </>
                        ))}
                    </Typography>
                </Box>
            </Box>
            <Box mb={10}/>
        </Container>
    );
}
