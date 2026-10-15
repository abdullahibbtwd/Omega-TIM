import { useEffect, useState } from 'react'
import LightLanding from './pages/LightLanding'
import DarkLanding from './pages/DarkLanding'
import GlowLanding from './pages/GlowLanding'
import BreezeLanding from './pages/BreezeLanding'
import DesignSwitcher from './components/DesignSwitcher'

const DESIGNS = ['light', 'dark', 'glow', 'breeze']

function getInitialDesign() {
  const saved = localStorage.getItem('omegatim-design')
  return DESIGNS.includes(saved) ? saved : 'light'
}

export default function App() {
  const [design, setDesign] = useState(getInitialDesign)

  useEffect(() => {
    localStorage.setItem('omegatim-design', design)
    document.documentElement.classList.toggle('dark', design === 'dark' || design === 'glow')
    document.documentElement.classList.toggle('glow', design === 'glow')
    document.documentElement.classList.toggle('breeze', design === 'breeze')
  }, [design])

  const page =
    design === 'breeze' ? (
      <BreezeLanding />
    ) : design === 'glow' ? (
      <GlowLanding />
    ) : design === 'dark' ? (
      <DarkLanding />
    ) : (
      <LightLanding />
    )

  return (
    <>
      {page}
      <DesignSwitcher design={design} onChange={setDesign} />
    </>
  )
}
