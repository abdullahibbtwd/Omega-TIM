import { Trans, useTranslation } from 'react-i18next'
import { Building2, CheckCircle2, Headset, Mail, Phone } from 'lucide-react'
import { assets } from '../../assets'

export default function GlowTrust() {
  const { t } = useTranslation()

  const points = [
    { titleKey: 't1Title', bodyKey: 't1Body' },
    { titleKey: 't2Title', bodyKey: 't2Body' },
    { titleKey: 't3Title', bodyKey: 't3Body' },
  ]

  return (
    <section className="mt-10 w-full pt-4 sm:mt-14" id="support">
      <div className="grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-g-outline-v/60 bg-g-container shadow-xl lg:grid-cols-12">
        <div className="relative min-h-[280px] lg:col-span-5 lg:min-h-full">
          <img
            alt={t('glow.trustImgAlt')}
            className="h-full w-full object-cover"
            src={assets.engineeringTeam}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-g-lowest/80 via-transparent to-transparent lg:hidden" />
          <div className="absolute right-4 bottom-4 left-4 flex items-center gap-3 rounded-lg border border-g-outline-v/60 bg-g-container/90 p-3 backdrop-blur-md">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-g-secondary bg-g-sc/20 text-g-secondary">
              <Building2 className="h-3.5 w-3.5" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold leading-tight text-g-on">
                {t('glow.trustOps')}
              </div>
              <div className="text-[11px] font-medium text-g-outline">
                {t('glow.trustOpsSub')}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-5 sm:p-8 lg:col-span-7 lg:p-10">
          <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-g-outline-v/40 bg-g-high px-3 py-1">
            <Headset className="h-3 w-3 text-g-primary" />
            <span className="text-[11px] font-medium text-g-outline">
              {t('glow.hotline')}
            </span>
          </div>

          <h2 className="mb-3 text-xl font-semibold tracking-tight text-g-on sm:text-2xl sm:font-bold lg:text-3xl">
            {t('glow.trustTitle')}
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-g-outline sm:text-base">
            {t('glow.trustBody')}
          </p>

          <ul className="mb-6 space-y-2.5 text-xs text-g-muted sm:space-y-3 sm:text-sm">
            {points.map((point) => (
              <li key={point.titleKey} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-g-secondary" />
                <span>
                  <Trans
                    i18nKey={`glow.${point.bodyKey}`}
                    components={{
                      strong: <strong className="font-semibold text-g-on" />,
                    }}
                  />
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4 border-t border-g-outline-v/30 pt-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-g-secondary" />
              <span className="font-mono text-sm font-semibold text-g-on">
                0700 11 250
              </span>
            </div>
            <div className="hidden h-4 w-px bg-g-outline-v/50 sm:block" />
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-g-primary" />
              <span className="text-sm font-semibold text-g-on">
                support@omegatim.bg
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
