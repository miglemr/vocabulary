import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

interface Word {
  id: number
  word: string
  definition: string
  partOfSpeech: 'noun' | 'verb' | 'adjective'
  pronunciation: string
  example: string
  audio: string
  difficulty: 'intermediate' | 'advanced'
}

const prisma = new PrismaClient()

async function main() {
  const filePath = path.join(__dirname, './data/words.csv')

  const words: Word[] = []

  await new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', row => {
        words.push(row)
      })
      .on('end', () => {
        resolve(words)
      })
      .on('error', error => {
        reject(error)
      })
  })

  for (const word of words) {
    await prisma.word.create({
      data: {
        word: word.word,
        definition: word.definition,
        partOfSpeech: word.partOfSpeech,
        pronunciation: word.pronunciation,
        example: word.example,
        audio: word.audio,
        difficulty: word.difficulty,
      },
    })
  }

  console.log('Database has been seeded')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
