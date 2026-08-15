import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Settings, Wind, Calendar, CheckCircle2, AlertCircle, X, ShieldCheck } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

// Import images véhicules
import imgDuster   from '../assets/vehicles/dacia_duster.jpg'
import imgP208     from '../assets/vehicles/peugeot_208.jpg'
import imgGolf     from '../assets/vehicles/vw_golf.jpg'
import imgKodiaq   from '../assets/vehicles/skoda_kodiaq.jpg'
import imgTiguan   from '../assets/vehicles/vw_tiguan.jpg'
import imgMacan    from '../assets/vehicles/porsche_macan.jpg'
import imgEvoque   from '../assets/vehicles/range_evoque.jpg'
import imgGClass   from '../assets/vehicles/mercedes_gclass.jpg'
import imgAudiA6   from '../assets/vehicles/audi_a6.jpg'

// ---- Catalogue véhicules avec statut de disponibilité ----
const initialVehicles = [
  {
    id:       1,
    name:     'Dacia Duster',
    category: 'eco',
    price:    3500,
    seats:    5,
    gearbox:  'manual',
    status:   'available',
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
    status:   'rented',
    image:    imgP208,
    alt:      'Location Peugeot 208 Oran',
  },
  {
    id:       3,
    name:     'Volkswagen Golf 8 R-Line',
    category: 'confort',
    price:    6000,
    seats:    5,
    gearbox:  'auto',
    status:   'available',
    image:    imgGolf,
    alt:      'Location Volkswagen Golf 8 Oran Algérie',
  },
  {
    id:       4,
    name:     'Škoda Kodiaq',
    category: 'suv',
    price:    7500,
    seats:    7,
    gearbox:  'auto',
    status:   'rented',
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
    status:   'maintenance',
    image:    imgTiguan,
    alt:      'Location SUV Volkswagen Tiguan Oran',
  },
  {
    id:       6,
    name:     'Porsche Macan GTS',
    category: 'luxe',
    price:   14000,
    seats:    5,
    gearbox:  'auto',
    status:   'available',
    image:    imgMacan,
    alt:      'Location Porsche Macan GTS Oran Algérie',
  },
  {
    id:       7,
    name:     'Range Rover Evoque',
    category: 'luxe',
    price:   15000,
    seats:    5,
    gearbox:  'auto',
    status:   'rented',
    image:    imgEvoque,
    alt:      'Location Range Rover Evoque luxe Oran',
  },
  {
    id:       8,
    name:     'Mercedes-Benz G63 AMG',
    category: 'luxe',
    price:   25000,
    seats:    5,
    gearbox:  'auto',
    status:   'available',
    image:    imgGClass,
    alt:      'Location Mercedes G-Class AMG Oran',
  },
  {
    id:       9,
    name:     'Audi A6 S-Line',
    category: 'confort',
    price:    9000,
    seats:    5,
    gearbox:  'auto',
    status:   'available',
    image:    imgAudiA6,
    alt:      'Location Audi A6 S-Line Oran Algérie',
  },
]

const luxeFallbacks = {
  6: 'linear-gradient(135deg, #1a0a05 0%, #2d1a0a 30%, #3d2510 60%, #291208 100%)',
  7: 'linear-gradient(135deg, #0a0510 0%, #1a0a20 30%, #2a1035 60%, #15082a 100%)',
}

const categories = ['all', 'eco', 'confort', 'suv', 'luxe']

const categoryColor = {
  eco:     'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  confort: 'text-blue-300 border-blue-300/30 bg-blue-300/10',
  suv:     'text-amber-400 border-amber-400/30 bg-amber-400/10',
  luxe:    'text-gold-light border-gold/30 bg-gold/10',
}

function VehicleCard({ vehicle, t, onSelectBook }) {
  const catKey = { eco: 'eco', confort: 'confort', suv: 'suv', luxe: 'luxe' }[vehicle.category]
  const isAvailable = vehicle.status === 'available'

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
            <svg viewBox="0 0 200 80" fill="none" className="w-40 opacity-30">
              <path d="M30 55 Q50 35 80 32 Q110 28 130 32 Q155 35 170 55 L175 65 L25 65 Z" fill="#CCA64F" />
              <path d="M70 32 Q80 20 100 18 Q120 16 130 32" fill="#9E7C3D" />
              <circle cx="55"  cy="65" r="11" fill="#1a0a05" stroke="#CCA64F" strokeWidth="2"/>
              <circle cx="145" cy="65" r="11" fill="#1a0a05" stroke="#CCA64F" strokeWidth="2"/>
            </svg>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg-alt/80 via-transparent to-transparent" />

        {/* Badge catégorie */}
        <div className={`absolute top-3 ${document.documentElement.dir === 'rtl' ? 'right-3' : 'left-3'}`}>
          <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${categoryColor[vehicle.category]}`}>
            {t.fleet[catKey]}
          </span>
        </div>

        {/* Badge Disponibilité en direct */}
        <div className={`absolute top-3 ${document.documentElement.dir === 'rtl' ? 'left-3' : 'right-3'}`}>
          {isAvailable ? (
            <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible
            </span>
          ) : vehicle.status === 'rented' ? (
            <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 backdrop-blur-md">
              Réservé
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 backdrop-blur-md">
              En maintenance
            </span>
          )}
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

        {/* CTA Réserver directement */}
        {isAvailable ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelectBook(vehicle)}
            className="btn-gold w-full text-center text-sm font-semibold py-3 flex items-center justify-center gap-2"
          >
            <Calendar size={16} />
            Réserver ce véhicule
          </motion.button>
        ) : (
          <button
            disabled
            className="w-full text-center text-sm font-semibold py-3 rounded-lg bg-dark-bg border border-gold/10 text-text-muted cursor-not-allowed"
          >
            Non disponible actuellement
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default function Fleet() {
  const { t } = useLang()
  const [activeFilter, setActiveFilter] = useState('all')
  const [bookingVehicle, setBookingVehicle] = useState(null)
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    startDate: '',
    endDate: '',
  })

  const filtered = activeFilter === 'all'
    ? initialVehicles
    : initialVehicles.filter(v => v.category === activeFilter)

  const handleBookSubmit = (e) => {
    e.preventDefault()
    setBookingSuccess(true)
    setTimeout(() => {
      setBookingSuccess(false)
      setBookingVehicle(null)
      setBookingForm({ name: '', phone: '', startDate: '', endDate: '' })
    }, 3000)
  }

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
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                t={t}
                onSelectBook={(v) => setBookingVehicle(v)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modale de Réservation Directe */}
      <AnimatePresence>
        {bookingVehicle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0705]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-[#291D14] border border-[#CCA64F]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setBookingVehicle(null)}
                className="absolute top-5 right-5 text-text-warm hover:text-ivory"
              >
                <X size={22} />
              </button>

              {bookingSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ivory">Réservation Envoyée !</h3>
                  <p className="text-sm text-text-warm max-w-xs mx-auto">
                    Votre demande de réservation pour <strong className="text-gold">{bookingVehicle.name}</strong> a bien été enregistrée. Notre équipe vous contactera sous peu.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-wider text-gold font-semibold">Réservation Directe</span>
                    <h3 className="text-2xl font-display font-bold text-ivory mt-1">{bookingVehicle.name}</h3>
                    <p className="text-sm text-gold font-bold mt-1">
                      {bookingVehicle.price.toLocaleString('fr-DZ')} DZD <span className="text-xs text-text-warm font-normal">/ jour</span>
                    </p>
                  </div>

                  <form onSubmit={handleBookSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-text-warm mb-1">Nom et Prénom</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="ex. Mohamed Amrani"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-text-warm mb-1">Numéro de Téléphone</label>
                      <input
                        type="tel"
                        required
                        value={bookingForm.phone}
                        onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        placeholder="+213 5XX XXX XXX"
                        className="form-input"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-text-warm mb-1">Date de début</label>
                        <input
                          type="date"
                          required
                          value={bookingForm.startDate}
                          onChange={e => setBookingForm({ ...bookingForm, startDate: e.target.value })}
                          className="form-input text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-text-warm mb-1">Date de fin</label>
                        <input
                          type="date"
                          required
                          value={bookingForm.endDate}
                          onChange={e => setBookingForm({ ...bookingForm, endDate: e.target.value })}
                          className="form-input text-xs"
                        />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gold/10 border border-gold/20 flex items-center gap-3 text-xs text-text-warm mt-4">
                      <ShieldCheck size={20} className="text-gold flex-shrink-0" />
                      <span>Assurance tous risques incluse — Aucune carte bancaire requise.</span>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setBookingVehicle(null)}
                        className="flex-1 py-3.5 border border-gold/20 rounded-xl text-sm font-semibold text-text-warm hover:bg-dark-bg"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        className="flex-1 btn-gold py-3.5 text-sm font-semibold"
                      >
                        Confirmer la réservation
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
