import CTABanner from '@/src/components/marketing/home/CTABanner'
import AllTemplates from '@/src/components/marketing/templates/AllTemplates'
import TemplatesGrid from '@/src/components/marketing/templates/TemplatesGrid'
import TemplatesHero from '@/src/components/marketing/templates/TemplatesHero'
import TemplateTestimonial from '@/src/components/marketing/templates/TemplateTestimonial'
import WhyBranmartTemplates from '@/src/components/marketing/templates/WhyBranmartTemplates'
import React from 'react'

export const metadata = {
  title: "Templates",
};

const page = () => {
  return (
   <>
   <TemplatesHero />
   <TemplatesGrid />
   <WhyBranmartTemplates />
   <AllTemplates />
   <TemplateTestimonial />
   <CTABanner />
   </>
  )
}

export default page