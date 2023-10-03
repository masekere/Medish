import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const content = {
    subtitle: "Health Essentials",
    h2: "Recent Articles",
}

const Heading = () => (
    <Box mx={'auto'} maxWidth={546} textAlign={'center'}>
        <Typography mb={1.5} variant="subtitle2">{content.subtitle}</Typography>
        <Typography mb={3} variant="h2">{content.h2}</Typography>
    </Box>
)

export default Heading