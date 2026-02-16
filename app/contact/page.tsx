'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Send, Sparkles, MessageCircle } from 'lucide-react'
import Footer from '@/components/Footer'  
import Navbar from '@/components/Navbar'


export default function Contact() {
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('Thank you! We will get back to you soon. 🚀')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@codeploy.com',
      link: 'mailto:hello@codeploy.com',
      color: 'text-cyan-400',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'text-pink-400',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
      color: 'text-emerald-400',
    },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: 'in', color: 'hover:bg-blue-500' },
    { name: 'Twitter', icon: '𝕏', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: 'IG', color: 'hover:bg-pink-500' },
    { name: 'GitHub', icon: 'GH', color: 'hover:bg-purple-500' },
  ]

  return (
    <div className="min-h-screen bg-dark">   
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Same as Portfolio */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 animate-slide-up">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight animate-slide-up delay-100">
              Let's Create Something
              <br />
              <span className="text-gradient">Amazing Together</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed animate-slide-up delay-200 font-light">
              Ready to transform your ideas into reality? Let's start a conversation and bring your vision to life
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up delay-300">
              {[
                { value: '24/7', label: 'Support Available' },
                { value: '<24h', label: 'Response Time' },
                { value: '100%', label: 'Satisfaction Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-dark overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 dot-pattern opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-3 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 glass-primary border border-primary/20 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-3 text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 glass-primary border border-primary/20 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-3 text-sm">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 glass-primary border border-primary/20 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-3 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-5 py-4 glass-primary border border-primary/20 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-gradient-to-r from-primary to-accent text-dark font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start space-x-4 group hover:bg-white/5 p-4 -m-4 rounded-2xl transition-all"
                      >
                        <div className="flex-shrink-0 w-12 h-12 glass-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-white/50 text-sm mb-1">{info.title}</div>
                          <div className="text-white font-medium text-lg">{info.value}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-display font-bold text-white mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex-1 h-14 glass rounded-xl flex items-center justify-center text-white font-bold text-lg ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="glass-primary rounded-3xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-primary animate-pulse-glow" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Quick Response</h4>
                    <p className="text-white/60 text-sm font-light">
                      We typically respond within 24 hours. For urgent inquiries, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}