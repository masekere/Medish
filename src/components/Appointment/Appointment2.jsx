import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Appointment2Header from 'components/Headers/Appointment2Header'
import AppointmentForm from 'components/Forms/AppointmentForm'

const styles = {
    wrapper: {
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
    },
    container: {
        mt: "-200px",
        px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
        boxShadow: "0px 5px 83px 0px rgba(9, 29, 62, 0.15)",
        borderRadius: '8px',
        bgcolor: 'white',
        display: { xs: 'block', xl: 'flex' },
        padding: "0 !important",
        overflow: 'hidden'
    },
}

export default function Appointment2() {

    return (
            <Box sx={styles.wrapper}>
                <Container sx={styles.container} maxWidth="xxl">
                    <Appointment2Header />
                    <AppointmentForm />
                </Container>
            </Box>
    )
}
