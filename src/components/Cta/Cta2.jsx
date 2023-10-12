import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const content = {
    preText: 'Connecting with the world to improve health globally.',
    linkText: 'Explore Our Doctors',
    url: '/doctors'
}

const Cta = () => (
    <Typography textAlign={'center'} color={'gry'}>
        {content.preText} <Typography variant='underline' component={Link} to={content.url}>{content.linkText}</Typography>
    </Typography>
)

export default Cta