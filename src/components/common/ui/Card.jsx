export function Card({ children, className = '' }) {
  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/10 ${className}`}
    >
      {children}
    </section>
  )
}
