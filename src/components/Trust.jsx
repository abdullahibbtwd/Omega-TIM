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
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="trust">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <span className="text-indigo-600 font-semibold text-xs tracking-wider uppercase">
            {t('trust.eyebrow')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-1 mb-3">
            {t('trust.title')}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                alt={t('trust.imgAlt')}
                className="w-full h-[400px] object-cover"
                src={assets.sofiaOffice}
              />
            </div>
            <div className="absolute -bottom-4 right-6 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                30+
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">
                  {t('trust.yearsLabel')}
                </div>
                <div className="text-slate-500">{t('trust.cities')}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${point.iconClass}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </div>
              )
            })}

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {quotes.map((q) => (
                <div
                  key={q.name}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-level1 flex items-center gap-3"
                >
                  <img
                    alt={q.alt}
                    className="w-11 h-11 rounded-full object-cover shrink-0 ring-1 ring-slate-200"
                    src={q.img}
                  />
                  <div className="text-xs">
                    <p className="text-slate-700 italic">{q.quote}</p>
                    <div className="font-bold text-slate-900 mt-1">{q.name}</div>
                    <div className="text-[11px] text-slate-500">{q.role}</div>
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
