import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { UniformIcon } from 'assets/Svg'
import MuiStack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material'

const Stack = styled((props) => <MuiStack 
    spacing={2}
    divider={<Divider />}
    {...props}
/>)({})

/** @type {import("@mui/material").SxProps} */
const styles = {
    position: 'relative',
    p: '50px 40px 60px',
    borderRadius: '8px 8px 0 8px',
    bgcolor: '#f6f6f6 ',
    maxWidth: {lg: 330},

    width: {xs: '100%', lg: 'auto'},

    work_hours: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    ':before': {
        content: "''",
        height: 3,
        width: 'calc(100% - 80px)',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bgcolor: 'secondary.light',
        bottom: 0,
    }
}

const content = {
    h5: 'opening hours ',
    icon: <UniformIcon sx={{fontSize: 50}} />,
    openingHours: [
        {
            days: 'Monday-Friday',
            work_hours: '8:00 - 7:00 Pm'
        },
        {
            days: 'Saturday',
            work_hours: '9:00 - 8:00 Pm'
        },
        {
            days: 'Sunday',
            work_hours: '10:00 - 9:00 Pm'
        }
    ]
}

const OpeningHoursCard = () => (
    <Box className='OpeningHoursCard' sx={styles}>
        {content.icon}
        <Typography mb={3} mt={2} variant='h5'>{content.h5}</Typography>
        <Stack>
          {content.openingHours.map((item, index) => (
            <Box sx={styles.work_hours} key={index}>
                {item.days}
                <Typography>{item.work_hours}</Typography>
            </Box>
          ))}
        </Stack>
    </Box>
)

export default OpeningHoursCard