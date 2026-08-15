import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import logo from '../../assets/logo/DIDANO_logo_transparent.png'

// Identifiants de démo
const DEMO_EMAIL    = 'admin@didano.dz'
const DEMO_PASSWORD = 'demo123'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [showPwd,  setShowPwd]  = useState(false)
  const [error,    setError]    = useState('')
  const [loading,  setLoading]  = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    // Simulation délai réseau
    await new Promise(r => setTimeout(r, 700))
    setLoading(false)
    navigate('/admin/dashboard')
  }

  const fillDemo = () => {
    setEmail(DEMO_EMAIL)
    setPassword(DEMO_PASSWORD)
    setError('')
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(160deg, #0F0705 0%, #1a0d08 50%, #0F0705 100%)' }}
    >
      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width:   `${1 + (i % 3)}px`,
              height:  `${1 + (i % 3)}px`,
              background: '#CCA64F',
              left:  `${10 + i * 11}%`,
              top:   `${15 + (i % 4) * 20}%`,
              opacity: 0.25,
            }}
            animate={{ y: [0, -15, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
        {/* Orbes de fond */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #CCA64F, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #F0D675, transparent)', filter: 'blur(50px)' }} />
      </div>

      {/* Carte login */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-md"
      >
        <div
          className="rounded-3xl p-8 md:p-10"
          style={{
            background:  'linear-gradient(145deg, rgba(41,29,20,0.95) 0%, rgba(15,7,5,0.98) 100%)',
            border:      '1px solid rgba(204,166,79,0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow:   '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(204,166,79,0.05)',
          }}
        >
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <img
              src={logo}
              alt="DIDANO LUXE CARS"
              className="h-16 w-auto object-contain mb-4"
            />
            <h1 className="font-display text-2xl font-bold text-center" style={{ color: '#F5F0E6' }}>
              Espace Administration
            </h1>
            <p className="text-sm mt-1 text-center" style={{ color: '#C9C0B3' }}>
              Connectez-vous pour accéder au dashboard
            </p>
          </div>

          {/* Bannière démo */}
          <button
            onClick={fillDemo}
            className="w-full mb-6 px-4 py-3 rounded-xl text-sm text-left transition-all duration-300 group"
            style={{
              background:  'rgba(204,166,79,0.06)',
              border:      '1px dashed rgba(204,166,79,0.3)',
            }}
          >
            <span style={{ color: '#C9C0B3' }}>🔑 Identifiants démo — </span>
            <span style={{ color: '#CCA64F' }}>cliquez pour remplir</span>
            <div className="mt-1 font-mono text-xs" style={{ color: '#9E7C3D' }}>
              {DEMO_EMAIL} / {DEMO_PASSWORD}
            </div>
          </button>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#C9C0B3' }}>
                Adresse e-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@didano.dz"
                className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 text-sm"
                style={{
                  background:  'rgba(15,7,5,0.8)',
                  border:      '1px solid rgba(204,166,79,0.2)',
                  color:       '#F5F0E6',
                }}
                onFocus={e => e.target.style.borderColor = '#CCA64F'}
                onBlur={e => e.target.style.borderColor = 'rgba(204,166,79,0.2)'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#C9C0B3' }}>
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-11 rounded-xl outline-none transition-all duration-300 text-sm"
                  style={{
                    background:  'rgba(15,7,5,0.8)',
                    border:      '1px solid rgba(204,166,79,0.2)',
                    color:       '#F5F0E6',
                  }}
                  onFocus={e => e.target.style.borderColor = '#CCA64F'}
                  onBlur={e => e.target.style.borderColor = 'rgba(204,166,79,0.2)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300"
                  style={{ color: '#56452F' }}
                  onMouseEnter={e => e.target.style.color = '#CCA64F'}
                  onMouseLeave={e => e.target.style.color = '#56452F'}
                >
                  {showPwd ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm px-3 py-2 rounded-lg"
                style={{ color: '#f87171', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                background: loading
                  ? 'rgba(204,166,79,0.4)'
                  : 'linear-gradient(135deg, #CCA64F 0%, #F0D675 100%)',
                color:      '#0F0705',
                boxShadow:  loading ? 'none' : '0 4px 20px rgba(204,166,79,0.35)',
              }}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: '#0F0705', borderTopColor: 'transparent' }} />
                  Connexion…
                </>
              ) : (
                'Se connecter'
              )}
            </motion.button>
          </form>

          {/* Lien retour site public */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-xs transition-colors duration-300"
              style={{ color: '#56452F' }}
              onMouseEnter={e => e.target.style.color = '#CCA64F'}
              onMouseLeave={e => e.target.style.color = '#56452F'}
            >
              ← Retour au site public
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
