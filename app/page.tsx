// app/page.tsx
import { Header } from "@/components/header";
import SEO from "@/components/SEO";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { BlogSlider } from "@/components/blog-slider";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="TR & VSSK Consultant Services"
        description="TR & VSSK Consultant Services - Trusted Accounting & Tax Consulting in Hyderabad"
        keywords="accounting, tax, consulting, Hyderabad, Chartered Accountant"
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BlogSlider />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
