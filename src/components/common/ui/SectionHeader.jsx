export function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-[#9255ce] dark:text-[#c7a6eb]">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 text-xl font-semibold text-slate-950 sm:text-2xl lg:text-3xl dark:text-white">
          {title}
        </h2>
      </div>
      {action}
    </div>
  )
}
