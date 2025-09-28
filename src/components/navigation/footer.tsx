'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    services: [
      { name: 'Golden Visa', href: '#golden-visa' },
      { name: 'Properties', href: '#properties' },
      { name: 'Investment Advisory', href: '#advisory' },
      { name: 'Legal Support', href: '#legal' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Market Reports', href: '#reports' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '#contact' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-aegean-600 to-aegean-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SG</span>
                </div>
                <div>
                  <h1 className="font-serif font-bold text-xl text-white">STAY GREECE</h1>
                  <p className="text-xs text-gray-400">Premium Golden Visa</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for Greek Golden Visa and premium property investment.
                Bridging Lebanese expertise with Mediterranean opportunities.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-aegean-600 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(links).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-6 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-aegean-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+9613407957" className="text-white hover:text-aegean-400 transition-colors">
                  +961 3 407 957
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-aegean-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:info@staygreece.com" className="text-white hover:text-aegean-400 transition-colors">
                  info@staygreece.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-aegean-400" />
              <div>
                <p className="text-sm text-gray-400">Offices</p>
                <p className="text-white">Beirut & Athens</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Stay Greece. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>

            <div className="text-sm text-gray-400">
              Licensed Real Estate Agent • Greek Legal Certification
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer