import { prisma } from '@/lib/prisma'

export const getWords = async () =>
  prisma.word.findMany({
    where: {
      difficulty: 'advanced',
    },
    orderBy: {
      id: 'asc',
    },
  })
