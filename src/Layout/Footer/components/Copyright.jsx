import Box from '@mui/material/Box'
import PrimaryLink from 'components/PrimaryLink'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const content = {
    Copyright: <Typography color='white' mr={'auto'} fontWeight={700}>© 2021 medisch by <PrimaryLink to={'#'}>Mgm.com</PrimaryLink>. all rights reserved.</Typography>,
    social: [
        {
            icon: <FacebookIcon />,
            url: "#",
        },
        {
            icon: <InstagramIcon />,
            url: "#",
        },
        {
            icon: <TwitterIcon />,
            url: "#",
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
        ".socialIcon": {
            bgcolor: 'secondary.light',
            display: 'flex',
            p: 1,
            transition: '0.3s ease-in-out',
            borderRadius: "8px 8px 0 8px",
            color: 'white',
            cursor: 'pointer',
            ':hover': {
                bgcolor: 'primary.main'
            }
        },
    },
}

export default function Copyright() {
    return (
        <Box sx={styles.copyright}>
            {content.Copyright}
            {content.social.map(({ icon, url }, index) => (
                <Box component={Link} to={url} className="socialIcon" key={index}>
                    {icon}
                </Box>
            ))}
        </Box>
    )
}

// Penciline anti ...
// Tick Grease -- kuzora