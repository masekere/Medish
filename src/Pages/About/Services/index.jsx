import Testimonial from "components/Testimonial"
import Services from "components/Services/Services2"
import Appointment from "components/Appointment"
import Donations from "components/Donations"
import Team from "components/Team/Team1"
import ServicesHero from "components/Hero/ServicesHero"
import About from "components/About/About2"

export function Component() {
    return (
        <>
            <ServicesHero />
            <Services />
            <About />
            <Team />
            <Testimonial />
            <Appointment />
            <Donations />
        </>
    )
}

Component.displayName = 'MedicalServicesPage'