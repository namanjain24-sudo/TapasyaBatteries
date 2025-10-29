import React, { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
// import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Company Name - Mobile */}
            <a href="/" className="flex items-center gap-2 group">
              <img 
                src="/image copy 8.png" 
                alt="Tapasya Enterprises Logo" 
                className="w-40 h-30 rounded-lg object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Contact Information - Desktop (Stacked Vertically, Extreme Right) */}
            <div className="hidden md:flex flex-col items-end gap-1">
              <a 
                href="mailto:tapasyabatteries@gmail.com" 
                className="flex items-center gap-1 text-slate-700 hover:text-slate-900 text-xs transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span>tapasyabatteries@gmail.com</span>
              </a>
              <div className="flex items-center gap-1 text-slate-700 text-xs">
                <Phone className="w-3 h-3" />
                <span>9311144080, 9810244080</span>
              </div>
            </div>

            {/* Mobile Menu Button */} 
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>

          {/* Contact Information - Mobile (Below Navbar) */}
          <div className="md:hidden flex flex-col items-center py-2 border-t border-white/20">
            <a 
              href="mailto:tapasyabatteries@gmail.com" 
              className="flex items-center gap-1 text-slate-700 hover:text-slate-900 text-xs transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>tapasyabatteries@gmail.com</span>
            </a>
            <div className="flex items-center gap-1 text-slate-700 text-xs mt-1">
              <Phone className="w-3 h-3" />
              <span>9311144080, 9810244080</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-white/20">
              <div className="flex flex-col gap-3 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-slate-900 font-medium text-sm px-2 py-2 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}