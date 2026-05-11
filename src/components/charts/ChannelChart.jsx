import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { Card } from '../common/ui/Card'
import { useTheme } from '../../hooks/useTheme'

const colors = ['#60a5fa', '#34d399', '#fb923c', '#a78bfa']

export function ChannelChart({ data }) {
  const { isDark } = useTheme()

  return (
    <Card className="min-h-72 p-4 sm:min-h-80 sm:p-5">
      <h3 className="text-base font-semibold text-slate-950 dark:text-white">Traffic mix</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">Sessions by acquisition channel</p>
      <div className="mt-4 h-48 sm:mt-5 sm:h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={58} outerRadius={86}>
              {data.map((entry, index) => (
                <Cell fill={colors[index % colors.length]} key={entry.name} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: isDark ? '#020617' : '#ffffff',
                border: isDark
                  ? '1px solid rgba(255,255,255,0.12)'
                  : '1px solid rgba(148,163,184,0.28)',
                borderRadius: '8px',
                color: isDark ? '#e2e8f0' : '#1e293b',
              }}
              formatter={(value) => `${value}%`}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:gap-3">
        {data.map((item, index) => (
          <div className="flex items-center gap-2 text-sm" key={item.name}>
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className="text-slate-500 dark:text-slate-400">{item.name}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
