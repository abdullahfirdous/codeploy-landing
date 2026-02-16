import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Process from '@/components/Process'
import TechStack from '@/components/TechStack'
// import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Process />
      <TechStack />
      <FAQ />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}