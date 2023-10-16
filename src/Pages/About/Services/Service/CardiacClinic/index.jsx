import ServiceHero from "components/Hero/ServiceHero"
import Siderbar from "./Sidebar"
import Content from "./Content"
import RowGrid from "components/RowGrid"
import Container from '@mui/material/Container'
import styles from "../Styles"

const content = {
    hero: {
        h1: 'Cardiac Clinic',
        desc: 'For people requiring additional follow up, the Cardiac Clinic provides rapid access to professionals specialized in diagnosing and treating heart disease.',
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

Component.displayName = 'CardiacClinicPage'