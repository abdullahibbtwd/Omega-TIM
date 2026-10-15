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
    <footer className="border-t border-slate-200 bg-white text-sm text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-12 lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <img
                src={assets.logo}
                alt="Omega-TIM"
                className="logo-on-light h-7 w-auto sm:h-8"
              />
            </div>
            <p className="mb-4 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
              {t('footer.blurb')}
            </p>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-teal-700 sm:text-xs">
              <ShieldCheck className="h-4 w-4" />
              <span>{t('footer.iso')}</span>
            </div>
            <div className="mt-2 text-[11px] font-medium text-slate-500 sm:text-xs">
              {t('footer.hq')}
            </div>
          </div>

          <div>
            <div className="mb-3 font-display text-xs font-semibold text-slate-900 sm:mb-4 sm:text-sm sm:font-bold">
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
            <div className="mb-3 font-display text-xs font-semibold text-slate-900 sm:mb-4 sm:text-sm sm:font-bold">
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
            <div className="mb-3 font-display text-xs font-semibold text-slate-900 sm:mb-4 sm:text-sm sm:font-bold">
              {t('footer.support')}
            </div>
            <div className="space-y-2.5 text-[11px] text-slate-600 sm:text-xs">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo-600" />
                <a
                  className="font-semibold text-slate-900 transition-colors hover:text-indigo-600 sm:font-bold"
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

        <div className="border-t border-slate-200 pt-6 text-center text-[11px] text-slate-500 sm:pt-8 sm:text-xs">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
