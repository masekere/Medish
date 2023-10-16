import ServiceHero from "components/Hero/ServiceHero"
import Siderbar from "./Sidebar"
import Content from "./Content"
import RowGrid from "components/RowGrid"
import Container from '@mui/material/Container'
import styles from "../Styles"

const content = {
    hero: {
        h1: 'Neurology Clinic',
        desc: 'Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.',
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

const RowGridContainer = () => (
    <Container component={'section'} disableGutters sx={styles} maxWidth="xxl">
        <RowGrid
            reversed
            sidebar={<Siderbar />}
            content={<Content />}
        />
    </Container>
)

export function Component() {
    return (
        <>
            <ServiceHero content={content.hero} />
            <RowGridContainer />
        </>
    )
}

Component.displayName = 'NeurologyClinicPage'