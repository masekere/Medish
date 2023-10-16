import EmergencyCasesCard from "components/Cards/EmergencyCasesCard"
import OpeningHoursCard from "components/Cards/OpeningHoursCard"
import Button from "components/common/button"
import { DownloadReportIcon, InfoIcon } from "assets/Svg"
import Stack from '@mui/material/Stack'
import CategoryCard from "components/Cards/CategoryCard"

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
    action2: <><DownloadReportIcon />2020 patient reports</>,
    services: {
        h5: 'Medical Services',
        categories: [
            {
                category: 'Neurology Clinic',
                url: '/about/medical-services/neurology-clinic'
            },
            {
                category: 'Cardiology Clinic',
                url: '/about/medical-services/cardiology-clinic'
            },
            {
                category: 'Pathology Clinic',
                url: '/about/medical-services/pathology-clinic'
            },
            {
                category: 'Laboratory Analysis',
                url: '/about/medical-services/laboratory-analysis'
            },
            {
                category: 'Pediatric Clinic',
                url: '/about/medical-services/pediatric-clinic'
            },
            {
                category: 'Cardiac Clinic',
                url: '/about/medical-services/cardiac-clinic'
            },
        ]
    }
}
const ServicesSiderbar = () => (
        <>
            <CategoryCard items={content.services}  />
            <EmergencyCasesCard />
            <OpeningHoursCard />
            <Stack width={{xs: '100%', md: 'auto'}} direction={{md: 'row', xl: 'column'}} gap={2}>
                <Button className="Btn" sx={styles.action1} variant="cs" icon="none">{content.action1}</Button>
                <Button className="Btn" sx={styles.action2} icon="none">{content.action2}</Button>
            </Stack>
        </>
)

export default ServicesSiderbar