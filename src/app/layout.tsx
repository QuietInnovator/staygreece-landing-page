import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Stay Greece - Premium Golden Visa Solutions',
  description: 'Secure EU residency through Greece\'s Golden Visa program. Premium property investment opportunities for discerning investors.',
  keywords: 'Golden Visa, Greece, Property Investment, EU Residency, Lebanese Investors',
  authors: [{ name: 'Stay Greece' }],
  openGraph: {
    title: 'Stay Greece - Premium Golden Visa Solutions',
    description: 'Secure EU residency through Greece\'s Golden Visa program. Premium property investment opportunities for discerning investors.',
    url: 'https://staygreece.com',
    siteName: 'Stay Greece',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stay Greece - Premium Golden Visa Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stay Greece - Premium Golden Visa Solutions',
    description: 'Secure EU residency through Greece\'s Golden Visa program.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <div className="relative min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}