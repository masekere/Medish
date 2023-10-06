import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AdvantagesList from 'components/AdvantagesList'


const content = {
    subtitle: 'Caring For The Health Of You And Your Family.',
    h2: 'We Provide All Aspects Of Medical Practice For Your Whole Family!',
    body: "We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnal and processing software, combined with decades of experience! Through integrated supply chain solutions, Equita drives sustainable competitive advantages to some of Australia's largest companies.",
    advantages: ['Quality Control System', 'Unrivalled Workmanship', '100% Satisfaction Guarantee']
}

const styles = {
    container: {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' }
    }
}

export default function Cta() {
    return (
        <Container component={'section'} sx={styles.container} maxWidth="xxl">
            <Typography mb={3} variant="subtitle1">{content.subtitle}</Typography>
            <Box display={{ xs: 'block', md: 'flex' }}>
                <Typography mb={2} pr={3} flex={1} variant="h2">{content.h2}</Typography>
                <Box flex={1}>
                    <Typography mb={2}>{content.body}</Typography>
                    <AdvantagesList items={content.advantages} />
                </Box>
            </Box>
        </Container>
    )
}