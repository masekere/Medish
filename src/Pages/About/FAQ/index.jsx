import Hero from "./components/Hero"
import FAQ from "./components/FAQ"
import Appointment2 from "components/Appointment2"
import Box from '@mui/material/Box'
import Testimonial2 from "components/Testimonial2"

export function Component() {
    return (
        <>
            <Hero />
            <FAQ />
            <Box height={'12rem'} />
            <Appointment2 />
            <Testimonial2 />
        </>
    )
}

Component.displayName = 'FAQPage'