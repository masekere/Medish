import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from 'components/common/button'

const content = {
    h5: "Book An Appointment",
    form_desc: "Please feel welcome to contact our staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.",
    departments: ['Bathology Clinic', 'Neurology Clinic ', 'Cardiology Clinic'],
    doctors: ['Michael Brian', 'Maria Andoloro', 'Richard Muldoone'],
    cta: 'Make Appointment'
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    form_box: {
        p: "57px 50px 60px",
        px: { xs: '1.5rem', sm: 6 },
        pt: '57px',
        pb: '50px',
        maxWidth: 730
    },
    form_fields: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,

        '.MuiTextField-root': {
            width: {xs: '100%', sm: 'calc(50% - 8px)'}
        },
        '.fullwidth': {
            width: '100%'
        },
    },
    btn: { 
        marginTop: '1rem',
        height: 70,
        width: '100%'
    }
}

const AppointmentForm = () => (
    <Box sx={styles.form_box}>
        <Typography fontSize={24} mb={2} variant="h5">{content.h5}</Typography>
        <Typography mb={5}>{content.form_desc}</Typography>
        <Box sx={styles.form_fields}>
            <TextField
                id={'department'}
                label="Department"
                select
                InputProps={{ id: 'department' }}
                defaultValue={''}
            >
                {content.departments.map((item, i) => (
                    <MenuItem value={item} key={i}>{item}</MenuItem>
                ))}
            </TextField>
            <TextField
                id={'Doctors'}
                label="Doctors"
                select
                InputProps={{ id: 'Doctors' }}
                defaultValue={''}
            >
                {content.doctors.map((doc, i) => (
                    <MenuItem value={doc} key={i}>{doc}</MenuItem>
                ))}
            </TextField>
            <TextField
                id="Name"
                label="Name"
            />
            <TextField
                id="Email"
                label="Email"
            />
            <TextField
                className='fullwidth'
                id="Phone"
                label="Phone"
            />
            <TextField
                id="Date"
                label="Date"
            />
            <TextField
                id="Time"
                label="Time"
            />
            <Button sx={styles.btn} variant='cs' icon='start'>{content.cta}</Button>
        </Box>
    </Box>
)

export default AppointmentForm