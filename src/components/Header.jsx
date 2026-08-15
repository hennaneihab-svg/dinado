import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield, Lock } from 'lucide-react'
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

const WHATSAPP_NUMBER = '213550000000'

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
    const onScroll = () => setScrolled(window.scrollY > 40)
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
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F0705]/95 backdrop-blur-xl border-b border-[#9E7C3D]/25 shadow-xl shadow-black/50 py-2'
            : 'bg-gradient-to-b from-[#0F0705]/90 via-[#0F0705]/50 to-transparent py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* ---- Logo Responsive ---- */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0 cursor-pointer flex items-center"
              onClick={() => handleNav('#accueil')}
            >
              <img
                src={logo}
                alt="DIDANO LUXE CARS - Oran"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(204,166,79,0.4)]"
              />
            </motion.div>

            {/* ---- Navigation Desktop ---- */}
            <nav className="hidden lg:flex items-center gap-7">
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
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-warm hover:text-gold-light transition-colors p-1"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-warm hover:text-gold-light transition-colors p-1"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>

              <div className="w-px h-4 bg-gold/20 mx-1" />

              <a
                href="#/admin/login"
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gold/40 text-gold-light hover:bg-gold/20 transition-all flex items-center gap-1"
              >
                <Lock size={12} />
                <span>Admin</span>
              </a>

              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all"
              >
                <span>{lang === 'fr' ? '🇩🇿 AR' : '🇫🇷 FR'}</span>
              </button>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20v%C3%A9hicule%20chez%20DIDANO%20LUXE%20CARS`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold text-xs font-semibold px-4 py-2"
              >
                {t.nav.reserve}
              </motion.a>
            </div>

            {/* ---- Actions Compactes Mobile (Langue + Hamburger) ---- */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLang}
                className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full border border-gold/40 text-gold bg-gold/5"
              >
                {lang === 'fr' ? 'AR' : 'FR'}
              </button>

              <button
                className="text-ivory p-2 rounded-xl border border-gold/20 bg-dark-bg/80 hover:bg-gold/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} className="text-gold" /> : <Menu size={22} className="text-gold" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ---- Menu Mobile Pliable et bien dimensionné ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0F0705]/98 backdrop-blur-2xl border-b border-[#9E7C3D]/30 lg:hidden shadow-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <button
                  key={link.key}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-ivory text-base font-medium py-2.5 border-b border-gold/10 hover:text-gold-light transition-colors flex items-center justify-between"
                >
                  <span>{t.nav[link.key]}</span>
                  <span className="text-gold/40 text-xs">→</span>
                </button>
              ))}

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gold/10 text-gold"><InstagramIcon size={18} /></a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gold/10 text-gold"><FacebookIcon size={18} /></a>
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

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20v%C3%A9hicule%20chez%20DIDANO%20LUXE%20CARS`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center text-sm font-semibold py-3 mt-2"
              >
                {t.nav.reserve}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
