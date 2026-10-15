import { useTranslation } from 'react-i18next'
import { Phone } from 'lucide-react'

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-indigo-600 text-white text-center" id="demo">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-base sm:text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-indigo-700 font-semibold text-sm shadow hover:bg-indigo-50 transition-all"
            href="#demo"
          >
            {t('cta.demo')}
          </a>
          <a
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            href="tel:070011250"
          >
            <Phone className="w-4 h-4" />
            {t('cta.call')}
          </a>
        </div>
      </div>
    </section>
  )
}
