import PricingPlans from "components/PricingPlans"
import Appointment from "components/Appointment"
import Donations from "components/Donations"
import PricingHero from "components/Hero/PricingHero"

export function Component() {
    return (
        <>
            <PricingHero />
            <PricingPlans />
            <Appointment mt={0} />
            <Donations />
        </>
    )
}

Component.displayName = 'PricingPage'