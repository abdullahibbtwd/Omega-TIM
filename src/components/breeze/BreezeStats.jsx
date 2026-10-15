import { useTranslation } from 'react-i18next'

export default function BreezeStats() {
  const { t } = useTranslation()

  const stats = [
    {
      value: '3,500+',
      title: t('breeze.stat1Title'),
      sub: t('breeze.stat1Sub'),
      accent: 'text-br-pc',
    },
    {
      value: 'BGN 2.4B+',
      title: t('breeze.stat2Title'),
      sub: t('breeze.stat2Sub'),
      accent: 'text-br-pc',
    },
    {
      value: '99.98%',
      title: t('breeze.stat3Title'),
      sub: t('breeze.stat3Sub'),
      accent: 'text-br-pc',
    },
    {
      value: '100%',
      title: t('breeze.stat4Title'),
      sub: t('breeze.stat4Sub'),
      accent: 'text-br-cta',
    },
  ]

  return (
    <section className="w-full border-y border-br-line bg-br-panel py-8 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div
                className={`font-display text-2xl font-semibold tracking-tight sm:text-3xl sm:font-bold lg:text-4xl ${stat.accent}`}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-br-ink sm:text-sm">
                {stat.title}
              </div>
              <div className="text-[11px] text-br-slate sm:text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
