import { mockClients } from '../../data/mockData'
import { Phone, MapPin, Calendar } from 'lucide-react'

export default function ClientsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-[#F5F0E6]">Base Clients</h1>
        <p className="text-[#C9C0B3] text-sm mt-1">Liste des clients enregistrés et leur historique</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClients.map((client) => (
          <div
            key={client.id}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#291D14] to-[#0F0705] border border-[#9E7C3D]/20 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#CCA64F] to-[#F0D675] text-[#0F0705] font-bold text-lg flex items-center justify-center font-display">
                {client.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-[#F5F0E6]">{client.name}</h3>
                <span className="flex items-center gap-1 text-xs text-[#C9C0B3]">
                  <MapPin size={12} className="text-[#CCA64F]" />
                  {client.city}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#9E7C3D]/10 space-y-2 text-xs text-[#C9C0B3]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Phone size={14} className="text-[#CCA64F]" />
                  {client.phone}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#CCA64F]" />
                  Dernière location:
                </span>
                <span className="text-[#F5F0E6] font-medium">{client.lastReservation}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center bg-[#0F0705]/50 p-2.5 rounded-xl border border-[#9E7C3D]/10">
              <span className="text-xs text-[#C9C0B3]">Total réservations</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#CCA64F]/10 border border-[#CCA64F]/30 text-[#F0D675]">
                {client.reservations}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
