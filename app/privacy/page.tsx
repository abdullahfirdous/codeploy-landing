'use client'

import { useState, useEffect } from 'react'
import { Shield, Lock, Eye, UserCheck, Database, Bell, ChevronDown, ChevronUp, Mail, Phone, MapPin, Sparkles, CheckCircle2, Download, Share2, Globe, FileText, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState<number | null>(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index)
  }

  const sections = [
    {
      id: 1,
      icon: Shield,
      title: 'Introduction',
      color: 'text-blue-400',
      iconBg: 'bg-blue-500/10',
      content: (
        <>
          <p className="text-white/70 leading-relaxed mb-4">
            Welcome to <span className="text-white font-semibold">CodePloy</span>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
          <p className="text-white/70 leading-relaxed">
            This policy applies to all information collected through our website, mobile applications, and any related services, sales, marketing, or events (we refer to them collectively as the <span className="text-primary font-medium">"Services"</span>).
          </p>
        </>
      )
    },
    {
      id: 2,
      icon: Database,
      title: 'Information We Collect',
      color: 'text-purple-400',
      iconBg: 'bg-purple-500/10',
      content: (
        <>
          <p className="text-white/70 leading-relaxed mb-6">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <div className="space-y-3">
            {[
              { title: 'Identity Data', desc: 'First name, last name, username or similar identifier' },
              { title: 'Contact Data', desc: 'Email address, telephone number, and physical address' },
              { title: 'Technical Data', desc: 'IP address, browser type, time zone, location' },
              { title: 'Usage Data', desc: 'How you use our website, products and services' },
              { title: 'Marketing Data', desc: 'Your preferences in receiving marketing from us' },
              { title: 'Profile Data', desc: 'Username, purchases, interests, preferences, feedback' },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all">
                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 3,
      icon: Eye,
      title: 'How We Use Your Information',
      color: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10',
      content: (
        <>
          <p className="text-white/70 leading-relaxed mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <div className="space-y-3">
            {[
              'Provide and maintain our services',
              'Notify you about changes to our services',
              'Provide customer support and respond to inquiries',
              'Monitor and analyze usage patterns to improve our services',
              'Detect, prevent and address technical issues and fraud',
              'Send you marketing and promotional communications (with your consent)',
              'Comply with legal obligations and protect our rights',
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 4,
      icon: Lock,
      title: 'Data Security',
      color: 'text-amber-400',
      iconBg: 'bg-amber-500/10',
      content: (
        <>
          <p className="text-white/70 leading-relaxed mb-6">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>
          
          <div className="space-y-4">
            <div className="glass rounded-xl p-5">
              <h4 className="text-white font-bold mb-3 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span>Security Measures</span>
              </h4>
              <ul className="space-y-2">
                {[
                  'End-to-end encryption for data transmission',
                  'Industry-standard secure servers',
                  'Limited access to authorized personnel only',
                  'Regular security audits and penetration testing',
                  'Two-factor authentication (2FA) for sensitive operations',
                  'Automated threat detection and response systems',
                  'Data backup and disaster recovery procedures',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-white/70 text-sm">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      id: 5,
      icon: UserCheck,
      title: 'Your Rights',
      color: 'text-rose-400',
      iconBg: 'bg-rose-500/10',
      content: (
        <>
          <p className="text-white/70 leading-relaxed mb-6">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data:
          </p>
          <div className="space-y-3">
            {[
              { title: 'Right to Access', desc: 'Request copies of your personal data' },
              { title: 'Right to Rectification', desc: 'Request correction of inaccurate data' },
              { title: 'Right to Erasure', desc: 'Request deletion of your personal data' },
              { title: 'Right to Object', desc: 'Object to processing of your personal data' },
              { title: 'Right to Restriction', desc: 'Request restriction of processing' },
              { title: 'Right to Data Portability', desc: 'Request transfer of your data' },
            ].map((right, i) => (
              <div key={i} className="flex items-start space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all">
                <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">{right.title}</h4>
                  <p className="text-white/60 text-sm">{right.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 glass rounded-xl p-5 border-l-4 border-rose-400">
            <h4 className="text-white font-bold mb-3">How to Exercise Your Rights</h4>
            <p className="text-white/70 text-sm mb-4">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@codeploy.com" className="text-primary hover:text-accent transition-colors font-semibold">privacy@codeploy.com</a>
            </p>
            <p className="text-white/60 text-xs">
              We will respond to your request within 30 days as required by applicable law.
            </p>
          </div>
        </>
      )
    },
    {
      id: 6,
      icon: Bell,
      title: 'Updates to This Policy',
      color: 'text-indigo-400',
      iconBg: 'bg-indigo-500/10',
      content: (
        <>
          <p className="text-white/70 leading-relaxed mb-4">
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
          </p>
          <p className="text-white/70 leading-relaxed mb-6">
            We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>
          
          <div className="glass rounded-xl p-5">
            <h4 className="text-white font-bold mb-4">How We'll Notify You</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">Email Notifications</p>
                  <p className="text-white/60 text-sm">We'll email you about significant policy changes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Bell className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">In-App Alerts</p>
                  <p className="text-white/60 text-sm">See notifications when you log in</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
  ]

  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
            transform: `translate(-50%, -50%) scale(${1 + scrollY / 5000})`
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            bottom: `${mousePosition.y / 15}px`,
            right: `${mousePosition.x / 15}px`,
            transform: `translate(50%, 50%) scale(${1 + scrollY / 6000})`
          }}
        ></div>
      </div>

      <Navbar />

      {/* Hero Section */}
<section className="relative bg-dark overflow-hidden pt-32 pb-24 border-b border-white/5">
  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent"></div>
  <div className="absolute inset-0 grid-pattern opacity-20"></div>
  
  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>
  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-float"></div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      {/* Badge */}
      <div className="inline-flex items-center space-x-3 glass-primary px-5 py-2.5 rounded-full mb-8 animate-fade-in-up border border-primary/20">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <span className="text-white/80 text-sm font-medium">Legal & Compliance</span>
        <div className="h-3 w-px bg-primary/30"></div>
        <span className="text-white/60 text-xs">Updated {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
      </div>
      
      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <span className="text-white">Privacy </span>
        <span className="text-gradient glow-primary">Policy</span>
      </h1>
      
      {/* Underline */}
      <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8 animate-fade-in-up shadow-lg shadow-primary/50" style={{ animationDelay: '0.2s' }}></div>
      
      {/* Description */}
      <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        We take your privacy seriously. This policy outlines how CodePloy collects, uses, stores, and protects your personal information in compliance with global data protection regulations.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-dark hover:shadow-lg hover:shadow-primary/50 px-7 py-3.5 rounded-xl font-semibold transition-all hover:scale-105">
          <Download className="w-4.5 h-4.5" />
          <span>Download PDF</span>
        </button>
        
        <button className="inline-flex items-center space-x-2 glass-primary hover:border-primary/50 px-7 py-3.5 rounded-xl font-medium transition-all group border border-white/10">
          <Mail className="w-4.5 h-4.5 text-white/70 group-hover:text-primary transition-colors" />
          <span className="text-white/70 group-hover:text-white transition-colors">Contact Legal</span>
        </button>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center space-x-2 text-sm">
          <Globe className="w-4 h-4 text-primary/60" />
          <span className="text-white/50">Applies globally</span>
        </div>
        <div className="h-4 w-px bg-primary/20"></div>
        <div className="flex items-center space-x-2 text-sm">
          <FileText className="w-4 h-4 text-primary/60" />
          <span className="text-white/50">~10 min read</span>
        </div>
        <div className="h-4 w-px bg-primary/20"></div>
        <div className="flex items-center space-x-2 text-sm">
          <Users className="w-4 h-4 text-primary/60" />
          <span className="text-white/50">All users</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        {[
          { 
            icon: Lock, 
            title: 'End-to-End Encryption', 
            value: '256-bit AES',
            desc: 'Military-grade security',
            color: 'blue'
          },
          { 
            icon: Shield, 
            title: 'GDPR Compliant', 
            value: '100%',
            desc: 'EU data protection',
            color: 'emerald'
          },
          { 
            icon: Eye, 
            title: 'Transparency', 
            value: 'Always',
            desc: 'Clear data practices',
            color: 'purple'
          },
          { 
            icon: UserCheck, 
            title: 'Your Rights', 
            value: 'Protected',
            desc: 'Full data control',
            color: 'amber'
          },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div 
              key={i} 
              className="group relative glass rounded-2xl p-6 hover:glass-primary hover-lift transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/5 to-${stat.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative space-y-3">
                <div className={`w-12 h-12 bg-${stat.color}-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-white/70 mb-1">{stat.title}</div>
                  <div className="text-xs text-white/40">{stat.desc}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
</section>

      {/* Main Content */}
      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
        
        <div className="relative space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isExpanded = expandedSection === section.id

            return (
              <div
                key={section.id}
                className="glass rounded-3xl overflow-hidden transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 ${section.iconBg} rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isExpanded ? 'bg-primary/20 scale-110' : 'group-hover:scale-110'
                    }`}>
                      <Icon className={`w-7 h-7 ${section.color} ${isExpanded ? 'scale-110' : ''} transition-all`} />
                    </div>

                    <div>
                      <h2 className={`text-xl md:text-2xl font-display font-bold transition-all ${
                        isExpanded ? 'text-gradient' : 'text-white group-hover:text-gradient'
                      }`}>
                        {section.title}
                      </h2>
                      {!isExpanded && (
                        <p className="text-white/50 text-sm mt-1">Click to expand</p>
                      )}
                    </div>
                  </div>

                  <div className={`w-11 h-11 glass rounded-full flex items-center justify-center transition-all duration-300 ${
                    isExpanded ? 'bg-primary rotate-180 scale-110' : 'group-hover:scale-110'
                  }`}>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-dark" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  </div>
                  <div className="px-8 py-8">{section.content}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 glass-primary rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Questions? We're Here to Help</h2>
            </div>
            
            <p className="text-white/70 leading-relaxed mb-10 text-lg max-w-2xl">
              If you have any questions about this Privacy Policy or want to exercise your rights, our team is ready to assist you.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@codeploy.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
              ].map((contact, i) => {
                const Icon = contact.icon
                return (
                  <div key={i} className="glass rounded-2xl p-6 hover-lift transition-all">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <div className="text-white/50 text-sm mb-1">{contact.label}</div>
                    <div className="text-white font-semibold">{contact.value}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .hover-lift {
          transition: transform 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  )
}