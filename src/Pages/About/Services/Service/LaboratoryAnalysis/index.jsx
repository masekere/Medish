import ServiceHero from "components/Hero/ServiceHero"
import Content from "./Content"
import RowGrid from "components/RowGrid"
import Container from '@mui/material/Container'
import styles from "components/Styles"
import ServicesSiderbar from "components/Sidebar/ServicesSidebar"

const content = {
    hero: {
        h1: 'Laboratory Analysis',
        desc: 'Analyzing the radon or radon progeny concentrations with passive devices, or the act of calibrating radon or radon progeny measurement devices.',
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

Component.displayName = 'LaboratoryAnalysisPage'