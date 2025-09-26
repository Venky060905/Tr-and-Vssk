"use client"

import { Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
  <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">TR & VSSK Consultant Services</h3>
            <p className="text-white/90 mb-6 text-pretty leading-relaxed">
              Your trusted partner in accounting, tax, and business services. We provide professional solutions with
              expertise and reliability.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/80" />
                <span className="text-sm text-white/90">+91 8919509128</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/80" />
                <span className="text-sm text-white/90">datat4411@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Tax Preparation</li>
              <li>Accounting & Bookkeeping</li>
              <li>ITR Filing</li>
              <li>Payroll Support</li>
              <li>Financial Statements</li>
              <li>Business Advisory</li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-white">Follow Us</h5>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                  <Linkedin className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                  <Twitter className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                  <Facebook className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} TR & VSSK Consultant Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
