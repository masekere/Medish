import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const content = {
    service: "Delivering tomorrow’s health care for your family.",
    cta: "View Doctors' Timetable"
}

const Cta = () => (
    <Box textAlign={'center'}>
        <Typography component={'span'} fontWeight={'bold'}>
            {content.service}
        </Typography>
        <Typography component={Link} variant="underline">
            {content.cta}
        </Typography>
    </Box>
)

export default Cta