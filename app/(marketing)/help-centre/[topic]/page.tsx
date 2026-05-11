// app/(marketing)/help-centre/[topic]/page.tsx

import NeedMoreHelp from "@/src/components/marketing/help-centre/NeedMoreHelp";
import TopicArticles from "@/src/components/marketing/help-centre/TopicArticles";
import CTABanner from "@/src/components/marketing/home/CTABanner";

const topicData: Record<string, { topic: string; description: string }> = {
  "getting-started": {
    topic: "Getting Started",
    description:
      "Learn how to create your account, choose a template, and launch your website.",
  },
  "website-builder": {
    topic: "Website Builder",
    description:
      "Step-by-step tutorials for designing and customizing your site.",
  },
  "domains-hosting": {
    topic: "Domains & Hosting",
    description:
      "Connect custom domains, manage hosting, and configure DNS settings.",
  },
  "account-billing": {
    topic: "Account & Billing",
    description: "Manage subscriptions, invoices, and payment methods.",
  },
  troubleshooting: {
    topic: "Troubleshooting",
    description: "Fix common errors and get back on track quickly.",
  },
};

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const data = topicData[topic] ?? {
    topic: "Help Article",
    description: "Find answers to your questions.",
  };

  return (
    <>
      <TopicArticles
        topic={data.topic}
        description={data.description}
        breadcrumb={data.topic}
      />
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
