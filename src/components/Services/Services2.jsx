import Box from '@mui/material/Box'
import Cta from 'components/Cta/Cta1';
import ServicesHeader from 'components/Headers/ServicesHeader';
import { BloodPressureIcon, CardiogramIcon, Medical2Icon, Medical3Icon, MedicineIcon, StethoscopeIcon } from "assets/Svg"
import ServiceCard from "components/Cards/ServiceCard"

const content = {
    services: [
        {
            title: 'Neurology Clinic',
            desc: 'Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.',
            img: '/src/assets/images/services/1.jpg',
            icon: BloodPressureIcon,
            url: 'pediatric-clinic'
        },
        {
            title: 'Cardiology Clinic',
            desc: 'All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children...',
            img: '/src/assets/images/services/2.jpg',
            icon: CardiogramIcon,
            url: 'cardiology-clinic'
        },
        {
            title: 'Pathology Clinic',
            desc: 'Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from diagnostic testing...',
            img: '/src/assets/images/services/3.jpg',
            icon: Medical2Icon,
            url: "pathology-clinic"
        },
        {
            title: 'Laboratory Analysis',
            desc: 'Analyzing the radon or radon progeny concentrations with passive devices, or the act of calibrating radon or radon progeny measurement devices.',
            img: '/src/assets/images/services/4.jpg',
            icon: MedicineIcon,
            url: "laboratory-analysis"
        },
        {
            title: 'Pediatric Clinic',
            desc: 'Pediatric providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes preventive health checkups.',
            img: '/src/assets/images/services/5.jpg',
            icon: Medical3Icon,
            url: "pediatric-clinic"
        },
        {
            title: 'Cardiac Clinic',
            desc: 'For people requiring additional follow up, the Cardiac Clinic provides rapid access to professionals specialized in diagnosing and treating heart disease.',
            img: '/src/assets/images/services/6.jpg',
            icon: StethoscopeIcon,
            url: "cardiac-clinic"
        },
    ],
}

const ServicesGrid = () => (
    <Box gap={2} pt={5} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
        {content.services.map((item, index) => (
            <ServiceCard item={item} key={index} />
        ))}
    </Box>
)

export default function Services() {
    return (
        <Box component={'section'}>
            <ServicesHeader />
            <ServicesGrid />
            <Cta />
        </Box>
    );
}