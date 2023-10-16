import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from 'components/common/Accordion'
import Divider from '@mui/material/Divider'
import Team2 from 'components/Team/Team2'
import PresentationVideoCard from 'components/Cards/PresentationVideoCard'
import VideoThumb from 'assets/images/video/1.jpg'
import SignatureBlock from 'components/common/SignatureBlock'
import Stack from '@mui/material/Stack'
import AdvantagesList from 'components/common/AdvantagesList'
import ButtonActions from 'components/common/ButtonActions'
import Button from 'components/common/button'
import { AidIcon, EducationIcon, MedicineIcon, StethoscopeIcon } from 'assets/Svg'
import CoreValuesCard from 'components/Cards/CoreValuesCard'
import PriceListCard from 'components/Cards/PriceListCard'
import HealthTips from 'components/HealthTips'
import HealthPlans from 'components/HealthPlans'
import CoreValues from 'components/CoreValues'

const content = {
    lead: 'Pediatric providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes preventive health checkups. Cardiologists study the disorders of the heart, but the study of adult and child heart disorders are through different training.',
    introdution: {
        body1: 'We provide all aspects of medical practice for your whole family, including general check-ups or assisting you with injuries.',
        body2: 'We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries in the strictest confidence.',
        body3: 'Today hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes for all through a comprehensive medical research.',
        body4: 'We’re here to care for you and your entire family. Regular visits to the doctor will depend on your age and general health!',
        advantages: ['Health Assessments', 'Home Medicine Review', 'Fractures And Dislocations', 'Desensitisation Injections']
    },
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    introdution: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
    },
}

const Introduction = () => (
    <Box sx={styles.introdution}>
        <Stack spacing={2} minWidth={300} flex={8}>
            <Typography color={'secondary.main'} fontWeight={'bold'}>{content.introdution.body1}</Typography>
            <Typography>{content.introdution.body2}</Typography>
            <Typography>{content.introdution.body3}</Typography>
        </Stack>
        <Stack spacing={2} flex={4}>
            <Typography>{content.introdution.body4}</Typography>
            <AdvantagesList items={content.introdution.advantages} sx={{ color: 'secondary.light' }} />
        </Stack>
    </Box>
)

export default () => (
    <Stack spacing={8}>
        <Typography color={'secondary.main'} variant='lead'>{content.lead}</Typography>
        <PresentationVideoCard VideoThumb={VideoThumb} />
        <Introduction />
        <SignatureBlock />
        <HealthPlans />
        <CoreValues />
        <HealthTips />
        <Team2 />
    </Stack>
)