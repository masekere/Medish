import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import slider1 from 'assets/images/sliders/2.jpg'
import Button from "components/button";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HeroSection from "components/HeroContainer";
import PlayButton from 'components/button/PlayButton';

const content = {
    h1: 'wide range of services for your family',
    desc: 'The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices. ',
    cta: 'More about Us'
}

const maxWidth = { xs: 400, xl: 600 }

export default function Slider1() {
    return (
        <HeroSection src={slider1}>
            <Typography maxWidth={maxWidth} mb={2} variant="h1">{content.h1}</Typography>
            <Typography maxWidth={maxWidth} mb={5} variant="lead">{content.desc}</Typography>
            <Box display={'flex'} gap={2}>
                <Button variant="cw">
                    {content.cta}
                </Button>
                <PlayButton />
            </Box>
        </HeroSection>
    )
}
