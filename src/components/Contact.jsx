import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const WHATSAPP_NUMBER = '213550000000'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', phone: '', dates: '', vehicle: '', message: '' })

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Bonjour DIDANO LUXE CARS 👋\n\n` +
      `*Nom :* ${form.name}\n` +
      `*Téléphone :* ${form.phone}\n` +
      `*Dates :* ${form.dates}\n` +
      `*Véhicule souhaité :* ${form.vehicle}\n` +
      `*Message :* ${form.message || 'Aucun'}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  const contactInfo = [
    { icon: MapPin,         label: t.contact.address, value: t.contact.addressVal },
    { icon: Phone,          label: t.contact.tel,     value: '+213 5 50 00 00 00' },
    { icon: MessageCircle,  label: t.contact.whatsapp,value: '+213 5 50 00 00 00' },
    { icon: Mail,           label: 'Email',            value: 'contact@didanoluxecars.dz' },
    { icon: Clock,          label: t.contact.hours,    value: t.contact.hoursVal },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dark-bg-alt to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title font-display">{t.contact.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ---- Formulaire ---- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-text-warm mb-2">{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Mohamed Amrani"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-warm mb-2">{t.contact.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+213 5XX XXX XXX"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-warm mb-2">{t.contact.dates}</label>
                <input
                  type="text"
                  name="dates"
                  value={form.dates}
                  onChange={handleChange}
                  placeholder="ex. 20/08 → 25/08/2026"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-warm mb-2">{t.contact.vehicle}</label>
                <select
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="" disabled>{t.contact.vehicle}</option>
                  <option>Dacia Duster</option>
                  <option>Peugeot 208</option>
                  <option>Volkswagen Golf</option>
                  <option>Škoda Kodiaq</option>
                  <option>Volkswagen Tiguan</option>
                  <option>Porsche Macan</option>
                  <option>Range Rover Evoque</option>
                  <option>Autre / Je ne sais pas encore</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-warm mb-2">{t.contact.message}</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Informations complémentaires, demande spéciale…"
                  className="form-input resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold w-full text-base py-4 flex items-center justify-center gap-3"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.contact.send}
              </motion.button>
            </form>
          </motion.div>

          {/* ---- Coordonnées + Carte ---- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Infos de contact */}
            <div className="glass-card rounded-2xl p-6 space-y-5">
              {contactInfo.map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(204,166,79,0.12)', border: '1px solid rgba(204,166,79,0.25)' }}>
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-text-warm uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-ivory text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Placeholder Google Maps — Oran */}
            <div className="rounded-2xl overflow-hidden border border-gold/15 h-64 relative">
              <iframe
                title="DIDANO LUXE CARS — Oran, Algérie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-0.6331!3d35.6969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7c9f5dcf60a7b1%3A0x7e4a7b1e2b0a4c3!2sOran%2C%20Algeria!5e0!3m2!1sfr!2sdz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay doré subtil */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(15,7,5,0.4) 0%, transparent 50%)' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
