import Content from "./Content"
import RowGrid from "components/RowGrid"
import Container from '@mui/material/Container'
import styles from "components/Styles"
import OurProductsSiderbar from "components/Sidebar/OurProductsSidebar"
import ProductGrid from "components/Products/ProductsGrid"

const content = {
    hero: {
        h1: 'Cardiac Clinic',
        desc: 'All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children.',
        breadcrumbs: [
            {
                name: 'Home',
                url: '/'
            },
            {
                name: 'About',
                url: '/about'
            },
            {
                name: 'FAQ',
                url: '#'
            },
        ]
    }
}

const OurProducts = () => (
    <Container component={'section'} disableGutters sx={styles} maxWidth="xxl">
        <RowGrid
            reversed
            sidebar={<OurProductsSiderbar />}
            content={<ProductGrid />}
        />
    </Container>
)

export default OurProducts