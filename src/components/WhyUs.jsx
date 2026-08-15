import { motion } from 'framer-motion'
import { Car, MessageCircle, Tag, MapPin, ShieldCheck, Star } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const iconList = [Car, MessageCircle, Tag, MapPin, ShieldCheck, Star]

export default function WhyUs() {
  const { t } = useLang()

  return (
    <section id="pourquoi" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title font-display">{t.whyUs.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.whyUs.subtitle}</p>
        </motion.div>

        {/* Grille des 6 cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.cards.map((card, i) => {
            const Icon = iconList[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-7 group hover:shadow-gold transition-all duration-300"
              >
                {/* Icône */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, rgba(158,124,61,0.2), rgba(204,166,79,0.15))' }}>
                  <Icon size={26} className="text-gold group-hover:text-gold-light transition-colors duration-300" />
                </div>

                {/* Titre */}
                <h3 className="font-display text-xl font-bold text-ivory mb-3 group-hover:text-gold-light transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-text-warm text-sm leading-relaxed">
                  {card.desc}
                </p>

                {/* Ligne décorative bas */}
                <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, #CCA64F, transparent)' }} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
