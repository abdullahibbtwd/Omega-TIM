import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CircleCheck,
  ClipboardCheck,
  Fuel,
  Landmark,
  Receipt,
  Wallet,
} from 'lucide-react'
import { assets } from '../assets'

const TAB_IDS = ['rzwin', 'lswin', 'ac2012', 'honwin', 'fuel', 'pldwin']

function TabButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-semibold transition-all duration-150 sm:px-4 sm:py-2.5 sm:text-sm ${
        active
          ? 'bg-indigo-600 text-white shadow-sm'
          : 'border border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900'
      }`}
    >
      {children}
    </button>
  )
}

function LswinPane() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-6 space-y-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <BadgeCheck className="w-3.5 h-3.5" />
          {t('products.lswin.badge')}
        </div>
        <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl sm:font-bold lg:text-3xl">
          {t('products.lswin.title')}
        </h3>
        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm lg:text-base">
          {t('products.lswin.body')}
        </p>

        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3 shadow-level1">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs gap-2">
            <span className="font-semibold text-slate-700">
              {t('products.lswin.params')}
            </span>
            <span className="text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded shrink-0">
              {t('products.lswin.ready')}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded bg-slate-50 border border-slate-200/60">
              <span className="text-slate-400 block text-[10px] uppercase font-medium">
                {t('products.lswin.contractType')}
              </span>
              <span className="font-semibold text-slate-800">
                {t('products.lswin.contractValue')}
              </span>
              <span className="text-[11px] text-slate-500 block">
                {t('products.lswin.probation')}
              </span>
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-200/60">
              <span className="text-slate-400 block text-[10px] uppercase font-medium">
                {t('products.lswin.laborRecord')}
              </span>
              <span className="font-semibold text-slate-800">
                {t('products.lswin.laborRecordValue')}
              </span>
              <span className="text-[11px] text-emerald-600 font-medium block">
                {t('products.lswin.nssiValidated')}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1 text-xs text-slate-600">
            <CircleCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{t('products.lswin.xmlGen')}</span>
          </div>
        </div>

        <div className="pt-2">
          <a
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow transition-all hover:bg-indigo-700 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
            href="#demo"
          >
            {t('products.lswin.cta')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="lg:col-span-6 relative">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
          <img
            alt={t('products.lswin.imgAlt')}
            className="w-full h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            src={assets.hrOffice}
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl p-3.5 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-500 text-white flex items-center justify-center shrink-0">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900">
                {t('products.lswin.overlayTitle')}
              </div>
              <div className="text-[11px] text-slate-600 font-medium">
                {t('products.lswin.overlayBody')}
              </div>
            </div>
            <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
              {t('products.lswin.approved')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function RzwinPane() {
  const { t } = useTranslation()
  const items = [
    t('products.rzwin.item1'),
    t('products.rzwin.item2'),
    t('products.rzwin.item3'),
  ]
  const rows = [
    { label: t('products.rzwin.baseGross'), value: 'BGN 3,200.00', tone: 'slate' },
    { label: t('products.rzwin.seniority'), value: 'BGN 448.00', tone: 'slate' },
    { label: t('products.rzwin.doo'), value: '- BGN 502.70', tone: 'rose' },
    { label: t('products.rzwin.dod'), value: '- BGN 314.53', tone: 'rose' },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5 space-y-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
          <Calculator className="w-3.5 h-3.5" />
          {t('products.rzwin.badge')}
        </div>
        <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl sm:font-bold lg:text-3xl">
          {t('products.rzwin.title')}
        </h3>
        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm lg:text-base">
          {t('products.rzwin.body')}
        </p>
        <ul className="space-y-2 text-xs text-slate-600 sm:space-y-2.5 sm:text-sm">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CircleCheck className="h-4 w-4 shrink-0 text-teal-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-7">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-sm">
                {t('products.rzwin.sheetTitle')}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                BGN
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400">
              {t('products.rzwin.protocol')}
            </span>
          </div>
          <div className="space-y-2.5 text-xs sm:text-sm">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-center py-2 px-3 rounded bg-slate-50 gap-3"
              >
                <span className="text-slate-600">{row.label}</span>
                <span
                  className={`font-mono font-semibold tabular-nums-enterprise shrink-0 ${
                    row.tone === 'rose' ? 'text-rose-600' : 'text-slate-900'
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center py-3 px-4 rounded-lg bg-indigo-50/70 border border-indigo-100 text-slate-900 font-bold mt-3 gap-3">
              <span className="text-xs sm:text-sm">
                {t('products.rzwin.netPayout')}
              </span>
              <span className="shrink-0 font-mono text-sm font-bold tabular-nums-enterprise text-indigo-700 sm:text-base sm:font-extrabold">
                BGN 2,830.77
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Ac2012Pane() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5 space-y-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
          <Landmark className="w-3.5 h-3.5" />
          {t('products.ac2012.badge')}
        </div>
        <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl sm:font-bold lg:text-3xl">
          {t('products.ac2012.title')}
        </h3>
        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm lg:text-base">
          {t('products.ac2012.body')}
        </p>
        <ul className="space-y-2 text-xs text-slate-600 sm:space-y-2.5 sm:text-sm">
          <li className="flex items-center gap-2">
            <CircleCheck className="h-4 w-4 shrink-0 text-teal-600" />
            <span>{t('products.ac2012.item1')}</span>
          </li>
          <li className="flex items-center gap-2">
            <CircleCheck className="h-4 w-4 shrink-0 text-teal-600" />
            <span>{t('products.ac2012.item2')}</span>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-7">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="font-bold text-slate-900 text-sm">
              {t('products.ac2012.sheetTitle')}
            </span>
            <span className="font-mono text-xs text-slate-400">
              {t('products.ac2012.fiscal')}
            </span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-slate-100 font-semibold text-slate-500 uppercase">
              <span>{t('products.ac2012.account')}</span>
              <span className="text-right">{t('products.ac2012.debit')}</span>
              <span className="text-right">{t('products.ac2012.credit')}</span>
            </div>
            {[
              ['501 Kasa v BGN', '14,210.00', '8,950.00'],
              ['503 Razplashtatelna Smetka', '542,100.00', '321,450.00'],
              ['4532 DDS za Vnasiane (VAT)', '42,670.00', '42,670.00'],
              ['421 Personel (RZWIN Sync)', '148,250.00', '148,250.00'],
            ].map(([account, debit, credit], i, arr) => (
              <div
                key={account}
                className={`grid grid-cols-3 gap-2 py-2 ${
                  i < arr.length - 1 ? 'border-b border-slate-100' : ''
                }`}
              >
                <span className="text-slate-800 font-medium">{account}</span>
                <span className="font-mono text-slate-700 text-right tabular-nums-enterprise">
                  {debit}
                </span>
                <span className="font-mono text-slate-700 text-right tabular-nums-enterprise">
                  {credit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SimplePane({ icon: Icon, title, description, tags }) {
  return (
    <div className="max-w-3xl mx-auto text-center py-8">
      <Icon className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
      <h3 className="mb-2 font-display text-xl font-semibold text-slate-900 sm:text-2xl sm:font-bold">
        {title}
      </h3>
      <p className="mb-6 text-xs leading-relaxed text-slate-600 sm:text-sm">{description}</p>
      <div className="inline-flex flex-wrap justify-center gap-4 text-xs font-semibold">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  const { t } = useTranslation()
  const [active, setActive] = useState('lswin')

  return (
    <section className="border-b border-slate-200 bg-white py-10 sm:py-20" id="products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <h2 className="mb-2 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:mb-3 sm:text-3xl sm:font-bold lg:text-4xl">
            {t('products.title')}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="no-scrollbar mb-6 flex items-center justify-start gap-2 overflow-x-auto pb-3 sm:mb-8 sm:pb-4 lg:justify-center">
          {TAB_IDS.map((id) => (
            <TabButton
              key={id}
              active={active === id}
              onClick={() => setActive(id)}
            >
              {t(`products.tabs.${id}`)}
            </TabButton>
          ))}
        </div>

        <div className="min-h-[360px] rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 shadow-sm sm:min-h-[460px] sm:p-6 lg:p-10">
          {active === 'lswin' && <LswinPane />}
          {active === 'rzwin' && <RzwinPane />}
          {active === 'ac2012' && <Ac2012Pane />}
          {active === 'honwin' && (
            <SimplePane
              icon={Receipt}
              title={t('products.honwin.title')}
              description={t('products.honwin.body')}
              tags={[t('products.honwin.tag1'), t('products.honwin.tag2')]}
            />
          )}
          {active === 'fuel' && (
            <SimplePane
              icon={Fuel}
              title={t('products.fuel.title')}
              description={t('products.fuel.body')}
              tags={[t('products.fuel.tag1'), t('products.fuel.tag2')]}
            />
          )}
          {active === 'pldwin' && (
            <SimplePane
              icon={Wallet}
              title={t('products.pldwin.title')}
              description={t('products.pldwin.body')}
              tags={[t('products.pldwin.tag1'), t('products.pldwin.tag2')]}
            />
          )}
        </div>
      </div>
    </section>
  )
}
