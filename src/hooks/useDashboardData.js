import {
  channelSeries,
  metrics,
  revenueSeries,
  transactions,
} from '../data/analyticsData'

export function useDashboardData() {
  return {
    channelSeries,
    metrics,
    revenueSeries,
    transactions,
  }
}
