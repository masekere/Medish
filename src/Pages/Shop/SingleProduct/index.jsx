import Container from '@mui/material/Container'
import SingleProductHero from 'components/Hero/SingleProductHero'
import ProductTabs from 'components/Products/ProductTabs'
import RelatedProducts from 'components/Products/RelatedProducts'
import SingleProduct from 'components/Products/SingleProduct'

const styles = {
    px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem'},
}

export function Component() {
    return (
        <Container sx={styles} disableGutters maxWidth="xxl">
            <SingleProductHero />
            <SingleProduct />
            <ProductTabs />
            <RelatedProducts />
        </Container>
    )
}

Component.displayName = 'SingleProductPage'