import Box from '@mui/material/Box'
import thumb1 from "assets/images/testimonial/1.jpg"
import TestimonialImg from "assets/images/testimonial/image.png"
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { FormatQuote, FormatQuoteRounded } from '@mui/icons-material'
import { Stack } from '@mui/material'

const content = {
    subtitle: "hear the inspiring stories of our patients",
    h2: "Patient's Inspiring Stories Of Hope !",
    testimonial: {
        body: "Their doctors include highly qualified practitioners who come from a range of backgrounds & bring with them a diversity of skills and special interests. They also registered nurses available to triage any urgent matters, and the administration and staff all have exceptional skills!!",
        thumb: thumb1,
        thumb_title: "Sami Wade",
        thumb_desc: "Promina",
    },
}

const styles = {
    container: {
        display: { xs: 'block', lg: 'flex' },
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
    },
    quote: {
        transform: "rotate(180deg)",
        position: 'absolute',
        zIndex: 1,
        top: '-6.5rem',
        left: '-8rem',
        fontSize: 200,
        color: '#293967',
        display: { xs: 'none', lg: 'block' }
    },
    thumb_quote: {
        transform: "rotate(180deg)",
        bgcolor: 'white',
        borderRadius: '50%',
        color: 'primary.main',
        padding: '5px',
        fontSize: '2rem',
        position: 'absolute',
        top: 24,
        left: 64,
    },
/** @type {import("@mui/material").SxProps} */
    left: {
        alignItems: {xs: 'center', lg: 'flex-start'},
    }
}

export default function Testimonial2() {

    return (
            <Container sx={styles.container}  component={'section'} maxWidth="xxl">
                <Box maxWidth={'100%'} mb={5} component="img" src={TestimonialImg} alt={'testimonial img'} />
                <Stack sx={styles.left} position={'relative'}>
                    <FormatQuote sx={styles.quote} />
                    <Typography ml={{lg: 5}} position={'relative'} zIndex={10} mb={3} variant="subtitle1">{content.subtitle}</Typography>
                    <Typography ml={{lg: 5}}  color={'text.secondary'} fontSize={{ xs: 17, xl: 25 }} position={'relative'} zIndex={10} mb={3} variant="lead">{content.testimonial.body}</Typography>
                    <Box position={'relative'}>
                        <Box borderRadius={'8px 0 8px 8px'} component="img" src={content.testimonial.thumb} alt={'testimonial thumb'} />
                        <Typography color={'text.secondary'} variant='lead'>{content.testimonial.thumb_title}</Typography>
                        <Typography mb={2} variant='body2'>{content.testimonial.thumb_desc}</Typography>
                        <FormatQuoteRounded sx={styles.thumb_quote} />
                    </Box>
                </Stack>
            </Container>
    )
}
