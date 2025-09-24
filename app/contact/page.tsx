'use client'

import { ContactSection } from "@/components/contact-section"
import SEO from "@/components/SEO"

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact TR & VSSK Consultant Services"
        description="Get in touch with TR & VSSK Consultant Services in Hyderabad for accounting, tax, and business consulting."
        keywords="contact, accounting, tax, consulting, Hyderabad"
      />
      <main className="min-h-screen bg-background">
        <ContactSection />
      </main>
    </>
  )
}
