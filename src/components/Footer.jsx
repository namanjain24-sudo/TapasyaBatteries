import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock, Truck, Shield, Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    // { name: "Products", href: "#" },
    // { name: "Gallery", href: "#" },
    // { name: "Testimonials", href: "#" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#" }
  ];

  const contactInfo = [
    { icon: Mail, text: "tapasyabatteries@gmail.com", href: "mailto:tapasyabatteries@gmail.com" },
    { icon: Phone, text: "+91 9311144080, +91 9810244080", href: "tel:+919311144080" },
    { icon: MapPin, text: "E20/205, Pocket E 20, Sector 3, Sector 3E, Rohini, Delhi, 110085", href: "https://www.google.com/maps/dir//E20%2F205,+Pocket+E+20,+Sector+3,+Sector+3E,+Rohini,+Delhi,+110085/@28.6995398,77.0219021,25315m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390d034c87b64d9b:0xb0a36e8f4183175f!2m2!1d77.1043035!2d28.6995648?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" },
    { icon: Clock, text: "Tue-Sun: 10:00 AM - 7:00 PM, Mon: 10:00 AM - 2:00 PM", href: "#" }
  ];

  const companyDetails = [
    { icon: Award, title: "25+ Years Experience", description: "Trusted by thousands of customers" },
    { icon: Shield, title: "Genuine Products", description: "dealer of leading brands" },
    { icon: Truck, title: "Free Delivery", description: "Within Delhi NCR for orders above ₹5,000" }
  ];

//   const socialLinks = [
//     { icon: Facebook, href: "#", label: "Facebook" },
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Instagram, href: "#", label: "Instagram" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" }
//   ];

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="/image copy 8.png" 
                  alt="Tapasya Enterprises Logo" 
                  className="w-35 h-30 object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for comprehensive power backup solutions. 
              Authorized dealer of India's most trusted power solution brands since 1998.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Why Choose Us</h3>
            <div className="space-y-4">
              {companyDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <detail.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">{detail.title}</h4>
                    <p className="text-gray-400 text-xs mt-1">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm group"
                >
                  <contact.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
            
            {/* Small Map */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Find Us</h3>
              <a 
                href="https://www.google.com/maps/place/Tapasya+Enterprises/@28.6994129,77.1044111,915m/data=!3m1!1e3!4m6!3m5!1s0x390d034c87b64d9b:0xb0a36e8f4183175f!8m2!3d28.6995648!4d77.1043035!16s%2Fg%2F11vm9mb0g3?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-32 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-colors duration-300 bg-gray-800"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-white mx-auto mb-2" />
                    <p className="text-white font-medium">Tapasya Enterprises</p>
                    <p className="text-blue-200 text-sm mt-1">E20/205, Pocket E 20</p>
                    <div className="mt-3 inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded text-xs">
                      <MapPin className="w-3 h-3" />
                      Get Directions
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tapasya Enterprises. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;