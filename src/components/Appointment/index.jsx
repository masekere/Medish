import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppointmentForm from 'components/Forms/AppointmentForm'
import AppointmentHeader from 'components/Headers/AppointmentHeader'

const styles = {
    wrapper: {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
        // mt: "-200px",
    },
    container: {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
        boxShadow: "0px 5px 83px 0px rgba(9, 29, 62, 0.15)",
        borderRadius: '8px',
        bgcolor: 'white',
        display: { xs: 'block', xl: 'flex' },
        padding: "0 !important",
        overflow: 'hidden'
    },
}

export default function Appointment({mt}) {
    return (
            <Box sx={styles.wrapper} mt={mt}>
                <Container sx={styles.container} maxWidth="xxl">
                    <AppointmentHeader />
                    <AppointmentForm />
                </Container>
            </Box>
    )
}

Appointment.defaultProps = {
  mt: '-200px'
}