"use client"

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.25) 25%, rgba(59, 130, 246, 0.25) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.25) 75%, rgba(59, 130, 246, 0.25) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.25) 25%, rgba(59, 130, 246, 0.25) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.25) 75%, rgba(59, 130, 246, 0.25) 76%, transparent 77%, transparent)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4  ">
        <div className="relative max-w-4xl mx-auto w-full">
          <div className="text-center">
            <div className="mb-4 inline-block">
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                Trusted Power Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight text-balance">
              Tapasya Enterprises{" "}
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Unlimited Reliability
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed text-balance max-w-2xl mx-auto">
              Complete power backup solutions under one roof — batteries, inverters, UPS systems, car, and e-rickshaw batteries from all leading brands.<br />
             " Power you can trust. Service you can rely on."<br />

            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a 
                href="#brands" 
                className="px-7 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Explore Our Range 
              </a>
              <a 
                href="/contact" 
                className="px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Best-in-Class After-Sales Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Built on Trust. Powered by Performance.</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 flex justify-center">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Image positioned on the extreme right */}
          <div className="absolute right-0 top-2/6 transform -translate-y-1/2 w-3/7 hidden lg:block">
            <img 
              src="/image.png" 
              alt="Power Solutions" 
              className="max-w-none h-auto scale-15 lg:scale-100 xl:scale-60"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom border image */}
      <div className="absolute -bottom-9 left-0 right-0 w-full h-auto hidden lg:block">
        <img 
          src="/image copy.png" 
          alt="Bottom Border" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}