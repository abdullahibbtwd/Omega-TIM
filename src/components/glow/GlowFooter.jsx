import { useTranslation } from 'react-i18next'
import { MapPin } from 'lucide-react'
import { assets } from '../../assets'

export default function GlowFooter() {
  const { t } = useTranslation()

  const modules = [
    t('glow.p1'),
    t('glow.p2'),
    t('glow.p3'),
    t('glow.p4'),
    t('glow.p5'),
    t('glow.p6'),
  ]

  const docs = [
    t('glow.r1'),
    t('glow.r2'),
    t('glow.r3'),
    t('glow.r4'),
    t('glow.r5'),
    t('glow.r6'),
  ]

  return (
    <footer className="mt-auto w-full border-t border-g-outline-v/30 bg-g-lowest">
      <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img
              src={assets.logoGlow}
              alt="OMEGA team BULGARIA"
              className="h-9 w-auto max-w-[140px] object-contain object-left"
            />
          </div>
          <p className="text-xs leading-relaxed text-g-outline sm:text-[13px]">
            {t('glow.footerBlurb')}
          </p>
          <div className="pt-1 text-[11px] font-medium text-g-outline sm:text-xs">
            <div className="flex items-start gap-1.5 text-g-muted">
              <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
              <span>{t('glow.footerAddress')}</span>
            </div>
            <div className="mt-1 pl-[18px] text-g-outline">{t('glow.footerCity')}</div>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-g-on sm:text-xs">
            {t('glow.footerModules')}
          </h4>
          <ul className="space-y-2 text-xs text-g-outline sm:text-[13px]">
            {modules.map((item) => (
              <li key={item}>
                <a
                  href="#modules"
                  className="transition-colors hover:text-g-on"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-g-on sm:text-xs">
            {t('glow.footerDocs')}
          </h4>
          <ul className="space-y-2 text-xs text-g-outline sm:text-[13px]">
            {docs.map((item) => (
              <li key={item}>
                <a href="#docs" className="transition-colors hover:text-g-on">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-g-on sm:text-xs">
            {t('glow.footerContact')}
          </h4>
          <div className="mb-4 space-y-2 text-xs text-g-outline sm:text-[13px]">
            <div>
              {t('glow.footerNational')}{' '}
              <span className="font-mono font-semibold text-g-on">
                0700 11 250
              </span>
            </div>
            <div>
              {t('glow.footerSofia')}{' '}
              <span className="font-mono font-semibold text-g-on">
                +359 2 980 4350
              </span>
            </div>
            <div>
              Email:{' '}
              <a
                className="text-g-primary hover:underline"
                href="mailto:office@omegatim.bg"
              >
                office@omegatim.bg
              </a>
            </div>
          </div>
          <div className="flex gap-2 text-xs text-g-outline">
            <a href="#privacy" className="transition-colors hover:text-g-on">
              {t('glow.privacy')}
            </a>
            <span>•</span>
            <a href="#terms" className="transition-colors hover:text-g-on">
              {t('glow.terms')}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-g-outline-v/20 px-4 py-4 text-center sm:px-6 lg:px-10">
        <p className="text-[11px] text-g-outline sm:text-xs">{t('glow.footerCopy')}</p>
      </div>
    </footer>
  )
}
