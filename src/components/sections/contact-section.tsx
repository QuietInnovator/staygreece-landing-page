'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-aegean-900 via-aegean-800 to-aegean-700">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Start Your Journey
            <span className="block mt-2 bg-gradient-to-r from-golden-400 to-golden-600 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to secure your EU residency? Get in touch with our Golden Visa experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-golden-400 focus:ring-2 focus:ring-golden-400/20 transition-all backdrop-blur-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-golden-400 focus:ring-2 focus:ring-golden-400/20 transition-all backdrop-blur-sm"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-golden-400 focus:ring-2 focus:ring-golden-400/20 transition-all backdrop-blur-sm"
                  placeholder="+961 X XXX XXXX"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Investment Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-golden-400 focus:ring-2 focus:ring-golden-400/20 transition-all backdrop-blur-sm"
                  required
                >
                  <option value="" className="text-gray-900">Select Budget Range</option>
                  <option value="250-400" className="text-gray-900">€250K - €400K</option>
                  <option value="400-600" className="text-gray-900">€400K - €600K</option>
                  <option value="600-800" className="text-gray-900">€600K - €800K</option>
                  <option value="800+" className="text-gray-900">€800K+</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-golden-400 focus:ring-2 focus:ring-golden-400/20 transition-all backdrop-blur-sm resize-none"
                  placeholder="Tell us about your investment goals..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="golden"
                className="w-full"
              >
                Book Free Consultation
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-white/80 leading-relaxed">
                Our team of Golden Visa experts is ready to guide you through your investment journey.
                Contact us today for a personalized consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                  <p className="text-white/70 text-sm mb-2">Instant messaging support</p>
                  <a
                    href="https://wa.me/9613407957"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    +961 3 407 957
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-white/70 text-sm mb-2">Direct consultation line</p>
                  <a
                    href="tel:+9613407957"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +961 3 407 957
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-white/70 text-sm mb-2">Professional inquiries</p>
                  <a
                    href="mailto:info@staygreece.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    info@staygreece.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Offices</h4>
                  <p className="text-white/70 text-sm">
                    Beirut, Lebanon<br />
                    Athens, Greece
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20">
              <h4 className="text-white font-medium mb-3">Business Hours</h4>
              <div className="space-y-1 text-sm text-white/70">
                <p>Monday - Friday: 9AM - 6PM (Lebanon Time)</p>
                <p>Saturday: 10AM - 4PM (Greece Time)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection