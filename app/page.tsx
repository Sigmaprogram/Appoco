import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"
import { PortfolioPreviewSection } from "@/components/home/portfolio-preview-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
