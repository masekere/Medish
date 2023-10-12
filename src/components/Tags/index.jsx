import Box from '@mui/material/Box'
import Chip from 'components/common/Chip'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import CardContainer from 'components/Cards/CardContainer'

const styles = {
    bgcolor: 'primary.light',
    gap: 2.5,

    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1
    },
}

const Tags = ({ items }) => (
    <CardContainer sx={styles}>
        <Typography variant='h5'>{items.h5}</Typography>
        <Box sx={styles.tags}>
            {items.tags.map((item, index) => (
                <Chip label={item} key={index} variant='outlined' component={Link} to={'/doctors'} />
            ))}
        </Box>
    </CardContainer>
)

export default Tags