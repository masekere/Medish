import AboutUs from "components/About/AboutUs";
import Features from "components/Features/Features2";
import Process from "components/Process";
import Donations from "components/Donations";
import WhyUs from "components/WhyUs";
import AboutUsHero from "components/Hero/AboutUsHero";
import Team from "components/Team/Team1";

export function Component() {
    return (
        <>
            <AboutUsHero />
            <AboutUs />
            <Features />
            <Donations />
            <Team bgcolor={'primary.light'}  />
            <WhyUs />
            <Process />
        </>
    )
}

Component.displayName = 'AboutPage'