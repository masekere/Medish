import Box from '@mui/material/Box'
import PrimaryLink from 'components/PrimaryLink'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Chip from 'components/common/Chip'

const content = {
    Copyright: <Typography color='white' mr={'auto'} fontWeight={700}>© 2025 medisch by <PrimaryLink to={'#'}>Mgm.com</PrimaryLink>. all rights reserved.</Typography>,
    social: [
        {
            icon: <FacebookIcon />,
            url: "#",
            color: 'rgb(72 109 181)'
        },
        {
            icon: <InstagramIcon />,
            url: "",
            color: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
        },
        {
            icon: <TwitterIcon />,
            url: "#",
            color: 'rgb(39 164 243)'
        },
    ]
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    copyright: {
        'a:hover': {
            color: 'white !important'
        },
        gap: 1.5,
        alignItems: 'center',
        display: 'flex',

        mb: 5
    },
}

const bgColor = (color) => ({
    background: (color ? color : '#435ba1') + '!important',
})

export default function Copyright() {
    return (
        <Box sx={styles.copyright}>
            {content.Copyright}
            {content.social.map((({ icon, url, color }, index) => (
                <Chip label={icon} key={index} component={Link} to={url} sx={bgColor(color)} variant="icon" />
            )))}
        </Box>
    )
}

// Penciline anti ...
// Tick Grease -- kuzora