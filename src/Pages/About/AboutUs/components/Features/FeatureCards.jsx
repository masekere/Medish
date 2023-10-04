import Box from '@mui/material/Box'
import FeatureCard from 'components/Cards/FeatureCard'
import { AidIcon, BloodPressureIcon, EducationIcon, MedicineIcon, StethoscopeIcon } from 'assets/Svg'


const content = {
    features: [
        {
            icon: <StethoscopeIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Medical Advices & Check Ups',
            desc: 'Consult our doctors any time.'
        },
        {
            icon: <EducationIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Trusted Medical Treatment',
            desc: 'Free coverage adults with limited income.'
        },
        {
            icon: <AidIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Emergency Help Available',
            desc: 'Contact our reception staff any time.'
        },
        {
            icon: <MedicineIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Medical Research Work',
            desc: 'Provide all medical aspects practice'
        },
        {
            icon: <BloodPressureIcon sx={{ fontSize: 71, mb: 3 }} />,
            h4: 'Only Qualified Doctors',
            desc: 'Qualified doctors available 24/7'
        },
    ]
}

const FeatureCards = () => (
    <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        gap: 3,
        mb: 5
    }}>
        {content.features.map((item, index) => (
            <FeatureCard item={item} key={index} />
        ))}
    </Box>
)

export default FeatureCards