import Box from '@mui/material/Box'
import Signature from 'components/common/Signature'
import Button from 'components/common/button'

const content = {
    action: 'find a doctor',
}

const SignatureBlock = () => (
    <Box flexWrap={'wrap'} alignItems={'center'} mb={2} display={'flex'} gap={5}>
        <Button sx={{height: 60}}>{content.action}</Button>
        <Signature />
    </Box>
)

export default SignatureBlock