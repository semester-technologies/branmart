import DesignFreedom from '@/src/components/marketing/features/DesignFreedom'
import FeaturesAccordion from '@/src/components/marketing/features/FeaturesAccordion'
import FeaturesHero from '@/src/components/marketing/features/FeaturesHero'
import FeaturesOverview from '@/src/components/marketing/features/FeaturesOverview'
import Integrations from '@/src/components/marketing/features/Integrations'
import MarketingTools from '@/src/components/marketing/features/MarketingTools'
import SecuritySection from '@/src/components/marketing/features/SecuritySection'
import CTABanner from '@/src/components/marketing/home/CTABanner'
import Testimonials from '@/src/components/marketing/home/Testimonials'

export const metadata = {
  title: "Features",
};

const page = () => {
  return (
   <>
   <FeaturesHero />
   <FeaturesOverview />
   <FeaturesAccordion />
   <DesignFreedom />
   <MarketingTools />
   <Integrations />
   <SecuritySection />
   <Testimonials />
   <CTABanner />
   </>
  )
}

export default page