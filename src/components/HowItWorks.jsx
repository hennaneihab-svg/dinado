import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function HowItWorks() {
  const { t } = useLang()

  return (
    <section id="comment" className="py-24 bg-gradient-to-b from-dark-bg-alt to-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title font-display">{t.how.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.how.subtitle}</p>
        </motion.div>

        {/* Étapes */}
        <div className="relative">
          {/* Ligne de connexion desktop */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #CCA64F40, #CCA64F60, #CCA64F40, transparent)', margin: '0 12.5%' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {t.how.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Numéro */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="step-number mb-6 relative z-10"
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.div>

                {/* Titre */}
                <h3 className="font-display text-lg font-bold text-ivory mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-warm text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
