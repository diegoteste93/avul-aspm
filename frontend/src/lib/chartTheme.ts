import { useThemeStore } from '../store/themeStore'

export function useChartTheme() {
  const theme = useThemeStore((s) => s.theme)
  const isDark = theme === 'dark'

  return {
    tooltipStyle: {
      backgroundColor: isDark ? '#0A1C25' : '#ffffff',
      border: `1px solid ${isDark ? '#1C4452' : '#E1E6EF'}`,
      borderRadius: '8px',
      color: isDark ? '#E8ECF5' : '#0B1120',
      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      fontFamily: 'Geist, sans-serif',
    },
    gridStroke: isDark ? '#12313F' : '#E1E6EF',
    axisStroke: isDark ? '#1C4452' : '#94A3B8',
    textColor: isDark ? '#98A3BA' : '#566075',
    cardBg: isDark ? '#0A1C25' : '#ffffff',
    isDark,
  }
}
