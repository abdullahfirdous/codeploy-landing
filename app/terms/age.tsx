import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsAndConditions() {
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
          Terms & Conditions
        </h1>
        <p className="text-dark/60 mb-12">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-dark mb-4">1. Agreement to Terms</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              By accessing and using CodePloy's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-dark mb-4">2. Services</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              CodePloy provides digital services including web development, mobile app development, UI/UX design, digital marketing, automation, and backend services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-dark mb-4">3. Contact Information</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
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