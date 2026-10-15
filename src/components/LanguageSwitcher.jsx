import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher({ className = '', variant = 'light' }) {
  const { i18n, t } = useTranslation()
  const isBg = i18n.language?.startsWith('bg')
  const isDark = variant === 'dark'
  const isGlow = variant === 'glow'
  const isBreeze = variant === 'breeze'

  const shell = isBreeze
    ? 'border-br-line bg-br-panel'
    : isGlow
      ? 'border-g-outline-v/50 bg-g-high'
      : isDark
        ? 'border-outline-variant bg-surface-container'
        : 'border-slate-200 bg-slate-100'

  const thumb = isBreeze
    ? 'bg-br-lowest'
    : isGlow
      ? 'bg-g-highest'
      : isDark
        ? 'bg-surface-container-highest'
        : 'bg-indigo-600'

  const idle = isBreeze
    ? 'text-br-slate hover:text-br-ink'
    : isGlow
      ? 'text-g-outline hover:text-g-on'
      : isDark
        ? 'text-on-surface-variant hover:text-on-surface'
        : 'text-slate-500 hover:text-slate-800'

  const activeText = isBreeze
    ? 'text-br-ink'
    : isGlow
      ? 'text-g-secondary'
      : isDark
        ? 'text-on-surface'
        : 'text-white'

  return (
    <div
      className={`relative inline-flex items-center rounded-full border p-px ${shell} ${className}`}
      role="group"
      aria-label={t('nav.switchToEn')}
    >
      <span
        aria-hidden="true"
        className={`absolute top-px bottom-px w-[calc(50%-1px)] rounded-full shadow-sm transition-all duration-300 ease-out ${
          isBg ? 'left-px' : 'left-1/2'
        } ${thumb}`}
      />

      <button
        type="button"
        onClick={() => i18n.changeLanguage('bg')}
        className={`relative z-10 min-w-[1.75rem] rounded-full px-2 py-1 text-[10px] font-bold leading-none tracking-wide transition-colors duration-300 ${
          isBg ? activeText : idle
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
          !isBg ? activeText : idle
        }`}
        aria-pressed={!isBg}
        aria-label={t('nav.switchToEn')}
      >
        EN
      </button>
    </div>
  )
}
