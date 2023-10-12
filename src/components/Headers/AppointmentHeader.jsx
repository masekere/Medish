import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ContactImg from "assets/images/contact/1.jpg"
import Client1 from "assets/images/clients/1.png"
import Client2 from "assets/images/clients/2.png"
import Client3 from "assets/images/clients/3.png"

const content = {
    h3: "We Accept All Major Insurance Plans",
    p: "We accept a number of insurance plans to help you cover costs depending on your individual needs.",
}

const styles = {
    img: {
        borderRadius: '8px 0 0 8px',
        background: `linear-gradient(180deg, #00000000 19%, #13c5dd 71%), url(${ContactImg})`,
        height: { xs: 394, xl: 657 },
        bgcolor: 'red',
        p: "55px 60px 60px",
        px: { xs: '1.5rem', sm: 6 },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    }
}

const Header = () => (
    <Stack sx={styles.img} >
        <Typography mb={1.5} mt={'auto'} variant="h3" color="white">{content.h3}</Typography>
        <Typography mb={4} variant="lead">{content.h3}</Typography>
        <Stack direction={'row'} spacing={2}>
            <Box component="img" src={Client1} alt={'Client 1'} />
            <Box component="img" src={Client2} alt={'Client 2'} />
            <Box component="img" src={Client3} alt={'Client 3'} />
        </Stack>
    </Stack>
)

export default Header