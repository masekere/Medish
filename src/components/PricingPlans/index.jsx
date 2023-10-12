import Box from '@mui/material/Box'
import PriceCard from 'components/Cards/PriceCard'

const content = [
    {
        name: 'Starter Plan',
        desc: 'We provide all aspects of medical practice for your family, including general check.',
        advantages: ['Review your medical records.', 'Check and test blood pressure.', 'Run tests such as blood tests.'],
        price: '$50',
        duration: 'Monthly'
    },
    {
        name: 'Basic Plan',
        desc: 'We provide all aspects of medical practice for your family, including general check.',
        advantages: ['Review your medical records.', 'Check and test blood pressure.', 'Run tests such as blood tests.', 'Check and test lung function.'],
        price: '$70',
        duration: 'Monthly'
    },
    {
        name: 'Advanced Plan',
        desc: 'We provide all aspects of medical practice for your family, including general check.',
        advantages: ['Review your medical records.', 'Check and test blood pressure.', 'Run tests such as blood tests.', 'Check and test lung function.', 'Narrowing of the arteries.', 'Other specialized tests.'],
        price: '$90',
        duration: 'Monthly'
    },
]

const styles = {
    mt: '-10rem',
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: 200,
    justifyContent: 'center',
    pb: '70px'
}

export default function PricingPlans() {
    return (
        <Box sx={styles}>
            {content.map((item, index) => (
                <PriceCard item={item} key={index} />
            ))}
        </Box>
    )
}