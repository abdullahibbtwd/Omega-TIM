import { useTranslation } from 'react-i18next'
import {
  Calculator,
  IdCard,
  Landmark,
  Receipt,
  Truck,
  Wallet,
} from 'lucide-react'

const MODULES = [
  {
    id: 'rzwin',
    icon: Calculator,
    badgeKey: 'm1Badge',
    badgeOk: true,
    titleKey: 'm1Title',
    subKey: 'm1Sub',
    bodyKey: 'm1Body',
    tags: ['m1t1', 'm1t2', 'm1t3'],
    linkKey: 'm1Link',
  },
  {
    id: 'lswin',
    icon: IdCard,
    badgeKey: 'm2Badge',
    titleKey: 'm2Title',
    subKey: 'm2Sub',
    bodyKey: 'm2Body',
    tags: ['m2t1', 'm2t2', 'm2t3'],
    linkKey: 'm2Link',
  },
  {
    id: 'honwin',
    icon: Receipt,
    badgeKey: 'm3Badge',
    titleKey: 'm3Title',
    subKey: 'm3Sub',
    bodyKey: 'm3Body',
    tags: ['m3t1', 'm3t2', 'm3t3'],
    linkKey: 'm3Link',
  },
  {
    id: 'ac2012',
    icon: Landmark,
    badgeKey: 'm4Badge',
    badgeOk: true,
    titleKey: 'm4Title',
    subKey: 'm4Sub',
    bodyKey: 'm4Body',
    tags: ['m4t1', 'm4t2', 'm4t3'],
    linkKey: 'm4Link',
  },
  {
    id: 'pldwin',
    icon: Wallet,
    badgeKey: 'm5Badge',
    titleKey: 'm5Title',
    subKey: 'm5Sub',
    bodyKey: 'm5Body',
    tags: ['m5t1', 'm5t2', 'm5t3'],
    linkKey: 'm5Link',
  },
  {
    id: 'fuel',
    icon: Truck,
    badgeKey: 'm6Badge',
    titleKey: 'm6Title',
    subKey: 'm6Sub',
    bodyKey: 'm6Body',
    tags: ['m6t1', 'm6t2', 'm6t3'],
    linkKey: 'm6Link',
  },
]

export default function BreezeModules() {
  const { t } = useTranslation()

  return (
    <section
      className="w-full bg-br-canvas py-10 sm:py-14 lg:py-24"
      id="modules-bento"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded bg-br-notice-bg px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-br-pc sm:text-[11px]">
            {t('breeze.modulesEyebrow')}
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-br-ink sm:text-2xl sm:font-bold lg:text-3xl">
            {t('breeze.modulesTitle')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-br-slate sm:text-base">
            {t('breeze.modulesSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {MODULES.map((mod) => {
            const Icon = mod.icon
            return (
              <div
                key={mod.id}
                className="flex flex-col justify-between rounded-lg border border-br-line bg-br-lowest p-4 shadow-level1 transition-shadow hover:border-br-border hover:shadow-level2 sm:p-5 lg:p-6"
              >
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-br-notice-bg text-br-pc sm:mb-4 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-br-ink sm:text-lg sm:font-bold">
                      {t(`breeze.${mod.titleKey}`)}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-[11px] ${
                        mod.badgeOk
                          ? 'bg-br-ok-bg text-br-ok'
                          : 'bg-br-panel text-br-slate'
                      }`}
                    >
                      {t(`breeze.${mod.badgeKey}`)}
                    </span>
                  </div>
                  <p className="mb-2 text-xs font-medium text-br-pc sm:mb-3 sm:text-sm">
                    {t(`breeze.${mod.subKey}`)}
                  </p>
                  <p className="mb-3 text-xs leading-relaxed text-br-slate sm:mb-4 sm:text-sm">
                    {t(`breeze.${mod.bodyKey}`)}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {mod.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-br-panel px-2 py-1 text-[10px] font-semibold text-br-slate sm:text-[11px]"
                      >
                        {t(`breeze.${tag}`)}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-br-pc hover:text-br-pc-hover sm:text-sm"
                >
                  {t(`breeze.${mod.linkKey}`)}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
