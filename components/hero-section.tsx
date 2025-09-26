"use client"

import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, Shield, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/office-background.jpeg")', // Place image inside /public/images/
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Icon Row */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Trusted Accounting & Tax Consulting in Hyderabad
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 font-medium"
          >
            Helping businesses manage taxes, accounts, and compliance with ease.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Professional accounting solutions with expertise in financial compliance, 
            tax preparation, and business advisory services for individuals and businesses.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 border-0 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
              onClick={() => scrollToSection("contact")}
            >
              Book a Consultation
            </Button>
          </motion.div>

          {/* Scroll Down Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection("services")}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
            >
              <ArrowDown className="h-6 w-6 text-white animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
