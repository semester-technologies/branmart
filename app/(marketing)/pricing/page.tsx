import CTABanner from "@/src/components/marketing/home/CTABanner";
import Testimonials from "@/src/components/marketing/home/Testimonials";
import FAQ from "@/src/components/marketing/pricing/FAQ";
import PricingComparison from "@/src/components/marketing/pricing/PricingComparison";
import PricingPlans from "@/src/components/marketing/pricing/PricingPlans";
import React from "react";

export const metadata = {
  title: "Pricing",
};

const page = () => {
  return (
    <>
      <PricingPlans />
      <PricingComparison />
      <Testimonials />
      <FAQ />
      <CTABanner
        heading={"Start Free And Build\nYour Store Today"}
        subtext="No credit card required. Create your online store in minutes."
        primaryLabel="Start free"
        primaryHref="/sign-up"
      />
    </>
  );
};

export default page;
