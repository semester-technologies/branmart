import TemplateDetail from "@/src/components/marketing/templates/TemplateDetail";
import TemplateBody from "@/src/components/marketing/templates/TemplateBody";
import TemplateReviews from "@/src/components/marketing/templates/TemplateReviews";
import RelatedTemplates from "@/src/components/marketing/templates/RelatedTemplates";
import CTABanner from "@/src/components/marketing/home/CTABanner";

export const metadata = {
  title: "Template Detail - Mixtas",
};

export default function TemplateDetailPage() {
  return (
    <>
      <TemplateDetail
        name="Mixtas - Modern Fashion Store"
        category="Online Stores"
        description="Mixtas is perfect for fashion, gadgets, and lifestyle brands that want a modern, high-converting website. With clean typography, ample white space, and a sleek layout, it creates a seamless experience that drives signups and sales."
        templateId="1"
        stats={{
          creator: "Branmart Themes",
          published: "1 week ago",
          pages: 5,
          users: "12.1k",
          rating: "4.7",
          reviews: "9.7k",
        }}
      />
      <TemplateBody
        templateName="Mixtas"
        images={["/images/templates/mixtas.png"]}
        about={[
          "Simple, clean, and designed to convert. Mixtas is a premium e-commerce template for Fashion businesses that need a high-performing landing page. It features a sleek, modern layout with white space and bold typography to make content stand out.",
          "Ideal for fashion, gadgets, and lifestyle brands. Mixtas provides the perfect foundation for a professional and engaging web presence that turns visitors into customers.",
        ]}
      />
      <TemplateReviews />
      <RelatedTemplates />
      <CTABanner />
    </>
  );
}