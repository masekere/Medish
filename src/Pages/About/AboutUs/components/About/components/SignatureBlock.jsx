import Box from '@mui/material/Box'
import Button from 'components/button'
import Signature from 'components/Signature'

const content = {
    cta: 'find a doctor',
    url: '#'
}

export default function SignatureBlock() {
    return (
        <Box flexWrap={'wrap'} alignItems={'center'} mb={2} display={'flex'} gap={5}>
            <Button>{content.cta}</Button>
            <Signature />
        </Box>
    )
}