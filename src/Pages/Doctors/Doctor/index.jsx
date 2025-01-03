import Content from "./Content"
import RowGrid from "components/RowGrid"
import Container from '@mui/material/Container'
import styles from "components/Styles"
import DoctorSiderbar from "components/Sidebar/DoctorSidebar"

const RowGridContainer = () => (
    <Container component={'section'} disableGutters sx={styles} maxWidth="xxl">
        <RowGrid
            sidebar={<DoctorSiderbar />}
            content={<Content />}
        />
    </Container>
)

export function Component() {
    return (
       <>
        <RowGridContainer />
       </>
    )
}

Component.displayName = 'DoctorPage'