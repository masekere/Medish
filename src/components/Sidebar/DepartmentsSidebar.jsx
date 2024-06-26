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
        h5: 'Our Departments',
        categories: [
            {
                category: 'Neurology Clinic',
                url: '/departments/neurology-clinic'
            },
            {
                category: 'Pathology Clinic',
                url: '/departments/pathology-clinic'
            },
            {
                category: 'Laboratory Analysis',
                url: '/departments/laboratory-analysis'
            },
            {
                category: 'Pediatric Clinic',
                url: '/departments/pediatric-clinic'
            },
            {
                category: 'Cardiac Clinic',
                url: '/departments/cardiac-clinic'
            },
            {
                category: 'Ophthalmology Clinic',
                url: '/departments/ophthalmology-clinic'
            },
        ]
    }
}
const DepartmentsSiderbar = () => (
    <>
        <CategoryCard items={content.services} />
        <EmergencyCasesCard />
        <OpeningHoursCard />
        <Stack width={{ xs: '100%', md: 'auto' }} direction={{ md: 'row', xl: 'column' }} gap={2}>
            <Button className="Btn" sx={styles.action1} variant="cs" icon="none">{content.action1}</Button>
            <Button className="Btn" sx={styles.action2} icon="none">{content.action2}</Button>
        </Stack>
    </>
)

export default DepartmentsSiderbar