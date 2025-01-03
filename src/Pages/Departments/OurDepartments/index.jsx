import Box from '@mui/material/Box'
import { useState } from 'react';
import OurDepartmentsHero from 'components/Hero/OurDepartmentsHero';
import Services from 'components/Services/Services2';
import Features3 from 'components/Features/Features3';
import Testimonial2 from 'components/Testimonial/Testimonial2';
import Appointment2 from 'components/Appointment/Appointment2';
import WhyUs from 'components/WhyUs';
import Process from 'components/Process';

export function Component() {
    return (
        <>
            <OurDepartmentsHero />
            <Services />
            <Features3 />
            <Testimonial2 />
            <Box mt={20} />
            <Appointment2 />
            <WhyUs />
            <Process />
        </>
    )
}

Component.displayName = 'DepartmentsPage'