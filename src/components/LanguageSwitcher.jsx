import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher({ className = '', variant = 'light' }) {
  const { i18n, t } = useTranslation()
  const isBg = i18n.language?.startsWith('bg')
  const isDark = variant === 'dark'

  return (
    <div
      className={`relative inline-flex items-center rounded-full border p-px ${
        isDark
          ? 'border-outline-variant bg-surface-container'
          : 'border-slate-200 bg-slate-100'
      } ${className}`}
      role="group"
      aria-label={t('nav.switchToEn')}
    >
      <span
        aria-hidden="true"
        className={`absolute top-px bottom-px w-[calc(50%-1px)] rounded-full shadow-sm transition-all duration-300 ease-out ${
          isBg ? 'left-px' : 'left-1/2'
        } ${isDark ? 'bg-surface-container-highest' : 'bg-indigo-600'}`}
      />

      <button
        type="button"
        onClick={() => i18n.changeLanguage('bg')}
        className={`relative z-10 min-w-[1.75rem] rounded-full px-2 py-1 text-[10px] font-bold leading-none tracking-wide transition-colors duration-300 ${
          isBg
            ? isDark
              ? 'text-on-surface'
              : 'text-white'
            : isDark
              ? 'text-on-surface-variant hover:text-on-surface'
              : 'text-slate-500 hover:text-slate-800'
        }`}
        aria-pressed={isBg}
        aria-label={t('nav.switchToBg')}
      >
        BG
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('en')}
        className={`relative z-10 min-w-[1.75rem] rounded-full px-2 py-1 text-[10px] font-bold leading-none tracking-wide transition-colors duration-300 ${
          !isBg
            ? isDark
              ? 'text-on-surface'
              : 'text-white'
            : isDark
              ? 'text-on-surface-variant hover:text-on-surface'
              : 'text-slate-500 hover:text-slate-800'
        }`}
        aria-pressed={!isBg}
        aria-label={t('nav.switchToEn')}
      >
        EN
      </button>
    </div>
  )
}
