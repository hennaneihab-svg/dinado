import { motion } from 'framer-motion'
import { Car, CalendarCheck, DollarSign, Users } from 'lucide-react'
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts'
import { mockVehicles, mockReservations, mockClients, chartData } from '../../data/mockData'

export default function DashboardHome() {
  // KPIs calculés dynamiquement
  const availableVehicles = mockVehicles.filter(v => v.status === 'available').length
  const activeReservations = mockReservations.filter(r => r.status === 'confirmed').length
  const totalRevenue = mockReservations.reduce((acc, curr) => acc + curr.amount, 0)
  const totalClients = mockClients.length

  const recentReservations = mockReservations.slice(0, 5)

  const kpis = [
    { label: 'Véhicules Disponibles', value: availableVehicles, total: mockVehicles.length, icon: Car, color: '#CCA64F' },
    { label: 'Réservations en cours', value: activeReservations, icon: CalendarCheck, color: '#F0D675' },
    { label: 'Revenus du mois', value: `${totalRevenue.toLocaleString('fr-DZ')} DZD`, icon: DollarSign, color: '#9E7C3D' },
    { label: 'Nouveaux clients', value: totalClients, icon: Users, color: '#CCA64F' },
  ]

  const statusBadges = {
    confirmed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    pending:   'bg-amber-500/10 text-amber-400 border-amber-500/30',
    done:      'bg-blue-500/10 text-blue-400 border-blue-500/30',
  }

  const statusLabels = {
    confirmed: 'Confirmée',
    pending:   'En attente',
    done:      'Terminée',
  }

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-display font-bold text-[#F5F0E6]">Tableau de bord</h1>
        <p className="text-[#C9C0B3] text-sm mt-1">Vue d'ensemble de l'activité DIDANO LUXE CARS</p>
      </div>

      {/* Cartes KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#291D14] to-[#0F0705] border border-[#9E7C3D]/20 shadow-lg relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#C9C0B3] font-medium uppercase tracking-wider">{kpi.label}</p>
                  <h3 className="text-2xl font-bold text-[#F5F0E6] mt-2">{kpi.value}</h3>
                  {kpi.total && (
                    <p className="text-xs text-[#9E7C3D] mt-1">sur {kpi.total} véhicules au total</p>
                  )}
                </div>
                <div 
                  className="p-3.5 rounded-xl border border-[#CCA64F]/30"
                  style={{ background: 'rgba(204,166,79,0.1)' }}
                >
                  <Icon size={24} style={{ color: kpi.color }} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Graphique des Réservations */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#291D14] to-[#0F0705] border border-[#9E7C3D]/20">
        <h2 className="text-xl font-display font-bold text-[#F5F0E6] mb-6">Réservations des 7 derniers jours</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#56452F/30" vertical={false} />
              <XAxis dataKey="day" stroke="#C9C0B3" tickLine={false} />
              <YAxis stroke="#C9C0B3" tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ background: '#291D14', borderColor: '#CCA64F', borderRadius: '12px', color: '#F5F0E6' }} 
              />
              <Bar dataKey="reservations" fill="#CCA64F" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Dernières réservations */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#291D14] to-[#0F0705] border border-[#9E7C3D]/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold text-[#F5F0E6]">Dernières réservations</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#9E7C3D]/20 text-[#C9C0B3] text-xs uppercase tracking-wider">
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Véhicule</th>
                <th className="py-3 px-4">Dates</th>
                <th className="py-3 px-4">Montant</th>
                <th className="py-3 px-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#9E7C3D]/10 text-sm">
              {recentReservations.map((res) => (
                <tr key={res.id} className="hover:bg-[#CCA64F]/5 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#F5F0E6]">{res.client}</td>
                  <td className="py-3.5 px-4 text-[#C9C0B3]">{res.vehicle}</td>
                  <td className="py-3.5 px-4 text-[#C9C0B3] text-xs">{res.start} → {res.end}</td>
                  <td className="py-3.5 px-4 font-semibold text-[#CCA64F]">{res.amount.toLocaleString('fr-DZ')} DZD</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${statusBadges[res.status]}`}>
                      {statusLabels[res.status]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
