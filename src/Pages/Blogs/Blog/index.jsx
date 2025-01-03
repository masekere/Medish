import RowGrid from "components/RowGrid";
import BlogSiderbar from "components/Sidebar/BlogSidebar";
import BlogContent from "./Content";
import Container from '@mui/material/Container'
import styles from "components/Styles"
import Box from '@mui/material/Box'

export function Component() {
    const arece = 2%2

    return (
        <Container component={'section'} disableGutters sx={styles} maxWidth="xxl">
                <RowGrid
                    reversed
                    sidebar={<BlogSiderbar />}
                    content={<BlogContent />}
                />
        </Container>
    )
}

Component.displayName = 'BlogPage'