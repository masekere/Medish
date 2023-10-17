import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import PriceListCard from 'components/Cards/PriceListCard'

const content = {
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
                price: 60
            },
            {
                name: 'Bronchoscopy',
                price: 75
            },
            {
                name: 'Cardiac Ablation',
                price: 45
            },
            {
                name: 'Holter Monitoring',
                price: 55
            },
        ]
    }
}

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
}

const TreatmentInfo = () => (
    <Box sx={styles}>
        <Stack flex={1} spacing={3} minWidth={400}>
            <Typography fontWeight={'bold'} color={'secondary.main'}>{content.body1}</Typography>
            <Typography>{content.body2}</Typography>
            <Typography>{content.body3}</Typography>
        </Stack>
        <PriceListCard item={content.treatment} />
    </Box>
)

export default TreatmentInfo