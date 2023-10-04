import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Actions from './Actions'
import Bg from 'assets/images/background/1.jpg'
import PrimaryIMageBackground from 'components/Background/Primary'
import { Link } from 'react-router-dom'
import FeatureCards from './FeatureCards'

const content = {
    h2: 'Sets The Standard For High Quality Care And Patient Safety!!',
    body1: 'Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and bring a diversity of skills. Our administration and support staff all have exceptional people skills.',
    body2: 'Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.',
    more_features: {
        preText: 'Connecting with the world to improve health globally.',
        linkText: 'Explore Our Doctors',
        url: '/doctors'
    },
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



export default function Features() {
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
                <Typography textAlign={'center'} color={'gry'}>
                    {content.more_features.preText} <Typography variant='underline' component={Link} to={content.more_features.url}>{content.more_features.linkText}</Typography>
                </Typography>
            </Container>
        </PrimaryIMageBackground>
    )
}