import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
const SignatureImg = 'https://ucarecdn.com/18f9c8da-f152-46f8-baa5-2bce4aa9daa1/assets_images_signature_1.png';

const content = {
    h5: 'John Winston',
    title: 'pediatrician',
}

const Signature = () => (
    <Box pt={2} position={'relative'}>
        <Typography variant="h5" >{content.h5}</Typography>
        <Typography color={'primary'} >{content.title}</Typography>
        <Box top={0} position={'absolute'} component="img" src={SignatureImg} alt={'Signature Image'} />
    </Box>
)

export default Signature