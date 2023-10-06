import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Team from "./components/Team";
import Process from "components/Process";
import Donations from "components/Donations";
import Cta from "components/Cta";

export function Component() {
    return (
        <>
            <Hero />
            <About />
            <Features />
            <Donations />
            <Team />
            <Cta />
            <Process />
        </>
    )
}

Component.displayName = 'AboutPage'