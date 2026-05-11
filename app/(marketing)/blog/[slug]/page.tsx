import BlogPostBody from "@/src/components/marketing/blog/BlogPostBody";
import BlogPostHero from "@/src/components/marketing/blog/BlogPostHero";
import NewsletterStrip from "@/src/components/marketing/blog/NewsletterStrip";
import RelatedPosts from "@/src/components/marketing/blog/RelatedPosts";

// export const metadata = {
//   title: "Company Blog - 7 Website Design Mistakes That Hurt Conversions ",
// };


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // later you'll fetch real post data by slug from Django
  return {
    title: `Blog | ${slug.replace(/-/g, " ")}`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // TODO: fetch post data from Django API using slug
  // const post = await fetchPostBySlug(slug);

  return (
    <>
      <BlogPostHero
        category="Web Design"
        readTime="8 min read"
        title="7 Website Design Mistakes That Hurt Conversions"
        excerpt="Poor layout and unclear navigation drive visitors away. Here's how to design pages that attract and convert more customers."
        image="/images/blog/post-2.png"
        author="Alec Whitten"
        publishedOn="17 Jan 2025"
      />
      <BlogPostBody />
      <RelatedPosts />
      <NewsletterStrip />
    </>
  );
}