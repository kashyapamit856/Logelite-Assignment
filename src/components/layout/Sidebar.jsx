import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { memo, useMemo } from 'react'
import { sidebarMenuItems } from '../../data/sidebarMenu'
import { useTheme } from '../../hooks/useTheme'

export const Sidebar = memo(function Sidebar({ isOpen, onClose }) {
  const { isDark } = useTheme()
  const logoSrc = useMemo(() => (isDark ? '/logo.png' : '/logo-dark.png'), [isDark])
  const logoAlt = isDark ? 'LogeLite logo for dark mode' : 'LogeLite logo for light mode'

  const sidebarContent = (
    <>
      <div className="mb-6 flex items-center justify-between px-2 sm:mb-8">
        <a className="flex items-center gap-3" href="#overview" onClick={onClose}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={logoSrc}
              src={logoSrc}
              alt={logoAlt}
              className="h-10 w-auto max-w-44 object-contain sm:h-11"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            />
          </AnimatePresence>
        </a>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>

      <nav className="space-y-1">
        {sidebarMenuItems.map(({ label, href, icon: Icon, active }) => (
          <a
            className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              active
                ? 'bg-[#9255ce] text-white shadow-lg shadow-[#9255ce]/25'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'
            }`}
            href={href}
            key={label}
            onClick={onClose}
          >
            <Icon
              className={
                active
                  ? 'text-white'
                  : 'text-slate-400 group-hover:text-slate-950 dark:text-slate-500 dark:group-hover:text-white'
              }
              size={18}
            />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto rounded-lg border border-slate-200 bg-slate-50 p-3 transition-colors sm:p-4 dark:border-white/10 dark:bg-white/[0.03]">
        <p className="text-sm font-semibold text-slate-950 dark:text-white">Assignment</p>
        <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-500">
          Designed & Developed By Amit Kashyap.
        </p>
      </div>
    </>
  )

  return (
    <>
      <motion.aside
        className="fixed inset-y-0 left-0 z-30 hidden w-72 shrink-0 flex-col overflow-y-auto border-r border-slate-200 bg-white px-4 py-5 transition-colors duration-300 lg:flex dark:border-white/10 dark:bg-slate-950"
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {sidebarContent}
      </motion.aside>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden dark:bg-slate-950/75"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 flex w-72 max-w-[88vw] flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 shadow-2xl shadow-slate-900/20 transition-colors duration-300 sm:px-4 sm:py-5 lg:hidden dark:border-white/10 dark:bg-slate-950 dark:shadow-black/50"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
})
