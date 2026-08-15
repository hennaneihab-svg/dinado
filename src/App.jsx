import { LanguageProvider } from './context/LanguageContext'
import { ToastProvider } from './context/ToastContext'
import { HashRouter, Routes, Route } from 'react-router-dom'

// Public components
import Header         from './components/Header'
import Hero           from './components/Hero'
import Fleet          from './components/Fleet'
import WhyUs          from './components/WhyUs'
import HowItWorks     from './components/HowItWorks'
import Testimonials   from './components/Testimonials'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Admin components
import AdminLogin     from './admin/pages/AdminLogin'
import AdminLayout    from './admin/AdminLayout'
import DashboardHome  from './admin/pages/DashboardHome'
import VehiclesPage   from './admin/pages/VehiclesPage'
import ReservationsPage from './admin/pages/ReservationsPage'
import ClientsPage    from './admin/pages/ClientsPage'
import SettingsPage   from './admin/pages/SettingsPage'

function PublicSite() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Fleet />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <HashRouter>
        <Routes>
          {/* Site Public */}
          <Route path="/" element={<PublicSite />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminLayout><DashboardHome /></AdminLayout>} />
          <Route path="/admin/vehicles" element={<AdminLayout><VehiclesPage /></AdminLayout>} />
          <Route path="/admin/reservations" element={<AdminLayout><ReservationsPage /></AdminLayout>} />
          <Route path="/admin/clients" element={<AdminLayout><ClientsPage /></AdminLayout>} />
          <Route path="/admin/settings" element={<AdminLayout><SettingsPage /></AdminLayout>} />
          <Route path="/admin" element={<AdminLayout><DashboardHome /></AdminLayout>} />

          {/* Fallback Site Public */}
          <Route path="*" element={<PublicSite />} />
        </Routes>
      </HashRouter>
    </ToastProvider>
  )
}
