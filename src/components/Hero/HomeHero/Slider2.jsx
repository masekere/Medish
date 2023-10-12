import { Box, Stack, Typography, Fab } from "@mui/material";
import slider2 from 'assets/images/sliders/13.jpg'
import Button from "components/common/button";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const content = {
    h1: 'we accept all insurance medical plans',
    desc: 'The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices.',
    cta: 'More about Us'
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    container: {
        background: `linear-gradient(0deg, rgba(0, 35, 82, 0.6), rgba(0, 35, 82, 0.1)), url(${slider2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '8rem'},
        height: {xl: '100vh'},
        maxHeight: '400px'
    },
    btn: {
        display: 'flex',
        gap: 2,
    }
}

export default function Slider2() {
    return (
        <Box sx={styles.container} component='section'>
                <Typography maxWidth={{xs: 400, xl: 600}} mb={2} variant="h1">{content.h1}</Typography>
                <Typography maxWidth={{xs: 400, xl: 600}} textAlign={{}} mb={5} variant="lead">{content.desc}</Typography>
                <Box sx={styles.btn}>            
                    <Button variant="cw">
                        {content.cta}
                    </Button>
                    <Fab
                      color="white"
                      aria-label="play video"
                    >
                      <PlayCircleOutlineIcon />
                    </Fab>
                </Box>
        </Box>
    )
}