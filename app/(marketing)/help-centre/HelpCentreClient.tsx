"use client";

import { useState } from "react";
import HelpHero from "@/src/components/marketing/help-centre/HelpHero";
import ExploreByTopic from "@/src/components/marketing/help-centre/ExploreByTopic";
import PopularArticles from "@/src/components/marketing/help-centre/PopularArticles";
import NeedMoreHelp from "@/src/components/marketing/help-centre/NeedMoreHelp";
import CTABanner from "@/src/components/marketing/home/CTABanner";

export default function HelpCentrePage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <HelpHero onSearch={setSearch} />
      <ExploreByTopic />
      <PopularArticles />
      <NeedMoreHelp />
      <CTABanner
        heading={"Learn, Build, and\n Grow with Branmart"}
        subtext="Explore more tools and resources to get the most out of your website."
        primaryLabel="Visit Blog"
        primaryHref="/blog"
      />
    </>
  );
}
