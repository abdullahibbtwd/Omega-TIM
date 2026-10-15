import { useTranslation } from 'react-i18next'
import { Phone } from 'lucide-react'

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section className="bg-indigo-600 py-10 text-center text-white sm:py-16" id="demo">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-3 font-display text-2xl font-semibold tracking-tight sm:mb-4 sm:text-3xl sm:font-bold lg:text-4xl">
          {t('cta.title')}
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-sm text-indigo-100 sm:mb-8 sm:text-base lg:text-lg">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center sm:gap-4">
          <a
            className="w-full rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-indigo-700 shadow transition-all hover:bg-indigo-50 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
            href="#demo"
          >
            {t('cta.demo')}
          </a>
          <a
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
            href="tel:070011250"
          >
            <Phone className="h-4 w-4" />
            {t('cta.call')}
          </a>
        </div>
      </div>
    </section>
  )
}
