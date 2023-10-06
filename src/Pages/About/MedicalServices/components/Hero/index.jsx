import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import slider1 from 'assets/images/sliders/1.jpg'
import Breadcrumbs from 'components/Breadcrumbs';
import HeroSection from "components/HeroContainer";
import Actions from './components/Actions';

const content = {
    subtitle: 'Caring For The Health Of You And Your Family.',
    h1: 'Sets The Standard For High Quality Care And Patient Safety!!',
    breadCrumbItems: [
        {
            name: 'home',
            url: '/'
        },
        {
            name: 'departments',
            url: '/departments'
        },
    ]
}

const maxWidth = { xs: 400, xl: 600 }

export default function Hero() {
    return (
        <HeroSection src={slider1}>
            <Typography sx={{maxWidth: '100px !important'}} fontWeight={'bold'} color={'white'} variant="subtitle">{content.subtitle}</Typography>
            <Typography sx={{fontSize: {xl: 40}}} maxWidth={maxWidth} mt={2} mb={2} variant="h1">{content.h1}</Typography>
            <Actions />
            <Breadcrumbs items={content.breadCrumbItems} />
        </HeroSection>
    )
}
