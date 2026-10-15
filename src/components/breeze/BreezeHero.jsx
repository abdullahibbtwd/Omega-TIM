import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  BadgeCheck,
  Calculator,
  CircleCheck,
  History,
  IdCard,
  Landmark,
  Shield,
} from 'lucide-react'

const TABS = [
  { id: 'rzwin', icon: Calculator, labelKey: 'tabRzwin' },
  { id: 'lswin', icon: IdCard, labelKey: 'tabLswin' },
  { id: 'ac', icon: Landmark, labelKey: 'tabAc', hideSm: true },
]

const ROWS = [
  {
    initials: 'IK',
    name: 'Ivan Kostov',
    deptKey: 'deptEng',
    avatar: 'bg-br-primary-fixed text-br-primary',
    gross: '5,400.00',
    taxBase: '3,750.00',
    doo: '516.75',
    net: '4,192.15',
    status: 'valid',
  },
  {
    initials: 'ED',
    name: 'Elena Dimitrova',
    deptKey: 'deptFin',
    avatar: 'bg-br-secondary-fixed text-br-on-sf',
    gross: '4,200.00',
    taxBase: '3,621.24',
    doo: '578.76',
    net: '3,259.12',
    status: 'valid',
  },
  {
    initials: 'SP',
    name: 'Stoyan Petrov',
    deptKey: 'deptFleet',
    avatar: 'bg-br-panel text-br-ink',
    gross: '2,850.00',
    taxBase: '2,457.27',
    doo: '392.73',
    net: '2,211.54',
    status: 'calc',
  },
]

export default function BreezeHero() {
  const { t } = useTranslation()
  const [tab, setTab] = useState('rzwin')

  return (
    <section className="relative w-full overflow-hidden bg-br-surface py-10 sm:py-14 lg:py-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[480px] w-[980px] -translate-x-1/2 bg-gradient-to-b from-br-pc/10 via-br-variant/20 to-transparent blur-3xl" />

      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-br-line bg-br-container px-3 py-1.5 text-br-pc shadow-level1 sm:mb-6 sm:gap-2 sm:px-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-br-cta opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-br-cta" />
          </span>
          <span className="truncate text-[11px] font-semibold tracking-wide sm:text-[13px]">
            {t('breeze.badge')}
          </span>
        </div>

        <h1 className="mb-3 max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-br-ink sm:mb-4 sm:text-4xl sm:font-bold sm:leading-tight lg:text-5xl lg:leading-[1.15]">
          {t('breeze.titleBefore')}{' '}
          <span className="text-br-pc">{t('breeze.titleAccent')}</span>
        </h1>

        <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-br-slate sm:mb-8 sm:text-base lg:text-lg">
          {t('breeze.subtitle')}
        </p>

        <div className="mb-6 flex w-full max-w-md flex-col items-stretch justify-center gap-2.5 sm:mb-6 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#demo"
            className="inline-flex w-full items-center justify-center rounded bg-br-cta px-5 py-2.5 text-xs font-semibold text-white shadow-level1 transition-all duration-200 hover:bg-br-cta-hover hover:shadow-level2 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
          >
            {t('breeze.bookDemo')}
          </a>
          <a
            href="#modules-bento"
            className="inline-flex w-full items-center justify-center rounded border border-br-border bg-br-lowest px-5 py-2.5 text-xs font-semibold text-br-pc shadow-level1 transition-all duration-200 hover:border-br-pc hover:bg-br-canvas sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
          >
            {t('breeze.explore')}
          </a>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-br-slate sm:mb-10 sm:gap-x-6 sm:text-[13px]">
          {[
            { icon: BadgeCheck, label: t('breeze.trust1') },
            { icon: History, label: t('breeze.trust2') },
            { icon: Shield, label: t('breeze.trust3') },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <Icon className="h-4 w-4 text-br-pc" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Mockup window */}
        <div className="mt-2 w-full max-w-5xl overflow-hidden rounded-lg border border-br-line bg-br-lowest text-left shadow-level2">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-br-line bg-br-canvas px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-br-error sm:h-3 sm:w-3" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-br-cta sm:h-3 sm:w-3" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-br-ok sm:h-3 sm:w-3" />
              </div>
              <div className="hidden items-center gap-1 rounded border border-br-line bg-br-panel p-1 sm:flex">
                {TABS.map(({ id, icon: Icon, labelKey, hideSm }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setTab(id)}
                    className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold transition-colors ${
                      hideSm ? 'hidden lg:flex' : ''
                    } ${
                      tab === id
                        ? 'bg-br-lowest text-br-pc shadow-level1'
                        : 'text-br-slate hover:text-br-ink'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t(`breeze.${labelKey}`)}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded border border-br-line bg-br-lowest px-2 py-1 text-[10px] font-semibold text-br-slate sm:text-[11px]">
              <span className="h-2 w-2 rounded-full bg-br-ok" />
              {t('breeze.cloudSync')}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 bg-br-lowest p-3 sm:grid-cols-3 sm:gap-4 sm:p-4">
            <div className="rounded-lg border border-br-line bg-br-canvas p-3 sm:p-4">
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-br-slate sm:text-[11px]">
                  {t('breeze.kpiGross')}
                </span>
                <span className="rounded-full bg-br-ok-bg px-1.5 py-0.5 text-[10px] font-bold text-br-ok sm:text-[11px]">
                  +2.4% MoM
                </span>
              </div>
              <div className="font-display text-lg font-semibold tabular-nums-enterprise text-br-ink sm:text-2xl sm:font-bold">
                BGN 148,250.40
              </div>
              <div className="mt-0.5 text-[11px] text-br-slate sm:text-xs">
                {t('breeze.kpiGrossSub')}
              </div>
            </div>

            <div className="rounded-lg border border-br-line bg-br-canvas p-3 sm:p-4">
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-br-slate sm:text-[11px]">
                  {t('breeze.kpiInsured')}
                </span>
                <span className="rounded-full bg-br-notice-bg px-1.5 py-0.5 text-[10px] font-bold text-br-notice sm:text-[11px]">
                  RZWIN Active
                </span>
              </div>
              <div className="font-display text-lg font-semibold text-br-ink sm:text-2xl sm:font-bold">
                {t('breeze.kpiInsuredVal')}
              </div>
              <div className="mt-0.5 text-[11px] text-br-slate sm:text-xs">
                {t('breeze.kpiInsuredSub')}
              </div>
            </div>

            <div className="rounded-lg border border-br-line bg-br-canvas p-3 sm:p-4">
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-br-slate sm:text-[11px]">
                  {t('breeze.kpiTax')}
                </span>
                <span className="rounded-full bg-br-ok-bg px-1.5 py-0.5 text-[10px] font-bold text-br-ok sm:text-[11px]">
                  NSSI Ready
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <CircleCheck className="h-5 w-5 text-br-ok" />
                <span className="text-xs font-bold text-br-ink sm:text-sm">
                  {t('breeze.kpiTaxVal')}
                </span>
              </div>
              <div className="mt-0.5 text-[11px] text-br-slate sm:text-xs">
                {t('breeze.kpiTaxSub')}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto border-t border-br-line bg-br-panel/40 p-3 pt-0 sm:p-4 sm:pt-0">
            <table className="w-full min-w-[720px] text-left text-xs">
              <thead>
                <tr className="border-b border-br-line bg-br-canvas text-[10px] font-semibold uppercase tracking-wider text-br-slate sm:text-[11px]">
                  <th className="rounded-l px-3 py-2.5 sm:px-4">{t('breeze.thName')}</th>
                  <th className="px-3 py-2.5 sm:px-4">{t('breeze.thDept')}</th>
                  <th className="px-3 py-2.5 text-right sm:px-4">{t('breeze.thGross')}</th>
                  <th className="px-3 py-2.5 text-right sm:px-4">{t('breeze.thTaxBase')}</th>
                  <th className="px-3 py-2.5 text-right sm:px-4">{t('breeze.thDoo')}</th>
                  <th className="px-3 py-2.5 text-right sm:px-4">{t('breeze.thNet')}</th>
                  <th className="rounded-r px-3 py-2.5 text-center sm:px-4">
                    {t('breeze.thStatus')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-br-line bg-br-lowest">
                {ROWS.map((row) => (
                  <tr
                    key={row.name}
                    className="transition-colors hover:bg-br-panel"
                  >
                    <td className="px-3 py-3 sm:px-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-br-ink sm:text-sm">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ${row.avatar}`}
                        >
                          {row.initials}
                        </span>
                        {row.name}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-br-slate sm:px-4">
                      {t(`breeze.${row.deptKey}`)}
                    </td>
                    <td className="px-3 py-3 text-right font-mono text-[11px] font-medium tabular-nums-enterprise text-br-ink sm:px-4 sm:text-[13px]">
                      {row.gross}
                    </td>
                    <td className="px-3 py-3 text-right font-mono text-[11px] font-medium tabular-nums-enterprise text-br-ink sm:px-4 sm:text-[13px]">
                      {row.taxBase}
                    </td>
                    <td className="px-3 py-3 text-right font-mono text-[11px] font-medium tabular-nums-enterprise text-br-ink sm:px-4 sm:text-[13px]">
                      {row.doo}
                    </td>
                    <td className="px-3 py-3 text-right font-mono text-[11px] font-bold tabular-nums-enterprise text-br-pc sm:px-4 sm:text-[13px]">
                      {row.net}
                    </td>
                    <td className="px-3 py-3 text-center sm:px-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-[11px] ${
                          row.status === 'valid'
                            ? 'bg-br-ok-bg text-br-ok'
                            : 'bg-br-notice-bg text-br-notice'
                        }`}
                      >
                        {row.status === 'valid'
                          ? t('breeze.statusValid')
                          : t('breeze.statusCalc')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
