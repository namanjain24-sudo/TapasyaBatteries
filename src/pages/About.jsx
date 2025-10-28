import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  const coreValues = [
    {
      title: "Quality First",
      description: "We only provide genuine products from trusted brands with comprehensive warranty support.",
      icon: "🏆"
    },
    {
      title: "Customer Centric",
      description: "Your satisfaction is our priority with 24/7 customer support and after-sales service.",
      icon: "👥"
    },
    {
      title: "Technical Expertise",
      description: "25+ years of experience with certified technicians for installation and maintenance.",
      icon: "⚙️"
    },
    {
      title: "Competitive Pricing",
      description: "Direct partnerships with manufacturers ensure the best prices without compromising quality.",
      icon: "💰"
    }
  ];

  const milestones = [
    { year: "1998", event: "Company founded as a small battery retail shop in Delhi" },
    { year: "2005", event: "Expanded to include inverter and UPS systems and inverters and E-rickshaw batteries" },
    { year: "2010", event: "Became  dealer for Luminous, Exide, Microtek and many more..." },
    { year: "2015", event: "Extended services to commercial and industrial clients" },
    { year: "2022", event: "Partnered with 7+ leading power solution brands" },
    { year: "2024", event: "Serving over 10,000 satisfied customers across Delhi NCR" }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Tapasya Enterprises
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Your trusted partner for comprehensive power backup solutions since 1998
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              For over two decades, we've been empowering homes and businesses across Delhi NCR 
              with reliable power backup solutions from India's most trusted brands.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                What started as a small battery retail shop in 1998 has evolved into Delhi NCR's 
                most trusted name for comprehensive power backup solutions. Our journey reflects 
                our unwavering commitment to quality, service, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've built strong partnerships with leading manufacturers like 
                Luminous, Microtek, Exide, and Su-Kam, positioning ourselves as authorized dealers 
                for their complete product range.
              </p>
              <p className="text-lg text-gray-700">
                Today, with over 10,000 satisfied customers and 25+ years of experience, 
                we continue to lead the industry with innovative solutions, competitive pricing, 
                and unmatched after-sales support. Located at 
                <a 
                  href="https://www.google.com/maps/dir//E20%2F205,+Pocket+E+20,+Sector+3,+Sector+3E,+Rohini,+Delhi,+110085/@28.6995398,77.0219021,25315m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390d034c87b64d9b:0xb0a36e8f4183175f!2m2!1d77.1043035!2d28.6995648?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300 underline"
                >
                  E20/205, Pocket E 20, Sector 3, Sector 3E, Rohini, Delhi, 110085
                </a>.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl w-130 h-90 flex items-center justify-center">
              <img src="public/image copy 7.png" alt="Company Journey" className="w-90% h-90% object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, ensuring we deliver exceptional value 
              to our customers every single day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of our growth and achievements over the past two decades
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-3">
                        {milestone.year}
                      </span>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10">
                      {index + 1}
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Reliable Power Backup?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Tapasya Enterprises for their 
            power backup needs. Get in touch with us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
            >
              Contact Us
            </a>
            <a 
              href="/#brands" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;