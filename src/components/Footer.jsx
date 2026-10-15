import { useTranslation } from 'react-i18next'
import { Monitor, Phone, Mail, ShieldCheck } from 'lucide-react'
import { assets } from '../assets'

export default function Footer() {
  const { t } = useTranslation()

  const modules = [
    t('footer.module1'),
    t('footer.module2'),
    t('footer.module3'),
    t('footer.module4'),
    t('footer.module5'),
  ]

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={assets.logo}
                alt="Omega-TIM"
                className="h-8 w-auto logo-on-light"
              />
            </div>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              {t('footer.blurb')}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-700">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('footer.iso')}</span>
            </div>
            <div className="text-xs text-slate-500 mt-2 font-medium">
              {t('footer.hq')}
            </div>
          </div>

          <div>
            <div className="font-display font-bold text-slate-900 text-sm mb-4">
              {t('footer.modules')}
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {modules.map((item) => (
                <li key={item}>
                  <a
                    className="hover:text-indigo-600 transition-colors"
                    href="#products"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display font-bold text-slate-900 text-sm mb-4">
              {t('footer.resources')}
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a
                  className="hover:text-indigo-600 transition-colors"
                  href="#legislation"
                >
                  {t('footer.napGuide')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-indigo-600 transition-colors"
                  href="#legislation"
                >
                  {t('footer.laborUpdates')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-indigo-600 transition-colors"
                  href="#privacy"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-indigo-600 transition-colors"
                  href="#api"
                >
                  {t('footer.api')}
                </a>
              </li>
            </ul>
          </div>

          <div id="support">
            <div className="font-display font-bold text-slate-900 text-sm mb-4">
              {t('footer.support')}
            </div>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-600" />
                <a
                  className="font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  href="tel:070011250"
                >
                  0700 11 250
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-600" />
                <a
                  className="hover:text-indigo-600 transition-colors"
                  href="mailto:support@omegatim.bg"
                >
                  support@omegatim.bg
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-indigo-600" />
                <a
                  className="hover:text-indigo-600 transition-colors"
                  href="#anydesk"
                >
                  {t('footer.anydesk')}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-400">
                {t('footer.hours')}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
