import { motion } from 'framer-motion'
import { ChevronDown, Shield, Plane, Clock, CheckCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const WHATSAPP_NUMBER = '213550000000'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 40 },
  animate:   { opacity: 1, y: 0 },
  transition:{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const badges = [
  { icon: Shield,      key: 'badge1' },
  { icon: Plane,       key: 'badge2' },
  { icon: Clock,       key: 'badge3' },
  { icon: CheckCircle, key: 'badge4' },
]

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ---- Fond : image hero + overlay dégradé ---- */}
      <div className="absolute inset-0">
        <img
          src="/hero_bg.jpg"
          alt="Voiture de luxe DIDANO LUXE CARS à Oran"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay sombre doré */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/70 via-transparent to-dark-bg/30" />
      </div>

      {/* ---- Particules décoratives dorées ---- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40"
            style={{
              left:  `${15 + i * 14}%`,
              top:   `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y:       [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.7,
              repeat:   Infinity,
              delay:    i * 0.5,
            }}
          />
        ))}
      </div>

      {/* ---- Contenu principal ---- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">

          {/* Tagline */}
          <motion.div {...fadeUp(0.1)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 text-gold text-sm font-medium tracking-widest uppercase bg-gold/5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              {t.hero.tagline}
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1 {...fadeUp(0.25)} className="font-display leading-none mb-6">
            <span className="block text-ivory text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
              {t.hero.title1}
            </span>
            <span className="block text-gold-gradient text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              {t.hero.title2}
            </span>
          </motion.h1>

          {/* Ligne décorative */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="origin-left h-0.5 w-32 mb-8"
            style={{ background: 'linear-gradient(90deg, #CCA64F, #F0D675, transparent)' }}
          />

          {/* Sous-titre */}
          <motion.p {...fadeUp(0.4)} className="text-text-warm text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 mb-16">
            {/* CTA Principal */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#flotte')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold text-base px-8 py-4 font-semibold"
            >
              {t.hero.ctaFleet}
            </motion.button>

            {/* CTA WhatsApp */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20v%C3%A9hicule%20chez%20DIDANO%20LUXE%20CARS`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold-outline text-base px-8 py-4 font-semibold"
            >
              {/* WhatsApp icon inline */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.hero.ctaWhatsApp}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ---- Bandeau badges de confiance ---- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full border-t border-gold/10 bg-dark-bg/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {badges.map(({ icon: Icon, key }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold/15 transition-colors duration-300">
                  <Icon size={18} className="text-gold" />
                </div>
                <span className="text-text-warm text-sm font-medium leading-tight group-hover:text-gold-light transition-colors duration-300">
                  {t.hero[key]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gold/40 cursor-pointer"
        onClick={() => document.querySelector('#flotte')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
