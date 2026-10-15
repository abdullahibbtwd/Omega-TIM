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
      className="border-b border-slate-200 bg-white py-10 sm:py-20"
      id="legislation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-8 flex flex-col justify-between md:mb-12 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 sm:text-xs">
              {t('legislation.eyebrow')}
            </span>
            <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl sm:font-bold lg:text-4xl">
              {t('legislation.title')}
            </h2>
          </div>
          <div className="mt-3 md:mt-0">
            <a
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 sm:text-sm"
              href="#all-updates"
            >
              {t('legislation.archive')}
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-200 pb-3 sm:mb-6 sm:pb-4">
              <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
                <Terminal className="h-4 w-4 shrink-0 text-indigo-600 sm:h-5 sm:w-5" />
                <h3 className="font-display text-base font-semibold text-slate-900 sm:text-lg sm:font-bold">
                  {t('legislation.buildsTitle')}
                </h3>
              </div>
              <span className="shrink-0 rounded border border-indigo-100 bg-indigo-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-indigo-700 sm:px-2.5 sm:py-1 sm:text-xs">
                {t('legislation.channels')}
              </span>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {builds.map((item) => (
                <div
                  key={item.title}
                  className={`relative border-l-2 pl-5 sm:pl-6 ${
                    item.active ? 'border-indigo-600' : 'border-slate-200'
                  }`}
                >
                  <div
                    className={`absolute -left-1.5 top-0.5 h-3 w-3 rounded-full ${
                      item.active
                        ? 'bg-indigo-600 ring-4 ring-indigo-100'
                        : 'bg-slate-300'
                    }`}
                  />
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-900 sm:text-sm sm:font-bold">
                      {item.title}
                    </span>
                    <span className="shrink-0 font-mono text-[10px] text-slate-400 sm:text-xs">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 sm:text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {bulletins.map((b) => {
              const Icon = b.icon
              return (
                <div
                  key={b.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-300 sm:p-5"
                >
                  <div className="flex items-start justify-between">
                    <div className="min-w-0">
                      <span
                        className={`mb-2 inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[10px] font-semibold sm:px-2.5 sm:text-xs ${b.badgeClass}`}
                      >
                        <Icon className="h-3 w-3" />
                        {b.badge}
                      </span>
                      <h4 className="font-display text-sm font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-base sm:font-bold">
                        {b.title}
                      </h4>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                        {b.body}
                      </p>
                    </div>
                    <a
                      className="ml-3 shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-1.5 text-indigo-600 transition-colors hover:bg-indigo-50 sm:p-2"
                      href={b.href}
                      aria-label={t('legislation.download', { title: b.title })}
                    >
                      <Download className="h-4 w-4 sm:h-5 sm:w-5" />
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
