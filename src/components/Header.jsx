import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { assets } from '../assets'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '#products', label: t('nav.products'), active: true },
    { href: '#trust', label: t('nav.trust') },
    { href: '#legislation', label: t('nav.legislation') },
    { href: '#support', label: t('nav.support') },
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
        className={`lg:hidden fixed inset-0 z-[80] bg-slate-900/45 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`lg:hidden fixed top-0 right-0 z-[90] flex h-dvh w-[min(20rem,88vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-5">
          <img
            src={assets.logo}
            alt="Omega-TIM"
            className="h-7 w-auto max-w-[140px] object-contain object-left logo-on-light"
          />
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            aria-label={t('nav.menu')}
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto bg-white px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                link.active
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="shrink-0 space-y-3 border-t border-slate-100 bg-white px-4 py-5">
          <div className="flex items-center justify-between gap-3 px-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t('nav.language')}
            </span>
            <LanguageSwitcher />
          </div>

          <a
            className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
            href="#login"
            onClick={() => setOpen(false)}
          >
            {t('nav.login')}
          </a>
          <a
            className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow transition-all hover:bg-indigo-700"
            href="#demo"
            onClick={() => setOpen(false)}
          >
            {t('nav.requestDemo')}
          </a>
        </div>
      </aside>
    </>
  )

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-12">
          <a className="group flex min-w-0 shrink-0 items-center" href="#">
            <img
              src={assets.logo}
              alt="Omega-TIM"
              className="logo-on-light h-8 w-auto max-w-[140px] object-contain object-left transition-transform duration-200 group-hover:scale-[1.02] sm:max-w-[160px] lg:h-9 lg:max-w-[180px]"
            />
          </a>

          <nav className="hidden shrink-0 items-center gap-5 text-sm font-medium lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.active
                    ? 'whitespace-nowrap border-b-2 border-indigo-600 pb-1 font-semibold text-indigo-600'
                    : 'whitespace-nowrap text-slate-600 transition-colors hover:text-indigo-600'
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            <a
              className="hidden whitespace-nowrap rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 xl:inline-flex xl:items-center xl:justify-center"
              href="#login"
            >
              {t('nav.login')}
            </a>
            <a
              className="hidden whitespace-nowrap rounded-lg bg-indigo-600 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow transition-all hover:bg-indigo-700 active:scale-95 sm:inline-flex sm:items-center sm:justify-center sm:px-4 sm:py-2 sm:text-sm"
              href="#demo"
            >
              {t('nav.requestDemo')}
            </a>
            <button
              type="button"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label={t('nav.menu')}
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
