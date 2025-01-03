import Box from '@mui/material/Box'
const thumb1 = 'https://ucarecdn.com/396a1bc3-a6a2-476f-8fc6-3df2243e49d4/assets_images_testimonial_1.jpg';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { FormatQuote, FormatQuoteRounded } from '@mui/icons-material'





const Body = () => (
    <Box sx={{
        fontSize: 13,
        lineHeight: '23px',
        span: {
            color: 'primary.main'
        },
        a: {
            fontSize: 'inherit',
            color: 'white',
            pb: .4,
            borderBottom: '2px solid #13c5dd'
        }
    }}>
        <Typography to={"#"} component={Link}>
            <span>Zodoc </span>
            Overall Rating ,
        </Typography>
        based
        <br />
        on 7541 reviews
    </Box>
)

const content = {
    subtitle: "The Best Medical Care",
    h2: "Patient's Inspiring Stories Of Hope !",
    testimonial: {
        body: "Their doctors include highly qualified practitioners who come from a range of backgrounds & bring with them a diversity of skills and special interests. They also registered nurses available to triage any urgent matters, and the administration and staff all have exceptional skills!!",
        thumb: thumb1,
        thumb_title: "Sami Wade",
        thumb_desc: "Promina",
    },
    rating: {
        num: 4.9,
        body: <Body />
    }
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
    }
}

export default function Testimonial() {

    return (
        <Box bgcolor={'secondary.dark'} pb={32} component={'section'}>
            <Container sx={styles.container} disableGutters maxWidth="xxl">
                <Stack width={{ lg: '50%' }} spacing={2}>
                    <Typography variant="subtitle1">{content.subtitle}</Typography>
                    <Typography maxWidth={416} color={'white'} variant="h2">{content.h2}</Typography>
                    <Box position={'relative'}>
                        <Box borderRadius={'8px 0 8px 8px'} component="img" src={content.testimonial.thumb} alt={'testimonial thumb'} />
                        <Typography variant='lead'>{content.testimonial.thumb_title}</Typography>
                        <Typography mb={2} variant='body2'>{content.testimonial.thumb_desc}</Typography>
                        <FormatQuoteRounded sx={styles.thumb_quote} />
                    </Box>
                </Stack>
                <Box position={'relative'} width={{ lg: '50%' }}>
                    <FormatQuote sx={styles.quote} />
                    <Typography fontSize={{ xs: 17, xl: 25 }} position={'relative'} zIndex={10} mb={3} variant="lead">{content.testimonial.body}</Typography>
                    <Box gap={2} display={'flex'} alignItems={'center'}>
                        <Typography fontSize={50}>{content.rating.num}</Typography>{content.rating.body}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
