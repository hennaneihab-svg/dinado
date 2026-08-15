import { LanguageProvider } from './context/LanguageContext'
import { ToastProvider } from './context/ToastContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      <BrowserRouter basename="/dinado">
        <Routes>
          {/* Site Public */}
          <Route path="/" element={<PublicSite />} />

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Protected Dashboard */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="vehicles" element={<VehiclesPage />} />
            <Route path="reservations" element={<ReservationsPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}
