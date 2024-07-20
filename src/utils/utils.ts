export const getPrevIndex = (current: number, total: number) => (current - 1 + total) % total
export const getNextIndex = (current: number, total: number) => {
  if (current >= total) {
    return 0
  }

  return (current + 1) % total
}
