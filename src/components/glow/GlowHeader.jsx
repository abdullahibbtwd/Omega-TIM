import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Key, Menu, X } from 'lucide-react'
import { assets } from '../../assets'
import LanguageSwitcher from '../LanguageSwitcher'

export default function GlowHeader() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#modules', label: t('glowNav.products'), active: true },
    { href: '#solutions', label: t('glowNav.solutions') },
    { href: '#legislation', label: t('glowNav.legislation') },
    { href: '#support', label: t('glowNav.support') },
    { href: '#docs', label: t('glowNav.docs') },
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
        className={`fixed inset-0 z-[80] bg-black/60 transition-opacity duration-300 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-[90] flex h-dvh w-[min(20rem,88vw)] flex-col border-l border-g-outline-v/60 bg-g-lowest transition-transform duration-300 ease-out md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-g-outline-v/50 px-5">
          <img
            src={assets.logoGlow}
            alt="OMEGA team BULGARIA"
            className="h-10 w-auto max-w-[160px] object-contain object-left"
          />
          <button
            type="button"
            className="rounded-lg p-2 text-g-outline hover:bg-g-container hover:text-g-on"
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
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                link.active
                  ? 'bg-g-pc/20 text-g-primary'
                  : 'text-g-muted hover:bg-g-container hover:text-g-on'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3 border-t border-g-outline-v/40 px-4 py-5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-g-outline">
              {t('nav.language')}
            </span>
            <LanguageSwitcher variant="glow" />
          </div>
          <a
            href="#login"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-g-outline-v bg-g-container px-4 py-2.5 text-sm font-semibold text-g-on"
          >
            <Key className="h-3.5 w-3.5 text-g-primary" />
            {t('glowNav.login')}
          </a>
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-gradient-to-r from-g-sc to-g-secondary px-4 py-2.5 text-sm font-bold text-g-lowest"
          >
            {t('glowNav.requestDemo')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </aside>
    </>
  )

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-g-outline-v/40 bg-g-container/75 shadow-md backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-[1360px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          <a
            href="#"
            className="flex min-w-0 shrink-0 items-center gap-2 transition-transform duration-100 active:scale-[0.98]"
          >
            <img
              src={assets.logoGlow}
              alt="OMEGA team BULGARIA"
              className="h-9 w-auto max-w-[140px] object-contain object-left sm:h-10 sm:max-w-[180px] lg:max-w-[200px]"
            />
            <div className="hidden min-w-0 flex-col sm:flex">
              <span className="truncate text-[11px] font-semibold uppercase leading-none tracking-wider text-g-on lg:text-xs">
                {t('glowNav.brand')}
              </span>
              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-g-outline lg:text-[10px]">
                {t('glowNav.brandSub')}
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-5 md:flex lg:gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.active
                    ? 'border-b-2 border-g-primary pb-1 text-sm font-semibold whitespace-nowrap text-g-primary'
                    : 'text-[13px] font-medium whitespace-nowrap text-g-muted transition-colors hover:text-g-primary'
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="hidden lg:block">
              <LanguageSwitcher variant="glow" />
            </div>
            <a
              href="#login"
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-lg border border-g-outline-v bg-g-container px-3 py-1.5 text-[13px] font-medium text-g-on transition-colors hover:border-g-pc hover:bg-g-high sm:inline-flex"
            >
              <Key className="h-3 w-3 text-g-primary" />
              {t('glowNav.login')}
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-g-sc to-g-secondary px-2.5 py-1.5 text-[11px] font-bold text-g-lowest transition-all duration-150 hover:brightness-105 hover:shadow-[0_0_24px_rgba(253,139,0,0.45)] active:scale-[0.98] sm:gap-1.5 sm:px-4 sm:py-2 sm:text-[13px]"
            >
              <span className="whitespace-nowrap">{t('glowNav.requestDemo')}</span>
              <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
            </a>
            <button
              type="button"
              className="rounded-lg p-2 text-g-muted hover:bg-g-high hover:text-g-on md:hidden"
              aria-label={t('glowNav.menu')}
              aria-expanded={open}
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
