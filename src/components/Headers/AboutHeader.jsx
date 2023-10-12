import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Signature from 'components/common/Signature'

const content = {
    subtitle: 'Delivering Tomorrow’s Health Care For Your Family!',
    h2: 'Caring For The Health And Well Being Of You And Your Family.',
    body1: 'We provide all aspects of medical practice for your whole family, including general check-ups or assisting you with specific injuries.',
    body2: 'We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.',
}

const styles = {
    container: {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' }
    }
}

export default function Heading() {
    return (
        <Container sx={styles.container} maxWidth="xxl">
            <Typography mb={3} variant="subtitle1">{content.subtitle}</Typography>
            <Box display={{ xs: 'block', md: 'flex' }}>
                <Typography pr={3} flex={1} variant="h2">{content.h2}</Typography>
                <Box flex={1}>
                    <Typography mb={2} color={'secondary'} fontWeight={'bold'}>{content.body1}</Typography>
                    <Typography mb={2}>{content.body2}</Typography>
                    <Signature />
                </Box>
            </Box>
        </Container>
    )
}