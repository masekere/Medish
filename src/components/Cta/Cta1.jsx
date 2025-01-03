import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const content = {
    service: "Delivering tomorrow’s health care for your family.",
    action: "View Doctors' Timetable",
    to: '/doctors/timetable'
}

const Cta = () => (
    <Box textAlign={'center'}>
        <Typography component={'span'} fontWeight={'bold'}>
            {content.service}
        </Typography>
        <Typography component={Link} to={content.to} variant="underline">
            {content.action}
        </Typography>
    </Box>
)

export default Cta