import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
const SignatureImg = 'https://ucarecdn.com/0d35a1a1-4442-4a87-a98d-84a796c0ed30/assets_images_signature_2.png';

const content = {
    h5: 'John Winston',
    title: 'pediatrician',
}

const Signature2 = () => (
    <Box pt={2} position={'relative'}>
        <Typography color={'white'} variant="h5" >{content.h5}</Typography>
        <Typography color={'primary'} >{content.title}</Typography>
        <Box top={0} position={'absolute'} component="img" src={SignatureImg} alt={'Signature Image'} />
    </Box>
)

export default Signature2