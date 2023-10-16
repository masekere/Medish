import Content from "./Content"
import RowGrid from "components/RowGrid"
import Container from '@mui/material/Container'
import styles from "components/Styles"
import DepartmentsHero from "components/Hero/DepartmentsHero copy"
import DepartmentsSiderbar from "components/Sidebar/DepartmentsSidebar"

const content = {
    hero: {
        h1: 'Neurology Clinic',
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

const RowGridContainer = () => (
    <Container component={'section'} disableGutters sx={styles} maxWidth="xxl">
        <RowGrid
            reversed
            sidebar={<DepartmentsSiderbar />}
            content={<Content />}
        />
    </Container>
)

export function Component() {
    return (
        <>
            <DepartmentsHero content={content.hero} />
            <RowGridContainer />
        </>
    )
}


Component.displayName = 'NeurologyClinicPage'