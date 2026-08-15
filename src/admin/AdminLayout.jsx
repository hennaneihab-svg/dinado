import { NavLink, useNavigate, Outlet } from 'react'
import { 
  LayoutDashboard, 
  Car, 
  CalendarCheck, 
  Users, 
  Settings, 
  LogOut, 
  Globe, 
  Menu, 
  X 
} from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo/DIDANO_logo_transparent.png'

export default function AdminLayout({ children }) {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  // ...


  const navItems = [
    { label: 'Tableau de bord', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Véhicules', path: '/admin/vehicles', icon: Car },
    { label: 'Réservations', path: '/admin/reservations', icon: CalendarCheck },
    { label: 'Clients', path: '/admin/clients', icon: Users },
    { label: 'Paramètres', path: '/admin/settings', icon: Settings },
  ]

  const handleLogout = () => {
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen flex bg-[#0F0705] text-[#F5F0E6]">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#291D14] border-r border-[#9E7C3D]/20 p-6 fixed inset-y-0 z-30">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img src={logo} alt="DIDANO LUXE CARS" className="h-12 object-contain" />
        </div>

        {/* Bouton Retour public */}
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2.5 mb-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#CCA64F] bg-[#0F0705] border border-[#CCA64F]/30 hover:bg-[#CCA64F]/10 transition-colors"
        >
          <Globe size={16} />
          Retour au site public
        </a>

        {/* Navigation */}
        <nav className="flex-1 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#CCA64F] to-[#F0D675] text-[#0F0705] font-bold shadow-md shadow-[#CCA64F]/20'
                      : 'text-[#C9C0B3] hover:text-[#F0D675] hover:bg-[#0F0705]/50'
                  }`
                }
              >
                <Icon size={18} />
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        {/* Déconnexion */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors mt-auto border border-red-500/20"
        >
          <LogOut size={18} />
          Déconnexion
        </button>
      </aside>

      {/* Sidebar Mobile Toggle Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#291D14] border-b border-[#9E7C3D]/20 px-4 flex items-center justify-between z-40">
        <img src={logo} alt="DIDANO" className="h-8 object-contain" />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-[#F5F0E6] hover:text-[#CCA64F]"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Drawer Mobile */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-[#0F0705]/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
          <div className="w-64 bg-[#291D14] h-full p-6 flex flex-col border-r border-[#9E7C3D]/20 pt-20" onClick={e => e.stopPropagation()}>
            <a
              href="/"
              className="flex items-center gap-2 px-4 py-2.5 mb-6 rounded-xl text-xs font-semibold text-[#CCA64F] bg-[#0F0705] border border-[#CCA64F]/30"
            >
              <Globe size={16} />
              Retour au site public
            </a>
            <nav className="flex-1 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                        isActive
                          ? 'bg-gradient-to-r from-[#CCA64F] to-[#F0D675] text-[#0F0705] font-bold'
                          : 'text-[#C9C0B3] hover:text-[#F0D675]'
                      }`
                    }
                  >
                    <Icon size={18} />
                    {item.label}
                  </NavLink>
                )
              })}
            </nav>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 border border-red-500/20 mt-auto"
            >
              <LogOut size={18} />
              Déconnexion
            </button>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <main className="flex-1 md:ml-64 p-6 md:p-10 pt-20 md:pt-10 overflow-y-auto">
        {children || <Outlet />}
      </main>
    </div>
  )
}
