import { Trans, useTranslation } from 'react-i18next'
import { Headphones, Scale, ShieldCheck } from 'lucide-react'
import { assets } from '../assets'

export default function Trust() {
  const { t } = useTranslation()

  const trustPoints = [
    {
      icon: Headphones,
      iconClass: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      title: t('trust.point1Title'),
      body: (
        <Trans
          i18nKey="trust.point1Body"
          components={{ strong: <span className="font-semibold text-slate-900" /> }}
        />
      ),
    },
    {
      icon: Scale,
      iconClass: 'bg-teal-50 border-teal-200 text-teal-600',
      title: t('trust.point2Title'),
      body: t('trust.point2Body'),
    },
    {
      icon: ShieldCheck,
      iconClass: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      title: t('trust.point3Title'),
      body: t('trust.point3Body'),
    },
  ]

  const quotes = [
    {
      img: assets.elena,
      alt: 'Elena Ivanova Dimitrova',
      quote: t('trust.quote1'),
      name: 'Elena Dimitrova',
      role: t('trust.quote1Role'),
    },
    {
      img: assets.krasimir,
      alt: 'Krasimir Nikolov',
      quote: t('trust.quote2'),
      name: 'Krasimir Nikolov',
      role: t('trust.quote2Role'),
    },
  ]

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-10 sm:py-20" id="trust">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-8 max-w-3xl sm:mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 sm:text-xs">
            {t('trust.eyebrow')}
          </span>
          <h2 className="mt-1 mb-2 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:mb-3 sm:text-3xl sm:font-bold lg:text-4xl">
            {t('trust.title')}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <img
                alt={t('trust.imgAlt')}
                className="h-[260px] w-full object-cover sm:h-[400px]"
                src={assets.sofiaOffice}
              />
            </div>
            <div className="absolute -bottom-3 right-4 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-lg sm:-bottom-4 sm:right-6 sm:gap-3 sm:px-4 sm:py-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700 sm:h-8 sm:w-8 sm:text-sm sm:font-bold">
                30+
              </div>
              <div className="text-[11px] sm:text-xs">
                <div className="font-semibold text-slate-900 sm:font-bold">
                  {t('trust.yearsLabel')}
                </div>
                <div className="text-slate-500">{t('trust.cities')}</div>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-6 sm:space-y-6">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border sm:h-10 sm:w-10 ${point.iconClass}`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base sm:font-bold">
                      {point.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {point.body}
                    </p>
                  </div>
                </div>
              )
            })}

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 sm:gap-3.5">
              {quotes.map((q) => (
                <div
                  key={q.name}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-level1 sm:p-3.5"
                >
                  <img
                    alt={q.alt}
                    className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-slate-200 sm:h-11 sm:w-11"
                    src={q.img}
                  />
                  <div className="text-[11px] sm:text-xs">
                    <p className="italic text-slate-700">{q.quote}</p>
                    <div className="mt-1 font-semibold text-slate-900 sm:font-bold">{q.name}</div>
                    <div className="text-[10px] text-slate-500 sm:text-[11px]">{q.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
