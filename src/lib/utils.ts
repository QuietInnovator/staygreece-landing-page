import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K'
  }
  return num.toString()
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function getImageUrl(path: string, width?: number, height?: number): string {
  if (!path) return '/placeholder.jpg'

  // If it's already a full URL, return it
  if (path.startsWith('http')) return path

  // For Unsplash images, add dimensions
  if (path.includes('unsplash.com')) {
    const url = new URL(path)
    if (width) url.searchParams.set('w', width.toString())
    if (height) url.searchParams.set('h', height.toString())
    url.searchParams.set('q', '80')
    url.searchParams.set('fm', 'webp')
    return url.toString()
  }

  return path
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function getWhatsAppUrl(phoneNumber: string, message?: string): string {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, '')
  const encodedMessage = message ? encodeURIComponent(message) : ''
  return `https://wa.me/${cleanNumber}${message ? `?text=${encodedMessage}` : ''}`
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhoneNumber(phone: string, countryCode: string = '961'): boolean {
  const cleanPhone = phone.replace(/[^\d]/g, '')
  if (countryCode === '961') {
    // Lebanese phone number validation
    return /^961[0-9]{8}$/.test(cleanPhone)
  }
  return cleanPhone.length >= 10
}

export function generateGoldenVisaMessage(language: 'en' | 'ar' = 'en'): string {
  const messages = {
    en: "Hello! I'm interested in learning more about Greece's Golden Visa program and property investment opportunities.",
    ar: "مرحباً! أنا مهتم بمعرفة المزيد عن برنامج الإقامة الذهبية في اليونان وفرص الاستثمار العقاري."
  }
  return messages[language]
}

export function scrollToElement(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export function getLocaleFromPath(pathname: string): 'en' | 'ar' {
  if (pathname.startsWith('/ar')) return 'ar'
  return 'en'
}

export function addLocaleToPath(path: string, locale: 'en' | 'ar'): string {
  if (locale === 'ar') {
    return `/ar${path}`
  }
  return path
}

export function removeLocaleFromPath(path: string): string {
  return path.replace(/^\/(en|ar)/, '') || '/'
}

// Performance monitoring utilities
export function measurePerformance(name: string) {
  return {
    start: () => performance.mark(`${name}-start`),
    end: () => {
      performance.mark(`${name}-end`)
      performance.measure(name, `${name}-start`, `${name}-end`)
      const measure = performance.getEntriesByName(name)[0]
      console.log(`${name}: ${measure.duration.toFixed(2)}ms`)
    }
  }
}

// Animation utilities
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleInCenter = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
}