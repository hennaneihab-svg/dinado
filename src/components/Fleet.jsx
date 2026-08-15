import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Settings, Wind } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

// Import images véhicules
import imgDuster  from '../assets/vehicles/dacia_duster.jpg'
import imgP208    from '../assets/vehicles/peugeot_208.jpg'
import imgGolf    from '../assets/vehicles/vw_golf.jpg'
import imgKodiaq  from '../assets/vehicles/skoda_kodiaq.jpg'
import imgTiguan  from '../assets/vehicles/vw_tiguan.jpg'

const WHATSAPP_NUMBER = '213550000000'

// ---- Catalogue véhicules ----
const vehicles = [
  {
    id:       1,
    name:     'Dacia Duster',
    category: 'eco',
    price:    3500,
    seats:    5,
    gearbox:  'manual',
    image:    imgDuster,
    alt:      'Location Dacia Duster Oran Algérie',
  },
  {
    id:       2,
    name:     'Peugeot 208',
    category: 'eco',
    price:    3000,
    seats:    5,
    gearbox:  'manual',
    image:    imgP208,
    alt:      'Location Peugeot 208 Oran',
  },
  {
    id:       3,
    name:     'Volkswagen Golf',
    category: 'confort',
    price:    5500,
    seats:    5,
    gearbox:  'auto',
    image:    imgGolf,
    alt:      'Location Volkswagen Golf Oran Algérie',
  },
  {
    id:       4,
    name:     'Škoda Kodiaq',
    category: 'suv',
    price:    7500,
    seats:    7,
    gearbox:  'auto',
    image:    imgKodiaq,
    alt:      'Location SUV Škoda Kodiaq Oran',
  },
  {
    id:       5,
    name:     'Volkswagen Tiguan',
    category: 'suv',
    price:    7000,
    seats:    5,
    gearbox:  'auto',
    image:    imgTiguan,
    alt:      'Location SUV Volkswagen Tiguan Oran',
  },
  {
    id:       6,
    name:     'Porsche Macan',
    category: 'luxe',
    price:   14000,
    seats:    5,
    gearbox:  'auto',
    image:    null, // Gradient fallback
    alt:      'Location Porsche Macan luxe Oran Algérie',
  },
  {
    id:       7,
    name:     'Range Rover Evoque',
    category: 'luxe',
    price:   15000,
    seats:    5,
    gearbox:  'auto',
    image:    null, // Gradient fallback
    alt:      'Location Range Rover Evoque luxe Oran',
  },
]

// Dégradés de fond premium pour véhicules sans image générée
const luxeFallbacks = {
  6: 'linear-gradient(135deg, #1a0a05 0%, #2d1a0a 30%, #3d2510 60%, #291208 100%)',
  7: 'linear-gradient(135deg, #0a0510 0%, #1a0a20 30%, #2a1035 60%, #15082a 100%)',
}

const categories = ['all', 'eco', 'confort', 'suv', 'luxe']

// Badge couleur par catégorie
const categoryColor = {
  eco:     'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  confort: 'text-blue-300 border-blue-300/30 bg-blue-300/10',
  suv:     'text-amber-400 border-amber-400/30 bg-amber-400/10',
  luxe:    'text-gold-light border-gold/30 bg-gold/10',
}

function VehicleCard({ vehicle, t }) {
  const waMsg = encodeURIComponent(`Bonjour, je souhaite réserver un ${vehicle.name} chez DIDANO LUXE CARS`)
  const catKey = { eco: 'eco', confort: 'confort', suv: 'suv', luxe: 'luxe' }[vehicle.category]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="vehicle-card group"
    >
      {/* Image / Fallback dégradé */}
      <div className="relative h-52 overflow-hidden">
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={vehicle.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: luxeFallbacks[vehicle.id] }}
          >
            {/* Car silhouette SVG */}
            <svg viewBox="0 0 200 80" fill="none" className="w-40 opacity-30">
              <path d="M30 55 Q50 35 80 32 Q110 28 130 32 Q155 35 170 55 L175 65 L25 65 Z" fill="#CCA64F" />
              <path d="M70 32 Q80 20 100 18 Q120 16 130 32" fill="#9E7C3D" />
              <circle cx="55"  cy="65" r="11" fill="#1a0a05" stroke="#CCA64F" strokeWidth="2"/>
              <circle cx="145" cy="65" r="11" fill="#1a0a05" stroke="#CCA64F" strokeWidth="2"/>
            </svg>
          </div>
        )}

        {/* Overlay gradient bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg-alt/80 via-transparent to-transparent" />

        {/* Badge catégorie */}
        <div className={`absolute top-3 ${document.documentElement.dir === 'rtl' ? 'right-3' : 'left-3'}`}>
          <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${categoryColor[vehicle.category]}`}>
            {t.fleet[catKey]}
          </span>
        </div>
      </div>

      {/* Contenu carte */}
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-ivory mb-1 group-hover:text-gold-light transition-colors duration-300">
          {vehicle.name}
        </h3>

        {/* Specs */}
        <div className="flex items-center gap-4 text-text-warm text-xs mb-4">
          <span className="flex items-center gap-1">
            <Users size={13} className="text-gold" />
            {vehicle.seats} {t.fleet.seats}
          </span>
          <span className="flex items-center gap-1">
            <Settings size={13} className="text-gold" />
            {vehicle.gearbox === 'auto' ? t.fleet.auto : t.fleet.manual}
          </span>
          <span className="flex items-center gap-1">
            <Wind size={13} className="text-gold" />
            {t.fleet.clim}
          </span>
        </div>

        {/* Prix */}
        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-2xl font-bold text-gold">
            {vehicle.price.toLocaleString('fr-DZ')}
          </span>
          <span className="text-sm text-text-warm font-medium">DZD {t.fleet.perDay}</span>
        </div>

        {/* CTA Réserver */}
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="btn-gold w-full text-center text-sm"
        >
          {t.fleet.reserve}
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Fleet() {
  const { t } = useLang()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? vehicles
    : vehicles.filter(v => v.category === activeFilter)

  return (
    <section id="flotte" className="py-24 bg-gradient-to-b from-dark-bg to-dark-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="section-title font-display">{t.fleet.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.fleet.subtitle}</p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat === 'all' ? t.fleet.all : t.fleet[cat]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grille véhicules */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} t={t} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
