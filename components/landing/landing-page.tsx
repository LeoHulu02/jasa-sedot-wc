import { FAQ } from "@/components/landing/faq";
import { FinalCTA } from "@/components/landing/final-cta";
import { FloatingContact } from "@/components/landing/floating-contact";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { ServiceArea } from "@/components/landing/service-area";
import { Services } from "@/components/landing/services";
import { Testimonials } from "@/components/landing/testimonials";
import { WhyChooseUs } from "@/components/landing/why-choose-us";

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <FinalCTA />
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}
