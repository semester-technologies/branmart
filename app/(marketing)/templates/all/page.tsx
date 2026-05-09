import CTABanner from "@/src/components/marketing/home/CTABanner";
import BrowseTemplates from "@/src/components/marketing/templates/BrowseTemplates";

export const metadata = {
  title: "Browse All Templates",
};

export default function BrowseAllTemplatesPage() {
  return (
  <>
  <BrowseTemplates />
  <CTABanner />
  </>

)
}