export const getPrevIndex = (current: number, total: number) => (current - 1 + total) % total
export const getNextIndex = (current: number, total: number) => (current + 1) % total
