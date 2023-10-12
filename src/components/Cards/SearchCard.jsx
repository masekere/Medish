import Search from "components/common/Search"
import CardContainer from "./CardContainer"
import Typography from '@mui/material/Typography'

/** @type {import("@mui/material").SxProps} */
const styles = {
    bgcolor: 'primary.light',

    search: {
        bgcolor: 'rgb(255 255 255 / 80%)',
        py: 1, 
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row-reverse',

        svg: {
            transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
        
        ":hover": {
            svg: {
                color: 'primary.main'
            },
            bgcolor: 'white',
        }
    }
}

const SearchCard = () => (
    <CardContainer sx={styles}>
        <Typography mb={3} variant="h5">Search</Typography>
        <Search sx={styles.search} />
    </CardContainer>
)

export default SearchCard