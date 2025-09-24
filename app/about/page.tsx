import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BlogSlider } from "@/components/blog-slider" // ✅ import blog slider
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import SEO from "@/components/SEO"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="TR & VSSK Consultant Services | Home"
        description="Trusted accounting and tax consulting services in Hyderabad. Helping businesses manage taxes, accounts, and compliance."
        keywords="accounting, tax, consulting, Hyderabad, business"
      />
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>

        {/* Latest Blogs Slider */}
        <BlogSlider />

        <div id="services">
          <ServicesSection />
        </div>
        <WhyChooseUsSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
