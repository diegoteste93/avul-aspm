import { useAuthStore } from '../../store/authStore'
import { useThemeStore } from '../../store/themeStore'
import { LogOut, User, Bell, Sun, Moon } from 'lucide-react'

export default function Header() {
  const { user, logout } = useAuthStore()
  const { theme, toggleTheme } = useThemeStore()

  return (
    <header className="h-16 bg-surface-secondary border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-avul-300 font-semibold bg-avul-500/10 border border-avul-500/20 px-2 py-0.5 rounded">
          Posture Platform
        </span>
        <h2 className="text-xs text-content-tertiary hidden md:block">
          Application Security Posture Management
        </h2>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-content-tertiary hover:text-content-primary hover:bg-surface-tertiary rounded-lg transition-colors"
          title={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-avul-500" />}
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-content-tertiary hover:text-content-primary hover:bg-surface-tertiary rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-severity-critical rounded-full animate-pulse" />
        </button>

        {/* User Menu */}
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="w-8 h-8 bg-avul-500/20 text-avul-300 border border-avul-500/30 rounded-full flex items-center justify-center font-mono text-xs font-bold">
            <User className="w-4 h-4" />
          </div>
          <div className="text-sm">
            <div className="font-medium text-content-primary">{user?.full_name || user?.username}</div>
            <div className="text-xs text-content-muted capitalize">{user?.role}</div>
          </div>
          <button
            onClick={logout}
            className="p-2 text-content-muted hover:text-severity-critical hover:bg-surface-tertiary rounded-lg transition-colors ml-2"
            title="Sair"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
