import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-dark py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-white hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
          Privacy Policy
        </h1>
        <p className="text-dark/60 mb-12">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-dark mb-4">1. Introduction</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              Welcome to CodePloy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-dark mb-4">2. Information We Collect</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc list-inside text-dark/70 space-y-2 ml-4">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address, telephone number, and physical address.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-dark mb-4">3. How We Use Your Information</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide and maintain our services, notify you about changes, provide customer support, and improve our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-dark mb-4">4. Contact Us</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-dark/70 space-y-2">
              <li>By email: hello@codeploy.com</li>
              <li>By phone: +1 (555) 123-4567</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="bg-dark py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} CodePloy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}