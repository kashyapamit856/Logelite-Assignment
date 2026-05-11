import { animate, motion, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Card } from '../common/ui/Card'

function formatCounterValue(value, { decimals = 0, prefix = '', suffix = '' }) {
  const formattedValue = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value)

  return `${prefix}${formattedValue}${suffix}`
}

function AnimatedCounter({ decimals = 0, duration = 1.15, prefix, suffix, value }) {
  const count = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(() =>
    formatCounterValue(0, { decimals, prefix, suffix }),
  )

  useMotionValueEvent(count, 'change', (latest) => {
    setDisplayValue(formatCounterValue(latest, { decimals, prefix, suffix }))
  })

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    })

    return controls.stop
  }, [count, decimals, duration, prefix, suffix, value])

  return <span>{displayValue}</span>
}

export function MetricCard({
  change,
  decimals = 0,
  icon: Icon,
  index = 0,
  label,
  prefix = '',
  suffix = '',
  trend = 'up',
  value,
}) {
  const isPositive = trend === 'up'
  const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.025 }}
      transition={{
        delay: index * 0.06,
        duration: 0.36,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <Card className="group h-full transition-colors duration-300 hover:border-[#9255ce]/60 hover:bg-[#9255ce]/5 dark:hover:bg-white/[0.07]">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0">
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#9255ce]/15 text-[#c7a6eb] ring-1 ring-[#9255ce]/25 transition group-hover:bg-[#9255ce] group-hover:text-white sm:mb-5 sm:h-11 sm:w-11">
              <Icon size={21} />
            </span>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
            <p className="mt-2 truncate text-xl font-semibold text-slate-950 sm:mt-3 sm:text-2xl dark:text-white">
              <AnimatedCounter
                decimals={decimals}
                prefix={prefix}
                suffix={suffix}
                value={value}
              />
            </p>
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold ${
              isPositive
                ? 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300'
                : 'bg-sky-500/10 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300'
            }`}
          >
            <TrendIcon size={14} />
            {change}
          </span>
        </div>
      </Card>
    </motion.div>
  )
}
