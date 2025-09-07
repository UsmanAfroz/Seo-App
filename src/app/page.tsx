import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Features from "./components/features";
import AboutSection from "./components/aboutSection"
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import BrandMentions from "./components/brandMentions";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <AboutSection />
      <Testimonials />
      <BrandMentions />
      <CTA />
      


    </div>
  );
}

  
