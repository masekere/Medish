import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const slider1 = 'https://ucarecdn.com/b933cc50-a8f0-49de-a13d-5f5106eea01e/assets_images_sliders_4.jpg';
import Breadcrumbs from 'components/common/Breadcrumbs';
import Button from "components/common/button";
import HeroSection from "components/Hero/HeroContainer";
import EmergencyCasesCard from 'components/Cards/EmergencyCasesCard';

const content = {
    subtitle: 'True Healthcare For Your Family',
    h1: 'Delivering Tomorrow’s Care For Your Family.',
    desc: 'Our doctors include highly qualified practitioners who come from a range of backgrounds and bring a diversity of skills. Besides, our staff have exceptional people skills.',
    breadCrumbItems: [
        {
            name: 'home',
            url: '/'
        },
        {
            name: 'departments',
            url: '/departments'
        },
    ],
    action: 'more about us',
}

const maxWidth = 500

/** @type {import("@mui/material").SxProps} */
const styles = {
    position: 'relative',
    '.EmergencyCasesCard': {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '8rem' },
        position: { lg: 'absolute' },
        maxWidth: { lg: 602 },
        right: 50,
        bottom: '-2rem',
        borderTopRightRadius: { lg: '2rem' }
    },
}

export default function AppointmentHero() {
    return (
        <Box sx={styles}>
            <HeroSection src={slider1}>
                <Typography fontWeight={'bold'} color={'white'} variant='subtitle'>{content.subtitle}</Typography>
                <Typography sx={{ fontSize: { xl: 40 } }} maxWidth={maxWidth} mb={2} variant="h1">{content.h1}</Typography>
                <Typography maxWidth={maxWidth} mb={5} variant="lead">{content.desc}</Typography>
                <Button variant="co">{content.action}</Button>
                <Breadcrumbs items={content.breadCrumbItems} />
            </HeroSection>
            <EmergencyCasesCard />
        </Box>
    )
}
