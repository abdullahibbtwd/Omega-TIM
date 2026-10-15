import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Menu, User, X } from 'lucide-react'
import { assets } from '../../assets'
import LanguageSwitcher from '../LanguageSwitcher'

export default function DarkHeader() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#modules', label: t('darkNav.products') },
    { href: '#solutions', label: t('darkNav.solutions') },
    { href: '#legislation', label: t('darkNav.legislation') },
    { href: '#support', label: t('darkNav.support') },
    { href: '#docs', label: t('darkNav.docs') },
  ]

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const drawer = (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-black/60 transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-[90] flex h-dvh w-[min(20rem,88vw)] flex-col border-l border-outline-variant bg-surface-container-lowest transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-outline-variant px-5">
          <img src={assets.logo} alt="Omega-TIM" className="h-7 w-auto max-w-[140px] object-contain" />
          <button
            type="button"
            className="rounded-lg p-2 text-tertiary hover:bg-surface-container hover:text-on-surface"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3 border-t border-outline-variant px-4 py-5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-tertiary">
              {t('nav.language')}
            </span>
            <LanguageSwitcher variant="dark" />
          </div>
          <a
            href="#login"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-outline-variant px-4 py-2.5 text-sm font-semibold text-on-surface"
          >
            {t('darkNav.login')}
          </a>
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-container px-4 py-2.5 text-sm font-semibold text-white"
          >
            {t('darkNav.requestDemo')}
          </a>
        </div>
      </aside>
    </>
  )

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-outline-variant bg-surface-container-lowest/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <img
              src={assets.logo}
              alt="Omega-TIM"
              className="h-8 w-auto max-w-[150px] object-contain object-left"
            />
            <span className="hidden font-mono text-[10px] uppercase tracking-wider text-on-surface-variant sm:block">
              {t('darkNav.bulgaria')}
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher variant="dark" />
            </div>
            <a
              href="#login"
              className="hidden whitespace-nowrap rounded-lg border border-outline-variant px-3 py-1.5 text-sm font-semibold text-on-surface transition-all hover:border-outline hover:bg-surface-container md:inline-flex"
            >
              {t('darkNav.login')}
            </a>
            <a
              href="#demo"
              className="inline-flex whitespace-nowrap rounded-lg bg-primary-container px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-inst-btn transition-colors hover:bg-primary-dark sm:px-3 sm:text-sm"
            >
              {t('darkNav.requestDemo')}
            </a>
            <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-outline-variant bg-surface-container-high text-tertiary sm:flex">
              <User className="h-4 w-4" />
            </div>
            <button
              type="button"
              className="rounded-lg p-2 text-tertiary hover:bg-surface-container hover:text-on-surface lg:hidden"
              aria-label={t('darkNav.menu')}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      {createPortal(drawer, document.body)}
    </>
  )
}
