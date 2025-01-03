import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PhoneIcon from '@mui/icons-material/Phone'
import Button from 'components/common/button'
const DoctorImg = 'https://ucarecdn.com/64c37be7-87bf-4823-8202-243f72434f52/assets_images_testimonial_5.jpg';
import { Link } from 'react-router-dom'

const content = {
    h2: "Meet Our Doctors",
    desc: "Our administration and staff all have exceptional skills and trained to assist you with all medical enquiries.",
    cta: "Make Appointment",
    phone: "01061245741",
    call: "Call 24HR / 7Days"
}

const styles = {
    heading: {
        px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem'}, 
        display: 'flex',
        flexDirection: {xs: 'column', lg: 'row'},
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: {xs: 'center', lg: 'left'},
    },
    tel: {
        fontSize: 19,
        fontWeight: 'bold'
    }
}

const Heading = () => (
    <Box {...styles.heading}>
      <Stack spacing={2}>
        <Typography variant="h2">{content.h2}</Typography>
        <Typography maxWidth={526} variant="body2">{content.desc}</Typography>
      </Stack>
      <Stack gap={2} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} direction={'row'}>
        <Button variant='cs'>{content.cta}</Button>
        <AvatarGroup sx={{mx: 2}} >
            <Avatar><PhoneIcon /></Avatar>
            <Avatar  src={DoctorImg} />
        </AvatarGroup>
        <Stack>
            <Typography component={Link} to={`tel:${content.phone}`} {...styles.tel}>{content.phone}</Typography>
            <Typography variant='body2' >{content.call}</Typography>
        </Stack>
      </Stack>
    </Box>
)

export default Heading