import { motion } from 'framer-motion'
import { DollarSign, ShoppingCart, TrendingUp, Users } from 'lucide-react'
import { ChannelChart } from '../components/charts/ChannelChart'
import { RevenueChart } from '../components/charts/RevenueChart'
import { SectionHeader } from '../components/common/ui/SectionHeader'
import { MetricCard } from '../components/dashboard/MetricCard'
import { TransactionTable } from '../components/dashboard/TransactionTable'
import { useDashboardData } from '../hooks/useDashboardData'

const statIcons = {
  revenue: DollarSign,
  users: Users,
  orders: ShoppingCart,
  growth: TrendingUp,
}

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
      staggerChildren: 0.08,
    },
  },
}

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Overview() {
  const { channelSeries, metrics, revenueSeries, transactions } =
    useDashboardData()

  return (
    <motion.div
      className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:gap-5 lg:gap-6"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={revealVariants}>
        <SectionHeader
          eyebrow="Overview"
          title="Business performance"
          action={
            <button
              className="rounded-lg bg-[#9255ce] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#9255ce]/20 transition hover:bg-[#9255ce]/80"
              type="button"
            >
              Export report
            </button>
          }
        />
      </motion.div>

      <motion.section
        className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4"
        variants={revealVariants}
      >
        {metrics.map((metric, index) => (
          <MetricCard
            change={metric.change}
            decimals={metric.decimals}
            icon={statIcons[metric.id]}
            index={index}
            key={metric.id}
            label={metric.label}
            prefix={metric.prefix}
            suffix={metric.suffix}
            trend={metric.trend}
            value={metric.value}
          />
        ))}
      </motion.section>

      <motion.section
        className="grid min-w-0 gap-4 lg:gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]"
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <RevenueChart data={revenueSeries} />
        <ChannelChart data={channelSeries} />
      </motion.section>

      <motion.section
        className="grid min-w-0 gap-4 lg:gap-6 xl:grid-cols-[minmax(0,1fr)]"
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TransactionTable transactions={transactions} />
      </motion.section>
    </motion.div>
  )
}
