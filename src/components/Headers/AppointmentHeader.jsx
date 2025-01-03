import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
const ContactImg = 'https://ucarecdn.com/a607fc24-b3ef-4d84-806a-c2352ad072ab/assets_images_contact_1.jpg';
const Client1 = 'https://ucarecdn.com/f9d1a532-0b89-4b35-9c93-3fe4123957e4/assets_images_clients_1.png';
const Client2 = 'https://ucarecdn.com/bb495202-2d56-4c25-a8b5-5b4524884d84/assets_images_clients_2.png';
const Client3 = 'https://ucarecdn.com/b8465350-5034-4d4b-aca3-3c42f477fa34/assets_images_clients_3.png';

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