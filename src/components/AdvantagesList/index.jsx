import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const AdvantagesList = ({ items, color ,sx, other }) => items.map((item, index) => (
    <Typography key={index} mt={1} color={color} {...other}>
        <CheckCircleIcon color='primary' sx={{ verticalAlign: "middle", ...sx }} /> {item}
    </Typography>
))

export default AdvantagesList