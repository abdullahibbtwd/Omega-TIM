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
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden blueprint-grid border-b border-slate-200">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[750px] h-[550px] bg-gradient-to-tr from-indigo-200/40 via-teal-100/30 to-purple-200/30 rounded-full blur-3xl opacity-75" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-700 hover:border-indigo-300 transition-all">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
            </span>
            <span>{t('hero.badge')}</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-5">
            {t('hero.title')}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all duration-200 active:scale-95"
            href="#demo"
          >
            <Calendar className="w-5 h-5" />
            {t('hero.ctaDemo')}
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 active:scale-95"
            href="#products"
          >
            <PlayCircle className="w-5 h-5 text-slate-500" />
            {t('hero.ctaSuite')}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3 px-6 border border-slate-200 max-w-3xl mx-auto mb-12 bg-white/80 backdrop-blur-md rounded-xl shadow-level1">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-teal-600" />
            <span className="text-xs sm:text-sm text-slate-700 font-medium">
              {t('hero.trustNap')}
            </span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <ScrollText className="w-5 h-5 text-teal-600" />
            <span className="text-xs sm:text-sm text-slate-700 font-medium">
              {t('hero.trustYears')}
            </span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-600" />
            <span className="text-xs sm:text-sm text-slate-700 font-medium">
              {t('hero.trustIso')}
            </span>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-3 h-3 rounded-full bg-rose-400 inline-block shrink-0" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shrink-0" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shrink-0" />
              <span className="ml-3 font-mono text-xs font-semibold text-slate-500 truncate">
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

          <div className="p-6 lg:p-8 bg-gradient-to-b from-white to-slate-50/50 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-2 gap-3">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {t('hero.payrollLabel')}
                    </span>
                    <div className="font-display text-3xl font-bold text-slate-900 mt-1 tabular-nums-enterprise">
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
                  <div className="text-lg font-bold text-slate-800 mt-1">
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
                  <div className="text-lg font-bold text-slate-800 mt-1 tabular-nums-enterprise">
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
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">
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
