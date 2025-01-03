import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
const Bg = 'https://ucarecdn.com/9f006919-f7a9-4d2f-a8d2-275421671389/assets_images_background_1.jpg';
import ButtonActions from 'components/common/ButtonActions'
import Button from 'components/common/button'
import FeatureCard from 'components/Cards/FeatureCard'
import { AidIcon, BloodPressureIcon, EducationIcon, LocationIcon, MedicineIcon, StethoscopeIcon, TransplantBoxIcon } from 'assets/Svg'
import SecondaryImageBackground from 'components/common/Background/Secondary'
import Cta from 'components/Cta/Cta3'
import Signature2 from 'components/common/Signature/Signature2'
import Stack from '@mui/material/Stack'
import Features2Card from 'components/Cards/FeatureCard2'




const content = {
    subtitle: 'Sets The Standard For High Quality Care Since',
    h2: '1987',
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
    ],
    features2: [
        {
            Icon: TransplantBoxIcon,
            h4: 'Healthcare Programs',
            desc: 'We have put protocols to protect our patients to provide medically necessary care.',
            action: 'Explore Programs',
            url: '#'
        },
        {
            Icon: LocationIcon,
            h4: 'Locations & Directions',
            desc: 'Feel welcome to contact our friendly reception staff, our doctors will receive your urgent calls.',
            action: 'Get Directions',
            url: '#',
            reversed: true
        },
    ]
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    bg: {
        backgroundAttachment: 'fixed',
        position: 'relative',
        zIndex: 10,
        overflow: 'visible',
        mb: 10,

        ':before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            zIndex: 6,
            background: '#1D2A4DF0',

            // background: 'linear-gradient(90deg, rgba(6, 23, 51, 0) 0%, rgba(29, 42, 77, 0) 0%, #1d2a4d 80%)',
        }
    },
    container: {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
        display: { xs: 'block', md: 'flex' },
        mb: 5,
        position: 'relative',
        zIndex: 10,
        overflow: 'visible',

        subtitle: {
            pl: 1
        },
        h2: {
            color: 'transparent',
            fontSize: {xs: 120, sm: 160},
            WebkitTextStroke: '2px #fff',
            lineHeight: 1
        }
    },
    container2: {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem', xl: '2rem' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
        mx: 'auto',

        '.MuiTypography-underline': {
            color: '#435ba1 !important',
            ml: .5,
            ':before': {
                bgcolor: '#435ba1 !important',
            }
        },
        '.FeatureCardMain': {
            '.FeatureCard': {
                borderColor: 'rgba(249, 249, 249, 0.15)',
            },
        }
    },

    features2: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 5,
        mt: '-150px',
        transform: 'translateY(200px)'
    }
}

const Actions = () => (
    <ButtonActions gap={2}>
        <Button variant="co">
            {content.action1}
        </Button>
        <Box />
        <Signature2 />
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

const Feauture2Cards = () => (
    <Box sx={styles.features2}>
       {content.features2.map((item, index) => (
         <Features2Card item={item} key={index} />
       ))}
    </Box>
)

export default function Features3() {
    return (
        <SecondaryImageBackground component={'section'} sx={styles.bg} img={Bg}>
            <Container sx={styles.container} maxWidth="xxl">
                <Stack spacing={2} flex={1} mb={3} pr={3}>
                    <Typography sx={styles.container.subtitle} variant='subtitle1'>{content.subtitle}</Typography>
                    <Typography color={'white'} variant="h2">{content.h2}</Typography>
                </Stack>
                <Stack flex={1} spacing={3}>
                    <Typography color={'white'} fontWeight={'bold'}>{content.body1}</Typography>
                    <Typography color={'#788fc8'}>{content.body2}</Typography>
                    <Actions />
                </Stack>
            </Container>
            <Container sx={styles.container2} maxWidth="xxl">
                <FeatureCards />
                <Cta />
                <Feauture2Cards />
            </Container>
        </SecondaryImageBackground>
    )
}