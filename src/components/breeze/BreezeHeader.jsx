import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Menu, User, X } from 'lucide-react'
import { assets } from '../../assets'
import LanguageSwitcher from '../LanguageSwitcher'

export default function BreezeHeader() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#modules-bento', label: t('breezeNav.products') },
    { href: '#solutions', label: t('breezeNav.solutions') },
    { href: '#legislation', label: t('breezeNav.legislation') },
    { href: '#support', label: t('breezeNav.support') },
    { href: '#docs', label: t('breezeNav.docs') },
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
        className={`fixed inset-0 z-[80] bg-br-ink/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-[90] flex h-dvh w-[min(20rem,88vw)] flex-col border-l border-br-line bg-br-lowest transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-br-line px-5">
          <img
            src={assets.logoGlow}
            alt="OMEGA team BULGARIA"
            className="h-9 w-auto max-w-[150px] object-contain object-left"
          />
          <button
            type="button"
            className="rounded p-2 text-br-slate hover:bg-br-panel"
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
              className="block rounded px-3 py-2.5 text-sm font-medium text-br-slate transition-colors hover:bg-br-panel hover:text-br-pc"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3 border-t border-br-line px-4 py-5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-br-slate">
              {t('nav.language')}
            </span>
            <LanguageSwitcher variant="breeze" />
          </div>
          <a
            href="#login"
            onClick={() => setOpen(false)}
            className="flex h-10 w-full items-center justify-center rounded border border-br-border bg-br-lowest text-sm font-semibold text-br-ink transition-all hover:border-br-pc hover:bg-br-canvas"
          >
            {t('breezeNav.login')}
          </a>
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            className="flex h-10 w-full items-center justify-center rounded bg-br-cta text-sm font-semibold text-white shadow-sm transition-all hover:bg-br-cta-hover"
          >
            {t('breezeNav.requestDemo')}
          </a>
        </div>
      </aside>
    </>
  )

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-br-line bg-br-lowest/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
          <a href="#" className="flex min-w-0 shrink-0 items-center gap-2">
            <img
              src={assets.logoGlow}
              alt="OMEGA team BULGARIA"
              className="h-9 w-auto max-w-[140px] object-contain object-left sm:h-10 sm:max-w-[180px] lg:max-w-[200px]"
            />
            <div className="hidden min-w-0 flex-col sm:flex">
              <span className="truncate text-[11px] font-semibold uppercase leading-none tracking-wider text-br-ink lg:text-xs">
                {t('breezeNav.brand')}
              </span>
              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-br-slate lg:text-[10px]">
                {t('breezeNav.brandSub')}
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-semibold text-br-slate transition-colors hover:text-br-pc"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="hidden md:block">
              <LanguageSwitcher variant="breeze" />
            </div>
            <a
              href="#login"
              className="hidden h-9 items-center justify-center whitespace-nowrap rounded border border-br-border bg-br-lowest px-3 text-xs font-semibold text-br-ink transition-all hover:border-br-pc hover:bg-br-canvas sm:inline-flex sm:h-10 sm:px-4 sm:text-sm"
            >
              {t('breezeNav.login')}
            </a>
            <a
              href="#demo"
              className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded bg-br-cta px-2.5 text-[11px] font-semibold text-white shadow-sm transition-all hover:bg-br-cta-hover sm:h-10 sm:px-4 sm:text-sm"
            >
              {t('breezeNav.requestDemo')}
            </a>
            <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-br-pc text-white sm:flex">
              <User className="h-4 w-4" />
            </div>
            <button
              type="button"
              className="rounded p-2 text-br-slate hover:bg-br-panel lg:hidden"
              aria-label={t('breezeNav.menu')}
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
