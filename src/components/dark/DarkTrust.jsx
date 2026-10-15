import { useTranslation } from 'react-i18next'
import {
  BookOpen,
  Headphones,
  Phone,
  RefreshCw,
  ShieldCheck,
  DatabaseBackup,
} from 'lucide-react'
import { assets } from '../../assets'

export default function DarkTrust() {
  const { t } = useTranslation()

  const points = [
    {
      icon: Headphones,
      color: 'text-secondary bg-secondary/10 border-secondary/25',
      title: t('dark.t1Title'),
      body: t('dark.t1Body'),
    },
    {
      icon: DatabaseBackup,
      color: 'text-surface-tint bg-primary-container/20 border-surface-tint/30',
      title: t('dark.t2Title'),
      body: t('dark.t2Body'),
    },
    {
      icon: ShieldCheck,
      color: 'text-secondary bg-surface-container-high border-outline-variant',
      title: t('dark.t3Title'),
      body: t('dark.t3Body'),
    },
    {
      icon: RefreshCw,
      color: 'text-surface-tint bg-surface-container-high border-outline-variant',
      title: t('dark.t4Title'),
      body: t('dark.t4Body'),
    },
  ]

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:pb-16 lg:pb-24" id="solutions">
        <div className="rounded-2xl border border-outline-variant bg-surface-container p-4 shadow-inst-hover sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col gap-2 sm:gap-3 lg:col-span-5">
              <div className="group relative overflow-hidden rounded-xl border border-outline-variant shadow-lg">
                <img
                  alt={t('dark.trustImgAlt')}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={assets.engineeringTeam}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />
                <div className="absolute right-2 bottom-2 left-2 flex items-center justify-between rounded border border-outline-variant bg-surface-container-lowest/80 px-2.5 py-1 font-mono text-[10px] text-on-surface backdrop-blur-sm sm:right-3 sm:bottom-3 sm:left-3 sm:px-3 sm:py-1.5 sm:text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary sm:h-2 sm:w-2" />
                    {t('dark.trustOps')}
                  </span>
                  <span className="hidden text-tertiary sm:inline">Opulchenska 76</span>
                </div>
              </div>
              <p className="text-center text-[11px] text-tertiary sm:text-xs">{t('dark.trustOpsSub')}</p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-7">
              <div>
                <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-widest text-surface-tint sm:text-[11px]">
                  {t('dark.trustEyebrow')}
                </span>
                <h2 className="text-xl font-semibold tracking-tight text-on-surface sm:text-3xl sm:font-bold lg:text-4xl">
                  {t('dark.trustTitle')}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-tertiary sm:mt-3 sm:text-sm">
                  {t('dark.trustBody')}
                </p>
              </div>

              <ul className="space-y-3 text-sm text-on-surface sm:space-y-4">
                {points.map((point) => {
                  const Icon = point.icon
                  return (
                    <li key={point.title} className="flex items-start gap-2.5 sm:gap-3">
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border sm:h-6 sm:w-6 ${point.color}`}
                      >
                        <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs font-semibold text-on-surface sm:text-sm">
                          {point.title}
                        </strong>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-tertiary sm:text-xs">{point.body}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="flex flex-col gap-2 border-t border-outline-variant pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="tel:070011250"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-xs font-semibold text-white shadow-inst-btn transition-colors hover:bg-emerald-600 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {t('dark.callSupport')}
                </a>
                <a
                  href="#legislation"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-surface-container-high px-4 py-2 text-xs font-semibold text-on-surface transition-colors hover:border-outline sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {t('dark.viewLegislation')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-outline-variant bg-surface-container-lowest py-8 sm:py-12" id="demo">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-4 px-4 text-center sm:gap-6 md:flex-row md:items-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-on-surface sm:text-xl">{t('dark.ctaTitle')}</h3>
            <p className="text-[11px] text-tertiary sm:text-xs">{t('dark.ctaBody')}</p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3 md:shrink-0">
            <a
              href="#demo"
              className="rounded-lg bg-primary-container px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-primary-dark sm:px-6 sm:py-2.5 sm:text-sm"
            >
              {t('dark.schedule')}
            </a>
            <a
              href="mailto:office@omegatim.bg"
              className="rounded-lg border border-outline-variant px-4 py-2 text-xs font-semibold text-on-surface transition-all hover:bg-surface-container sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {t('dark.emailTeam')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
