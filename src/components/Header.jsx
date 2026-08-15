import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Lock } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

// SVG réseaux sociaux
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.1" fill="currentColor" strokeWidth="3"/>
  </svg>
)
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
import logo from '../assets/logo/DIDANO_logo_transparent.png'

const navLinks = [
  { key: 'home',        href: '#accueil'       },
  { key: 'fleet',       href: '#flotte'        },
  { key: 'whyUs',       href: '#pourquoi'      },
  { key: 'testimonials',href: '#temoignages'   },
  { key: 'contact',     href: '#contact'       },
]

export default function Header() {
  const { t, lang, toggleLang } = useLang()
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F0705]/95 backdrop-blur-xl border-b border-[#9E7C3D]/30 shadow-2xl py-2'
            : 'bg-gradient-to-b from-[#0F0705]/95 via-[#0F0705]/60 to-transparent py-2.5'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16 gap-2">

            {/* ---- Logo ---- */}
            <div
              className="cursor-pointer flex items-center flex-shrink-0"
              onClick={() => handleNav('#accueil')}
            >
              <img
                src={logo}
                alt="DIDANO LUXE CARS"
                className="h-10 sm:h-12 md:h-14 w-auto max-w-[140px] xs:max-w-[170px] sm:max-w-none object-contain filter drop-shadow-[0_2px_8px_rgba(204,166,79,0.4)]"
              />
            </div>

            {/* ---- Navigation Desktop ---- */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNav(link.href)}
                  className="text-text-warm hover:text-gold-light text-sm font-medium tracking-wide transition-colors duration-300 relative group"
                >
                  {t.nav[link.key]}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* ---- Actions Desktop ---- */}
            <div className="hidden xl:flex items-center gap-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-warm hover:text-gold-light p-1"><InstagramIcon size={18} /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-warm hover:text-gold-light p-1"><FacebookIcon size={18} /></a>
              <div className="w-px h-4 bg-gold/20 mx-1" />
              <a href="#/admin/login" className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gold/40 text-gold-light hover:bg-gold/20 transition-all flex items-center gap-1"><Lock size={12} /><span>Admin</span></a>
              <button onClick={toggleLang} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all"><span>{lang === 'fr' ? '🇩🇿 AR' : '🇫🇷 FR'}</span></button>
              <motion.button onClick={() => handleNav('#flotte')} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-gold text-xs font-semibold px-4 py-2">{t.nav.reserve}</motion.button>
            </div>

            {/* ---- Actions Mobile & Tablette ---- */}
            <div className="flex items-center gap-2 flex-shrink-0 xl:hidden">
              <button
                onClick={toggleLang}
                className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full border border-gold/40 text-gold bg-gold/10 hover:bg-gold/20 transition-colors"
              >
                {lang === 'fr' ? 'AR' : 'FR'}
              </button>

              <button
                className="text-gold p-2 rounded-xl border border-gold/30 bg-[#291D14]/90 active:scale-95 transition-all flex items-center justify-center"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ---- Menu Mobile Pliable ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-[#0F0705]/98 backdrop-blur-2xl border-b border-[#9E7C3D]/40 xl:hidden shadow-2xl"
          >
            <div className="px-5 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-ivory text-sm font-medium py-2.5 border-b border-gold/10 hover:text-gold flex items-center justify-between"
                >
                  <span>{t.nav[link.key]}</span>
                  <span className="text-gold/40 text-xs">→</span>
                </button>
              ))}

              <div className="flex items-center justify-between pt-3">
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gold/10 text-gold"><InstagramIcon size={16} /></a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gold/10 text-gold"><FacebookIcon size={16} /></a>
                </div>

                <a
                  href="#/admin/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/40 text-gold-light bg-gold/10 flex items-center gap-1"
                >
                  <Lock size={12} />
                  <span>Espace Admin</span>
                </a>
              </div>

              <button
                onClick={() => handleNav('#flotte')}
                className="btn-gold w-full text-center text-xs font-bold py-3 mt-2"
              >
                {t.nav.reserve}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
