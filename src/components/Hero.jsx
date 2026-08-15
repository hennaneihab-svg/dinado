import { motion } from 'framer-motion'
import { ChevronDown, Shield, Plane, Clock, CheckCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

import santaCruzImg from '../assets/oran_santa_cruz.jpg'

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
      {/* ---- Fond : image Santa Cruz Oran ---- */}
      <div className="absolute inset-0">
        <img
          src={santaCruzImg}
          alt="Santa Cruz Oran — DIDANO LUXE CARS"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110"
          loading="eager"
        />
        {/* Subtle dark gradient overlay for optimal text contrast without hiding the picture */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0705]/65 via-[#0F0705]/40 to-[#0F0705]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0705]/75 via-transparent to-[#0F0705]/40" />
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

            {/* CTA Contact Direct */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold-outline text-base px-8 py-4 font-semibold"
            >
              Contact & Réservation
            </motion.button>
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
