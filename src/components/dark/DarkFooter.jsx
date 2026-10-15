import { useTranslation } from 'react-i18next'
import { assets } from '../../assets'

export default function DarkFooter() {
  const { t } = useTranslation()

  const products = [
    t('dark.p1'),
    t('dark.p2'),
    t('dark.p3'),
    t('dark.p4'),
    t('dark.p5'),
    t('dark.p6'),
  ]
  const resources = [
    t('dark.r1'),
    t('dark.r2'),
    t('dark.r3'),
    t('dark.r4'),
    t('dark.r5'),
  ]

  return (
    <footer
      className="w-full border-t border-outline-variant bg-surface-container-lowest pb-28"
      id="support"
    >
      <div className="mx-auto w-full max-w-7xl px-4 pt-8 pb-6 sm:pt-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2">
              <img src={assets.logo} alt="Omega-TIM" className="h-5 w-auto sm:h-6" />
            </div>
            <p className="text-[11px] leading-relaxed text-on-surface-variant sm:text-xs">
              {t('dark.footerBlurb')}
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {['ISO 9001:2015', 'ISO 27001'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded border border-outline-variant bg-surface-container-low px-2 py-0.5 font-mono text-[11px] text-tertiary"
                >
                  {badge}
                </span>
              ))}
              <span className="inline-flex items-center rounded border border-outline-variant bg-surface-container-low px-2 py-0.5 font-mono text-[11px] text-secondary">
                NAP Verified
              </span>
            </div>
          </div>

          <div className="space-y-2" id="docs">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-on-surface sm:text-sm">
              {t('dark.footerProducts')}
            </h4>
            <ul className="space-y-1">
              {products.map((item) => (
                <li key={item}>
                  <a
                    href="#modules"
                    className="text-[11px] text-on-surface-variant transition-colors hover:text-on-surface sm:text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2" id="legislation">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-on-surface sm:text-sm">
              {t('dark.footerResources')}
            </h4>
            <ul className="space-y-1">
              {resources.map((item) => (
                <li key={item}>
                  <a
                    href="#support"
                    className="text-[11px] text-on-surface-variant transition-colors hover:text-on-surface sm:text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-on-surface sm:text-sm">
              {t('dark.footerHq')}
            </h4>
            <div className="space-y-1 text-xs text-on-surface-variant">
              <p className="leading-relaxed whitespace-pre-line">{t('dark.footerAddress')}</p>
              <p className="pt-1 font-mono text-[13px] text-on-surface">
                {t('dark.footerPhone')}{' '}
                <span className="text-secondary">0700 11 250</span>
              </p>
              <p className="font-mono text-[13px]">{t('dark.footerDirect')}</p>
              <p className="font-mono text-[13px]">
                {t('dark.footerEmail')}{' '}
                <a
                  href="mailto:office@omegatim.bg"
                  className="transition-colors hover:text-surface-tint"
                >
                  office@omegatim.bg
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-outline-variant pt-4 font-mono text-[11px] text-on-surface-variant sm:flex-row">
          <div>{t('dark.footerCopy')}</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="transition-colors hover:text-on-surface">
              {t('dark.privacy')}
            </a>
            <a href="#terms" className="transition-colors hover:text-on-surface">
              {t('dark.terms')}
            </a>
            <a href="#security" className="transition-colors hover:text-on-surface">
              {t('dark.security')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
