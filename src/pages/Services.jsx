import React from 'react';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero Section */}
      <section className="bg-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive power backup solutions for every need
            </p>
          </div>
        </div>
      </section>

      {/* Simple Content Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Power Backup Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of services designed to meet all your power backup requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Battery Solutions</h3>
              <p className="text-gray-600 mb-4">High-quality batteries for all your power needs.</p>
              <ul className="space-y-2 text-gray-700">
                <li>Inverter Batteries</li>
                <li>UPS Batteries</li>
                <li>Solar Batteries</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inverter Systems</h3>
              <p className="text-gray-600 mb-4">Complete inverter solutions for home and business.</p>
              <ul className="space-y-2 text-gray-700">
                <li>Home Inverters</li>
                <li>Commercial Inverters</li>
                <li>Hybrid Systems</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Solar Solutions</h3>
              <p className="text-gray-600 mb-4">End-to-end solar power systems.</p>
              <ul className="space-y-2 text-gray-700">
                <li>Solar Panels</li>
                <li>Solar Inverters</li>
                <li>Solar Batteries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;