import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Box from '@mui/material/Box'

const VideoButton = ({to, sx, title}) => (
        <Box sx={{
            color: 'white !important',
            bgcolor: 'secondary.light',
            width: 240,
            display: 'flex',
            gap: 1,
            fontWeight: 'bold',
            textTransform: 'capitalize',
            p: 2,
            borderRadius: '32px 32px 0 32px',
            position: 'absolute',
            bottom: 8,
            ...sx
        }} component={Link} to={to}>
            <PlayCircleOutlineIcon sx={{fontSize: 54}} />
            <Typography color={'white'}>{title}</Typography>
        </Box>
    )

    export default VideoButton