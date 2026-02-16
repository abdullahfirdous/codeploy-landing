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

// import Link from 'next/link'
// import { ArrowLeft } from 'lucide-react'
// import Footer from '@/components/Footer'

// export default function TermsAndConditions() {
//   return (
//     <div className="min-h-screen bg-dark">
//       {/* Simple Header */}
//       <header className="relative bg-dark border-b border-white/5 py-6">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link
//             href="/"
//             className="inline-flex items-center space-x-2 text-white/70 hover:text-primary transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span className="font-medium">Back to Home</span>
//           </Link>
//         </div>
//       </header>

//       {/* Content */}
//       <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
//           Terms & Conditions
//         </h1>
//         <p className="text-white/60 mb-12">
//           Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//         </p>

//         <div className="space-y-12">
//           {/* Section 1 */}
//           <section className="glass rounded-3xl p-8">
//             <h2 className="text-2xl font-display font-bold text-white mb-4">1. Agreement to Terms</h2>
//             <p className="text-white/70 leading-relaxed">
//               By accessing and using CodePloy's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
//             </p>
//           </section>

//           {/* Section 2 */}
//           <section className="glass rounded-3xl p-8">
//             <h2 className="text-2xl font-display font-bold text-white mb-4">2. Use License</h2>
//             <p className="text-white/70 leading-relaxed mb-4">
//               Permission is granted to temporarily access the materials (information or software) on CodePloy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
//             </p>
//             <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
//               <li>Modify or copy the materials</li>
//               <li>Use the materials for any commercial purpose</li>
//               <li>Attempt to decompile or reverse engineer any software</li>
//               <li>Remove any copyright or proprietary notations</li>
//             </ul>
//           </section>

//           {/* Section 3 */}
//           <section className="glass rounded-3xl p-8">
//             <h2 className="text-2xl font-display font-bold text-white mb-4">3. Services</h2>
//             <p className="text-white/70 leading-relaxed">
//               CodePloy provides digital services including web development, mobile app development, UI/UX design, digital marketing, automation, and backend services. All services are subject to availability and our right to refuse service.
//             </p>
//           </section>

//           {/* Section 4 */}
//           <section className="glass rounded-3xl p-8">
//             <h2 className="text-2xl font-display font-bold text-white mb-4">4. Payment Terms</h2>
//             <p className="text-white/70 leading-relaxed mb-4">
//               Payment terms are as follows:
//             </p>
//             <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
//               <li>Payment is due upon invoice unless otherwise agreed</li>
//               <li>Late payments may incur additional fees</li>
//               <li>All prices are in USD unless stated otherwise</li>
//               <li>Refunds are subject to our refund policy</li>
//             </ul>
//           </section>

//           {/* Section 5 */}
//           <section className="glass rounded-3xl p-8">
//             <h2 className="text-2xl font-display font-bold text-white mb-4">5. Intellectual Property</h2>
//             <p className="text-white/70 leading-relaxed">
//               All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks, are the property of or licensed to CodePloy and are protected by law.
//             </p>
//           </section>

//           {/* Section 6 */}
//           <section className="glass rounded-3xl p-8">
//             <h2 className="text-2xl font-display font-bold text-white mb-4">6. Limitation of Liability</h2>
//             <p className="text-white/70 leading-relaxed">
//               In no event shall CodePloy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CodePloy's website.
//             </p>
//           </section>

//           {/* Section 7 */}
//           <section className="glass rounded-3xl p-8">
//             <h2 className="text-2xl font-display font-bold text-white mb-4">7. Modifications</h2>
//             <p className="text-white/70 leading-relaxed">
//               CodePloy may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
//             </p>
//           </section>

//           {/* Contact */}
//           <section className="glass-primary rounded-3xl p-8">
//             <h2 className="text-2xl font-display font-bold text-white mb-4">Contact Information</h2>
//             <p className="text-white/70 leading-relaxed mb-4">
//               If you have any questions about these Terms, please contact us:
//             </p>
//             <ul className="list-none text-white/70 space-y-2">
//               <li>📧 Email: hello@codeploy.com</li>
//               <li>📞 Phone: +1 (555) 123-4567</li>
//               <li>📍 Address: San Francisco, CA</li>
//             </ul>
//           </section>
//         </div>
//       </main>

//       {/* Same Footer on All Pages */}
//       <Footer />
//     </div>
//   )
// }
