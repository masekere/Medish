import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const slider1 = 'https://ucarecdn.com/a9e291be-1758-46f4-a227-243f78a9e04c/assets_images_sliders_2.jpg';
import Button from "components/common/button";
import HeroSection from "components/Hero/HeroContainer";
import PlayButton from 'components/common/button/PlayButton';

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
