import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

// SVG réseaux sociaux (lucide-react ne les exporte plus)
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

// Numéro WhatsApp de l'agence — modifier ici
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
  const [activeSection,setActiveSection] = useState('accueil')

  // Opacité header au scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
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
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-bg/95 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* ---- Logo ---- */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => handleNav('#accueil')}
            >
              <img
                src={logo}
                alt="DIDANO LUXE CARS - Location de voiture à Oran"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </motion.div>

            {/* ---- Navigation Desktop ---- */}
            <nav className="hidden lg:flex items-center gap-8">
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
            <div className="hidden lg:flex items-center gap-4">
              {/* Réseaux sociaux */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-warm hover:text-gold-light transition-colors duration-300"
                aria-label="Instagram DIDANO LUXE CARS"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-warm hover:text-gold-light transition-colors duration-300"
                aria-label="Facebook DIDANO LUXE CARS"
              >
                <FacebookIcon size={18} />
              </a>

              {/* Séparateur */}
              <div className="w-px h-5 bg-gold/20" />

              {/* Sélecteur de langue */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Changer de langue"
              >
                <span>{lang === 'fr' ? '🇩🇿 AR' : '🇫🇷 FR'}</span>
              </button>

              {/* CTA Réserver */}
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20v%C3%A9hicule%20chez%20DIDANO%20LUXE%20CARS`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold text-sm px-5 py-2.5"
              >
                {t.nav.reserve}
              </motion.a>
            </div>

            {/* ---- Hamburger Mobile ---- */}
            <button
              className="lg:hidden text-ivory p-2 rounded-lg hover:bg-gold/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ---- Menu Mobile ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-dark-bg/98 backdrop-blur-xl border-b border-gold/10 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-ivory text-base font-medium py-2 border-b border-gold/10 hover:text-gold-light transition-colors"
                >
                  {t.nav[link.key]}
                </motion.button>
              ))}

              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-warm hover:text-gold-light transition-colors"><InstagramIcon size={20} /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-warm hover:text-gold-light transition-colors"><FacebookIcon size={20} /></a>
                <button onClick={toggleLang} className="ml-auto text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all">
                  {lang === 'fr' ? '🇩🇿 AR' : '🇫🇷 FR'}
                </button>
              </div>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20v%C3%A9hicule%20chez%20DIDANO%20LUXE%20CARS`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center"
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
