'use client'

import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechVision',
    company: 'TechVision Inc.',
    image: '👩‍💼',
    rating: 5,
    text: 'CodePloy transformed our digital presence completely. Their attention to detail and innovative approach resulted in a 300% increase in user engagement. Absolutely phenomenal work!',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CTO',
    company: 'StartupHub',
    image: '👨‍💻',
    rating: 5,
    text: 'Working with CodePloy was a game-changer. They delivered our mobile app ahead of schedule with features we didn\'t even know we needed. True partners in innovation.',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    image: '👩‍🎨',
    rating: 5,
    text: 'The UI/UX design exceeded all expectations. Our conversion rate doubled within the first month. CodePloy understands both aesthetics and functionality perfectly.',
    gradient: 'from-emerald-500/10 to-green-500/10',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Product Manager',
    company: 'InnovateCo',
    image: '👨‍💼',
    rating: 5,
    text: 'Best development team we\'ve worked with. Fast, professional, and always thinking ahead. They turned our complex requirements into an elegant solution.',
    gradient: 'from-amber-500/10 to-orange-500/10',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Operations Head',
    company: 'CloudScale',
    image: '👩‍💼',
    rating: 5,
    text: 'Their automation solutions saved us 40 hours per week. The ROI was immediate and the ongoing support is exceptional. Highly recommend!',
    gradient: 'from-rose-500/10 to-red-500/10',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Co-Founder',
    company: 'DigitalFirst',
    image: '👨‍💼',
    rating: 5,
    text: 'CodePloy doesn\'t just build products, they build partnerships. Their strategic insights helped us pivot at the right time and achieve product-market fit faster.',
    gradient: 'from-indigo-500/10 to-violet-500/10',
  },
]

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="relative py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6 animate-slide-up">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">TESTIMONIALS</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight animate-slide-up delay-100">
            Loved by <span className="text-gradient">Innovators</span>
            <br />Worldwide
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light animate-slide-up delay-200">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative glass rounded-3xl p-8 hover-lift hover:glass-primary transition-all duration-500 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="mb-6 relative">
                  <Quote className="w-10 h-10 text-primary/20 fill-primary/20" />
                  <div className="absolute -top-2 -left-2">
                    <Quote className="w-6 h-6 text-primary fill-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 leading-relaxed mb-6 font-light group-hover:text-white transition-colors">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 glass-primary rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg group-hover:text-gradient transition-all">
                      {testimonial.name}
                    </div>
                    <div className="text-white/50 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-primary text-xs font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                hoveredId === testimonial.id ? 'block' : 'hidden'
              }`}>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary blur-sm animate-shimmer bg-[length:200%_auto]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center animate-slide-up delay-300">
          <p className="text-white/60 mb-6 text-lg">
            Join <span className="text-white font-semibold">250+ happy clients</span> who transformed their business with us
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 group"
          >
            <span>Start Your Success Story</span>
            <div className="w-6 h-6 bg-dark/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <span className="text-sm">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}