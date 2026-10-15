import { useTranslation } from 'react-i18next'
import {
  Calculator,
  Fuel,
  IdCard,
  Landmark,
  Receipt,
  Wallet,
} from 'lucide-react'

const MODULES = [
  {
    id: 'rzwin',
    icon: Calculator,
    badgeKey: 'm1Badge',
    titleKey: 'm1Title',
    subKey: 'm1Sub',
    bodyKey: 'm1Body',
    footKey: 'm1Foot',
    flagship: true,
  },
  {
    id: 'lswin',
    icon: IdCard,
    badgeKey: 'm2Badge',
    titleKey: 'm2Title',
    subKey: 'm2Sub',
    bodyKey: 'm2Body',
    footKey: 'm2Foot',
  },
  {
    id: 'honwin',
    icon: Receipt,
    badgeKey: 'm3Badge',
    titleKey: 'm3Title',
    subKey: 'm3Sub',
    bodyKey: 'm3Body',
    footKey: 'm3Foot',
  },
  {
    id: 'ac2012',
    icon: Landmark,
    badgeKey: 'm4Badge',
    titleKey: 'm4Title',
    subKey: 'm4Sub',
    bodyKey: 'm4Body',
    footKey: 'm4Foot',
  },
  {
    id: 'pldwin',
    icon: Wallet,
    badgeKey: 'm5Badge',
    titleKey: 'm5Title',
    subKey: 'm5Sub',
    bodyKey: 'm5Body',
    footKey: 'm5Foot',
  },
  {
    id: 'fuel',
    icon: Fuel,
    badgeKey: 'm6Badge',
    titleKey: 'm6Title',
    subKey: 'm6Sub',
    bodyKey: 'm6Body',
    footKey: 'm6Foot',
  },
]

export default function GlowModules() {
  const { t } = useTranslation()

  return (
    <section className="mt-10 w-full pt-6 sm:mt-14 sm:pt-8" id="modules">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-g-secondary sm:text-[11px]">
          {t('glow.modulesEyebrow')}
        </span>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-g-on sm:text-2xl sm:font-bold lg:text-3xl">
          {t('glow.modulesTitle')}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-g-outline sm:text-base">
          {t('glow.modulesSub')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((mod) => {
          const Icon = mod.icon
          return (
            <div
              key={mod.id}
              className="group flex flex-col justify-between rounded-xl border border-g-outline-v/60 bg-g-container p-4 transition-all duration-200 hover:border-g-pc sm:p-5 lg:p-6"
            >
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-g-pc/40 bg-g-pc/20 text-g-primary transition-transform group-hover:scale-105 sm:mb-4 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-g-on sm:text-lg">
                    {t(`glow.${mod.titleKey}`)}
                  </h3>
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-medium sm:text-[11px] ${
                      mod.flagship
                        ? 'border border-g-primary/20 bg-g-high text-g-primary'
                        : 'border border-g-outline-v/40 bg-g-high text-g-muted'
                    }`}
                  >
                    {t(`glow.${mod.badgeKey}`)}
                  </span>
                </div>
                <h4 className="mb-2 text-sm font-semibold text-g-secondary sm:text-base">
                  {t(`glow.${mod.subKey}`)}
                </h4>
                <p className="mb-4 text-xs leading-relaxed text-g-outline sm:text-[13px]">
                  {t(`glow.${mod.bodyKey}`)}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-g-outline-v/30 pt-3 text-[11px] font-medium text-g-muted sm:text-xs">
                <span>{t(`glow.${mod.footKey}`)}</span>
                <span className="inline-flex items-center font-bold text-g-primary transition-transform group-hover:translate-x-1">
                  {t('glow.details')}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
