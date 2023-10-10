import {Backdrop, Box, Container, ImageList, ImageListItem, useMediaQuery} from "@mui/material";
import Page from "../page";
import {images} from "../../assets/constants";
import {useState} from "react";
import FadeIn from "../fadeIn";
import useScrollLock from "../../lib/scrollLock";
import useHideHeader from "../../lib/hideHeader";

export default function Art() {

    const [selectedImage, setSelectedImage] = useState({});
    const [open, setOpen] = useState(false);

    const {lockScroll, unlockScroll} = useScrollLock()
    const {hideHeader, showHeader} = useHideHeader();

    const handleOpen = (item) => {
        setSelectedImage(item);
        setOpen(true);
        lockScroll();
        hideHeader();
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedImage({});
        unlockScroll();
        showHeader();
    }

    const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <Page>
            <Container maxWidth={"xl"}
                       sx={{
                           position: "relative",
                           filter: (open ? "blur(20px)" : ""),
                           transition: "all 0.4s cubic-bezier(0.1, 1, 1.0, 0.9)",
                       }}>
                <ImageList variant={"masonry"} cols={(matches ? 2 : 1)} gap={8}>
                    {images.map((item, index) => (
                        <ImageListItem key={item.title} sx={{
                            cursor: "pointer",
                            userSelect: "none",
                        }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                loading={"lazy"}
                                onClick={() => {
                                    handleOpen(item);
                                }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
            <Backdrop
                open={open}
                handleClose={handleClose}
                onClick={handleClose}
            >
                <FadeIn>
                    <Box
                        component={"img"}
                        src={selectedImage.image}
                        alt={selectedImage.title}
                        loading={"lazy"}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            maxHeight: "95vh",
                            maxWidth: "95vw",
                            userSelect: "none",
                        }}
                    />
                </FadeIn>
            </Backdrop>
        </Page>
    );
}
