import { Box } from "@mui/material";
import OurDoctorsHero from "components/Hero/OurDoctorsHero";
import TeamsGrid from "components/Team/TeamsGrid";
import WhyUs from "components/WhyUs";

export function Component() {
    return (
       <>
        <OurDoctorsHero />
        <TeamsGrid />
        <WhyUs />
       </>
    )
}

Component.displayName = 'OurDoctorsPage'