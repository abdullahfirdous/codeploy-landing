'use client'

import { Target, Rocket, Users, Award, TrendingUp, Shield } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Award, value: '250+', label: 'Projects Delivered', color: 'text-cyan-400' },
    { icon: Users, value: '50+', label: 'Expert Team', color: 'text-pink-400' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction', color: 'text-emerald-400' },
    { icon: Shield, value: '5+', label: 'Years Experience', color: 'text-amber-400' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every pixel, every line of code crafted with meticulous attention to detail and quality.',
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Pushing boundaries with cutting-edge technologies and creative problem-solving approaches.',
      gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: Users,
      title: 'True Partnership',
      description: 'Your success is our mission. We work as an integrated extension of your team.',
      gradient: 'from-orange-500/10 to-amber-500/10',
    },
  ]

  return (
    <section id="about" className="relative py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass rounded-3xl p-8 text-center hover-lift hover:glass-primary transition-all duration-500 group"
              >
                <div className="relative inline-block mb-4">
                  <Icon className={`w-10 h-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className={`absolute inset-0 blur-xl ${stat.color} opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                </div>
                <div className="text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8">
              <span className="text-primary text-sm font-semibold tracking-wide">ABOUT US</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Deploying Innovation,
              <br />
              <span className="text-gradient">One Project at a Time</span>
            </h2>

            <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
              <p>
                <span className="text-white font-medium">CodePloy</span> is a forward-thinking tech company dedicated to transforming businesses through innovative digital solutions. We don't just build products—we craft experiences that drive real business outcomes.
              </p>
              <p>
                Our expertise spans the entire digital spectrum: from stunning web and mobile applications to comprehensive digital strategies, UI/UX design, automation, and robust backend services. We combine technical excellence with creative vision.
              </p>
              <p>
                With a focus on <span className="text-primary">innovation</span> and <span className="text-primary">excellence</span>, we empower businesses to thrive in the ever-evolving digital landscape.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center space-x-3 px-8 py-4 glass-primary rounded-2xl hover:bg-primary/20 transition-all duration-300 group"
              >
                <span className="text-white font-semibold">Let's Build Together</span>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-dark font-bold">→</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className={`glass rounded-3xl p-8 hover-lift hover:glass-primary transition-all duration-500 group cursor-pointer`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 glass-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                          {value.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed font-light">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}