import About from "components/About";
import ServicesSlider from "components/Services/ServicesSlider";
import About2 from "components/About/About2";
import Features from "components/Features";
import BlogSlider from "components/Blog/BlogSlider";
import Team from "components/Team/Team1";
import HomeHero from "components/Hero/HomeHero";
import Donations from "components/Donations";
import Testimonial from "components/Testimonial";
import Appointment from "components/Appointment";

export default function Home() {
    return (
        <>
            <HomeHero />
            <About />
            <ServicesSlider />
            <About2 />
            <Team />
            <Testimonial />
            <Appointment />
            <Donations />
            <Features />
            <BlogSlider />
        </>
    )
}