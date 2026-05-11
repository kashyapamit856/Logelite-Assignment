import {
  BarChart3,
  Gauge,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react'

export const sidebarMenuItems = [
  { label: 'Overview', href: '#overview', icon: LayoutDashboard, active: true },
  { label: 'Performance', href: '#performance', icon: BarChart3 },
  { label: 'Customers', href: '#customers', icon: Users },
  { label: 'Segments', href: '#segments', icon: Gauge },
  { label: 'Settings', href: '#settings', icon: Settings },
]
