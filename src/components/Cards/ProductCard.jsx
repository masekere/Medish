import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography'
import { Button, Badge, Alert } from '@mui/material'
import { Link } from 'react-router-dom'

/** @type {import("@mui/material").SxProps} */
const styles = {
    width: {sm: 'calc(100%/2 - 4px)', md: 'calc(100%/3 - 6px)', xxl: 270},
    borderRadius: '8px',
    mt: 2,
    boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',

    ':hover img': {
        transform: "scale3d(1.4, 1.4, 1)"
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        px: { xs: '2rem', lg: '2.5rem' },
        cursor: 'pointer',
    },
    media: {
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
    }, 
    actions: {
        mt: 'auto',
        px: { xs: '2rem', lg: '2.5rem' },
        mb: 2,

        button: {
            fontSize: 13
        }
    },
    img: {
        transition: "transform 0.45s",
        maxWidth: '100%',
        transform: "scale3d(1.2, 1.2, 1)",
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
   <Card className='ProductCard' sx={styles}>
        <CardMedia component={Link} to={item.url} sx={styles.media}>
            {/* < */}
            <Box component="img" src={item.img} alt={item.name} />
            {item.tag ? <Badge badgeContent={item.tag} color="primary" /> : null}
        </CardMedia>
        <CardContent component={Link} to={item.url} sx={styles.content}>
            <Typography>{item.name}</Typography>
            <Typography color='orange'>{item.price}</Typography>             
        </CardContent>
        <CardActions sx={styles.actions}>
            <Button onClick={(e) => console.log('clicked')} variant='outlined' startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
        </CardActions>
   </Card>
)

export default ProductCard