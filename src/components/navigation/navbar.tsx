'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, MessageCircle, Globe } from 'lucide-react'
import { cn, getWhatsAppUrl, generateGoldenVisaMessage } from '@/lib/utils'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#properties', label: 'Properties' },
    { href: '#golden-visa', label: 'Golden Visa' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleWhatsAppClick = () => {
    const message = generateGoldenVisaMessage('en')
    const url = getWhatsAppUrl('9613407957', message)
    window.open(url, '_blank')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-aegean-600 to-aegean-700 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-golden-400 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className={cn(
                "font-serif font-bold text-xl transition-colors",
                scrolled ? "text-gray-900" : "text-white"
              )}>
                STAY GREECE
              </h1>
              <p className={cn(
                "text-xs font-medium transition-colors",
                scrolled ? "text-gray-500" : "text-white/70"
              )}>
                Premium Golden Visa
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 font-medium transition-all duration-200 group",
                  scrolled
                    ? "text-gray-700 hover:text-aegean-600"
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "hidden sm:flex items-center space-x-1",
                scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/90 hover:text-white"
              )}
            >
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </Button>

            {/* WhatsApp Button */}
            <Button
              onClick={handleWhatsAppClick}
              className="hidden sm:flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white"
              size="sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden",
                scrolled ? "text-gray-600" : "text-white"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-aegean-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact via WhatsApp
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  العربية
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation