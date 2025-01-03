import CartHero from "components/Hero/CartHero"
import Container from '@mui/material/Container'
import Cart from "components/Cart"

const styles = {
    px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem'},
}

export function Component() {
    return (
        <Container sx={styles} disableGutters maxWidth="xxl">
            <CartHero />
            <Cart />
        </Container>
    )
}

Component.displayName = 'CartPage'