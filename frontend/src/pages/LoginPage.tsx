import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useThemeStore } from '../store/themeStore'
import { Eye, EyeOff, Play } from 'lucide-react'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ username: '', password: '', email: '', full_name: '' })
  const [loading, setLoading] = useState(false)
  const { login, register, demoLogin } = useAuthStore()
  const { theme } = useThemeStore()
  const navigate = useNavigate()

  const handleDemoLogin = () => {
    demoLogin()
    toast.success('Bem-vindo ao Avul ASPM Demo!')
    navigate('/')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (isRegister) {
        await register({ ...form, role: 'analyst' })
        toast.success('Conta criada com sucesso! Faça login.')
        setIsRegister(false)
      } else {
        await login(form.username, form.password)
        navigate('/')
      }
    } catch (err: any) {
      toast.error(err.response?.data?.detail || 'Erro ao realizar login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface-primary relative overflow-hidden flex items-center justify-center p-4">
      {/* Avul subtle cyber aura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 15%, rgba(31, 111, 122, 0.18), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
            alt="Avul ASPM"
            className="h-11 mb-2 transition-opacity"
          />
          <div className="flex items-center gap-2 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-avul-300 animate-pulse" />
            <p className="text-content-tertiary text-xs tracking-wider uppercase font-mono">
              Application Security Posture Management
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="card shadow-xl shadow-black/15">
          <div className="mb-6">
            <span className="font-mono text-xs text-avul-300 uppercase tracking-widest font-medium">
              Autenticação
            </span>
            <h2 className="text-xl font-bold text-content-primary mt-1">
              {isRegister ? 'Criar Conta' : 'Acessar Plataforma'}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <>
                <div>
                  <label className="block text-xs font-mono text-content-tertiary uppercase mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-content-tertiary uppercase mb-1">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    className="input w-full"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-mono text-content-tertiary uppercase mb-1">
                Usuário
              </label>
              <input
                type="text"
                className="input w-full"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-content-tertiary uppercase mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input w-full pr-10"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-content-muted hover:text-content-secondary"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-2.5 mt-2 disabled:opacity-50 text-sm font-semibold tracking-wide uppercase font-mono"
            >
              {loading ? 'Processando...' : isRegister ? 'Cadastrar' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-xs text-avul-300 hover:text-avul-200 transition-colors font-medium"
            >
              {isRegister ? 'Já possui uma conta? Entrar' : 'Não tem conta? Cadastre-se'}
            </button>
          </div>
        </div>

        {/* Demo Mode */}
        <div className="mt-4">
          <button
            onClick={handleDemoLogin}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface-secondary hover:bg-surface-tertiary text-avul-300 border border-avul-500/40 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <Play className="w-4 h-4 fill-current" />
            Explorar Modo Demo
          </button>
          <p className="text-center text-xs text-content-muted mt-2 font-mono">
            Ambiente de demonstração imediato com dados de exemplo
          </p>
        </div>
      </div>
    </div>
  )
}
