import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Trust from '../components/Trust'
import Legislation from '../components/Legislation'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function LightLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] font-sans text-[#0F172A]">
      <Header />
      <main className="flex-1 pb-24">
        <Hero />
        <Products />
        <Trust />
        <Legislation />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
