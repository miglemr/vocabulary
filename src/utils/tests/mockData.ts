import { Word } from '@prisma/client'

export const words: Word[] = [
  {
    id: 1,
    word: 'abstruse',
    definition: 'difficult to understand; obscure',
    partOfSpeech: 'adj',
    pronunciation: '/æbˈstruːs/',
    example:
      "The professor's lecture was so abstruse that many students struggled to follow along.",
    audio: 'https://media.merriam-webster.com/audio/prons/en/us/mp3/a/abstru01.mp3',
    difficulty: 'advanced',
  },
  {
    id: 3,
    word: 'deleterious',
    definition: 'causing harm or damage',
    partOfSpeech: 'adj',
    pronunciation: '/ˌdɛlɪˈtɪəriəs/',
    example: 'The use of chemicals in farming can have deleterious effects on the environment.',
    audio: 'https://media.merriam-webster.com/audio/prons/en/us/mp3/d/delete02.mp3',
    difficulty: 'advanced',
  },
  {
    id: 4,
    word: 'ephemeral',
    definition: 'lasting for a very short time',
    partOfSpeech: 'adj',
    pronunciation: '/ɪˈfɛmərəl/',
    example: 'The beauty of the sunset was ephemeral, disappearing as quickly as it arrived.',
    audio: 'https://media.merriam-webster.com/audio/prons/en/us/mp3/e/epheme04.mp3',
    difficulty: 'advanced',
  },
  {
    id: 5,
    word: 'fastidious',
    definition: 'very attentive to and concerned about accuracy and detail',
    partOfSpeech: 'adj',
    pronunciation: '/fæˈstɪdiəs/',
    example:
      'She was so fastidious about her work that she would often spend hours perfecting every detail.',
    audio: 'https://media.merriam-webster.com/audio/prons/en/us/mp3/f/fastid01.mp3',
    difficulty: 'advanced',
  },
  {
    id: 6,
    word: 'garrulous',
    definition: 'excessively talkative, especially on trivial matters',
    partOfSpeech: 'adj',
    pronunciation: '/ˈɡɛrələs/',
    example: 'The garrulous host kept the guests entertained with endless anecdotes and chatter.',
    audio: 'https://media.merriam-webster.com/audio/prons/en/us/mp3/g/garrul02.mp3',
    difficulty: 'advanced',
  },
  {
    id: 8,
    word: 'lachrymose',
    definition: 'tearful or given to weeping',
    partOfSpeech: 'adj',
    pronunciation: '/ˌlækrɪˈmoʊs/',
    example:
      'Her lachrymose demeanor at the farewell party showed how much she would miss her friends.',
    audio: 'https://media.merriam-webster.com/audio/prons/en/us/mp3/l/lachry02.mp3',
    difficulty: 'advanced',
  },
  {
    id: 9,
    word: 'nefarious',
    definition: 'wicked or criminal',
    partOfSpeech: 'adj',
    pronunciation: '/nəˈfɛəriəs/',
    example:
      "The detective uncovered the nefarious scheme that had been operating under everyone's nose.",
    audio: 'https://media.merriam-webster.com/audio/prons/en/us/mp3/n/nefari01.mp3',
    difficulty: 'advanced',
  },
]
