import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Box from '@mui/material/Box'

const AdvantagesList = ({ items, color, sx, other }) => (
    <Box>
        {items.map((item, index) => (
            <Typography key={index} mt={1} color={color} {...other}>
                <CheckCircleIcon color='primary' sx={{ verticalAlign: "middle", ...sx }} /> {item}
            </Typography>
        ))}
    </Box>
)

export default AdvantagesList