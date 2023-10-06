import Cta from "components/Cta";
import Hero from "./components/Hero";
import Appointment2 from "components/Appointment2";
import ProcessContainer from "./components/ProcessContainer";
import Team from "./components/Team";

export function Component() {
    return (
        <>
            <Hero />
            <Cta />
            <ProcessContainer />
            <Appointment2 />
            <Team />
        </>
    )
}

Component.displayName = 'AppointmentsPage'