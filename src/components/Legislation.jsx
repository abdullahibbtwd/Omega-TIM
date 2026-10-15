import { useTranslation } from 'react-i18next'
import {
  ChevronRight,
  Download,
  Gavel,
  HardDriveDownload,
  Scale,
  Terminal,
} from 'lucide-react'

export default function Legislation() {
  const { t } = useTranslation()

  const builds = [
    {
      active: true,
      title: 'OmegaTIM Live v03.09.2026',
      date: t('legislation.build1Date'),
      body: t('legislation.build1Body'),
    },
    {
      title: 'RZWIN 1.30.18',
      date: t('legislation.build2Date'),
      body: t('legislation.build2Body'),
    },
    {
      title: 'LSWIN 1.30.10',
      date: t('legislation.build3Date'),
      body: t('legislation.build3Body'),
    },
    {
      title: 'AC2012 2.14.02',
      date: t('legislation.build4Date'),
      body: t('legislation.build4Body'),
    },
  ]

  const bulletins = [
    {
      badge: t('legislation.badge1'),
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: Gavel,
      title: t('legislation.bulletin1Title'),
      body: t('legislation.bulletin1Body'),
      href: '#download-dod',
    },
    {
      badge: t('legislation.badge2'),
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Scale,
      title: t('legislation.bulletin2Title'),
      body: t('legislation.bulletin2Body'),
      href: '#download-decree',
    },
    {
      badge: t('legislation.badge3'),
      badgeClass: 'bg-teal-50 text-teal-800 border-teal-200',
      icon: HardDriveDownload,
      title: t('legislation.bulletin3Title'),
      body: t('legislation.bulletin3Body'),
      href: '#download-nssi',
    },
  ]

  return (
    <section
      className="py-20 bg-white border-b border-slate-200"
      id="legislation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-indigo-600 font-semibold text-xs uppercase tracking-wider">
              {t('legislation.eyebrow')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              {t('legislation.title')}
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              href="#all-updates"
            >
              {t('legislation.archive')}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-3">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-indigo-600" />
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  {t('legislation.buildsTitle')}
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded font-mono text-xs bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100 shrink-0">
                {t('legislation.channels')}
              </span>
            </div>

            <div className="space-y-6">
              {builds.map((item) => (
                <div
                  key={item.title}
                  className={`relative pl-6 border-l-2 ${
                    item.active ? 'border-indigo-600' : 'border-slate-200'
                  }`}
                >
                  <div
                    className={`absolute -left-1.5 top-0.5 w-3 h-3 rounded-full ${
                      item.active
                        ? 'bg-indigo-600 ring-4 ring-indigo-100'
                        : 'bg-slate-300'
                    }`}
                  />
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="font-bold text-slate-900 text-sm">
                      {item.title}
                    </span>
                    <span className="font-mono text-xs text-slate-400 shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {bulletins.map((b) => {
              const Icon = b.icon
              return (
                <div
                  key={b.title}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all shadow-sm group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded border mb-2 ${b.badgeClass}`}
                      >
                        <Icon className="w-3 h-3" />
                        {b.badge}
                      </span>
                      <h4 className="font-display font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                        {b.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {b.body}
                      </p>
                    </div>
                    <a
                      className="p-2 rounded-lg bg-slate-50 text-indigo-600 hover:bg-indigo-50 border border-slate-200 transition-colors shrink-0 ml-3"
                      href={b.href}
                      aria-label={t('legislation.download', { title: b.title })}
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
