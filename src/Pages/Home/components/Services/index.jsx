import Box from '@mui/material/Box'
import Heading from "./components/Heading";
import Cta from "./components/Cta";
import ServiceCardSwiper from './components/ServiceCardSwiper';
import { styled } from '@mui/material';

const Test = styled(Box)(({ src }) => {
    return {
        backgroundColor: src
    }
});

export default function Services() {
    return (
        <Box pt={0} component={'section'}>
            <Heading />
            <ServiceCardSwiper />
            <Cta />
        </Box>
    );
}