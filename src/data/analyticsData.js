export const metrics = [
  {
    id: 'revenue',
    label: 'Revenue',
    value: 24500,
    prefix: '$',
    change: '+12.8%',
    trend: 'up',
  },
  {
    id: 'users',
    label: 'Users',
    value: 12400,
    change: '+8.2%',
    trend: 'up',
  },
  {
    id: 'orders',
    label: 'Orders',
    value: 3482,
    change: '+5.4%',
    trend: 'up',
  },
  {
    id: 'growth',
    label: 'Growth',
    value: 18.6,
    suffix: '%',
    decimals: 1,
    change: '+3.2%',
    trend: 'up',
  },
]

export const revenueSeries = [
  { month: 'Jan', revenue: 32000, expenses: 21000 },
  { month: 'Feb', revenue: 38000, expenses: 24000 },
  { month: 'Mar', revenue: 41000, expenses: 26000 },
  { month: 'Apr', revenue: 52000, expenses: 31000 },
  { month: 'May', revenue: 61000, expenses: 34000 },
  { month: 'Jun', revenue: 72000, expenses: 39000 },
]

export const channelSeries = [
  { name: 'Organic', value: 42 },
  { name: 'Paid', value: 28 },
  { name: 'Referral', value: 18 },
  { name: 'Social', value: 12 },
]

export const transactions = [
  {
    id: 'txn-001',
    userName: 'Vivek Singh',
    status: 'Paid',
    amount: '$2,840.00',
    date: 'May 08, 2026',
  },
  {
    id: 'txn-002',
    userName: 'Spana Gupta',
    status: 'Pending',
    amount: '$1,250.00',
    date: 'May 07, 2026',
  },
  {
    id: 'txn-003',
    userName: 'Nisha Sharma',
    status: 'Failed',
    amount: '$980.00',
    date: 'May 06, 2026',
  },
  {
    id: 'txn-004',
    userName: 'Maya Ram',
    status: 'Paid',
    amount: '$4,420.00',
    date: 'May 05, 2026',
  },
  {
    id: 'txn-005',
    userName: 'Lovlesh Bargav',
    status: 'Refunded',
    amount: '$640.00',
    date: 'May 04, 2026',
  },
  {
    id: 'txn-006',
    userName: 'Kiran Sehgal',
    status: 'Paid',
    amount: '$340.00',
    date: 'May 03, 2026',
  },
  {
    id: 'txn-007',
    userName: 'Ashish Singh',
    status: 'Refunded',
    amount: '$90.00',
    date: 'May 03, 2026',
  },
]
