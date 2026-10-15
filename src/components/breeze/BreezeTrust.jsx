import { useTranslation } from 'react-i18next'
import { CloudCheck, Headset, MapPin, Phone, RefreshCw } from 'lucide-react'
import { assets } from '../../assets'

export default function BreezeTrust() {
  const { t } = useTranslation()

  const points = [
    { icon: Headset, titleKey: 't1Title', bodyKey: 't1Body' },
    { icon: RefreshCw, titleKey: 't2Title', bodyKey: 't2Body' },
    { icon: CloudCheck, titleKey: 't3Title', bodyKey: 't3Body' },
  ]

  return (
    <section className="w-full bg-br-panel py-10 sm:py-14 lg:py-24" id="support">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-br-line bg-br-lowest p-4 shadow-level1 sm:p-6 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-lg border border-br-line shadow-level2">
                <img
                  alt={t('breeze.trustImgAlt')}
                  className="h-auto max-h-[460px] w-full object-cover"
                  src={assets.engineeringTeam}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-br-ink/70 via-transparent to-transparent p-3 sm:p-4">
                  <div className="text-white">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-br-secondary-fixed sm:text-xs">
                      <MapPin className="h-3.5 w-3.5" />
                      {t('breeze.trustCity')}
                    </div>
                    <p className="text-xs font-semibold sm:text-sm">
                      {t('breeze.trustOps')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:col-span-6">
              <div className="mb-2 inline-flex items-center gap-1.5 self-start rounded bg-br-notice-bg px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-br-pc sm:text-[11px]">
                {t('breeze.trustEyebrow')}
              </div>
              <h2 className="mb-3 text-xl font-semibold tracking-tight text-br-ink sm:text-2xl sm:font-bold lg:text-3xl">
                {t('breeze.trustTitle')}
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-br-slate sm:mb-6 sm:text-base">
                {t('breeze.trustBody')}
              </p>

              <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:gap-4">
                {points.map(({ icon: Icon, titleKey, bodyKey }) => (
                  <div key={titleKey} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded border border-br-line bg-br-notice-bg text-br-pc">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-br-ink sm:text-sm">
                        {t(`breeze.${titleKey}`)}
                      </h4>
                      <p className="text-[11px] leading-relaxed text-br-slate sm:text-xs">
                        {t(`breeze.${bodyKey}`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2.5 rounded-lg border border-br-line bg-br-canvas p-2.5 sm:gap-3 sm:p-3">
                <Phone className="ml-1 h-5 w-5 shrink-0 text-br-pc" />
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                  <span className="text-[10px] font-bold uppercase text-br-slate sm:text-[11px]">
                    {t('breeze.sofiaLines')}
                  </span>
                  <span className="text-xs font-bold text-br-pc sm:text-sm">
                    0700 11 250 • 02 931 0250
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
