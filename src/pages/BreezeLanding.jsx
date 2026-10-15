import BreezeHeader from '../components/breeze/BreezeHeader'
import BreezeHero from '../components/breeze/BreezeHero'
import BreezeStats from '../components/breeze/BreezeStats'
import BreezeModules from '../components/breeze/BreezeModules'
import BreezeTrust from '../components/breeze/BreezeTrust'
import BreezeCTA from '../components/breeze/BreezeCTA'
import BreezeFooter from '../components/breeze/BreezeFooter'

export default function BreezeLanding() {
  return (
    <div className="min-h-screen bg-br-canvas font-sans text-br-ink antialiased selection:bg-br-cta selection:text-white">
      <BreezeHeader />
      <main className="w-full bg-br-canvas pt-20">
        <BreezeHero />
        <BreezeStats />
        <BreezeModules />
        <BreezeTrust />
        <BreezeCTA />
      </main>
      <BreezeFooter />
    </div>
  )
}
