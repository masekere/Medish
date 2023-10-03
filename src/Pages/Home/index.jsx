import Hero from "Pages/Home/components/Hero";
import About from "Pages/Home/components/About";
import Services from "./components/Services";
import About2 from "./components/About2";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Appointment from "./components/Appointment";
import Donations from "./components/Donations";
import Features from "./components/Features";
import Blog from "./components/Blog";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <About2 />
            <Team />
            <Testimonial />
            <Appointment />
            <Donations />
            <Features />
            <Blog />
        </>
    )
}