import GlowHeader from '../components/glow/GlowHeader'
import GlowHero from '../components/glow/GlowHero'
import GlowModules from '../components/glow/GlowModules'
import GlowTrust from '../components/glow/GlowTrust'
import GlowCTA from '../components/glow/GlowCTA'
import GlowFooter from '../components/glow/GlowFooter'

export default function GlowLanding() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-g-lowest font-sans text-g-on antialiased selection:bg-g-sc selection:text-g-lowest">
      <GlowHeader />
      <main className="mx-auto flex w-full max-w-[1360px] flex-1 flex-col items-center px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-14 lg:px-10">
        <GlowHero />
        <GlowModules />
        <GlowTrust />
        <GlowCTA />
      </main>
      <GlowFooter />
    </div>
  )
}
