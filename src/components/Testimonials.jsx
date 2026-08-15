import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const reviews = [
  {
    id:     1,
    name:   'Karim B.',
    city:   'Oran',
    rating: 5,
    text:   'Service impeccable ! J\'ai loué une Škoda Kodiaq pour le mariage de ma sœur. Livraison à l\'heure, voiture nickel et l\'équipe très professionnelle. Je recommande vivement DIDANO LUXE CARS.',
    textAr: 'خدمة لا تشوبها شائبة! استأجرت سيارة سكودا كودياق لحفل زفاف أختي. التسليم في الوقت المحدد، السيارة نظيفة والفريق محترف جداً. أوصي بشدة بـ DIDANO LUXE CARS.',
  },
  {
    id:     2,
    name:   'Lynda M.',
    city:   'Alger',
    rating: 5,
    text:   'Venue de la capitale pour des affaires, j\'ai réservé via WhatsApp en 5 minutes. Porsche Macan à l\'aéroport comme promis. Le rapport qualité/prix est excellent.',
    textAr: 'قدمت من العاصمة لأعمال، وحجزت عبر الواتساب في 5 دقائق. بورش ماكان في المطار كما وُعدت. نسبة الجودة/السعر ممتازة.',
  },
  {
    id:     3,
    name:   'Youcef A.',
    city:   'Tlemcen',
    rating: 5,
    text:   'Troisième fois que je loue chez DIDANO. Toujours la même qualité de service, des voitures propres et bien entretenues. Le bouton WhatsApp c\'est parfait, réponse en moins de 2 minutes !',
    textAr: 'المرة الثالثة التي أستأجر فيها من DIDANO. دائماً نفس جودة الخدمة، سيارات نظيفة وصيانة جيدة. زر الواتساب رائع، رد في أقل من دقيقتين!',
  },
  {
    id:     4,
    name:   'Farid T.',
    city:   'Oran',
    rating: 5,
    text:   'Pour notre anniversaire de mariage, on a pris le Range Rover Evoque. Magnifique ! Prix correct, contrat clair, assurance bien expliquée. Une agence de confiance.',
    textAr: 'لذكرى زواجنا، أخذنا رانج روفر إيفوك. رائع! سعر مناسب، عقد واضح، التأمين مشروح جيداً. وكالة موثوقة.',
  },
  {
    id:     5,
    name:   'Amira H.',
    city:   'Paris (Diaspora)',
    rating: 5,
    text:   'En visite familiale à Oran, j\'avais besoin d\'une voiture fiable. Réservation facile depuis la France via WhatsApp. Volkswagen Golf propre et récente. Merci DIDANO !',
    textAr: 'في زيارة عائلية لوهران، كنت بحاجة إلى سيارة موثوقة. حجز سهل من فرنسا عبر الواتساب. فولكسواجن غولف نظيفة وحديثة. شكراً DIDANO!',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`w-4 h-4 ${i < rating ? 'fill-gold text-gold' : 'fill-dark-bg-alt text-dark-bg-alt'}`}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t, lang } = useLang()
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent(c => (c + 1) % reviews.length)

  return (
    <section id="temoignages" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title font-display">{t.testimonials.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.testimonials.subtitle}</p>
        </motion.div>

        {/* Carrousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="glass-card rounded-3xl p-8 md:p-12 relative"
            >
              {/* Guillemets décoratifs */}
              <div className="absolute top-6 right-8 opacity-10">
                <Quote size={80} className="text-gold" />
              </div>

              {/* Rating */}
              <StarRating rating={reviews[current].rating} />

              {/* Texte avis */}
              <blockquote className="mt-6 mb-8 text-ivory text-lg leading-relaxed font-light italic">
                "{lang === 'ar' ? reviews[current].textAr : reviews[current].text}"
              </blockquote>

              {/* Auteur */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-dark-bg text-lg"
                  style={{ background: 'linear-gradient(135deg, #CCA64F, #F0D675)' }}>
                  {reviews[current].name[0]}
                </div>
                <div>
                  <div className="font-semibold text-ivory">{reviews[current].name}</div>
                  <div className="text-text-warm text-sm">{reviews[current].city}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Contrôles */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors duration-300"
              aria-label="Avis précédent"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Points */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-gold'
                      : 'w-2 h-2 bg-gold/30 hover:bg-gold/50'
                  }`}
                  aria-label={`Aller à l'avis ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors duration-300"
              aria-label="Avis suivant"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
