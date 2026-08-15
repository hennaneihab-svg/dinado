import { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, X } from 'lucide-react'

// ============================================================
// Toast Context — notifications dorées DIDANO
// ============================================================

const ToastContext = createContext()

let toastId = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'success') => {
    const id = ++toastId
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500)
  }, [])

  const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id))

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed top-5 right-5 z-[200] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg min-w-[260px] max-w-xs"
              style={{
                background:  'linear-gradient(135deg, #291D14 0%, #1a0d07 100%)',
                borderColor: toast.type === 'error' ? 'rgba(239,68,68,0.4)' : 'rgba(204,166,79,0.4)',
                boxShadow:   toast.type === 'error' ? '0 4px 20px rgba(239,68,68,0.2)' : '0 4px 20px rgba(204,166,79,0.2)',
              }}
            >
              {toast.type === 'error'
                ? <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                : <CheckCircle size={18} className="text-gold flex-shrink-0" style={{ color: '#CCA64F' }} />
              }
              <span className="text-sm font-medium flex-1" style={{ color: '#F5F0E6' }}>
                {toast.message}
              </span>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-xs opacity-50 hover:opacity-100 transition-opacity"
                style={{ color: '#C9C0B3' }}
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be inside ToastProvider')
  return ctx.addToast
}
