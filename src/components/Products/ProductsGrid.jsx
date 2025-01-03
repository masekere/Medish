import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import ProductCard from 'components/Cards/ProductCard'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

const productImg = (index) => `/src/assets/images/shop/grid/${index}.jpg`


const content = {
    productsShow: 'Showing 1:9 Of 45 Products',
    productsSelect: [
        {
            label: 'All Products',
            value: '*'
        },
        {
            label: 'Newest Items',
            value: 'Newest Items'
        },
        {
            label: 'Oldest Items',
            value: 'Oldest Items'
        },
        {
            label: 'Highest Price',
            value: 'Highest Price'
        },
        {
            label: 'Lowest Price',
            value: 'Lowest Price'
        },
    ],
    products: [
        {
            name: 'Green Tea',
            price: 15.00,
            url: '/shop/single-product',
            img: productImg(1),
            tag: 'popular'
        },
        {
            name: 'Biotin Complex',
            price: 25.00,
            url: '/shop/single-product',
            img: productImg(2)
        },
        {
            name: 'Facial Serum',
            price: 37.00,
            url: '/shop/single-product',
            img: productImg(3),
            tag: 'new'
        },
        {
            name: 'Calming Herps',
            price: 10.00,
            url: '/shop/single-product',
            img: productImg(4)
        },
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
        {
            name: 'Blood Pressure',
            price: 34.00,
            url: '/shop/single-product',
            img: productImg(9)
        },
    ]
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    display: 'flex',
    gap: 1,
    flexWrap: 'wrap',
}

const Header = ({productsType, setProductType}) => (
    <Box alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
        <Typography>{content.productsShow}</Typography>
        <TextField
            sx={{ width: 300 }}
            id={'productsType'}
            select
            value={productsType}
            onChange={(e) => setProductType(e.target.value)}
            InputProps={{ id: 'productsType' }}
        >
            {content.productsSelect.map((item, index) => (
                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
            ))}
        </TextField>
    </Box>
)

const ProductsGrid = ({products}) => (
    <Box sx={styles}>
        {products.map((item, index) => (
            <ProductCard key={index} item={item} />
        ))}
    </Box>
)

export default function ProductGrid() {
    const [productsType, setProductsType] = useState('*')
    const [products, setProducts] = useState(content.products)

    return (
        <Stack mb={5} spacing={3}>
            <Header productsType={productsType} setProductType={setProductsType} />
            <ProductsGrid products={products} />
            <Pagination sx={{pt: 5}} count={5} />
        </Stack>
    )
}