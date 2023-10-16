import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from 'components/common/Accordion'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import PriceListCard from 'components/Cards/PriceListCard'

const content = {
    h5: 'Health & Tips Info',
    desc: 'We help create a care plan that addresses your specific condition and we are here to answer all of your questions & acknowledge your concerns. Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes.',
    accordion: [
        {
            summary: "Which Plan Is Right For Me?",
            details: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases."
        },
        {
            summary: "Do I Have To Commit To A Contract?",
            details: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases."
        },
        {
            summary: "What Payment Methods Are Available?",
            details: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases."
        },
    ],
    body1: 'Three years of internal medicine residency, three years of Clinical Cardiology fellowship, and one to two (in most instances) years of clinical cardiac electrophysiology.',
    body2: 'We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.',
    body3: 'We provide all aspects of medical practice for your whole family, including general check-ups or assisting with specific injuries.',
    treatment: {
        h6: 'Treatments Price List',
        prices: [
            {
                name: 'Colonoscopy',
                price: 50
            },
            {
                name: 'Allergy Testing',
                price: 50
            },
            {
                name: 'Gastroscopy',
                price: 50
            },
            {
                name: 'Bronchoscopy',
                price: 50
            },
            {
                name: 'Cardiac Ablation',
                price: 50
            },
            {
                name: 'Holter Monitoring',
                price: 50
            },
        ]
    }
}

const styles = {
    treatment: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2
    }
}

const HealthTips = () => (
    <Stack spacing={2}>
        <Typography variant='h5'>{content.h5}</Typography>
        <Typography>{content.desc}</Typography>
        <div>
            <Divider sx={{ borderBottomColor: 'primary.main', borderBottomWidth: 3 }} />
            <Accordion sx={{ mb: 5 }} py={1.1} items={content.accordion} />
        </div>
        <Box sx={styles.treatment}>
            <Stack flex={1} spacing={3} minWidth={400}>
                <Typography fontWeight={'bold'} color={'secondary.main'}>{content.body1}</Typography>
                <Typography>{content.body2}</Typography>
                <Typography>{content.body3}</Typography>
            </Stack>
            <PriceListCard item={content.treatment} />
        </Box>
    </Stack>
)

export default HealthTips