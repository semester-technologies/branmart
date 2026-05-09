import BrandsStrip from "@/src/components/marketing/home/BrandsStrip";
import BuiltInTools from "@/src/components/marketing/home/BuiltInTools";
import CTABanner from "@/src/components/marketing/home/CTABanner";
import Features from "@/src/components/marketing/home/Features";
import Hero from "@/src/components/marketing/home/Hero";
import HowItWorks from "@/src/components/marketing/home/HowItWorks";
import TemplatesShowcase from "@/src/components/marketing/home/TemplatesShowcase";
import Testimonials from "@/src/components/marketing/home/Testimonials";
import WhyBranmart from "@/src/components/marketing/home/WhyBranmart";

export const metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <>
      <Hero />
      <BrandsStrip />
      <Features />
      <HowItWorks />
      <TemplatesShowcase />
      <WhyBranmart />
      <BuiltInTools />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default Home;
