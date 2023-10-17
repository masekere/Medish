import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const content = {
    preText: 'Delivering tomorrow’s health care for your family.',
    linkText: "View Doctors' Timetable",
    url: '/timetable'
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    textAlign: 'center',
    color: 'gry',

    underline: {
        fontWeight: 'bold',
        ml: '.5rem'
    }
}

const Cta = () => (
    <Typography sx={styles}>
        {content.preText} <Typography sx={styles.underline} variant='underline2' component={Link} to={content.url}>{content.linkText}</Typography>
    </Typography>
)

export default Cta