import Testimonial from "components/Testimonial"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Appointment from "components/Appointment"
import Donations from "components/Donations"

export function Component() {
    return (
        <>
            <Hero />
            <Pricing />
            <Testimonial />
            <Appointment />
            <Donations />
        </>
    )
}

Component.displayName = 'PricingPage'