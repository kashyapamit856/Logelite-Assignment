import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './themeContext'

const storageKey = 'analytics-dashboard-theme'

function getInitialTheme() {
  const savedTheme = localStorage.getItem(storageKey)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem(storageKey, theme)
  }, [isDark, theme])

  const value = useMemo(
    () => ({
      isDark,
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [isDark, theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
