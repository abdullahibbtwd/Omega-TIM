import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  BadgeCheck,
  CalendarCheck,
  CloudSync,
  Download,
  FolderOpen,
  LayoutGrid,
  Lock,
} from 'lucide-react'

const employees = [
  { initials: 'EK', name: 'Elena Kostova', deptKey: 'deptEng', gross: '5,400.00', net: '4,186.20', primary: true },
  { initials: 'IV', name: 'Ivan Vasilev', deptKey: 'deptLog', gross: '3,850.00', net: '2,987.40' },
  { initials: 'MS', name: 'Maria Simeonova', deptKey: 'deptAcc', gross: '4,600.00', net: '3,568.10' },
  { initials: 'DP', name: 'Dimitar Petrov', deptKey: 'deptFleet', gross: '2,600.00', net: '2,017.30' },
]

export default function DarkHero() {
  const { t } = useTranslation()
  const [tab, setTab] = useState('rzwin')

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute top-12 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-primary-container/5 blur-[100px]" />

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-6 pb-12 text-center sm:pt-8 sm:pb-16 lg:pb-24">
        <div className="mb-4 inline-flex max-w-full items-center gap-1.5 rounded-full border border-outline-variant bg-surface-container px-2.5 py-1 shadow-sm transition-all hover:border-outline sm:mb-6 sm:gap-2 sm:px-3.5">
          <span className="inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-secondary sm:h-2 sm:w-2" />
          <span className="truncate font-mono text-[10px] font-medium tracking-wide text-on-surface sm:text-[11px]">
            {t('dark.badge')}
          </span>
          <span className="hidden font-mono text-[11px] text-tertiary sm:inline">{t('dark.version')}</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-on-surface sm:text-3xl sm:font-bold sm:leading-tight lg:text-5xl">
          {t('dark.title')}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-tertiary sm:mt-4 sm:text-base">
          {t('dark.subtitle')}
        </p>

        <div className="mt-5 flex w-full max-w-md flex-col items-stretch gap-2 sm:mt-8 sm:max-w-none sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-container px-4 py-2.5 text-xs font-semibold text-white shadow-inst-btn transition-all hover:bg-primary-dark sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
          >
            <CalendarCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            {t('dark.bookDemo')}
          </a>
          <a
            href="#modules"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-outline-variant bg-surface-container px-4 py-2.5 text-xs font-semibold text-on-surface transition-all hover:border-outline hover:bg-surface-container-high sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
          >
            <LayoutGrid className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            {t('dark.explore')}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] text-tertiary sm:mt-10 sm:gap-6 sm:text-[11px]">
          {[t('dark.trust1'), t('dark.trust2'), t('dark.trust3')].map((label) => (
            <span key={label} className="inline-flex items-center gap-1 sm:gap-1.5">
              <BadgeCheck className="h-3.5 w-3.5 text-secondary sm:h-4 sm:w-4" />
              {label}
            </span>
          ))}
        </div>

        {/* Dashboard window */}
        <div className="mt-8 w-full overflow-hidden rounded-xl border border-outline-variant bg-surface-container text-left shadow-inst-modal sm:mt-12">
          <div className="flex h-11 items-center justify-between border-b border-outline-variant bg-surface-container-lowest px-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full border border-error/40 bg-error-container/80" />
              <span className="inline-block h-3 w-3 rounded-full border border-tertiary/40 bg-tertiary-container/80" />
              <span className="inline-block h-3 w-3 rounded-full border border-secondary/40 bg-secondary-container/80" />
              <span className="ml-3 hidden font-mono text-[11px] font-medium text-tertiary sm:inline-block">
                {t('dark.chromeTitle')}
              </span>
            </div>

            <div className="flex items-center gap-1 rounded border border-outline-variant bg-surface-container-low p-1">
              {[
                { id: 'rzwin', label: t('dark.tabRzwin'), live: true },
                { id: 'lswin', label: t('dark.tabLswin') },
                { id: 'ac', label: t('dark.tabAc'), hideSm: true },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  className={`rounded px-2.5 py-0.5 font-mono text-[11px] transition-colors ${
                    item.hideSm ? 'hidden sm:block' : ''
                  } ${
                    tab === item.id
                      ? 'bg-primary-container font-semibold text-white'
                      : 'text-tertiary hover:text-on-surface'
                  }`}
                >
                  {item.live && tab === item.id && (
                    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                  )}
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-tertiary">
              <span className="hidden font-mono text-[11px] md:inline">{t('dark.bulstat')}</span>
              <Lock className="h-4 w-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 bg-surface-container p-3 sm:gap-6 sm:p-4 lg:grid-cols-12 lg:p-6">
            <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-8">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                {[
                  { label: t('dark.kpiGross'), value: '148,250.00 BGN', sub: t('dark.kpiGrossSub'), accent: true },
                  { label: t('dark.kpiNet'), value: '114,890.00 BGN', sub: t('dark.kpiNetSub') },
                  { label: t('dark.kpiNssi'), value: '24,120.00 BGN', sub: t('dark.kpiNssiSub') },
                  { label: t('dark.kpiTax'), value: '9,240.00 BGN', sub: t('dark.kpiTaxSub'), accent: true },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-lg border border-outline-variant bg-surface-container-low p-2 sm:p-3"
                  >
                    <span className="block font-mono text-[9px] text-tertiary sm:text-[11px]">{kpi.label}</span>
                    <span className="mt-0.5 block font-mono text-[11px] font-semibold text-on-surface sm:mt-1 sm:text-[13px]">
                      {kpi.value}
                    </span>
                    <span
                      className={`mt-0.5 block font-mono text-[9px] sm:text-[11px] ${
                        kpi.accent ? 'text-secondary' : 'text-tertiary'
                      }`}
                    >
                      {kpi.sub}
                    </span>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest">
                <div className="flex items-center justify-between gap-2 border-b border-outline-variant bg-surface-container-low px-3 py-2 sm:px-4 sm:py-2.5">
                  <span className="min-w-0 truncate text-xs font-semibold text-on-surface sm:text-sm">
                    {t('dark.journalTitle')}
                  </span>
                  <span className="hidden shrink-0 items-center gap-1.5 rounded border border-secondary/25 bg-secondary/10 px-2 py-0.5 font-mono text-[11px] text-secondary sm:inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {t('dark.napApproved')}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-outline-variant font-mono text-[11px] uppercase tracking-wider text-tertiary">
                        <th className="px-3 py-2.5">{t('dark.thName')}</th>
                        <th className="px-3 py-2.5">{t('dark.thDept')}</th>
                        <th className="px-3 py-2.5">{t('dark.thGross')}</th>
                        <th className="px-3 py-2.5">{t('dark.thNet')}</th>
                        <th className="px-3 py-2.5">{t('dark.thStatus')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/30 font-mono text-[13px]">
                      {employees.map((row) => (
                        <tr
                          key={row.name}
                          className="transition-colors hover:bg-surface-container-high/40"
                        >
                          <td className="px-3 py-2.5">
                            <span className="flex items-center gap-2 text-sm font-semibold text-on-surface">
                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                                  row.primary
                                    ? 'bg-primary-container text-white'
                                    : 'bg-surface-container-highest text-tertiary'
                                }`}
                              >
                                {row.initials}
                              </span>
                              {row.name}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 text-tertiary">{t(`dark.${row.deptKey}`)}</td>
                          <td className="px-3 py-2.5 text-on-surface">{row.gross}</td>
                          <td className="px-3 py-2.5 font-semibold text-secondary">{row.net}</td>
                          <td className="px-3 py-2.5">
                            <span className="rounded border border-secondary/25 bg-secondary/10 px-2 py-0.5 text-[11px] text-secondary">
                              {t('dark.statusValid')}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-outline-variant bg-surface-container-low p-3 font-mono text-[11px]">
                <div className="flex items-center gap-3">
                  <CloudSync className="h-5 w-5 text-secondary" />
                  <div>
                    <span className="font-semibold text-on-surface">{t('dark.exportTitle')}</span>
                    <span className="block text-[11px] text-tertiary">{t('dark.exportFiles')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded border border-outline-variant bg-surface-container px-2.5 py-1 text-tertiary">
                    {t('dark.xmlReady')}
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded bg-primary-container px-3 py-1 font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {t('dark.exportBtn')}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-lg border border-outline-variant bg-surface-container-low p-4 lg:col-span-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-outline-variant pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-tertiary">
                    {t('dark.dossier')}
                  </span>
                  <FolderOpen className="h-4 w-4 text-tertiary" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-highest text-base font-bold text-surface-tint">
                    EK
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Elena Kostova</h4>
                    <p className="text-xs text-tertiary">{t('dark.role')}</p>
                  </div>
                </div>
                <div className="space-y-2.5 pt-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-tertiary">{t('dark.laborContract')}</span>
                    <span className="font-mono text-[11px] text-on-surface">Чл. 67, ал. 1, т. 1 КТ</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="shrink-0 text-tertiary">{t('dark.contractType')}</span>
                    <span className="text-right font-mono text-[11px] text-on-surface">
                      {t('dark.contractValue')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-tertiary">{t('dark.employmentState')}</span>
                    <span className="inline-flex items-center gap-1 rounded bg-secondary/10 px-2 py-0.5 text-[11px] font-semibold text-secondary">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      {t('dark.active')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="shrink-0 text-tertiary">{t('dark.leaveRemaining')}</span>
                    <span className="text-right font-mono text-[11px] font-semibold text-on-surface">
                      {t('dark.leaveValue')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="shrink-0 text-tertiary">{t('dark.attendance')}</span>
                    <span className="text-right font-mono text-[11px] font-semibold text-secondary">
                      {t('dark.attendanceValue')}
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5 border-t border-outline-variant pt-3">
                  <div className="flex justify-between font-mono text-[11px] text-tertiary">
                    <span>{t('dark.leaveAlloc')}</span>
                    <span className="text-on-surface">{t('dark.leaveTaken')}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
                    <div className="h-full rounded-full bg-primary-container" style={{ width: '30%' }} />
                  </div>
                </div>
              </div>
              <div className="border-t border-outline-variant pt-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-1.5 rounded border border-outline-variant bg-surface-container-high py-2 text-sm font-semibold text-on-surface transition-all hover:border-outline hover:bg-surface-container-highest"
                >
                  <FolderOpen className="h-4 w-4" />
                  {t('dark.openDossier')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
