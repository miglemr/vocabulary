export const dynamic = 'force-dynamic'

import _ from 'lodash'

import { prisma } from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)

    const ids = searchParams.get('id')?.split(',').map(Number)
    const limit = Number(searchParams.get('limit'))
    const random = searchParams.get('random') === 'true'

    const queryOptions: any = {
      where: {},
    }

    if (ids) {
      queryOptions.where = {
        id: {
          in: ids,
        },
      }
    }

    const words = await prisma.word.findMany(queryOptions)

    if (random) {
      const randomWords = _.sampleSize(words, limit)

      return NextResponse.json(randomWords)
    }

    return NextResponse.json(words)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
