import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import SignatureBlock from './components/SignatureBlock'
import { ImageVideLink1, ImageVideLink2 } from './components/ImageVideoLink'

const content = {
    h2: 'Caring For The Health And Well Being Of You And Your Family.',
    body1: 'We provide all aspects of medical practice for your family, including general check-ups or assisting with injuries.',
    body2: 'We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.'
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    container: {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
        gap: 2,
        display: { xs: 'block', md: 'flex' },
        alignItems: 'flex-start',
        
        button: {
            height: 60
        },
        img: {
            borderRadius: '32px 32px 0 32px'
        },
    },
}



export default function About() {
    return (
        <Container component={'section'} sx={styles.container} maxWidth="xxl">
            <Box flex={1}>
                <Typography mb={3} maxWidth={600} pr={3} flex={1} variant="h2">{content.h2}</Typography>
                <Box mb={5} maxWidth={600} ml={{ xl: 13 }}>
                    <Typography mb={2} color={'secondary'} fontWeight={'bold'}>{content.body1}</Typography>
                    <Typography mb={2}>{content.body2}</Typography>
                    <SignatureBlock />
                </Box>
                <ImageVideLink2 />
            </Box>
            <ImageVideLink1 />
        </Container>
    )
}