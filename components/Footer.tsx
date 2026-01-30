'use client'

import Link from 'next/link'
import { Sparkles, ArrowUpRight } from 'lucide-react'

export default function Footer() {
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
      { name: 'Cookie Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'GitHub', href: '#' },
  ]

  return (
    <footer className="relative bg-dark border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-dark" />
                </div>
                <div className="absolute inset-0 blur-xl bg-primary/50 group-hover:bg-primary/70 transition-all"></div>
              </div>
              <span className="text-white font-display text-2xl font-bold">
                Code<span className="text-gradient">Ploy</span>
              </span>
            </Link>
            
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm font-light">
              Transforming ideas into stunning digital reality. We empower businesses to thrive in the modern digital landscape through innovation and excellence.
            </p>

            {/* Newsletter */}
            <div className="glass rounded-2xl p-4 max-w-sm">
              <p className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 glass-primary border border-primary/20 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-primary transition-all"
                />
                <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-dark font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} CodePloy. All rights reserved. Made with ❤️ and ☕
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all text-xs font-bold"
                title={social.name}
              >
                {social.name.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}