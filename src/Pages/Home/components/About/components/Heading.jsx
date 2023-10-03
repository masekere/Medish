import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Signature from 'assets/images/signature/1.png'

const content = {
    subtitle: 'Delivering Tomorrow’s Health Care For Your Family!',
    h2: 'Caring For The Health And Well Being Of You And Your Family.',
    body1: 'We provide all aspects of medical practice for your whole family, including general check-ups or assisting you with specific injuries.',
    body2: 'We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.',
    h5: 'john winston',
    title: 'pediatrician'
}

const styles = {
    container: {
        px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem'}
    },
    p: {
        maxWidth: 591
    }
}

export default function Heading() {
    return (
        <Container sx={styles.container} maxWidth="xxl">
            <Typography mb={3} variant="subtitle1">{content.subtitle}</Typography>
            <Box  display={{xs: 'block', md: 'flex'}}>
                <Typography pr={3} flex={1} variant="h2">{content.h2}</Typography>
                <Stack flex={1} spacing={2}>
                    <Typography color={'secondary'} fontWeight={'bold'}>{content.body1}</Typography>
                    <Typography>{content.body2}</Typography>
                    <Box pt={2} position={'relative'}>
                        <Typography variant="h5" >{content.h5}</Typography>
                        <Typography color={'primary'} >{content.title}</Typography>
                        <Box top={0} position={'absolute'} component="img" src={Signature} alt={'Signature Image'} />
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}