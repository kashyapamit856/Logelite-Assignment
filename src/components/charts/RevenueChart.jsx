import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { motion } from 'framer-motion'
import { Card } from '../common/ui/Card'
import { formatCompactCurrency } from '../../utils/formatters'
import { useTheme } from '../../hooks/useTheme'

export function RevenueChart({ data }) {
  const { isDark } = useTheme()
  const chartTheme = {
    axis: isDark ? '#94a3b8' : '#64748b',
    cursor: isDark ? '#475569' : '#cbd5e1',
    grid: isDark ? '#1e293b' : '#e2e8f0',
    tooltipBackground: isDark ? '#020617' : '#ffffff',
    tooltipText: isDark ? '#e2e8f0' : '#1e293b',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <Card className="min-h-72 overflow-hidden p-4 sm:min-h-80 sm:p-5">
        <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9255ce] dark:text-[#c7a6eb]">
              Analytics
            </p>
            <h3 className="mt-1 text-base font-semibold text-slate-950 sm:text-lg dark:text-white">
              Revenue performance
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Monthly revenue compared with operating expenses
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#9255ce]" />
              Revenue
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
              Expenses
            </span>
          </div>
        </div>

        <div className="h-60 w-full sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ bottom: 8, left: 0, right: 12, top: 8 }}
            >
              <CartesianGrid stroke={chartTheme.grid} strokeDasharray="4 4" />
              <XAxis
                axisLine={false}
                dataKey="month"
                stroke={chartTheme.axis}
                tickLine={false}
                fontSize={12}
              />
              <YAxis
                axisLine={false}
                stroke={chartTheme.axis}
                tickFormatter={formatCompactCurrency}
                tickLine={false}
                fontSize={12}
                width={58}
              />
              <Tooltip
                cursor={{ stroke: chartTheme.cursor, strokeDasharray: '4 4' }}
                contentStyle={{
                  background: chartTheme.tooltipBackground,
                  border: isDark
                    ? '1px solid rgba(255,255,255,0.12)'
                    : '1px solid rgba(148,163,184,0.28)',
                  borderRadius: '8px',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
                  color: chartTheme.tooltipText,
                }}
                formatter={(value) => formatCompactCurrency(value)}
                labelStyle={{ color: chartTheme.tooltipText }}
              />
              <Legend wrapperStyle={{ display: 'none' }} />
              <Line
                dataKey="revenue"
                dot={{ fill: '#9255ce', r: 4, stroke: '#020617', strokeWidth: 2 }}
                activeDot={{ r: 6, stroke: '#f8fafc', strokeWidth: 2 }}
                isAnimationActive
                animationDuration={900}
                animationEasing="ease-out"
                stroke="#9255ce"
                strokeLinecap="round"
                strokeWidth={3}
                type="monotone"
              />
              <Line
                dataKey="expenses"
                dot={{ fill: '#38bdf8', r: 4, stroke: '#020617', strokeWidth: 2 }}
                activeDot={{ r: 6, stroke: '#f8fafc', strokeWidth: 2 }}
                isAnimationActive
                animationDuration={900}
                animationEasing="ease-out"
                stroke="#38bdf8"
                strokeLinecap="round"
                strokeWidth={3}
                type="monotone"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  )
}
