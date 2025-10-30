import { Zap, MapPin, Award, CheckCircle2 } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: "25+ Years Legacy",
      description: "Trusted leader in power solutions since 1998",
    },
    {
      icon: Zap,
      title: "Complete Solutions",
      description: "Batteries, inverters, UPS systems & more",
    },
    {
      icon: MapPin,
      title: "Delhi Based",
      description: "Serving thousands of homes and businesses",
    },
  ]

  const values = ["Quality & Reliability", "Transparency & Trust", "Customer Satisfaction", "Expert Support"]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 md:w-72 h-40 md:h-72 bg-blue-50 rounded-full blur-3xl opacity-20 md:opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-slate-100 rounded-full blur-3xl opacity-15 md:opacity-20 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block mb-2 md:mb-3">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Our Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 text-balance leading-tight">
            Powering Trust Since 1998
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
            Two decades of excellence in delivering reliable power solutions to thousands of satisfied customers across
            Delhi
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Left Column - Main Story */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-light">
                Established in 1998, Tapasya Enterprises has been a trusted leader in power solutions for over two
                decades. Located at 
                <a 
                  href="https://www.google.com/maps/dir//E20%2F205,+Pocket+E+20,+Sector+3,+Sector+3E,+Rohini,+Delhi,+110085/@28.6995398,77.0219021,25315m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390d034c87b64d9b:0xb0a36e8f4183175f!2m2!1d77.1043035!2d28.6995648?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300 underline"
                >
                  E-20/205, Ground Floor, Near Mother Dairy, Rohini Sector 3, Delhi – 110085
                </a>, we have
                built a strong reputation for delivering reliable products, exceptional service, and complete customer
                satisfaction.
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-light">
                Over the years, we have proudly served thousands of homes and businesses, offering a wide range of
                batteries, inverters, UPS systems, and power backup solutions from all leading brands. Our long-standing
                commitment to quality, transparency, and customer trust has made us one of the most preferred <strong>car battery dealers in Delhi</strong> and providers of <strong>automotive battery solutions</strong>.
              </p>
            </div>

            <div className="pt-4 md:pt-6 border-t border-slate-200">
              <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3 md:mb-4">
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-slate-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 md:pt-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-3 md:p-5 border border-blue-100">
              <p className="text-sm md:text-base font-semibold text-slate-900 leading-relaxed">
                "At Tapasya Enterprises, we believe that <span className="text-blue-600">power means confidence</span> —
                and we're here to ensure you never run out of either."
              </p>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group p-3 md:p-4 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-8 md:h-10 w-8 md:w-10 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
                        <Icon className="h-4 md:h-5 w-4 md:w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs md:text-sm font-semibold text-slate-900 mb-0.5 md:mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 pt-8 md:pt-12 border-t border-slate-200">
          <div className="group p-4 md:p-6 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-lg transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-blue-100">25+</div>
            <p className="text-blue-100 font-medium text-xs md:text-sm">Years of Excellence</p>
          </div>
          <div className="group p-4 md:p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white hover:shadow-lg transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-slate-100">5000+</div>
            <p className="text-slate-100 font-medium text-xs md:text-sm">Happy Customers</p>
          </div>
          <div className="group p-4 md:p-6 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 text-white hover:shadow-lg transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-slate-100">100%</div>
            <p className="text-slate-100 font-medium text-xs md:text-sm">Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}