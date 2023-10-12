import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const content = {
    subtitle: 'The Best Medical And General Practice Care!',
    h2: 'Providing Medical Care For The Sickest In Community.'
}

const ServicesHeader = () => (
    <Box mx={'auto'} maxWidth={546} textAlign={'center'}>
        <Typography mb={1.5} variant="subtitle2">{content.subtitle}</Typography>
        <Typography mb={3} variant="h2">{content.h2}</Typography>
    </Box>
)

export default ServicesHeader