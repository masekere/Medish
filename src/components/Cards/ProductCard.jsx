import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { Button, Badge } from '@mui/material'
// import Button from 'components/button'
// import { Button } from '@mui/material'


/** @type {import("@mui/material").SxProps} */
const styles = {
    maxWidth: 270,
    cursor: 'pointer',
    borderRadius: '8px',
    mt: 2,
    boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',

    ':hover img': {
        transform: "scale3d(1.5, 1.5, 1)"
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        px: { xs: '2rem', lg: '2.5rem' }
    },
    media: {
        position: 'relative',
        overflow: 'hidden',
    }, 
    actions: {
        px: { xs: '2rem', lg: '2.5rem' },
        mb: 2,
    },
    img: {
        transition: "transform 0.45s",
        maxWidth: '100%',
        transform: "scale3d(1.4, 1.4, 1)",
    },
    svg: {
        color: 'secondary.light'
    },

    '.MuiTypography-body1': {
        fontWeight: 'bold'
    },
    '.MuiBadge-root ': {
        position: 'absolute',
        top: 30,
        right: 30,
             
        span: {
            borderRadius: '4px 4px 0 4px',
            fontSize: 14,
        }
    }
}

const ProductCard = ({item}) => (
   <Card sx={styles}>
        <CardMedia sx={styles.media}>
            {/* < */}
            <Box component="img" src={item.img} alt={item.name} />
            <Badge badgeContent="new" color="primary" />
        </CardMedia>
        <CardContent sx={styles.content}>
            <Typography>{item.name}</Typography>
            <Typography color='orange'>{item.price}</Typography>             
        </CardContent>
        <CardActions sx={styles.actions}>
            <Button variant='outlined' startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
        </CardActions>
   </Card>
)

export default ProductCard