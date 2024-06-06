import { ChartBarIcon, Cog6ToothIcon, BanknotesIcon, ChartPieIcon } from '@heroicons/vue/24/solid'

export const PAGE_HOLDINGS = 'holdings'
export const PAGE_PROFIT = 'Profit'
export const PAGE_ALLOCATION = 'allocation'
export const PAGE_SETTINGS = 'settings'

export const NAV_ITEMS = {
    [PAGE_HOLDINGS]: BanknotesIcon,
    [PAGE_PROFIT]: ChartBarIcon,
    [PAGE_ALLOCATION]: ChartPieIcon,
    [PAGE_SETTINGS]: Cog6ToothIcon
}
