import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import logo from '../assets/logo/DIDANO_logo_transparent.png'

// SVG sociaux inline
const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.1" fill="currentColor" strokeWidth="3"/>
  </svg>
)
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)


const navLinks = [
  { key: 'home',         href: '#accueil'     },
  { key: 'fleet',        href: '#flotte'      },
  { key: 'whyUs',        href: '#pourquoi'    },
  { key: 'testimonials', href: '#temoignages' },
  { key: 'contact',      href: '#contact'     },
]

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg border-t border-gold/10">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ---- Logo + Description ---- */}
          <div className="space-y-5">
            <div className="inline-block p-3 rounded-2xl bg-[#291D14]/90 border border-[#9E7C3D]/30 shadow-lg shadow-[#CCA64F]/10">
              <motion.img
                src={logo}
                alt="DIDANO LUXE CARS"
                className="h-16 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(204,166,79,0.3)]"
                whileHover={{ scale: 1.03 }}
              />
            </div>
            <p className="text-text-warm text-sm leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
            {/* Contact rapide */}
            <div className="space-y-2">
              <a href="tel:+213550000000"
                className="flex items-center gap-2 text-text-warm hover:text-gold-light transition-colors text-sm">
                <Phone size={14} className="text-gold" />+213 5 50 00 00 00
              </a>
              <a href="mailto:contact@didanoluxecars.dz"
                className="flex items-center gap-2 text-text-warm hover:text-gold-light transition-colors text-sm">
                <Mail size={14} className="text-gold" />contact@didanoluxecars.dz
              </a>
            </div>
          </div>

          {/* ---- Liens rapides ---- */}
          <div>
            <h3 className="font-display text-lg font-bold text-ivory mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gold" />
              {t.footer.links}
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-text-warm hover:text-gold-light transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-3 transition-all duration-300" />
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Réseaux sociaux ---- */}
          <div>
            <h3 className="font-display text-lg font-bold text-ivory mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gold" />
              {t.footer.social}
            </h3>
            <div className="flex gap-4 mb-8">
              <motion.a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(204,166,79,0.1)', border: '1px solid rgba(204,166,79,0.25)' }}
                aria-label="Instagram DIDANO LUXE CARS"
              >
                <InstagramIcon size={20} className="text-gold" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(204,166,79,0.1)', border: '1px solid rgba(204,166,79,0.25)' }}
                aria-label="Facebook DIDANO LUXE CARS"
              >
                <FacebookIcon size={20} className="text-gold" />
              </motion.a>
            </div>

            {/* WhatsApp CTA Footer */}
            <motion.a
              href="https://wa.me/213550000000?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20v%C3%A9hicule%20chez%20DIDANO%20LUXE%20CARS"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold w-fit"
              style={{ background: 'linear-gradient(135deg, #128C7E, #25D366)', color: 'white' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp 24/7
            </motion.a>
          </div>
        </div>
      </div>

      {/* ---- Bas de page ---- */}
      <div className="border-t border-gold/8 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-warm">
          <span>{t.footer.copyright}</span>
          <div className="flex items-center gap-4">
            <a href="#/admin/login" className="text-gold/60 hover:text-gold transition-colors font-medium">🔑 Espace Admin</a>
            <a href="#" className="hover:text-gold-light transition-colors">{t.footer.legal}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
