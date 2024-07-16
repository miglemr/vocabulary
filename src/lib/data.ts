import { prisma } from '@/lib/prisma'

export const getWords = async () => {
  try {
    const words = await prisma.word.findMany({
      where: {
        difficulty: 'advanced',
      },
      orderBy: {
        id: 'asc',
      },
    })

    if (words.length === 0) {
      throw new Error('No words found in database')
    }

    return words
  } catch (error) {
    console.error('Failed to fetch words from database:', error)
    return null
  }
}
