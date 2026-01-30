'use client'

import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What services does CodePloy offer?',
    answer: 'We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, digital marketing, automation, backend services, and brand building. Our team handles everything from initial concept to final deployment and ongoing support.',
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the discovery phase and keep you updated throughout development.',
  },
  {
    id: 3,
    question: 'What is your development process?',
    answer: 'We follow a proven 4-step process: (1) Discovery & Strategy - understanding your needs, (2) Design & Planning - creating comprehensive roadmaps, (3) Development & Testing - building with cutting-edge tech, and (4) Launch & Support - smooth deployment with ongoing maintenance.',
  },
  {
    id: 4,
    question: 'Do you provide ongoing support after launch?',
    answer: 'Absolutely! We offer 24/7 support and maintenance packages tailored to your needs. This includes bug fixes, security updates, feature enhancements, and technical assistance to ensure your product continues performing optimally.',
  },
  {
    id: 5,
    question: 'What technologies do you specialize in?',
    answer: 'We work with modern tech stacks including React, Next.js, Node.js, Python, React Native, and cloud platforms like AWS and Azure. We stay current with the latest technologies and choose the best tools for each specific project.',
  },
  {
    id: 6,
    question: 'How much does a project cost?',
    answer: 'Project costs vary based on requirements, complexity, and timeline. We offer transparent pricing and provide detailed quotes after understanding your needs. Contact us for a free consultation and customized proposal.',
  },
  {
    id: 7,
    question: 'Can you work with our existing team?',
    answer: 'Yes! We integrate seamlessly with your existing team and processes. Whether you need us to augment your team, take full ownership, or collaborate on specific components, we adapt to your workflow.',
  },
  {
    id: 8,
    question: 'Do you sign NDAs?',
    answer: 'Absolutely. We understand the importance of confidentiality and are happy to sign NDAs before discussing your project details. Your intellectual property and sensitive information are always protected.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="relative py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float-slow"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">FAQ</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Questions?
            <br />
            We've Got <span className="text-gradient">Answers</span>
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Everything you need to know about working with CodePloy
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`glass rounded-3xl overflow-hidden transition-all duration-500 ${
                openId === faq.id ? 'glass-primary' : 'hover:glass-primary'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group transition-all"
              >
                <span className={`text-lg md:text-xl font-display font-semibold transition-colors ${
                  openId === faq.id ? 'text-gradient' : 'text-white group-hover:text-gradient'
                }`}>
                  {faq.question}
                </span>

                <div className={`flex-shrink-0 ml-6 w-10 h-10 glass-primary rounded-full flex items-center justify-center transition-all duration-300 ${
                  openId === faq.id ? 'bg-primary rotate-180' : 'group-hover:scale-110'
                }`}>
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5 text-dark" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary group-hover:rotate-90 transition-transform" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <div className="h-px bg-gradient-to-r from-primary/20 via-primary/50 to-transparent mb-6"></div>
                  <p className="text-white/70 leading-relaxed font-light text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-20 text-center glass-primary rounded-3xl p-12">
          <h3 className="text-3xl font-display font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-white/60 mb-8 text-lg font-light">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="mailto:hello@codeploy.com"
              className="px-8 py-4 glass text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/20"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}