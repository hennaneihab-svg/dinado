import { useState } from 'react'
import { useToast } from '../../context/ToastContext'

export default function SettingsPage() {
  const addToast = useToast()
  const [agencyData, setAgencyData] = useState({
    name: 'DIDANO LUXE CARS',
    slogan: 'Location de voiture',
    address: 'Oran, Algérie',
    phone: '+213 5 50 00 00 00',
    email: 'contact@didanoluxecars.dz',
    hours: 'Lun – Dim : 08h00 – 22h00',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addToast('Paramètres enregistrés avec succès !', 'success')
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-display font-bold text-[#F5F0E6]">Paramètres de l'Agence</h1>
        <p className="text-[#C9C0B3] text-sm mt-1">Modifiez les informations de contact et de configuration</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-gradient-to-br from-[#291D14] to-[#0F0705] border border-[#9E7C3D]/20 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-2">Nom de l'agence</label>
            <input
              type="text"
              value={agencyData.name}
              onChange={(e) => setAgencyData({ ...agencyData, name: e.target.value })}
              className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-4 py-3 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-2">Slogan</label>
            <input
              type="text"
              value={agencyData.slogan}
              onChange={(e) => setAgencyData({ ...agencyData, slogan: e.target.value })}
              className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-4 py-3 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-2">Adresse</label>
          <input
            type="text"
            value={agencyData.address}
            onChange={(e) => setAgencyData({ ...agencyData, address: e.target.value })}
            className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-4 py-3 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-2">Téléphone WhatsApp</label>
            <input
              type="text"
              value={agencyData.phone}
              onChange={(e) => setAgencyData({ ...agencyData, phone: e.target.value })}
              className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-4 py-3 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-2">Email de contact</label>
            <input
              type="email"
              value={agencyData.email}
              onChange={(e) => setAgencyData({ ...agencyData, email: e.target.value })}
              className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-4 py-3 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-2">Horaires d'ouverture</label>
          <input
            type="text"
            value={agencyData.hours}
            onChange={(e) => setAgencyData({ ...agencyData, hours: e.target.value })}
            className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-4 py-3 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
          />
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="btn-gold py-3 px-8 text-sm font-semibold"
          >
            Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  )
}
