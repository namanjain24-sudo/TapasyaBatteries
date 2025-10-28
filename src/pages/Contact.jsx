import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Phone className="w-6 h-6" /></div>,
      title: "Phone",
      details: ["+91 9311144080", "+91 9810244080"],
      highlight: "Call us anytime"
    },
    {
      icon: <div className="bg-green-100 p-3 rounded-full text-green-600"><Mail className="w-6 h-6" /></div>,
      title: "Email",
      details: ["tapasyabatteries@gmail.com"],
      highlight: "We reply within 24 hours"
    },
    {
      icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><MapPin className="w-6 h-6" /></div>,
      title: "Office",
      details: ["E20/205, Pocket E 20, Sector 3, Sector 3E, Rohini, Delhi, 110085"],
      highlight: "Visit our showroom"
    },
    {
      icon: <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Clock className="w-6 h-6" /></div>,
      title: "Working Hours",
      details: ["Tue-Sun: 10:00 AM - 7:00 PM", "Mon: 10:00 AM - 2:00 PM"],
      highlight: "Open on Mondays too"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-soft-light filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full mb-6">
              <span className="text-sm font-medium">Get in touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Let's Power Your <span className="text-blue-300">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Have questions about our products or services? Our team of power backup experts is ready to help you find 
              the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919311144080" 
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Call Us Now
              </a>
              <a 
                href="https://wa.me/919311144080" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
                <p className="text-gray-600 mb-10">We'd love to hear from you. Here's how you can reach us.</p>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-5 group">
                      <div className="transition-transform duration-300 group-hover:scale-110">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-700 mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-blue-600 font-medium mt-2">{info.highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 ${social.color} shadow-md hover:shadow-lg transform hover:-translate-y-1`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const subject = encodeURIComponent(formData.subject);
                  const body = encodeURIComponent(`Name: ${formData.name}
Phone: ${formData.phone}

Message:
${formData.message}`);
                  window.location.href = `mailto:tapasyabatteries@gmail.com?subject=${subject}&body=${body}`;
                  
                  // Reset form after submission
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                  });
                }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm hover:shadow-md"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm hover:shadow-md"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm hover:shadow-md"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm hover:shadow-md"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm hover:shadow-md"
                      placeholder="Tell us about your power backup needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Showroom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Come see our complete range of power backup solutions and speak with our experts
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="p-8 md:p-12 lg:col-span-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <a 
                        href="https://www.google.com/maps/dir//E20%2F205,+Pocket+E+20,+Sector+3,+Sector+3E,+Rohini,+Delhi,+110085/@28.6995398,77.0219021,25315m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390d034c87b64d9b:0xb0a36e8f4183175f!2m2!1d77.1043035!2d28.6995648?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 underline"
                      >
                        E20/205, Pocket E 20, Sector 3, Sector 3E, Rohini, Delhi, 110085
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Showroom Hours</h4>
                      <p className="text-gray-600">Tue-Sun: 10:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Mon: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Why Visit Us?</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>See products in person</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>Get expert advice</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>Free consultation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>Same-day installation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 min-h-96 lg:min-h-0">
                <a 
                  href="https://www.google.com/maps/place/Tapasya+Enterprises/@28.6994129,77.1044111,915m/data=!3m1!1e3!4m6!3m5!1s0x390d034c87b64d9b:0xb0a36e8f4183175f!8m2!3d28.6995648!4d77.1043035!16s%2Fg%2F11vm9mb0g3?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="text-center p-4">
                      <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Tapasya Enterprises</h3>
                      <p className="text-gray-600 mb-4 text-lg">E20/205, Pocket E 20, Sector 3, Sector 3E, Rohini, Delhi, 110085</p>
                      <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                        <MapPin className="w-6 h-6" />
                        View on Google Maps
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;