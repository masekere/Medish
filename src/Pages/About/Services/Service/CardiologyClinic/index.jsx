import ServiceHero from "components/Hero/ServiceHero"
import Content from "./Content"
import RowGrid from "components/RowGrid"
import Container from '@mui/material/Container'
import styles from "components/Styles"
import ServicesSiderbar from "components/Sidebar/ServicesSidebar"

const content = {
    hero: {
        h1: 'Cardiology Clinic',
        desc: 'All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children...',
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
            sidebar={<ServicesSiderbar />}
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

Component.displayName = 'CardiologyClinicPage'