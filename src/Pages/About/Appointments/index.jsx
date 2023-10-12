import WhyUs from "components/WhyUs";
import Appointment2 from "components/Appointment/Appointment2";
import AppointmentHero from "components/Hero/AppointmentHero";
import Team from "components/Team/Team1";
import Process from "components/Process";

export function Component() {
    return (
        <>
            <AppointmentHero />
            <WhyUs />
            <Process pb={30} />
            <Appointment2 />
            <Team />
        </>
    )
}

Component.displayName = 'AppointmentsPage'