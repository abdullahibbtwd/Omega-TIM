import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  BadgeCheck,
  Calculator,
  CheckCircle2,
  CloudCheck,
  History,
  IdCard,
  Landmark,
  Lock,
  TrendingUp,
} from 'lucide-react'
import { assets } from '../../assets'

const TABS = [
  { id: 'rzwin', icon: Calculator, labelKey: 'tabRzwin' },
  { id: 'lswin', icon: IdCard, labelKey: 'tabLswin' },
  { id: 'ac', icon: Landmark, labelKey: 'tabAc', hideSm: true },
]

const ROWS = [
  {
    img: assets.elena,
    name: 'Elena Petrova',
    roleKey: 'row1Role',
    gross: '6,400.00',
    social: '898.56',
    tax: '550.14',
    net: '4,951.30',
  },
  {
    img: assets.krasimir,
    name: 'Krasimir Georgiev',
    roleKey: 'row2Role',
    gross: '7,800.00',
    social: '898.56',
    tax: '690.14',
    net: '6,211.30',
  },
]

export default function GlowHero() {
  const { t } = useTranslation()
  const [tab, setTab] = useState('rzwin')

  return (
    <section className="flex w-full flex-col items-center">
      <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-g-outline-v/60 bg-g-high px-3 py-1 shadow-inner sm:mb-5 sm:px-3.5 sm:py-1.5">
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-g-sc opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-g-sc sm:h-2.5 sm:w-2.5" />
        </span>
        <span className="truncate text-[11px] font-medium tracking-wide text-g-on sm:text-[13px]">
          {t('glow.badge')}
        </span>
      </div>

      <h1 className="mb-3 max-w-4xl text-center text-2xl font-semibold leading-snug tracking-tight text-g-on sm:mb-4 sm:text-4xl sm:font-bold sm:leading-tight lg:text-5xl lg:font-extrabold lg:leading-[1.15]">
        {t('glow.titleBefore')}{' '}
        <span className="bg-gradient-to-r from-g-primary-fixed via-g-primary to-g-secondary bg-clip-text text-transparent">
          {t('glow.titleAccent')}
        </span>
      </h1>

      <p className="mb-6 max-w-2xl text-center text-sm leading-relaxed text-g-outline sm:mb-8 sm:text-base">
        {t('glow.subtitle')}
      </p>

      <div className="mb-8 flex w-full flex-col items-stretch gap-2.5 sm:mb-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
        <a
          href="#demo"
          className="w-full whitespace-nowrap rounded-lg bg-gradient-to-r from-g-sc to-g-secondary px-5 py-2.5 text-center text-xs font-semibold text-g-lowest shadow-[0_0_24px_rgba(253,139,0,0.35)] transition-all duration-150 hover:shadow-[0_0_30px_rgba(253,139,0,0.55)] active:scale-[0.98] sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
        >
          {t('glow.bookDemo')}
        </a>
        <a
          href="#modules"
          className="w-full whitespace-nowrap rounded-lg border border-g-pc bg-g-container px-5 py-2.5 text-center text-xs font-semibold text-g-primary transition-all duration-150 hover:border-g-primary hover:bg-g-high active:scale-[0.98] sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
        >
          {t('glow.explore')}
        </a>
      </div>

      <div className="mb-8 flex w-full max-w-4xl flex-wrap items-center justify-around gap-3 rounded-xl border border-g-outline-v/30 bg-g-low px-4 py-2.5 text-[10px] font-semibold text-g-outline sm:mb-10 sm:gap-4 sm:px-5 sm:py-3 sm:text-[11px]">
        <div className="flex items-center gap-1.5 text-g-muted">
          <BadgeCheck className="h-3.5 w-3.5 text-g-tertiary" />
          <span>{t('glow.trust1')}</span>
        </div>
        <div className="hidden h-3.5 w-px bg-g-outline-v/40 sm:block" />
        <div className="flex items-center gap-1.5 text-g-muted">
          <History className="h-3.5 w-3.5 text-g-secondary" />
          <span>{t('glow.trust2')}</span>
        </div>
        <div className="hidden h-3.5 w-px bg-g-outline-v/40 sm:block" />
        <div className="flex items-center gap-1.5 text-g-muted">
          <Lock className="h-3.5 w-3.5 text-g-primary-fixed" />
          <span>{t('glow.trust3')}</span>
        </div>
      </div>

      {/* Dashboard window */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-g-outline-v/60 bg-g-low shadow-2xl">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-3/4 -translate-x-1/2 rounded-full bg-g-pc/20 blur-3xl" />

        <div className="relative flex h-11 items-center justify-between border-b border-g-outline-v/50 bg-g-high/80 px-3 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-g-error/80 sm:h-3 sm:w-3" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-g-tertiary/80 sm:h-3 sm:w-3" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-g-primary/80 sm:h-3 sm:w-3" />
            <span className="ml-2 truncate font-mono text-[10px] font-medium text-g-outline sm:ml-3 sm:text-[11px]">
              {t('glow.chromeTitle')}
            </span>
          </div>

          <div className="hidden items-center gap-1 rounded-lg border border-g-outline-v/40 bg-g-lowest p-0.5 sm:flex">
            {TABS.map(({ id, icon: Icon, labelKey, hideSm }) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`flex items-center gap-1 rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  hideSm ? 'hidden lg:flex' : ''
                } ${
                  tab === id
                    ? 'bg-g-pc text-g-on-pc'
                    : 'text-g-outline hover:text-g-on'
                }`}
              >
                <Icon className="h-3 w-3" />
                {t(`glow.${labelKey}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="relative space-y-4 bg-g-lowest/80 p-3 backdrop-blur-sm sm:space-y-5 sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            <div className="relative overflow-hidden rounded-xl border border-g-outline-v/50 bg-g-container p-3.5 sm:p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="text-[11px] font-medium text-g-outline sm:text-[13px]">
                  {t('glow.kpiPayroll')}
                </span>
                <span className="shrink-0 rounded-full border border-g-pc/30 bg-g-pc/20 px-2 py-0.5 text-[10px] font-medium text-g-primary sm:text-[11px]">
                  {t('glow.autoCalc')}
                </span>
              </div>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="font-display text-xl font-semibold tabular-nums text-g-on sm:text-2xl">
                  BGN 148,250.00
                </span>
                <span className="inline-flex items-center text-[10px] font-medium text-g-tertiary sm:text-[11px]">
                  <TrendingUp className="mr-0.5 h-3 w-3" /> +3.2%
                </span>
              </div>
              <div className="flex h-8 items-end gap-1.5 pt-2">
                {[12, 16, 20, 16, 24, 28].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-t ${
                      i === 5 ? 'bg-g-sc' : 'bg-g-pc/40'
                    }`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-g-outline-v/50 bg-g-container p-3.5 sm:p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="text-[11px] font-medium text-g-outline sm:text-[13px]">
                  {t('glow.kpiContracts')}
                </span>
                <span className="shrink-0 rounded-full border border-g-outline-v/30 bg-g-high px-2 py-0.5 text-[10px] font-medium text-g-muted sm:text-[11px]">
                  {t('glow.laborArt')}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-display text-xl font-semibold text-g-on sm:text-2xl">
                  {t('glow.employees')}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-g-outline-v/20 pt-2 text-[11px] text-g-outline sm:text-xs">
                <span>{t('glow.fullTime')}</span>
                <span>{t('glow.civil')}</span>
              </div>
            </div>

            <div className="rounded-xl border border-g-sc/40 bg-gradient-to-br from-g-container via-g-container to-g-sc/10 p-3.5 sm:p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="text-[11px] font-medium text-g-outline sm:text-[13px]">
                  {t('glow.kpiNap')}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-g-sc bg-g-sc/20 px-2 py-0.5 text-[10px] font-medium text-g-secondary sm:text-[11px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-g-sc" />
                  {t('glow.napVerified')}
                </span>
              </div>
              <p className="mb-2 text-[11px] leading-relaxed text-g-on sm:text-xs">
                {t('glow.napBatch')}
              </p>
              <div className="flex items-center gap-1 pt-1 text-[10px] font-medium text-g-outline sm:text-[11px]">
                <CloudCheck className="h-3 w-3 text-g-secondary" />
                <span>{t('glow.qes')}</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-g-outline-v/50 bg-g-container">
            <div className="flex items-center justify-between gap-2 border-b border-g-outline-v/40 bg-g-high/60 px-3 py-2 sm:px-4 sm:py-2.5">
              <div className="flex min-w-0 items-center gap-2">
                <Calculator className="h-3.5 w-3.5 shrink-0 text-g-primary" />
                <span className="truncate text-[11px] font-medium text-g-on sm:text-[13px]">
                  {t('glow.ledgerTitle')}
                </span>
              </div>
              <span className="hidden shrink-0 text-[10px] font-medium text-g-outline sm:inline sm:text-[11px]">
                {t('glow.ledgerReady')}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-xs">
                <thead className="border-b border-g-outline-v/30 bg-g-low text-[10px] font-semibold uppercase tracking-wide text-g-outline sm:text-[11px]">
                  <tr>
                    <th className="px-3 py-2 sm:px-4 sm:py-2.5">{t('glow.thEmployee')}</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-2.5">{t('glow.thGross')}</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-2.5">{t('glow.thSocial')}</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-2.5">{t('glow.thTax')}</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-2.5">{t('glow.thNet')}</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-2.5">{t('glow.thStatus')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-g-outline-v/20 font-mono">
                  {ROWS.map((row) => (
                    <tr
                      key={row.name}
                      className="transition-colors hover:bg-g-high/40"
                    >
                      <td className="px-3 py-2.5 sm:px-4 sm:py-3">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <img
                            alt={row.name}
                            className="h-7 w-7 rounded-full border border-g-outline-v object-cover sm:h-8 sm:w-8"
                            src={row.img}
                          />
                          <div>
                            <div className="font-sans text-[11px] font-semibold text-g-on sm:text-xs">
                              {row.name}
                            </div>
                            <div className="font-sans text-[10px] text-g-outline">
                              {t(`glow.${row.roleKey}`)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2.5 font-semibold tabular-nums text-g-on sm:px-4 sm:py-3">
                        {row.gross}
                      </td>
                      <td className="px-3 py-2.5 tabular-nums text-g-outline sm:px-4 sm:py-3">
                        {row.social}
                      </td>
                      <td className="px-3 py-2.5 tabular-nums text-g-outline sm:px-4 sm:py-3">
                        {row.tax}
                      </td>
                      <td className="px-3 py-2.5 font-bold tabular-nums text-g-secondary sm:px-4 sm:py-3">
                        {row.net}
                      </td>
                      <td className="px-3 py-2.5 sm:px-4 sm:py-3">
                        <span className="inline-flex items-center gap-1 rounded-full border border-g-secondary/30 bg-g-highest px-2 py-0.5 font-sans text-[10px] text-g-secondary sm:text-[11px]">
                          <CheckCircle2 className="h-3 w-3" />
                          {t('glow.filed')}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
