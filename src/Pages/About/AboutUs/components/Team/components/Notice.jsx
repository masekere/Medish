import DateRangeIcon from '@mui/icons-material/DateRange'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from 'components/button'

const content = { 
    icon: <DateRangeIcon sx={{fontSize: 50, color: 'secondary.light', verticalAlign: 'middle'}} />,
    text1: 'On Monday,',
    text2: 'Doctors will be available from 8 am : 12 am , kindly call to confirm your Appointment',
    action: 'View All Doctors'
}

const Notice = () => (
    <Box gap={1} display={'flex'} flexWrap={'wrap'} alignItems={'center'}> 
        {content.icon}
        <Typography maxWidth={427}>
            <Typography component={'span'} color={'secondary'}>{content.text1}</Typography> {content.text2}
        </Typography>
        <Button variant='cw' sx={{ml: 'auto'}}>{content.action}</Button>
    </Box>
)

export default Notice