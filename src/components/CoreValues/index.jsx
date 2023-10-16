import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { AidIcon, EducationIcon, MedicineIcon, StethoscopeIcon } from 'assets/Svg'
import CoreValuesCard from 'components/Cards/CoreValuesCard'

const content = {
    h5: 'Our Core Values',
    desc: 'Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes for all through a comprehensive medical research. For over 20 years, our hospital has touched lives of millions of people, and provide care and treatment for the sickest in our community including rehabilitation and aged care.',
    cards: [
        {
            icon: <StethoscopeIcon />,
            h5: 'Medical Check Ups',
            desc: 'Recognised As A World Renowned Institution. Consult Our Doctors By Visiting Us.'
        },
        {
            icon: <EducationIcon />,
            h5: 'Medical Treatment',
            desc: 'Free Or Low Cost Coverage Adults With Limited Income Recognised.'
        },
        {
            icon: <AidIcon />,
            h5: 'Emergency 24/7',
            desc: 'Contact Our Reception With Any Medical Enquiry For Low Cost Coverage Adults.'
        },
        {
            icon: <MedicineIcon />,
            h5: 'Research Pros',
            desc: 'All Medical Aspects Practice For Family, Our Reception Staff With Any Medical Enquiry.'
        },
    ]
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    gap: 3,

    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2
    },

    svg: {
        fontSize: 49
    }
}

const CoreValues = () => (
    <Stack sx={styles}>
        <Typography fontSize={24} variant='h5'>{content.h5}</Typography>
        <Typography>{content.desc}</Typography>
        <Box sx={styles.cards}>
            {content.cards.map((item, index) => (
                <CoreValuesCard item={item} key={index} />
            ))}
        </Box>
    </Stack>
)

export default CoreValues