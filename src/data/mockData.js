// ============================================================
// DIDANO LUXE CARS — Mock Data pour le Dashboard Admin
// ============================================================

export const mockVehicles = [
  { id: 1,  name: 'Dacia Duster',            category: 'eco',     price: 3500,  status: 'available',    image: '/dinado/assets/dacia_duster-B3VM5mKH.jpg',   seats: 5, gearbox: 'Manuelle' },
  { id: 2,  name: 'Peugeot 208',             category: 'eco',     price: 3000,  status: 'rented',       image: '/dinado/assets/peugeot_208-CiJvf3Wd.jpg',    seats: 5, gearbox: 'Manuelle' },
  { id: 3,  name: 'Volkswagen Golf 8 R-Line', category: 'confort', price: 6000,  status: 'available',    image: null,                                         seats: 5, gearbox: 'Automatique' },
  { id: 4,  name: 'Škoda Kodiaq',            category: 'suv',     price: 7500,  status: 'rented',       image: '/dinado/assets/skoda_kodiaq-C1fooDwI.jpg',   seats: 7, gearbox: 'Automatique' },
  { id: 5,  name: 'Volkswagen Tiguan',       category: 'suv',     price: 7000,  status: 'maintenance',  image: '/dinado/assets/vw_tiguan-CqZEyqYM.jpg',       seats: 5, gearbox: 'Automatique' },
  { id: 6,  name: 'Porsche Macan GTS',       category: 'luxe',    price: 14000, status: 'available',    image: null,                                         seats: 5, gearbox: 'Automatique' },
  { id: 7,  name: 'Range Rover Evoque',      category: 'luxe',    price: 15000, status: 'rented',       image: null,                                         seats: 5, gearbox: 'Automatique' },
  { id: 8,  name: 'Mercedes-Benz G63 AMG',    category: 'luxe',    price: 25000, status: 'available',    image: null,                                         seats: 5, gearbox: 'Automatique' },
  { id: 9,  name: 'Audi A6 S-Line',          category: 'confort', price: 9000,  status: 'available',    image: null,                                         seats: 5, gearbox: 'Automatique' },
]

export const mockReservations = [
  { id: 1,  client: 'Karim Benali',     vehicle: 'Škoda Kodiaq',       start: '2026-08-10', end: '2026-08-13', status: 'confirmed', amount: 22500 },
  { id: 2,  client: 'Lynda Mekki',      vehicle: 'Porsche Macan',      start: '2026-08-12', end: '2026-08-14', status: 'confirmed', amount: 28000 },
  { id: 3,  client: 'Youcef Amrani',    vehicle: 'Peugeot 208',        start: '2026-08-14', end: '2026-08-17', status: 'pending',   amount: 9000  },
  { id: 4,  client: 'Farid Taleb',      vehicle: 'Range Rover Evoque', start: '2026-08-15', end: '2026-08-18', status: 'confirmed', amount: 45000 },
  { id: 5,  client: 'Amira Hadj',       vehicle: 'Volkswagen Golf',    start: '2026-08-08', end: '2026-08-11', status: 'done',      amount: 16500 },
  { id: 6,  client: 'Mohamed Zerrouki', vehicle: 'Dacia Duster',       start: '2026-08-05', end: '2026-08-08', status: 'done',      amount: 10500 },
  { id: 7,  client: 'Sarah Benaissa',   vehicle: 'Volkswagen Tiguan',  start: '2026-08-18', end: '2026-08-21', status: 'pending',   amount: 21000 },
  { id: 8,  client: 'Omar Chouiref',    vehicle: 'Dacia Duster',       start: '2026-08-01', end: '2026-08-05', status: 'done',      amount: 14000 },
  { id: 9,  client: 'Rania Bouchenak',  vehicle: 'Volkswagen Golf',    start: '2026-08-20', end: '2026-08-23', status: 'pending',   amount: 16500 },
  { id: 10, client: 'Hamza Khelif',     vehicle: 'Porsche Macan',      start: '2026-08-25', end: '2026-08-27', status: 'pending',   amount: 28000 },
]

export const mockClients = [
  { id: 1, name: 'Karim Benali',     phone: '+213 555 112 233', city: 'Oran',        reservations: 3, lastReservation: '2026-08-13' },
  { id: 2, name: 'Lynda Mekki',      phone: '+213 661 445 778', city: 'Alger',       reservations: 1, lastReservation: '2026-08-14' },
  { id: 3, name: 'Youcef Amrani',    phone: '+213 770 334 556', city: 'Tlemcen',     reservations: 4, lastReservation: '2026-08-17' },
  { id: 4, name: 'Farid Taleb',      phone: '+213 555 987 001', city: 'Oran',        reservations: 2, lastReservation: '2026-08-18' },
  { id: 5, name: 'Amira Hadj',       phone: '+213 699 223 445', city: 'Paris (FR)',  reservations: 2, lastReservation: '2026-08-11' },
  { id: 6, name: 'Mohamed Zerrouki', phone: '+213 555 001 789', city: 'Constantine', reservations: 1, lastReservation: '2026-08-08' },
  { id: 7, name: 'Sarah Benaissa',   phone: '+213 770 556 112', city: 'Oran',        reservations: 1, lastReservation: '2026-08-21' },
  { id: 8, name: 'Omar Chouiref',    phone: '+213 661 334 990', city: 'Sétif',       reservations: 2, lastReservation: '2026-08-05' },
  { id: 9, name: 'Rania Bouchenak',  phone: '+213 555 778 334', city: 'Oran',        reservations: 1, lastReservation: '2026-08-23' },
  { id: 10, name: 'Hamza Khelif',    phone: '+213 770 112 667', city: 'Alger',       reservations: 1, lastReservation: '2026-08-27' },
]

// Données graphique — réservations 7 derniers jours
export const chartData = [
  { day: '09 Août', reservations: 2, revenue: 19500  },
  { day: '10 Août', reservations: 3, revenue: 32000  },
  { day: '11 Août', reservations: 1, revenue: 7000   },
  { day: '12 Août', reservations: 4, revenue: 51000  },
  { day: '13 Août', reservations: 2, revenue: 22500  },
  { day: '14 Août', reservations: 3, revenue: 37000  },
  { day: '15 Août', reservations: 5, revenue: 68000  },
]
