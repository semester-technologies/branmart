// app/(marketing)/help-centre/[topic]/[article]/page.tsx

import ArticlePage from "@/src/components/marketing/help-centre/ArticlePage";
import RelatedArticles from "@/src/components/marketing/help-centre/RelatedArticles";
import CTABanner from "@/src/components/marketing/home/CTABanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string; article: string }>;
}) {
  const { article } = await params;
  return {
    title: `Help Centre | ${article.replace(/-/g, " ")}`,
  };
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ topic: string; article: string }>;
}) {
  const { topic, article } = await params;

  // TODO: fetch article content from Django using topic + article slugs
  // const data = await fetchArticle(topic, article);

  return (
    <>
      <ArticlePage />
      <RelatedArticles />
       <CTABanner
              heading={"Start Building\n Your Website Today"}
              subtext="Explore more tools and resources to get the most out of your website."
              primaryLabel="Start Free"
              primaryHref="/sign-up"
            />
    </>
  );
}
