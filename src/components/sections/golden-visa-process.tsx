'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, FileText, CreditCard, Award } from 'lucide-react'

const GoldenVisaProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Consultation",
      description: "Free consultation to understand your investment goals and visa requirements",
      duration: "1 week",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Property Selection",
      description: "Choose from our curated portfolio of Golden Visa eligible properties",
      duration: "2-4 weeks",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: CheckCircle,
      title: "Legal Process",
      description: "Complete documentation and legal procedures with our expert team",
      duration: "4-6 weeks",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: CreditCard,
      title: "Investment",
      description: "Secure property purchase and fund transfer with full transparency",
      duration: "1-2 weeks",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Award,
      title: "Residency",
      description: "Receive your Greek Golden Visa and EU residency permit",
      duration: "2-3 months",
      color: "from-emerald-500 to-emerald-600"
    }
  ]

  return (
    <section id="golden-visa" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-aegean-100 text-aegean-600 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Golden Visa Process
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Your Path to
            <span className="gradient-text block mt-2">EU Residency</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined 5-step process ensures a smooth journey to Greek residency
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 to-emerald-200 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center group"
                >
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 border border-gray-200 text-sm font-medium text-gray-600">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </div>
                  </div>

                  {/* Connecting Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-8 text-gray-300 z-20">
                      <svg
                        className="w-full h-full"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-8 px-8 py-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-aegean-600 mb-1">98%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-aegean-600 mb-1">6-8</div>
              <div className="text-sm text-gray-500">Months Average</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-aegean-600 mb-1">906</div>
              <div className="text-sm text-gray-500">Families Helped</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GoldenVisaProcess