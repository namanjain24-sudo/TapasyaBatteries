"use client"

import { useState } from "react"

export function BrandsSection() {
  const [, setHoveredIndex] = useState(null)

  const brands = [
    {
      name: "Luminous",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-px2PnJCE8vGSaCY7tXtHlIhAb9jC4U.png",
    },
    {
      name: "Su-Kam",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zsFg8wJmj6ioN5ugdHaFo70q1pF78A.png",
    },
    {
      name: "Exide",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-na1Due0dSrDnEcLHyQRdHe94yXy9Kc.png",
    },
    {
      name: "Microtek",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ksI1tVAt7jVrnK9XU568qqil8ZUN1o.png",
    },
    {
      name: "Amaron",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ikgsw7x4NZIZhntf3ahKXcONFE98mD.png",
    },
    { name: "Okaya", logo: "/image copy 2.png" },
  ]

  return (
    <section id="brands" className="py-8 md:py-12 lg:py-16 bg-blue-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-800 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 lg:mb-10 text-center">
          <p className="text-sm md:text-base font-light text-blue-200 tracking-wide uppercase mb-2 md:mb-3">
            Our Partners
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-3 md:mb-4">
            Trusted Brands We Represent
          </h2>
          <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Authorized dealer of India's most trusted power solution brands
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full max-w-7xl mx-auto">
          {/* Full rows */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {brands.slice(0, 4).map((brand, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="relative h-full p-6 md:p-8 rounded-lg bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="h-32 md:h-40 lg:h-48 w-full rounded-md bg-gray-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gray-100 transition-colors duration-300 p-4">
                      <img
                        src={brand.logo || "/placeholder.svg"}
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <h3 className="text-sm md:text-base font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {brand.name}
                    </h3>
                  </div>

                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Last row - centered if less than 4 items */}
          {brands.length > 4 && (
            <div className="flex justify-center mt-3 md:mt-4 lg:mt-5">
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-2xl">
                {brands.slice(4).map((brand, index) => (
                  <div
                    key={index + 4}
                    onMouseEnter={() => setHoveredIndex(index + 4)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative"
                  >
                    <div className="relative h-full p-6 md:p-8 rounded-lg bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="h-32 md:h-40 lg:h-48 w-full rounded-md bg-gray-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gray-100 transition-colors duration-300 p-4">
                          <img
                            src={brand.logo || "/placeholder.svg"}
                            alt={brand.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <h3 className="text-sm md:text-base font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                          {brand.name}
                        </h3>
                      </div>

                      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Battery Solutions Info */}
        <div className="mt-10 md:mt-12 lg:mt-16 bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Comprehensive Battery Solutions</h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto text-lg">
            We offer batteries for all your power needs - from home backup systems to commercial applications and vehicle requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Home Use</h4>
              <p className="text-gray-600">Inverter batteries, UPS systems, and solar solutions for residential power backup</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Vehicle Batteries</h4>
              <p className="text-gray-600">Car, bike, e-rickshaw, and commercial vehicle batteries from leading brands</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Commercial Use</h4>
              <p className="text-gray-600">Industrial batteries, data center UPS, and large-scale power solutions</p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 md:mt-12 lg:mt-16 pt-6 md:pt-8 lg:pt-10 border-t border-blue-800">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-blue-100 font-light leading-relaxed">
              All products come with{" "}
              <span className="font-medium text-white">manufacturer warranty</span> and comprehensive{" "}
              <span className="font-medium text-white">after-sales support</span>. Serving thousands of homes and
              businesses with trusted solutions since 1998.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
