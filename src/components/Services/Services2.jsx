import Box from '@mui/material/Box'
import Cta from 'components/Cta/Cta1';
import ServicesHeader from 'components/Headers/ServicesHeader';
import ServiceCard from "components/Cards/ServiceCard"


const content = {
    services: [
        {
            title: 'Neurology Clinic',
            desc: 'Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.',
            img: 'https://ucarecdn.com/b0700214-e1a8-42a3-b2d1-4a3da76f25cf/assets_images_services_1.jpg',
            url: 'pediatric-clinic'
        },
        {
            title: 'Cardiology Clinic',
            desc: 'All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children...',
            img: 'https://ucarecdn.com/0d5cd08b-e673-49b2-94ee-75997be4f5ec/assets_images_services_2.jpg',
            url: 'cardiology-clinic'
        },
        {
            title: 'Pathology Clinic',
            desc: 'Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from diagnostic testing...',
            img: 'https://ucarecdn.com/ef2bf891-b150-409a-b895-a4ff7adef74f/assets_images_services_3.jpg',
            url: "pathology-clinic"
        },
        {
            title: 'Laboratory Analysis',
            desc: 'Analyzing the radon or radon progeny concentrations with passive devices, or the act of calibrating radon or radon progeny measurement devices.',
            img: 'https://ucarecdn.com/2354e1da-281c-48a4-9330-b89c5d825988/assets_images_services_4.jpg',
            url: "laboratory-analysis"
        },
        {
            title: 'Pediatric Clinic',
            desc: 'Pediatric providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes preventive health checkups.',
            img: 'https://ucarecdn.com/49512262-01c1-4aee-81bf-7fc241749076/assets_images_services_5.jpg',
            url: "pediatric-clinic"
        },
        {
            title: 'Cardiac Clinic',
            desc: 'For people requiring additional follow up, the Cardiac Clinic provides rapid access to professionals specialized in diagnosing and treating heart disease.',
            img: 'https://ucarecdn.com/62fd3d76-4a18-4a1d-97fe-f12eaace0fb9/assets_images_services_6.jpg',
            url: "cardiac-clinic"
        },
    ],
}

const ServicesGrid = () => (
    <Box mb={5} gap={3} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
        {content.services.map((item, index) => (
            <Box mt={5} key={index}>
              <ServiceCard item={item} key={index} />
            </Box>
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