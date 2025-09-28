import Hero from '@/components/sections/hero'
import PropertyShowcase from '@/components/sections/property-showcase'
import ValueProposition from '@/components/sections/value-proposition'
import GoldenVisaProcess from '@/components/sections/golden-visa-process'
import SocialProof from '@/components/sections/social-proof'
import ContactSection from '@/components/sections/contact-section'
import Navigation from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'
import WhatsAppFloat from '@/components/ui/whatsapp-float'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ValueProposition />
      <PropertyShowcase />
      <GoldenVisaProcess />
      <SocialProof />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}