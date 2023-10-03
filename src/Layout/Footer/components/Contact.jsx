import PhoneIcon from '@mui/icons-material/Phone'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Button from 'components/button'
import { Box } from '@mui/material'

const content = {
    header: "Quick Contact",
    header_desc: "If you have any questions or need help, feel free to contact with our team.",
    phone: "01061245741",
    icon: <PhoneIcon />,
    address: "2307 Beverley Rd Brooklyn, New York 11226 United States.",
    cta: "Get Directions"
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    main: {
        mr: 'auto',
        maxWidth: 306,
        '@media (max-width: 945px)': {
            maxWidth: '100%'
        },
    },
}

export default function Contact() {
    return (
        <Box sx={styles.main}>
            <Typography mb={3} variant='lead'>{content.header}</Typography>
            <Typography fontWeight={600} mb={2} color={'white'} variant='body2'>{content.header_desc}</Typography>
            <Typography mb={2} variant='body2'>{content.address}</Typography>
            <Typography component={Link} color={'white !important'} variant='lead'>
                {content.icon} {content.phone}
            </Typography>
            <Button icon='start' variant='textPrimary'>
                {content.cta}
            </Button>
        </Box>
    )
}