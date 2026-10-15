import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Calendar,
  Check,
  History,
  PlayCircle,
  Shield,
  ScrollText,
  TrendingUp,
  BadgeCheck,
  CircleCheck,
} from 'lucide-react'
import { assets } from '../assets'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden border-b border-slate-200 blueprint-grid pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="h-[550px] w-[750px] rounded-full bg-gradient-to-tr from-indigo-200/40 via-teal-100/30 to-purple-200/30 opacity-75 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-4 flex justify-center sm:mb-6">
          <div className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-medium text-slate-700 shadow-sm transition-all hover:border-indigo-300 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500 sm:h-2.5 sm:w-2.5" />
            </span>
            <span className="truncate">{t('hero.badge')}</span>
            <ArrowRight className="hidden h-3.5 w-3.5 shrink-0 text-teal-600 sm:block" />
          </div>
        </div>

        <div className="mx-auto mb-6 max-w-4xl text-center sm:mb-8">
          <h1 className="mb-3 font-display text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:mb-5 sm:text-4xl sm:font-bold sm:leading-[1.12] lg:text-6xl lg:font-extrabold">
            {t('hero.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="mb-8 flex flex-col items-stretch justify-center gap-2 sm:mb-10 sm:flex-row sm:items-center sm:gap-3.5">
          <a
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-700 active:scale-95 sm:w-auto sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
            href="#demo"
          >
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
            {t('hero.ctaDemo')}
          </a>
          <a
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 active:scale-95 sm:w-auto sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
            href="#products"
          >
            <PlayCircle className="h-4 w-4 text-slate-500 sm:h-5 sm:w-5" />
            {t('hero.ctaSuite')}
          </a>
        </div>

        <div className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 shadow-level1 backdrop-blur-md sm:mb-12 sm:gap-8 sm:px-6 sm:py-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <BadgeCheck className="h-4 w-4 text-teal-600 sm:h-5 sm:w-5" />
            <span className="text-[11px] font-medium text-slate-700 sm:text-sm">
              {t('hero.trustNap')}
            </span>
          </div>
          <div className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ScrollText className="h-4 w-4 text-teal-600 sm:h-5 sm:w-5" />
            <span className="text-[11px] font-medium text-slate-700 sm:text-sm">
              {t('hero.trustYears')}
            </span>
          </div>
          <div className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Shield className="h-4 w-4 text-teal-600 sm:h-5 sm:w-5" />
            <span className="text-[11px] font-medium text-slate-700 sm:text-sm">
              {t('hero.trustIso')}
            </span>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2.5 sm:px-5 sm:py-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 sm:h-3 sm:w-3" />
              <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400 sm:h-3 sm:w-3" />
              <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 sm:h-3 sm:w-3" />
              <span className="ml-2 truncate font-mono text-[10px] font-medium text-slate-500 sm:ml-3 sm:text-xs sm:font-semibold">
                {t('hero.chromeTitle')}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {t('hero.napSynced')}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 bg-gradient-to-b from-white to-slate-50/50 p-4 sm:gap-6 sm:p-6 lg:grid-cols-12 lg:p-8">
            <div className="space-y-4 lg:col-span-7 sm:space-y-5">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex justify-between items-start mb-2 gap-3">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {t('hero.payrollLabel')}
                    </span>
                    <div className="mt-1 font-display text-xl font-semibold tabular-nums-enterprise text-slate-900 sm:text-3xl sm:font-bold">
                      BGN 148,250.00
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                    <TrendingUp className="w-3 h-3" />
                    {t('hero.mom')}
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <CircleCheck className="w-5 h-5 text-teal-600 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">
                      {t('hero.napValidated')}
                    </span>
                  </div>
                  <svg
                    className="h-6 w-28 text-indigo-500 stroke-current shrink-0"
                    fill="none"
                    viewBox="0 0 100 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 18 L15 14 L30 17 L45 10 L60 12 L75 6 L90 8 L100 2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {t('hero.bankExport')}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-800 sm:text-lg sm:font-bold">
                    {t('hero.sepaOrders')}
                  </div>
                  <div className="text-[11px] text-teal-700 flex items-center gap-1 mt-1 font-medium">
                    <Check className="w-3 h-3" /> {t('hero.biseraReady')}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {t('hero.socialSecurity')}
                  </div>
                  <div className="mt-1 text-sm font-semibold tabular-nums-enterprise text-slate-800 sm:text-lg sm:font-bold">
                    BGN 38,410.20
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {t('hero.nssiFiling')}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/95 rounded-xl border border-slate-200 shadow-md p-5 backdrop-blur-sm relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {t('hero.employeeFile')}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {t('hero.napVerified')}
                </span>
              </div>

              <div className="mt-4 flex items-start gap-3.5">
                <img
                  alt="Elena Ivanova Dimitrova"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-600/30 shadow-sm"
                  src={assets.elena}
                />
                <div>
                  <h4 className="text-sm font-semibold leading-tight text-slate-900 sm:font-bold">
                    Elena Ivanova Dimitrova
                  </h4>
                  <p className="text-xs text-slate-500">{t('hero.elenaRole')}</p>
                  <div className="mt-1.5 inline-block px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[11px] font-semibold">
                    {t('hero.activeContract')}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img
                      alt="Elena Ivanova Dimitrova"
                      className="w-7 h-7 rounded-full object-cover ring-2 ring-white shadow-sm"
                      src={assets.elena}
                    />
                    <img
                      alt="Krasimir Nikolov"
                      className="w-7 h-7 rounded-full object-cover ring-2 ring-white shadow-sm"
                      src={assets.krasimir}
                    />
                  </div>
                  <span className="ml-2.5 text-xs text-slate-600 font-medium">
                    {t('hero.dualSignoff')}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {t('hero.eSignValid')}
                </span>
              </div>

              <div className="mt-4 bg-slate-50 rounded-lg p-2.5 border border-slate-200/80 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-semibold mb-1">
                  <History className="w-3.5 h-3.5 text-teal-600" />
                  {t('hero.timeline')}
                </div>
                <div className="flex items-center justify-between text-slate-500 text-[11px]">
                  <span>{t('hero.cfoSigned')}</span>
                  <span className="font-mono text-emerald-600 font-medium">
                    {t('hero.today')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
