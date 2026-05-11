import { Bell, ChevronDown, Menu, Moon, Search, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function Header({ onMenuClick }) {
  const { isDark, toggleTheme } = useTheme()
  const ThemeIcon = isDark ? Sun : Moon

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 px-3 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-5 sm:py-4 lg:px-8 dark:border-white/10 dark:bg-slate-950/85">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <button
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/10"
            type="button"
            aria-label="Open navigation"
            onClick={onMenuClick}
          >
            <Menu size={20} />
          </button>
          
        </div>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm transition hover:border-slate-300 focus-within:border-[#9255ce] focus-within:bg-white md:w-80 md:flex-none lg:w-96 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:focus-within:bg-white/[0.07]">
            <Search size={18} className="shrink-0 text-slate-400 dark:text-slate-500" />
            <input
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
              placeholder="Search reports, metrics..."
              type="search"
            />
          </label>

          <button
            className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
            type="button"
            aria-label="Notifications"
          >
            <Bell size={19} />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#9255ce] ring-2 ring-white dark:ring-slate-950" />
          </button>

          <button
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            onClick={toggleTheme}
          >
            <ThemeIcon size={19} />
          </button>

          <button
            className="flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white p-1.5 text-left shadow-sm transition hover:border-slate-300 hover:bg-slate-50 sm:gap-3 sm:pr-2 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
            type="button"
            aria-label="Open user menu"
          >
            <span className="grid h-8 w-8 place-items-center rounded-md bg-[#9255ce] text-xs font-bold text-white">
              AK
            </span>
            <span className="hidden leading-tight lg:block">
              <span className="block text-sm font-semibold text-slate-950 dark:text-white">
                Amit Kashyap
              </span>
              <span className="block text-xs text-slate-500 dark:text-slate-500">Admin</span>
            </span>
            <ChevronDown
              className="hidden text-slate-400 lg:block dark:text-slate-500"
              size={16}
            />
          </button>
        </div>
      </div>
    </header>
  )
}
