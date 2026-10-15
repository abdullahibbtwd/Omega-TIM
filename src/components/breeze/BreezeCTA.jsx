import { useTranslation } from 'react-i18next'

export default function BreezeCTA() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-br-canvas py-10 sm:py-14" id="demo">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg bg-br-pc p-6 text-center text-white shadow-level3 sm:p-10 lg:p-20">
          <div className="pointer-events-none absolute top-0 right-0 -mt-16 -mr-16 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 -mb-16 -ml-16 h-80 w-80 rounded-full bg-br-cta/20 blur-2xl" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
            <span className="mb-3 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-br-primary-fixed sm:mb-4 sm:px-4 sm:text-[11px]">
              {t('breeze.ctaEyebrow')}
            </span>
            <h2 className="mb-2 text-xl font-semibold tracking-tight text-white sm:mb-3 sm:text-3xl sm:font-bold lg:text-4xl">
              {t('breeze.ctaTitle')}
            </h2>
            <p className="mb-6 max-w-2xl text-sm text-br-primary-fixed sm:mb-8 sm:text-base lg:text-lg">
              {t('breeze.ctaBody')}
            </p>
            <div className="flex w-full max-w-md flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center rounded bg-br-cta px-6 py-3 text-xs font-bold text-white shadow-level2 transition-all duration-200 hover:bg-br-cta-hover sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                {t('breeze.ctaDemo')}
              </a>
              <a
                href="#login"
                className="inline-flex w-full items-center justify-center rounded bg-white/10 px-6 py-3 text-xs font-semibold text-white transition-all duration-200 hover:bg-white/20 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                {t('breeze.ctaPortal')}
              </a>
            </div>
            <div className="mt-3 text-[11px] text-br-primary-fixed/80 sm:mt-4 sm:text-xs">
              {t('breeze.ctaNote')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
