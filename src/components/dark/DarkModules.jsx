import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Banknote,
  FileText,
  Fuel,
  Landmark,
  RefreshCw,
  Users,
} from 'lucide-react'

export default function DarkModules() {
  const { t } = useTranslation()

  const cards = [
    {
      id: 'RZWIN',
      icon: Banknote,
      accent: 'primary',
      title: t('dark.m1Title'),
      body: t('dark.m1Body'),
      foot: t('dark.m1Foot'),
      rows: [
        ['Declaration 1 (Д1)', 'Auto-Mapped', true],
        ['Declaration 6 (Д6)', 'Validated', true],
        ['Фиш за заплата', 'PDF • Signed', false],
      ],
    },
    {
      id: 'LSWIN',
      icon: Users,
      accent: 'secondary',
      title: t('dark.m2Title'),
      body: t('dark.m2Body'),
      foot: t('dark.m2Foot'),
      rows: [
        ['Notification Art. 62 NAP', 'Submitted', true],
        ['Sick Leaves (НОИ)', 'Приложение 9', false],
        ['E-Dossier Archiving', 'GDPR Compliant', false],
      ],
    },
    {
      id: 'HONWIN',
      icon: FileText,
      accent: 'primary',
      title: t('dark.m3Title'),
      body: t('dark.m3Body'),
      foot: t('dark.m3Foot'),
      rows: [
        ['Statutory Expense (НПР)', '25% (Чл. 29 ЗДДФЛ)', false],
        ['Withholding Slip', 'Сметка изплатени суми', true],
        ['Declaration Art. 55', 'Direct Generation', false],
      ],
    },
    {
      id: 'AC2012',
      icon: Landmark,
      accent: 'secondary',
      title: t('dark.m4Title'),
      body: t('dark.m4Body'),
      foot: t('dark.m4Foot'),
      rows: [
        ['ДДС Дневник Покупки', 'Validated XML', false],
        ['ДДС Дневник Продажби', 'Validated XML', false],
        ['Оборотна ведомост', 'Multi-Currency', true],
      ],
    },
    {
      id: 'PLDWIN',
      icon: RefreshCw,
      accent: 'primary',
      title: t('dark.m5Title'),
      body: t('dark.m5Body'),
      foot: t('dark.m5Foot'),
      rows: [
        ['Budget Multi-Order', 'ISO 20022 SEPA', false],
        ['Mass Salary Batching', '1-Click Dispatch', true],
        ['BNB Protocol', 'BISERA-ready', false],
      ],
    },
    {
      id: 'FLEET',
      icon: Fuel,
      accent: 'muted',
      title: t('dark.m6Title'),
      body: t('dark.m6Body'),
      foot: t('dark.m6Foot'),
      rows: [
        ['Road Sheets', 'Automated Ledger', false],
        ['Norm vs. Actual', 'Δ -0.4L', true],
        ['Direct Journalizing', 'Posting to AC2012', false],
      ],
    },
  ]

  return (
    <>
      <section className="w-full border-y border-outline-variant bg-surface-container-lowest py-6 sm:py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-center sm:gap-6 lg:grid-cols-4">
          {[
            [t('dark.metricsYears'), t('dark.metricsYearsSub'), false],
            [t('dark.metricsOrgs'), t('dark.metricsOrgsSub'), false],
            [t('dark.metricsAcc'), t('dark.metricsAccSub'), true],
            [t('dark.metricsPayslips'), t('dark.metricsPayslipsSub'), false],
          ].map(([value, label, accent]) => (
            <div key={label} className="space-y-0.5 sm:space-y-1">
              <span
                className={`block text-lg font-semibold tracking-tight sm:text-2xl sm:font-bold lg:text-3xl ${
                  accent ? 'text-secondary' : 'text-on-surface'
                }`}
              >
                {value}
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-wider text-tertiary sm:text-[11px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:py-16 lg:py-24" id="modules">
        <div className="mb-8 max-w-2xl sm:mb-12">
          <div className="mb-1.5 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-surface-tint sm:mb-2 sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-surface-tint" />
            {t('dark.modulesEyebrow')}
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-on-surface sm:text-3xl sm:font-bold lg:text-4xl">
            {t('dark.modulesTitle')}
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-tertiary sm:text-sm">{t('dark.modulesSub')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            const iconColor =
              card.accent === 'secondary'
                ? 'text-secondary'
                : card.accent === 'muted'
                  ? 'text-tertiary'
                  : 'text-surface-tint'
            const badgeClass =
              card.accent === 'secondary'
                ? 'bg-secondary/10 text-secondary border-secondary/25'
                : card.accent === 'primary'
                  ? 'bg-primary-container/20 text-surface-tint border-surface-tint/30'
                  : 'bg-surface-container-high text-tertiary border-outline-variant'

            return (
              <div
                key={card.id}
                className="flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container p-4 transition-all hover:border-outline sm:p-6"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-high sm:h-10 sm:w-10 ${iconColor}`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span
                      className={`rounded border px-2 py-0.5 font-mono text-[10px] sm:text-[11px] ${badgeClass}`}
                    >
                      {card.id}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-on-surface sm:text-base">{card.title}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-tertiary sm:text-xs">{card.body}</p>
                  </div>
                  <div className="space-y-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest p-2.5 font-mono text-[10px] sm:space-y-2 sm:p-3 sm:text-[11px]">
                    {card.rows.map(([left, right, accent]) => (
                      <div key={left} className="flex justify-between gap-2 text-tertiary">
                        <span className="min-w-0 truncate">{left}</span>
                        <span
                          className={`shrink-0 font-medium ${
                            accent ? 'text-secondary' : 'text-on-surface'
                          }`}
                        >
                          {right}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2 border-t border-outline-variant pt-3 text-[11px] sm:mt-4 sm:pt-4 sm:text-sm">
                  <span className="min-w-0 truncate text-tertiary">{card.foot}</span>
                  <ArrowRight className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${iconColor}`} />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
