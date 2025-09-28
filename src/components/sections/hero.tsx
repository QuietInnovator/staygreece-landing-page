'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react'
import { getWhatsAppUrl, generateGoldenVisaMessage } from '@/lib/utils'

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const trustIndicators = [
    { icon: Users, label: "906 Families Served", value: "906" },
    { icon: TrendingUp, label: "€45M+ Invested", value: "€45M+" },
    { icon: Award, label: "98% Approval Rate", value: "98%" },
    { icon: Star, label: "5-Star Service", value: "5.0" },
  ]

  const handleWhatsAppClick = () => {
    const message = generateGoldenVisaMessage('en')
    const url = getWhatsAppUrl('9613407957', message)
    window.open(url, '_blank')
  }

  const handlePropertyView = () => {
    document.getElementById('properties')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-aegean-900 via-aegean-800 to-aegean-700">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Image
          src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1920&h=1080&q=80&fm=webp"
          alt="Santorini Greece Premium View"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aegean-900/80 via-aegean-800/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-golden-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-olive-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        <div className="space-y-8">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
          >
            <Star className="w-4 h-4 mr-2 text-golden-400" />
            Premium Golden Visa Specialists
            <motion.div
              className="ml-2 w-2 h-2 bg-golden-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Your{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-golden-400 to-golden-600 bg-clip-text text-transparent">
                  Greek Legacy
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-golden-400 to-golden-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>
              <br />
              Starts Here
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Secure EU residency and Mediterranean investment returns through Greece&apos;s
              Golden Visa program with our premium, white-glove service.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="xl"
              variant="golden"
              onClick={handleWhatsAppClick}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-golden-600 to-golden-700"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              size="xl"
              variant="glass"
              onClick={handlePropertyView}
              className="group"
            >
              <span className="flex items-center">
                View Properties
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon
                return (
                  <motion.div
                    key={indicator.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-8 h-8 text-golden-400 mx-auto mb-3" />
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {indicator.value}
                      </div>
                      <div className="text-sm text-white/70 font-medium">
                        {indicator.label}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 hidden lg:block">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-xl p-4 text-white text-sm max-w-xs"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">Live Update</span>
              </div>
              <p>5 new properties added this week</p>
            </motion.div>
          </div>

          <div className="absolute top-1/3 right-10 transform -translate-y-1/2 hidden lg:block">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass rounded-xl p-4 text-white text-sm max-w-xs"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-4 h-4 text-golden-400" />
                <span className="font-medium">Client Review</span>
              </div>
              <p>&quot;Exceptional service, seamless process!&quot;</p>
              <div className="text-xs text-white/60 mt-1">- Ahmad K., Beirut</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60 cursor-pointer hover:text-white transition-colors"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-medium mb-2">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero