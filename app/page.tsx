import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
// import { CategoriesSection } from "@/components/home/categories-section"
import { RecentJobsSection } from "@/components/home/recent-jobs-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { TrustedCompaniesSection } from "@/components/home/trusted-companies-section"
import { CtaSection } from "@/components/home/cta-section"
import { LandingPageContent } from "@/components/home/whatsappsection"
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* <CategoriesSection /> */}
        {/* <LandingPageContent /> */}
        <RecentJobsSection />
        <TestimonialsSection />
        <TrustedCompaniesSection />
        {/* <CtaSection /> */}
      </main>
      <Footer />
    </div>
  )
}
