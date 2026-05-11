import { motion } from 'framer-motion'
import { Card } from '../common/ui/Card'

const statusStyles = {
  Paid: 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/20',
  Pending: 'bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20',
  Failed: 'bg-rose-500/10 text-rose-700 ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-300 dark:ring-rose-400/20',
  Refunded: 'bg-sky-500/10 text-sky-700 ring-sky-500/20 dark:bg-sky-400/10 dark:text-sky-300 dark:ring-sky-400/20',
}

export function TransactionTable({ transactions }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-4 transition-colors duration-300 sm:px-5 dark:border-white/10 dark:bg-white/[0.02]">
        <div>
          <h3 className="text-base font-semibold text-slate-950 dark:text-white">
            Recent transactions
          </h3>
          <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
            Latest customer payments
          </p>
        </div>
      </div>

      <div className="w-[calc(100vw-66px)] overflow-x-auto overscroll-x-contain sm:w-full">
        <div className="max-h-[350px] overflow-y-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead className="sticky top-0 z-10 bg-slate-100 text-slate-700 transition-colors duration-300 dark:bg-[#0c1021] dark:text-slate-200">
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider dark:border-white/10">
                <th className="px-4 py-3 font-semibold sm:px-5">User name</th>
                <th className="px-4 py-3 font-semibold sm:px-5">Status</th>
                <th className="px-4 py-3 font-semibold sm:px-5">Amount</th>
                <th className="px-4 py-3 font-semibold sm:px-5">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white transition-colors duration-300 dark:divide-white/10 dark:bg-transparent">
              {transactions.map((transaction, index) => (
                <motion.tr
                  className="group transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-white/[0.05]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  key={transaction.id}
                >
                  <td className="px-4 py-4 sm:px-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#9255ce]/15 text-sm font-semibold text-[#9255ce] ring-1 ring-[#9255ce]/20 transition-colors duration-300 dark:text-[#c7a6eb]">
                        {transaction.userName
                          .split(' ')
                          .map((name) => name[0])
                          .join('')}
                      </span>
                      <span className="font-medium text-slate-900 transition-colors duration-200 group-hover:text-[#9255ce] dark:text-white dark:group-hover:text-[#c7a6eb]">
                        {transaction.userName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 sm:px-5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 transition-colors duration-300 ${
                        statusStyles[transaction.status]
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-semibold text-slate-900 transition-colors duration-300 sm:px-5 dark:text-slate-100">
                    {transaction.amount}
                  </td>
                  <td className="px-4 py-4 text-slate-500 transition-colors duration-300 sm:px-5 dark:text-slate-400">
                    {transaction.date}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}
