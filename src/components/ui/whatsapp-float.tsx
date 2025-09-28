'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppUrl, generateGoldenVisaMessage } from '@/lib/utils'

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showButton) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 3000)
      return () => clearTimeout(tooltipTimer)
    }
  }, [showButton])

  const handleClick = () => {
    const message = generateGoldenVisaMessage('en')
    const url = getWhatsAppUrl('9613407957', message)
    window.open(url, '_blank')
    setShowTooltip(false)
  }

  return (
    <AnimatePresence>
      {showButton && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute bottom-full right-0 mb-4 max-w-xs"
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 relative">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="pr-6">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Golden Visa Consultant</p>
                        <p className="text-xs text-green-500">Online now</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                      Hi! 👋 Ready to start your Golden Visa journey? I&apos;m here to help!
                    </p>

                    <Button
                      onClick={handleClick}
                      size="sm"
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      Start Chat
                    </Button>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-full right-6 transform -translate-x-1/2">
                    <div className="w-3 h-3 bg-white border-r border-b border-gray-100 transform rotate-45" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <Button
              onClick={handleClick}
              className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl group overflow-hidden"
              size="icon"
            >
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Icon */}
              <MessageCircle className="w-8 h-8 relative z-10 transform group-hover:scale-110 transition-transform" />

              {/* Notification Dot */}
              <motion.div
                className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                  1
                </span>
              </motion.div>
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppFloat