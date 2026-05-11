import ContactChannels from "@/src/components/marketing/contact/ContactChannels";
import ContactForm from "@/src/components/marketing/contact/ContactForm";
import CTABanner from "@/src/components/marketing/home/CTABanner";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <ContactChannels />
      <CTABanner
        heading={"Ready to Start Your\n Website? "}
        subtext="Build and launch your online business today with Branmart."
        primaryLabel="Get Started free"
        primaryHref="/sign-up"
      />
    </>
  );
}
