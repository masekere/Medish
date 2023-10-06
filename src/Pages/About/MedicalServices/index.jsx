import Testimonial from "components/Testimonial"
import About2 from "./components/About2"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Appointment from "components/Appointment"
import Donations from "components/Donations"
import Team from "components/Team"

export function Component() {
    return (
        <>
            <Hero />
            <Services />
            <About2 />
            <Team />
            <Testimonial />
            <Appointment />
            <Donations />
        </>
    )
}

Component.displayName = 'MedicalServicesPage'