import { useTranslation } from 'react-i18next'

export default function DesignSwitcher({ design, onChange }) {
  const { t } = useTranslation()
  const isDark = design === 'dark'

  return (
    <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2">
      <div
        className={`flex items-center gap-1 rounded-full border p-1 shadow-inst-modal backdrop-blur-md ${
          isDark
            ? 'border-outline-variant bg-surface-container/95'
            : 'border-slate-200 bg-white/95'
        }`}
      >
        <button
          type="button"
          onClick={() => onChange('light')}
          className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
            !isDark
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-tertiary hover:bg-surface-container-high hover:text-on-surface'
          }`}
          aria-pressed={!isDark}
          aria-label={t('design.one')}
        >
          {t('design.one')}
        </button>

        <button
          type="button"
          onClick={() => onChange('dark')}
          className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
            isDark
              ? 'bg-primary-container text-white shadow-inst-btn'
              : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
          }`}
          aria-pressed={isDark}
          aria-label={t('design.two')}
        >
          {t('design.two')}
        </button>
      </div>
    </div>
  )
}
