import DarkHeader from '../components/dark/DarkHeader'
import DarkHero from '../components/dark/DarkHero'
import DarkModules from '../components/dark/DarkModules'
import DarkTrust from '../components/dark/DarkTrust'
import DarkFooter from '../components/dark/DarkFooter'

export default function DarkLanding() {
  return (
    <div className="min-h-screen bg-canvas font-body text-on-surface antialiased selection:bg-primary-container selection:text-white">
      <DarkHeader />
      <main className="w-full bg-surface pt-16">
        <DarkHero />
        <DarkModules />
        <DarkTrust />
      </main>
      <DarkFooter />
    </div>
  )
}
