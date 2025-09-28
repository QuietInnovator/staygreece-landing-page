'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Home,
  MapPin,
  Bed,
  Square,
  TrendingUp,
  Star,
  Filter,
  Search,
  Heart,
  Eye,
  ArrowRight
} from 'lucide-react'
import { cn, formatPrice, getImageUrl } from '@/lib/utils'

interface Property {
  id: number
  title: string
  location: string
  price: number
  type: 'villa' | 'apartment' | 'commercial'
  bedrooms: number
  size: number
  image: string
  roi: number
  featured: boolean
  goldenVisa: boolean
  rating: number
  views: number
  description: string
}

const mockProperties: Property[] = [
  {
    id: 1,
    title: "Luxury Seafront Villa",
    location: "Santorini, Cyclades",
    price: 750000,
    type: "villa",
    bedrooms: 4,
    size: 280,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600",
    roi: 9.2,
    featured: true,
    goldenVisa: true,
    rating: 4.9,
    views: 1247,
    description: "Stunning seafront villa with panoramic Aegean Sea views"
  },
  {
    id: 2,
    title: "Modern Athens Penthouse",
    location: "Kolonaki, Athens",
    price: 450000,
    type: "apartment",
    bedrooms: 3,
    size: 180,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600",
    roi: 8.5,
    featured: true,
    goldenVisa: true,
    rating: 4.8,
    views: 892,
    description: "Contemporary penthouse in the heart of Athens"
  },
  {
    id: 3,
    title: "Mykonos Luxury Resort",
    location: "Mykonos Town, Mykonos",
    price: 1200000,
    type: "commercial",
    bedrooms: 0,
    size: 450,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600",
    roi: 11.3,
    featured: true,
    goldenVisa: true,
    rating: 5.0,
    views: 2103,
    description: "Boutique resort property with premium amenities"
  },
  {
    id: 4,
    title: "Traditional Cycladic Villa",
    location: "Paros, Cyclades",
    price: 320000,
    type: "villa",
    bedrooms: 3,
    size: 160,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600",
    roi: 7.8,
    featured: false,
    goldenVisa: true,
    rating: 4.7,
    views: 654,
    description: "Authentic Cycladic architecture with modern comforts"
  },
  {
    id: 5,
    title: "Crete Mountain Retreat",
    location: "Chania, Crete",
    price: 280000,
    type: "villa",
    bedrooms: 2,
    size: 120,
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&h=600",
    roi: 7.2,
    featured: false,
    goldenVisa: true,
    rating: 4.6,
    views: 421,
    description: "Serene mountain villa with traditional charm"
  },
  {
    id: 6,
    title: "Rhodes Coastal Apartment",
    location: "Rhodes Town, Rhodes",
    price: 195000,
    type: "apartment",
    bedrooms: 2,
    size: 90,
    image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=800&h=600",
    roi: 6.9,
    featured: false,
    goldenVisa: false,
    rating: 4.5,
    views: 312,
    description: "Charming coastal apartment near historic center"
  }
]

const PropertyShowcase = () => {
  const [properties] = useState<Property[]>(mockProperties)
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties)
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'villa' | 'apartment' | 'commercial'>('all')
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'mid' | 'high'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [likedProperties, setLikedProperties] = useState<Set<number>>(new Set())

  useEffect(() => {
    let filtered = properties

    // Filter by type
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(property => property.type === selectedFilter)
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'low':
          filtered = filtered.filter(property => property.price < 300000)
          break
        case 'mid':
          filtered = filtered.filter(property => property.price >= 300000 && property.price < 600000)
          break
        case 'high':
          filtered = filtered.filter(property => property.price >= 600000)
          break
      }
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProperties(filtered)
  }, [properties, selectedFilter, priceRange, searchTerm])

  const handleLike = (propertyId: number) => {
    setLikedProperties(prev => {
      const newSet = new Set(prev)
      if (newSet.has(propertyId)) {
        newSet.delete(propertyId)
      } else {
        newSet.add(propertyId)
      }
      return newSet
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="properties" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-aegean-50 text-aegean-600 text-sm font-medium mb-6">
            <Home className="w-4 h-4 mr-2" />
            Premium Property Portfolio
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Curated Properties for
            <span className="gradient-text block mt-2">Discerning Investors</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium Greek properties, each offering
            exceptional investment potential and Golden Visa eligibility.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search properties or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-aegean-500 focus:ring-2 focus:ring-aegean-100 transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant={showFilters ? "default" : "outline"}
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>

              <div className={cn(
                "flex flex-wrap gap-2",
                showFilters ? "block" : "hidden lg:flex"
              )}>
                {[
                  { value: 'all', label: 'All Properties' },
                  { value: 'villa', label: 'Villas' },
                  { value: 'apartment', label: 'Apartments' },
                  { value: 'commercial', label: 'Commercial' }
                ].map((filter) => (
                  <Button
                    key={filter.value}
                    variant={selectedFilter === filter.value ? "default" : "outline"}
                    onClick={() => setSelectedFilter(filter.value as 'all' | 'villa' | 'apartment' | 'commercial')}
                    size="sm"
                  >
                    {filter.label}
                  </Button>
                ))}

                <div className="w-px h-8 bg-gray-200 mx-2" />

                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'low', label: 'Under €300K' },
                  { value: 'mid', label: '€300K - €600K' },
                  { value: 'high', label: 'Above €600K' }
                ].map((price) => (
                  <Button
                    key={price.value}
                    variant={priceRange === price.value ? "default" : "outline"}
                    onClick={() => setPriceRange(price.value as 'all' | 'low' | 'mid' | 'high')}
                    size="sm"
                  >
                    {price.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={itemVariants}
                layout
                className="property-card group"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <Image
                    src={getImageUrl(property.image, 800, 600)}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {property.featured && (
                      <span className="px-3 py-1 bg-golden-500 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                    {property.goldenVisa && (
                      <span className="px-3 py-1 bg-olive-500 text-white text-xs font-medium rounded-full">
                        Golden Visa
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="glass"
                      onClick={() => handleLike(property.id)}
                      className="w-10 h-10"
                    >
                      <Heart
                        className={cn(
                          "w-4 h-4 transition-colors",
                          likedProperties.has(property.id) ? "fill-red-500 text-red-500" : "text-white"
                        )}
                      />
                    </Button>
                    <Button
                      size="icon"
                      variant="glass"
                      className="w-10 h-10"
                    >
                      <Eye className="w-4 h-4 text-white" />
                    </Button>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4">
                    <div className="glass rounded-lg px-3 py-2">
                      <span className="text-white font-bold text-lg">
                        {formatPrice(property.price)}
                      </span>
                    </div>
                  </div>

                  {/* ROI Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-olive-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {property.roi}% ROI
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-aegean-600 transition-colors">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-golden-400 mr-1" />
                      <span className="text-sm font-medium text-gray-600">
                        {property.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  {/* Property Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.bedrooms} beds
                      </div>
                    )}
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      {property.size}m²
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {property.views} views
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    className="w-full group"
                    variant="outline"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Home className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No properties found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          </motion.div>
        )}

        {/* View More CTA */}
        {filteredProperties.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button size="lg" variant="outline" className="group">
              View All Properties
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-gray-500 text-sm mt-4">
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default PropertyShowcase