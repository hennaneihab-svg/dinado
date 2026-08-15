import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const WHATSAPP_NUMBER = '213550000000'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', phone: '', dates: '', vehicle: '', message: '' })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', dates: '', vehicle: '', message: '' })
    }, 4000)
  }

  const contactInfo = [
    { icon: MapPin,         label: t.contact.address, value: t.contact.addressVal, link: 'https://maps.app.goo.gl/5GbCrL3it6Q1ZMtR6' },
    { icon: Phone,          label: t.contact.tel,     value: '+213 770 36 64 05', link: 'tel:+213770366405' },
    { icon: MessageCircle,  label: t.contact.whatsapp,value: '+213 770 36 64 05', link: 'https://wa.me/213770366405' },
    { icon: Mail,           label: 'Email',            value: 'contact@didanoluxecars.dz', link: 'mailto:contact@didanoluxecars.dz' },
    { icon: Clock,          label: t.contact.hours,    value: t.contact.hoursVal, link: null },
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

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-center font-bold text-sm">
                  ✓ Message envoyé avec succès ! Nous vous recontacterons très rapidement.
                </div>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-gold w-full text-base py-4 font-bold tracking-wide"
                >
                  Envoyer la Demande
                </motion.button>
              )}
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
              {contactInfo.map(({ icon: Icon, label, value, link }, i) => {
                const content = (
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#CCA64F]/20 transition-colors"
                      style={{ background: 'rgba(204,166,79,0.12)', border: '1px solid rgba(204,166,79,0.25)' }}>
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-text-warm uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-ivory text-sm font-medium group-hover:text-gold-light transition-colors">{value}</div>
                    </div>
                  </div>
                )
                return link ? (
                  <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                )
              })}
            </div>

            {/* Google Maps interactif — DIDANO LUXE CARS */}
            <div className="rounded-2xl overflow-hidden border border-gold/25 h-64 relative group cursor-pointer">
              <iframe
                title="DIDANO LUXE CARS — Oran, Algérie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.916124765952!2d-0.630000!3d35.698000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzUyLjgiTiAwwrAzNyc0OC4wIlc!5e0!3m2!1sfr!2sdz!4v1620000000000!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Pin repère de position stylisé au centre */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0F0705] border-2 border-[#CCA64F] flex items-center justify-center shadow-2xl animate-bounce">
                  <MapPin size={22} className="text-[#CCA64F]" />
                </div>
                <div className="mt-1 px-3 py-1 bg-[#0F0705]/90 border border-[#CCA64F]/50 rounded-full text-[10px] font-bold text-[#F0D675] shadow-lg">
                  DIDANO LUXE CARS
                </div>
              </div>

              {/* Bouton d'ouverture direct vers le lien Google Maps exact */}
              <a
                href="https://maps.app.goo.gl/5GbCrL3it6Q1ZMtR6"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-10 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#0F0705] bg-gradient-to-r from-[#CCA64F] to-[#F0D675] hover:scale-105 transition-all shadow-xl flex items-center gap-1.5"
              >
                <span>Ouvrir dans Maps</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>

              {/* Overlay d'ombre bas */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(15,7,5,0.5) 0%, transparent 40%)' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
