export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)

    const ids = searchParams.get('id')?.split(',').map(Number) || []

    const queryOptions: any = {
      where: {
        id: {
          in: ids,
        },
      },
    }

    const words = await prisma.word.findMany(queryOptions)

    return NextResponse.json(words)
  } catch (error) {
    console.log(error)
  }
}
