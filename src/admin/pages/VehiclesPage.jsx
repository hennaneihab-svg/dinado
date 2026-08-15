import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Edit, Trash2, X, Car, Upload, Image as ImageIcon } from 'lucide-react'
import { mockVehicles } from '../../data/mockData'
import { useToast } from '../../context/ToastContext'

import imgDuster   from '../../assets/vehicles/dacia_duster.jpg'
import imgP208     from '../../assets/vehicles/peugeot_208.jpg'
import imgGolf     from '../../assets/vehicles/vw_golf.jpg'
import imgKodiaq   from '../../assets/vehicles/skoda_kodiaq.jpg'
import imgTiguan   from '../../assets/vehicles/vw_tiguan.jpg'
import imgMacan    from '../../assets/vehicles/porsche_macan.jpg'
import imgEvoque   from '../../assets/vehicles/range_evoque.jpg'
import imgGClass   from '../../assets/vehicles/mercedes_gclass.jpg'
import imgAudiA6   from '../../assets/vehicles/audi_a6.jpg'

const initialVehicles = [
  { id: 1,  name: 'Dacia Duster',            category: 'eco',     price: 3500,  status: 'available',   image: imgDuster,  seats: 5, gearbox: 'Manuelle' },
  { id: 2,  name: 'Peugeot 208',             category: 'eco',     price: 3000,  status: 'rented',      image: imgP208,    seats: 5, gearbox: 'Manuelle' },
  { id: 3,  name: 'Volkswagen Golf 8 R-Line', category: 'confort', price: 6000,  status: 'available',   image: imgGolf,    seats: 5, gearbox: 'Automatique' },
  { id: 4,  name: 'Škoda Kodiaq',            category: 'suv',     price: 7500,  status: 'rented',      image: imgKodiaq,  seats: 7, gearbox: 'Automatique' },
  { id: 5,  name: 'Volkswagen Tiguan',       category: 'suv',     price: 7000,  status: 'maintenance', image: imgTiguan,  seats: 5, gearbox: 'Automatique' },
  { id: 6,  name: 'Porsche Macan GTS',       category: 'luxe',    price: 14000, status: 'available',   image: imgMacan,   seats: 5, gearbox: 'Automatique' },
  { id: 7,  name: 'Range Rover Evoque',      category: 'luxe',    price: 15000, status: 'rented',      image: imgEvoque,  seats: 5, gearbox: 'Automatique' },
  { id: 8,  name: 'Mercedes-Benz G63 AMG',    category: 'luxe',    price: 25000, status: 'available',   image: imgGClass,  seats: 5, gearbox: 'Automatique' },
  { id: 9,  name: 'Audi A6 S-Line',          category: 'confort', price: 9000,  status: 'available',   image: imgAudiA6,  seats: 5, gearbox: 'Automatique' },
]

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState(initialVehicles)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState(null)

  const addToast = useToast()

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: 'eco',
    price: '',
    status: 'available',
    gearbox: 'Automatique',
    image: null,
  })

  const [imagePreview, setImagePreview] = useState(null)

  const openAddModal = () => {
    setEditingVehicle(null)
    setFormData({ name: '', category: 'eco', price: '', status: 'available', gearbox: 'Automatique', image: null })
    setImagePreview(null)
    setIsModalOpen(true)
  }

  const openEditModal = (vehicle) => {
    setEditingVehicle(vehicle)
    setFormData({
      name: vehicle.name,
      category: vehicle.category,
      price: vehicle.price,
      status: vehicle.status,
      gearbox: vehicle.gearbox || 'Automatique',
      image: vehicle.image || null,
    })
    setImagePreview(vehicle.image || null)
    setIsModalOpen(true)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImagePreview(imageUrl)
      setFormData(prev => ({ ...prev, image: imageUrl }))
    }
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Voulez-vous vraiment supprimer le véhicule ${name} ?`)) {
      setVehicles(vehicles.filter(v => v.id !== id))
      addToast(`Véhicule "${name}" supprimé avec succès`, 'success')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingVehicle) {
      setVehicles(vehicles.map(v => v.id === editingVehicle.id ? { ...v, ...formData, price: Number(formData.price) } : v))
      addToast(`Véhicule "${formData.name}" modifié avec succès`, 'success')
    } else {
      const newVeh = {
        id: Date.now(),
        ...formData,
        price: Number(formData.price),
      }
      setVehicles([newVeh, ...vehicles])
      addToast(`Véhicule "${formData.name}" ajouté avec succès`, 'success')
    }

    setIsModalOpen(false)
  }

  const statusBadges = {
    available:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    rented:      'bg-amber-500/10 text-amber-400 border-amber-500/30',
    maintenance: 'bg-red-500/10 text-red-400 border-red-500/30',
  }

  const statusLabels = {
    available:   'Disponible',
    rented:      'Loué',
    maintenance: 'En maintenance',
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-[#F5F0E6]">Gestion de la Flotte</h1>
          <p className="text-[#C9C0B3] text-sm mt-1">Gérez vos véhicules, photos, tarifs et disponibilités</p>
        </div>
        <button
          onClick={openAddModal}
          className="btn-gold text-sm font-semibold py-3 px-5 flex items-center justify-center gap-2 self-start sm:self-auto"
        >
          <Plus size={18} />
          Ajouter un véhicule
        </button>
      </div>

      {/* Grille des véhicules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <motion.div
            key={v.id}
            layout
            className="p-5 rounded-2xl bg-gradient-to-br from-[#291D14] to-[#0F0705] border border-[#9E7C3D]/20 flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div className="h-44 rounded-xl overflow-hidden bg-[#0F0705] mb-4 relative flex items-center justify-center border border-[#9E7C3D]/10">
                {v.image ? (
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-4">
                    <Car size={40} className="mx-auto text-[#CCA64F]/40 mb-2" />
                    <span className="text-xs text-[#9E7C3D]">Pas d'image</span>
                  </div>
                )}
                <span className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full border ${statusBadges[v.status]}`}>
                  {statusLabels[v.status]}
                </span>
              </div>

              {/* Titre & Prix */}
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-bold text-lg text-[#F5F0E6]">{v.name}</h3>
                <span className="text-xs font-semibold px-2 py-1 bg-[#CCA64F]/10 border border-[#CCA64F]/30 text-[#F0D675] uppercase rounded">
                  {v.category}
                </span>
              </div>

              <p className="text-xl font-bold text-[#CCA64F] mb-4">
                {v.price.toLocaleString('fr-DZ')} <span className="text-xs text-[#C9C0B3]">DZD / jour</span>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-4 border-t border-[#9E7C3D]/10">
              <button
                onClick={() => openEditModal(v)}
                className="p-2 text-[#C9C0B3] hover:text-[#F0D675] hover:bg-[#0F0705] rounded-lg transition-colors"
                title="Modifier"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete(v.id, v.name)}
                className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                title="Supprimer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modale d'ajout / modification */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0705]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-[#291D14] border border-[#9E7C3D]/30 rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#C9C0B3] hover:text-[#F5F0E6]"
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-display font-bold text-[#F5F0E6] mb-6">
                {editingVehicle ? 'Modifier le véhicule' : 'Ajouter un véhicule'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Upload Photo */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-2">Photo du véhicule</label>
                  <div className="relative border-2 border-dashed border-[#9E7C3D]/40 hover:border-[#CCA64F] rounded-xl p-4 text-center cursor-pointer transition-colors bg-[#0F0705]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    {imagePreview ? (
                      <div className="relative h-32 w-full rounded-lg overflow-hidden">
                        <img src={imagePreview} alt="Aperçu" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-xs text-white font-medium opacity-0 hover:opacity-100 transition-opacity">
                          Changer la photo
                        </div>
                      </div>
                    ) : (
                      <div className="py-4 space-y-2">
                        <Upload size={28} className="mx-auto text-[#CCA64F]" />
                        <p className="text-xs text-[#F5F0E6] font-medium">Cliquez ou glissez une image ici</p>
                        <p className="text-[10px] text-[#C9C0B3]">JPG, PNG jusqu'à 5MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-1">Nom du modèle</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ex. Porsche Macan"
                    className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-4 py-2.5 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-1">Catégorie</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-3 py-2.5 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
                    >
                      <option value="eco">Économique</option>
                      <option value="confort">Confort</option>
                      <option value="suv">SUV</option>
                      <option value="luxe">Luxe</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-1">Prix (DZD/j)</label>
                    <input
                      type="number"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="7500"
                      className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-4 py-2.5 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-1">Statut</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-3 py-2.5 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
                    >
                      <option value="available">Disponible</option>
                      <option value="rented">Loué</option>
                      <option value="maintenance">En maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#C9C0B3] mb-1">Boîte de vitesse</label>
                    <select
                      value={formData.gearbox}
                      onChange={(e) => setFormData({ ...formData, gearbox: e.target.value })}
                      className="w-full bg-[#0F0705] border border-[#9E7C3D]/30 rounded-xl px-3 py-2.5 text-sm text-[#F5F0E6] focus:border-[#CCA64F] outline-none"
                    >
                      <option value="Automatique">Automatique</option>
                      <option value="Manuelle">Manuelle</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-3 border border-[#9E7C3D]/30 rounded-xl text-sm font-semibold text-[#C9C0B3] hover:bg-[#0F0705]"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-gold py-3 text-sm font-semibold"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
