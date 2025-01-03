import Box from '@mui/material/Box'
import ServicesHeader from "components/Headers/ServicesHeader";
import CardSwiper from "components/Cards/CardSwiper"
import ServiceCard from "components/Cards/ServiceCard"
import Cta from 'components/Cta/Cta1';


const content = {
    services: [
        {
            title: 'Neurology Clinic',
            desc: 'Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.',
            img: 'https://ucarecdn.com/b0700214-e1a8-42a3-b2d1-4a3da76f25cf/assets_images_services_1.jpg',
        },
        {
            title: 'Cardiology Clinic',
            desc: 'All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children...',
            img: 'https://ucarecdn.com/0d5cd08b-e673-49b2-94ee-75997be4f5ec/assets_images_services_2.jpg',
        },
        {
            title: 'Pathology Clinic',
            desc: 'Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from diagnostic testing...',
            img: 'https://ucarecdn.com/ef2bf891-b150-409a-b895-a4ff7adef74f/assets_images_services_3.jpg',
        },
        {
            title: 'Laboratory Analysis',
            desc: 'Analyzing the radon or radon progeny concentrations with passive devices, or the act of calibrating radon or radon progeny measurement devices.',
            img: 'https://ucarecdn.com/2354e1da-281c-48a4-9330-b89c5d825988/assets_images_services_4.jpg',
        },
        {
            title: 'Pediatric Clinic',
            desc: 'Pediatric providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes preventive health checkups.',
            img: 'https://ucarecdn.com/49512262-01c1-4aee-81bf-7fc241749076/assets_images_services_5.jpg',
        },
        {
            title: 'Cardiac Clinic',
            desc: 'For people requiring additional follow up, the Cardiac Clinic provides rapid access to professionals specialized in diagnosing and treating heart disease.',
            img: 'https://ucarecdn.com/62fd3d76-4a18-4a1d-97fe-f12eaace0fb9/assets_images_services_6.jpg',
        },
    ],
}

export default function Services() {
    return (
        <Box pt={0} component={'section'}>
            <ServicesHeader />
            <CardSwiper items={content.services} Card={ServiceCard} sx={{mt: 8}}/>
            <Cta />
        </Box>
    );
}