import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Bg from 'assets/images/background/1.jpg'
import PrimaryIMageBackground from 'components/common/Background/Primary'
import { Link } from 'react-router-dom'
import ButtonActions from 'components/common/ButtonActions'
import Button from 'components/common/button'
import FeatureCard from 'components/Cards/FeatureCard'
import { AidIcon, BloodPressureIcon, EducationIcon, MedicineIcon, StethoscopeIcon } from 'assets/Svg'
import Cta from 'components/Cta/Cta2'

const content = {
    h2: 'Sets The Standard For High Quality Care And Patient Safety!!',
    body1: 'Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and bring a diversity of skills. Our administration and support staff all have exceptional people skills.',
    body2: 'Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.',
    more_features: {
        preText: 'Connecting with the world to improve health globally.',
        linkText: 'Explore Our Doctors',
        url: '/doctors'
    },
    action1: 'our core values',
    action2: 'more about us',
    features: [
        {
            icon: <StethoscopeIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Medical Advices & Check Ups',
            desc: 'Consult our doctors any time.'
        },
        {
            icon: <EducationIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Trusted Medical Treatment',
            desc: 'Free coverage adults with limited income.'
        },
        {
            icon: <AidIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Emergency Help Available',
            desc: 'Contact our reception staff any time.'
        },
        {
            icon: <MedicineIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Medical Research Work',
            desc: 'Provide all medical aspects practice'
        },
        {
            icon: <BloodPressureIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Only Qualified Doctors',
            desc: 'Qualified doctors available 24/7'
        },
    ]
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    container: {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
        display: { xs: 'block', md: 'flex' },
        mb: 5
    },
    container2: {
        px: { xs: '2rem', sm: '3rem', md: '4rem',lg: '5rem', xl: '2rem' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mx: 'auto',
        '.MuiTypography-underline': {
            color: '#435ba1 !important',
            ml: .5,
            ':before': {
                bgcolor: '#435ba1 !important',
            }
        }

    }
}

const Actions = () => (
    <ButtonActions>
        <Button variant="co">
            {content.action1}
        </Button>
        <Button icon='none' variant="cw">
            {content.action2}
        </Button>
    </ButtonActions>
)

const FeatureCards = () => (
    <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        gap: 3,
        mb: 5
    }}>
        {content.features.map((item, index) => (
            <FeatureCard item={item} key={index} />
        ))}
    </Box>
)

export default function Features2() {
    return (
        <PrimaryIMageBackground component={'section'} mt={{ xs: '-8rem', lg: '-12rem' }} sx={{ backgroundAttachment: 'fixed' }} img={Bg}>
            <Container sx={styles.container} maxWidth="xxl">
                <Typography mb={3} pr={3} flex={1} color={'white'} variant="h2">{content.h2}</Typography>
                <Box flex={1}>
                    <Typography mb={2} color={'white'} fontWeight={'bold'}>{content.body1}</Typography>
                    <Typography mb={2} color={'gry'}>{content.body2}</Typography>
                    <Actions />
                </Box>
            </Container>
            <Container sx={styles.container2} maxWidth="xxl">
                <FeatureCards />
                <Cta />
            </Container>
        </PrimaryIMageBackground>
    )
}