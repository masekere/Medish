import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const content = {
    h2: "Meet Our Doctors",
    desc: "Our administration and staff all have exceptional skills and trained to assist you with all medical enquiries.",
    cta: "Make Appointment",
    phone: "01061245741",
    call: "Call 24HR / 7Days"
}

const Heading = () => (
    <Box textAlign={'center'}>
        <Typography variant="h2">{content.h2}</Typography>
        <Typography>{content.desc}</Typography>
    </Box>
)

export default Heading