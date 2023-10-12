import Appointment2 from "components/Appointment/Appointment2"
import Box from '@mui/material/Box'
import Testimonial2 from "components/Testimonial/Testimonial2"
import FAQHero from "components/Hero/FAQHero"
import FAQ from "components/FAQ"


export function Component() {
    return (
        <>
            <FAQHero />
            <FAQ />
            <Box height={'12rem'} />
            <Appointment2 />
            <Testimonial2 />
        </>
    )
}

Component.displayName = 'FAQPage'