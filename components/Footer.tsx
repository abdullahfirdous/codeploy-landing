'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowUp, Linkedin, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'How We Work', href: '#process' },
      { name: 'Contact Us', href: '#contact' },
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/codeploy', 
      icon: Linkedin,
      gradient: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/codeploy', 
      icon: Twitter,
      gradient: 'from-sky-400 to-blue-500',
      hoverColor: 'hover:text-sky-400'
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/codeploy', 
      icon: Instagram,
      gradient: 'from-pink-500 via-purple-500 to-orange-500',
      hoverColor: 'hover:text-pink-400'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/codeploy', 
      icon: Github,
      gradient: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:text-gray-300'
    },
  ]

  return (
    <footer className="relative bg-dark border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Gradient Orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
  <img 
    src="/logo.png" 
    alt="CodePloy" 
    className="h-10 w-auto"
  />
  <span className="text-white font-display text-2xl font-bold">
    Code<span className="text-gradient">Ploy</span>
  </span>
</Link>
            
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Transforming ideas into stunning digital reality. We empower businesses to thrive in the modern digital landscape through innovation and excellence.
            </p>

            {/* Social Links - Pro Version */}
            <div className="space-y-4">
              <h4 className="text-white/50 text-xs uppercase tracking-wider font-semibold">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-12 h-12 glass rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all overflow-hidden"
                      title={social.name}
                      aria-label={social.name}
                    >
                      {/* Hover Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      {/* Icon */}
                      <Icon className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}></div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-6 text-lg">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-6 text-lg">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
<div className="border-t border-white/5 py-8">
  <div className="flex justify-center items-center">
    <p className="text-white/40 text-sm">
      © {new Date().getFullYear()} CodePloy. All rights reserved.
    </p>
  </div>
</div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/50 hover:scale-110 transition-all duration-300 z-50 group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-dark group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  )
}

// {/* Social Links - Pro Version */}
//             <div className="space-y-4">
//               <h4 className="text-white/50 text-xs uppercase tracking-wider font-semibold">
//                 Follow Us
//               </h4>
//               <div className="flex items-center gap-3">
//                 {socialLinks.map((social) => {
//                   const Icon = social.icon
//                   return (
//                     <a
//                       key={social.name}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group relative w-12 h-12 glass rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all overflow-hidden"
//                       title={social.name}
//                       aria-label={social.name}
//                     >
//                       {/* Hover Background Gradient */}
//                       <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
//                       {/* Icon */}
//                       <Icon className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                      
//                       {/* Glow Effect */}
//                       <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}></div>
//                     </a>
//                   )
//                 })}
//               </div>
//             </div>