import { useCallback, useState } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = useCallback(() => setIsSidebarOpen(true), [])
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <div className="flex min-w-0 flex-1 flex-col lg:pl-72">
          <Header onMenuClick={openSidebar} />
          <main className="flex-1 overflow-x-hidden px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
