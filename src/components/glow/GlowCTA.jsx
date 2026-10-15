import { useTranslation } from 'react-i18next'

export default function GlowCTA() {
  const { t } = useTranslation()

  return (
    <section className="mt-10 w-full sm:mt-14" id="demo">
      <div className="relative flex w-full flex-col items-center justify-between gap-5 overflow-hidden rounded-2xl border border-g-sc/40 bg-gradient-to-r from-g-container via-g-high to-g-container p-5 text-center shadow-2xl sm:gap-6 sm:p-8 md:flex-row md:text-left lg:p-10">
        <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-g-sc/10 blur-3xl" />
        <div className="relative">
          <span className="text-[10px] font-bold uppercase tracking-widest text-g-secondary sm:text-[11px]">
            {t('glow.ctaEyebrow')}
          </span>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-g-on sm:text-2xl sm:font-bold lg:text-3xl">
            {t('glow.ctaTitle')}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-g-outline sm:text-base">
            {t('glow.ctaBody')}
          </p>
        </div>
        <div className="relative w-full shrink-0 sm:w-auto">
          <a
            href="#demo"
            className="block w-full rounded-lg bg-gradient-to-r from-g-sc to-g-secondary px-6 py-2.5 text-center text-xs font-semibold text-g-lowest shadow-[0_0_24px_rgba(253,139,0,0.35)] transition-all duration-150 hover:shadow-[0_0_30px_rgba(253,139,0,0.55)] active:scale-[0.98] sm:w-auto sm:py-3 sm:text-sm"
          >
            {t('glow.ctaBtn')}
          </a>
        </div>
      </div>
    </section>
  )
}
