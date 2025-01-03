import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ProductCard from 'components/Cards/ProductCard'

const productImg = (index) => `/src/assets/images/shop/grid/${index}.jpg`


const content = {
    h5: 'Related Products',
    products: [
        {
            name: 'Essential Oil',
            price: 28.00,
            url: '/shop/single-product',
            img: productImg(5)
        },
        {
            name: 'Natural Cacao Powder',
            price: 16.00,
            url: '/shop/single-product',
            img: productImg(6)
        },
        {
            name: 'Natural Gel',
            price: 24.00,
            url: '/shop/single-product',
            img: productImg(7),
            tag: 'new'
        },
        {
            name: 'Goji Powder',
            price: 19.00,
            url: '/shop/single-product',
            img: productImg(8)
        },
    ]
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    display: 'flex',
    gap: 3,
    flexWrap: 'wrap',

    '.ProductCard': {
        width: {sm: 'calc(100%/2 - 16px)', xl: 'calc(100%/4 - 18px)'}
    }
}

const RelatedProducts = () => (
    <Stack my={5} spacing={3}>
        <Typography variant='h5'>{content.h5}</Typography>

        <Box sx={styles}>
            {content.products.map((item, index) => (
                <ProductCard key={index} item={item} />
            ))}
        </Box>
    </Stack>
)

export default RelatedProducts