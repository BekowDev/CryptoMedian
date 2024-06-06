import { PAGE_HOLDINGS, PAGE_PROFIT } from './constants'

export function normalizePageHash() {
    const hash = window.location.hash.slice(1)
    if (Object.keys([PAGE_HOLDINGS, PAGE_PROFIT]).includes(hash)) {
        return hash
    }
    window.location.hash = PAGE_HOLDINGS
    return PAGE_HOLDINGS
}
