import { useState } from 'react'
import { mockReservations } from '../../data/mockData'
import { useToast } from '../../context/ToastContext'

export default function ReservationsPage() {
  const [reservations, setReservations] = useState(mockReservations)
  const [filter, setFilter] = useState('all')
  const addToast = useToast()

  const handleStatusChange = (id, newStatus) => {
    setReservations(reservations.map(r => r.id === id ? { ...r, status: newStatus } : r))
    const statusText = newStatus === 'confirmed' ? 'Confirmée' : newStatus === 'pending' ? 'En attente' : 'Terminée'
    addToast(`Réservation #${id} mise à jour : ${statusText}`, 'success')
  }

  const filteredReservations = filter === 'all' 
    ? reservations 
    : reservations.filter(r => r.status === filter)

  const statusBadges = {
    confirmed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    pending:   'bg-amber-500/10 text-amber-400 border-amber-500/30',
    done:      'bg-blue-500/10 text-blue-400 border-blue-500/30',
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-[#F5F0E6]">Gestion des Réservations</h1>
        <p className="text-[#C9C0B3] text-sm mt-1">Consultez et gérez les demandes de réservation</p>
      </div>

      {/* Pills de filtre */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'all', label: 'Toutes' },
          { key: 'confirmed', label: 'Confirmées' },
          { key: 'pending', label: 'En attente' },
          { key: 'done', label: 'Terminées' },
        ].map(item => (
          <button
            key={item.key}
            onClick={() => setFilter(item.key)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border ${
              filter === item.key
                ? 'bg-gradient-to-r from-[#CCA64F] to-[#F0D675] text-[#0F0705] border-transparent shadow-md'
                : 'bg-[#291D14] text-[#C9C0B3] border-[#9E7C3D]/20 hover:border-[#CCA64F]/50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tableau des réservations */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#291D14] to-[#0F0705] border border-[#9E7C3D]/20 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#9E7C3D]/20 text-[#C9C0B3] text-xs uppercase tracking-wider">
              <th className="py-3 px-4">Client</th>
              <th className="py-3 px-4">Véhicule</th>
              <th className="py-3 px-4">Début</th>
              <th className="py-3 px-4">Fin</th>
              <th className="py-3 px-4">Montant</th>
              <th className="py-3 px-4">Statut</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#9E7C3D]/10 text-sm">
            {filteredReservations.map((res) => (
              <tr key={res.id} className="hover:bg-[#CCA64F]/5 transition-colors">
                <td className="py-4 px-4 font-medium text-[#F5F0E6]">{res.client}</td>
                <td className="py-4 px-4 text-[#C9C0B3]">{res.vehicle}</td>
                <td className="py-4 px-4 text-[#C9C0B3] text-xs">{res.start}</td>
                <td className="py-4 px-4 text-[#C9C0B3] text-xs">{res.end}</td>
                <td className="py-4 px-4 font-semibold text-[#CCA64F]">{res.amount.toLocaleString('fr-DZ')} DZD</td>
                <td className="py-4 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${statusBadges[res.status]}`}>
                    {res.status === 'confirmed' ? 'Confirmée' : res.status === 'pending' ? 'En attente' : 'Terminée'}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <select
                    value={res.status}
                    onChange={(e) => handleStatusChange(res.id, e.target.value)}
                    className="bg-[#0F0705] border border-[#9E7C3D]/30 rounded-lg px-2.5 py-1 text-xs text-[#F5F0E6] focus:border-[#CCA64F] outline-none cursor-pointer"
                  >
                    <option value="pending">En attente</option>
                    <option value="confirmed">Confirmée</option>
                    <option value="done">Terminée</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
