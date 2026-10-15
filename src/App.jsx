import { useEffect, useState } from 'react'
import LightLanding from './pages/LightLanding'
import DarkLanding from './pages/DarkLanding'
import DesignSwitcher from './components/DesignSwitcher'

function getInitialDesign() {
  const saved = localStorage.getItem('omegatim-design')
  return saved === 'dark' || saved === 'light' ? saved : 'light'
}

export default function App() {
  const [design, setDesign] = useState(getInitialDesign)

  useEffect(() => {
    localStorage.setItem('omegatim-design', design)
    document.documentElement.classList.toggle('dark', design === 'dark')
  }, [design])

  return (
    <>
      {design === 'dark' ? <DarkLanding /> : <LightLanding />}
      <DesignSwitcher design={design} onChange={setDesign} />
    </>
  )
}
