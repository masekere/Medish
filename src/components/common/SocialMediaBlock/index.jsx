import Box from '@mui/material/Box'
import Chip from 'components/common/Chip'
import { Link } from 'react-router-dom'

const bgColor = (color) => ({
    background: (color ? color : '#435ba1') + '!important',
})

const SocialMediaBlock = ({ items }) => (
    <Box gap={1} display={'flex'}>
        {items.map((({ icon, url, color }, index) => (
            <Chip label={icon} key={index} component={Link} to={url} sx={bgColor(color)} variant="icon" />
        )))}
    </Box>
)

export default SocialMediaBlock