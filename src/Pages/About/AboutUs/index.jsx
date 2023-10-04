import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Donations from "./components/Donations";
import Team from "./components/Team";
import About2 from "./components/About2";
import Process from "./components/Process";

export function Component() {
    return (
        <>
            <Hero />
            <About />
            <Features />
            <Donations />
            <Team />
            <About2 />
            <Process />
        </>
    )
}

Component.displayName = 'AboutPage'