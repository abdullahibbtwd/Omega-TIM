import { useTranslation } from 'react-i18next'
import { ShieldCheck } from 'lucide-react'
import { assets } from '../../assets'

export default function BreezeFooter() {
  const { t } = useTranslation()

  const suite = [t('breeze.f1'), t('breeze.f2'), t('breeze.f3'), t('breeze.f4')]
  const compliance = [
    t('breeze.c1'),
    t('breeze.c2'),
    t('breeze.c3'),
    t('breeze.c4'),
  ]
  const support = [t('breeze.s1'), t('breeze.s2'), t('breeze.s3'), t('breeze.s4')]

  return (
    <footer className="w-full border-t border-br-line bg-br-panel py-10 sm:py-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4 lg:mb-10 lg:grid-cols-5 lg:gap-8">
          <div className="flex flex-col gap-2 lg:col-span-2">
            <div className="mb-1 flex flex-col gap-2">
              <img
                src={assets.logoGlow}
                alt="OMEGA team BULGARIA"
                className="h-10 w-auto max-w-[160px] object-contain object-left"
              />
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-br-ink sm:text-xs">
                  {t('breezeNav.brand')}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-br-slate">
                  {t('breezeNav.brandSub')}
                </span>
              </div>
            </div>
            <p className="max-w-sm text-[11px] leading-relaxed text-br-slate sm:text-xs">
              {t('breeze.footerBlurb')}
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-br-cta" />
              <span className="text-[10px] font-semibold text-br-slate sm:text-[11px]">
                {t('breeze.footerIso')}
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-br-ink sm:mb-4 sm:text-xs">
              {t('breeze.footerSuite')}
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              {suite.map((item) => (
                <li key={item}>
                  <a
                    href="#modules-bento"
                    className="text-[11px] text-br-slate transition-colors hover:text-br-pc sm:text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-br-ink sm:mb-4 sm:text-xs">
              {t('breeze.footerCompliance')}
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              {compliance.map((item) => (
                <li key={item}>
                  <a
                    href="#legislation"
                    className="text-[11px] text-br-slate transition-colors hover:text-br-pc sm:text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-br-ink sm:mb-4 sm:text-xs">
              {t('breeze.footerSupport')}
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              {support.map((item) => (
                <li key={item}>
                  <a
                    href="#support"
                    className="text-[11px] text-br-slate transition-colors hover:text-br-pc sm:text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-br-line pt-5 sm:pt-6 md:flex-row md:gap-4">
          <p className="text-center text-[11px] text-br-slate sm:text-xs md:text-left">
            {t('breeze.footerCopy')}
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#privacy"
              className="text-[10px] font-semibold text-br-slate hover:text-br-pc sm:text-[11px]"
            >
              {t('breeze.privacy')}
            </a>
            <a
              href="#terms"
              className="text-[10px] font-semibold text-br-slate hover:text-br-pc sm:text-[11px]"
            >
              {t('breeze.terms')}
            </a>
            <a
              href="#security"
              className="text-[10px] font-semibold text-br-slate hover:text-br-pc sm:text-[11px]"
            >
              {t('breeze.security')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
