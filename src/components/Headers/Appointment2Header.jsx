import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
const Bg = 'https://ucarecdn.com/507dcb5f-ae42-4f9b-b409-ec53b475cf1b/assets_images_background_3.jpg';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ButtonActions from 'components/common/ButtonActions'
import Button from 'components/common/button'


const content = {
    h3: "Helping Patients From Around the Globe!!",
    p: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today",
    action1: 'make a gift',
    action2: 'help & faqs'
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    position: 'relative',
    borderRadius: '8px 0 0 8px',
    borderBottomLeftRadius: { xs: 0, xl: '8px' },
    background: `linear-gradient(180deg, #00000000 19%, #13c5dd 71%), url(${Bg})`,
    height: { md: 500, xl: 657 },
    bgcolor: 'red',
    p: "55px 60px 60px",
    px: { xs: '1.5rem', sm: 6 },
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "80% 0",

    button: {
        height: 60
    }
}

const Appointment2Header = () => (
    <Stack sx={styles} >
        <Typography mb={1.5} mt={'auto'} variant="h3" color="white">{content.h3}</Typography>
        <Typography mb={4} variant="lead">{content.p}</Typography>
        <ButtonActions>
            <Button variant='cw' >{content.action1}<FavoriteIcon /></Button>
            <Button variant='co'>{content.action2}</Button>
        </ButtonActions>
    </Stack>
)

export default Appointment2Header