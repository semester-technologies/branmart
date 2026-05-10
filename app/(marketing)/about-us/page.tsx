import AboutHero from "@/src/components/marketing/about/AboutHero";
import OurJourney from "@/src/components/marketing/about/OurJourney";
import PurposeAndDirection from "@/src/components/marketing/about/PurposeAndDirection";
import TrustedBy from "@/src/components/marketing/about/TrustedBy";
import WhatWeOffer from "@/src/components/marketing/about/WhatWeOffer";
import WhatWeStandFor from "@/src/components/marketing/about/WhatWeStandFor";
import CTABanner from "@/src/components/marketing/home/CTABanner";
import React from "react";

export const metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <>
      <AboutHero />
      <OurJourney />
      <PurposeAndDirection />
      <WhatWeOffer />
      <TrustedBy />
      <WhatWeStandFor />
      <CTABanner
        heading={"Build Your Business\n with Branmart"}
        subtext="Join thousands of entrepreneurs who are taking their business online."
        primaryLabel="Start free"
        primaryHref="/sign-up"
      />
    </>
  );
};

export default page;
