import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import PrimaryLink from 'components/PrimaryLink'
import PropTypes from 'prop-types'

/** @type {import("@mui/material").SxProps} */
const styles = {
    card: {
        position: 'relative',
        width: {xs: '100%', sm: 'calc(100% / 3 - 24px)' },
        transition: "0.3s ease-in-out",
        borderRadius: '8px 8px 4px 4px',
        minWidth: 100,
        img: {
            borderRadius: '8px 8px 4px 4px',
            transition: "transform 0.35s",
            maxWidth: "100%",
            height: "auto",
            transform: "scale3d(1.05, 1.05, 1)",
        },
    },
}

const TeamCard2 = ({ item }) => (
    <Box className='card' sx={styles.card}>
        <Box pb={3} component="img" src={item.img} alt={'team'} />
        <Typography variant='h4'>{item.name}</Typography>
        <Typography component={Link} to={item.url} variant='underline2'>{item.category}</Typography>
    </Box>
)

TeamCard2.propTypes = {
    item: PropTypes.object.isRequired
}

export default TeamCard2