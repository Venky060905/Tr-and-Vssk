'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"
import emailjs from 'emailjs-com'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        'service_se8urwo',
        'template_pq3zcnh',
        e.target as HTMLFormElement,
        '9KDBbIM43g6wiyb7Q'
      )

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      alert('Message sent successfully!')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      console.error(err)
      alert('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Ready to get started? Get in touch with us today for a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info + Map */}
          <div className="space-y-8 fade-in">
            {/* Office Info */}
            <div className="border-2 bg-white rounded-2xl shadow-md p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 8919509128</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">datat4411@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Office Hours</p>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 7:30 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">12/5/64, Bharat Nagar Colony, SP Nagar, Bharat Nagar, Moosapet, Hyderabad, Telangana 500018</p>
                </div>
              </div>

              {/* Quick Call / WhatsApp */}
              <div className="flex space-x-4 mt-4">
                <a href="tel:+918919509128" className="flex items-center justify-center px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-md transition-all">
                  <Phone className="inline mr-2 h-5 w-5" /> Call
                </a>
                <a href="https://wa.me/918919509128" target="_blank" className="flex items-center justify-center px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-md transition-all">
                  <MessageCircle className="inline mr-2 h-5 w-5" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="border-2 w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.456789!3d17.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb123456789abc%3A0xabcdef1234567890!2s12%2F5%2F64%2C%20Bharat%20Nagar%20Colony%2C%20SP%20Nagar%2C%20Bharat%20Nagar%2C%20Moosapet%2C%20Hyderabad%2C%20Telangana%20500018!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <Card className="border-2 border-blue-400 hover:border-blue-600 shadow-lg bg-white rounded-2xl fade-in transition-all duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="font-heading text-xl font-semibold">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200 transition-all duration-300 py-3"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200 transition-all duration-300 py-3"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200 transition-all duration-300 py-3"
                  required
                />

                {/* Select Service Dropdown */}
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200 transition-all duration-300 py-3 w-full"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="accounting">Accounting</option>
                  <option value="tax">Tax Consulting</option>
                  <option value="compliance">Compliance</option>
                  <option value="advisory">Business Advisory</option>
                  <option value="signature">Digital Signatures(DSC)</option>
                  <option value="others">Others</option>
                
                </select>

                {/* Message Box */}
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8} // taller message box
                  className="rounded-xl border border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200 transition-all duration-300 resize-none h-48"
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
