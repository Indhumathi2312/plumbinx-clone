import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import WhyChooseUs from "@/src/components/sections/WhyChooseUs";
import HowItWorks from "@/src/components/sections/HowItWorks";
import Services from "@/src/components/sections/Services";
import Pricing from "@/src/components/sections/Pricing";
import Projects from "@/src/components/sections/Projects";
import Blog from "@/src/components/sections/Blog";
import VideoTestimonials from "@/src/components/sections/VideoTestimonials";
import CTA from "@/src/components/sections/CTA";
import FAQ from "@/src/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <HowItWorks />
      <Services />
      <Pricing />
      <Projects />
      <Blog />
      <VideoTestimonials />
      <CTA />
      <FAQ />
    </>
  );
}






