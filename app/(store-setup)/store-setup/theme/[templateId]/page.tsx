// app/(store-setup)/store-setup/theme/[templateId]/page.tsx

import TemplatePreviewStep from "@/src/components/dashboard/store-setup/TemplatePreviewStep";
import RelatedTemplates from "@/src/components/marketing/templates/RelatedTemplates";
import TemplateReviews from "@/src/components/marketing/templates/TemplateReviews";

export default async function TemplatePreviewPage({
  params,
}: {
  params: Promise<{ templateId: string }>;
}) {
  const { templateId } = await params;
  // TODO: fetch template by id from Django
  return (
    <>
      <TemplatePreviewStep templateName="Mixtas" />
      <TemplateReviews />
      <RelatedTemplates />
    </>
  );
}
