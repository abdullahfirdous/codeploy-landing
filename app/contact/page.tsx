'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Sparkles, MessageCircle, Zap, Rocket, Star, Headphones } from 'lucide-react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
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
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'text-pink-400',
      bg: 'bg-pink-500/10',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
    },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: 'in', color: 'hover:bg-blue-500' },
    { name: 'Twitter', icon: '𝕏', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: 'IG', color: 'hover:bg-pink-500' },
    { name: 'GitHub', icon: 'GH', color: 'hover:bg-purple-500' },
  ]

  const stats = [
  { value: '< 24h', label: 'Response Time', desc: 'Lightning fast replies', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { value: '250+', label: 'Projects Done', desc: 'Delivered worldwide', icon: Rocket, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { value: '98%', label: 'Satisfaction', desc: 'Happy clients always', icon: Star, color: 'text-primary', bg: 'bg-primary/10' },
  { value: '24/7', label: 'Support', desc: 'Always here for you', icon: Headphones, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
]

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-mesh opacity-40"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-primary px-6 py-3 rounded-full mb-8 animate-slide-up">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">GET IN TOUCH</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up delay-100">
            Let's Build Something
            <br />
            <span className="text-gradient glow-primary">Amazing Together</span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light animate-slide-up delay-200">
            Have a project in mind? We'd love to hear about it.
            <span className="text-white font-medium"> Drop us a message</span> and let's make it happen.
          </p>

          {/* Stats Grid -  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto animate-slide-up delay-300">
  {stats.map((stat, i) => {
    const Icon = stat.icon
    return (
      <div
        key={i}
        className="group relative glass rounded-2xl p-6 hover:glass-primary hover-lift transition-all overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

        <div className="relative space-y-3">
          <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm font-semibold text-white/70 mb-1">{stat.label}</div>
            <div className="text-xs text-white/40">{stat.desc}</div>
          </div>
        </div>
      </div>
    )
  })}
</div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

                {/* Form Header */}
                <div className="relative mb-8">
                  <h2 className="text-3xl font-display font-bold text-white mb-2">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-white/50">Fill in the details and we'll get back to you ASAP</p>
                </div>

                <form onSubmit={handleSubmit} className="relative space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/10 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/10 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">
                      Phone Number <span className="text-white/30">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/10 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/10 transition-all resize-none"
                      placeholder="Tell us about your project, goals, timeline..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-5 bg-gradient-to-r from-primary via-accent to-primary text-dark font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative">
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </span>
                    {!isSubmitting && (
                      <Send className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                    )}
                    {isSubmitting && (
                      <div className="w-5 h-5 border-2 border-dark/50 border-t-dark rounded-full animate-spin relative"></div>
                    )}
                  </button>

                  <p className="text-white/30 text-xs text-center">
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-primary hover:text-accent transition-colors">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="/terms" className="text-primary hover:text-accent transition-colors">Terms of Service</a>
                  </p>
                </form>
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact Cards */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Contact Information</span>
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-2xl transition-all cursor-pointer"
                      >
                        <div className={`flex-shrink-0 w-14 h-14 ${info.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-7 h-7 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-white/40 text-xs mb-1 font-medium uppercase tracking-wider">{info.title}</div>
                          <div className="text-white font-semibold text-lg group-hover:text-gradient transition-all">{info.value}</div>
                        </div>
                      </div>
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

              {/* Quick Response Card */}
              <div className="glass-primary rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <div className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-primary animate-pulse-glow" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Quick Response</h4>
                      <p className="text-white/60 text-sm font-light leading-relaxed">
                        We typically respond within 24 hours. For urgent inquiries, please call us directly.
                      </p>
                    </div>
                  </div>

                  {/* Response Time Bar */}
                  <div className="mt-6">
                    <div className="flex justify-between text-xs text-white/50 mb-2">
                      <span>Average Response Time</span>
                      <span className="text-primary font-semibold">~2 Hours</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}