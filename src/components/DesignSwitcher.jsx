import { useTranslation } from 'react-i18next'

const OPTIONS = [
  { id: 'light', labelKey: 'design.one' },
  { id: 'dark', labelKey: 'design.two' },
  { id: 'glow', labelKey: 'design.three' },
  { id: 'breeze', labelKey: 'design.four' },
]

function shellClass(design) {
  if (design === 'glow') return 'border-g-outline-v/60 bg-g-container/95'
  if (design === 'dark') return 'border-outline-variant bg-surface-container/95'
  if (design === 'breeze') return 'border-br-line bg-br-lowest/95'
  return 'border-slate-200 bg-white/95'
}

function buttonClasses(design, optId, active) {
  if (design === 'glow') {
    return active
      ? optId === 'glow'
        ? 'bg-gradient-to-r from-g-sc to-g-secondary text-g-lowest shadow-sm'
        : 'bg-g-pc text-white shadow-sm'
      : 'text-g-outline hover:bg-g-high hover:text-g-on'
  }

  if (design === 'dark') {
    return active
      ? optId === 'dark'
        ? 'bg-primary-container text-white shadow-inst-btn'
        : 'bg-surface-container-highest text-on-surface shadow-sm'
      : 'text-tertiary hover:bg-surface-container-high hover:text-on-surface'
  }

  if (design === 'breeze') {
    return active
      ? optId === 'breeze'
        ? 'bg-br-cta text-white shadow-sm'
        : 'bg-br-pc text-white shadow-sm'
      : 'text-br-slate hover:bg-br-panel hover:text-br-ink'
  }

  // light (Design 1)
  return active
    ? 'bg-indigo-600 text-white shadow-sm'
    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
}

export default function DesignSwitcher({ design, onChange }) {
  const { t } = useTranslation()

  return (
    <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2">
      <div
        className={`flex items-center gap-0.5 rounded-full border p-1 shadow-inst-modal backdrop-blur-md sm:gap-1 ${shellClass(design)}`}
      >
        {OPTIONS.map((opt) => {
          const active = design === opt.id
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`inline-flex items-center justify-center rounded-full px-2.5 py-1.5 text-[10px] font-semibold whitespace-nowrap transition-all duration-300 sm:px-3.5 sm:py-2 sm:text-xs ${buttonClasses(
                design,
                opt.id,
                active,
              )}`}
              aria-pressed={active}
              aria-label={t(opt.labelKey)}
            >
              {t(opt.labelKey)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
