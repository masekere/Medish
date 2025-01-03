import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const slider1 = 'https://ucarecdn.com/6196be0a-2f82-4b6b-b8d3-8b7a4c563e24/assets_images_sliders_1.jpg';
import Breadcrumbs from 'components/common/Breadcrumbs';
import Button from "components/common/button";
import HeroSection from "components/Hero/HeroContainer";
import EmergencyCasesCard from 'components/Cards/EmergencyCasesCard';
import ButtonActions from 'components/common/ButtonActions';
import Stack from '@mui/material/Stack'
import TimetableCard from 'components/Cards/TimeTableCard';



const content = {
    subtitle: 'The Best Medical And General Practice Care!',
    h1: 'Delivering Tomorrow’s Care For Your Family.',
    desc: 'Our doctors include highly qualified practitioners who come from a range of backgrounds and bring a diversity of skills. Besides, our staff have exceptional people skills.',
    breadCrumbItems: [
        {
            name: 'home',
            url: '/'
        },
        {
            name: 'doctors',
            url: '/doctors'
        },
    ],
    action1: 'make appointment',
    action2: 'more about us',
}

const maxWidth = 500

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

const Actions = () => (
    <ButtonActions>
        <Button>
            {content.action1}
        </Button>
        <Button variant="cw">
            {content.action2}
        </Button>
    </ButtonActions>
)

export default function OurDoctorsHero() {
    return (
        <Box sx={styles}>
            <HeroSection sx={{display: {xs: 'block', lg: 'flex'}, justifyContent: 'space-between'}} src={slider1}>
                <Stack  spacing={2}>
                    <Typography fontWeight={'bold'} color={'white'} variant='subtitle'>{content.subtitle}</Typography>
                    <Typography sx={{ fontSize: { xl: 40 } }} maxWidth={maxWidth} variant="h1">{content.h1}</Typography>
                    <Typography maxWidth={maxWidth}  variant="lead">{content.desc}</Typography>
                    <Actions />
                    <Breadcrumbs items={content.breadCrumbItems} />
                </Stack>
                <Box>
                  <TimetableCard />
                </Box>
            </HeroSection>
        </Box>
    )
}
