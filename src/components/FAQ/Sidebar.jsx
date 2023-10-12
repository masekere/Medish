import EmergencyCasesCard from "components/Cards/EmergencyCasesCard"
import OpeningHoursCard from "components/Cards/OpeningHoursCard"
import Button from "components/common/button"
import { DownloadReportIcon, InfoIcon } from "assets/Svg"
import Stack from '@mui/material/Stack'

const styles = {
    action1: {
        ':after': {
            bgcolor: 'primary.main'
        }
    },
    action2: {
        ':after': {
            bgcolor: 'secondary.light'
        }
    }
}

const content = {
    action1: <><InfoIcon />covid-19 latest update</>,
    action2: <><DownloadReportIcon />2020 patient reports</>
}
const Siderbar = () => (
        <>
            <EmergencyCasesCard />
            <OpeningHoursCard />
            <Stack width={{xs: '100%', md: 'auto'}} direction={{md: 'row', xl: 'column'}} gap={2}>
                <Button sx={styles.action1} variant="cs" icon="none">{content.action1}</Button>
                <Button sx={styles.action2} icon="none">{content.action2}</Button>
            </Stack>
        </>
)

export default Siderbar