import React, { useState } from 'react'
import classNames from 'classnames'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import { Word } from '@prisma/client'
import WordItem from '@/components/words/wordItem/WordItem'

function QuizOption({
  option,
  isCorrect,
  onClick,
  answerSubmitted,
}: {
  option: Word
  isCorrect: boolean
  onClick: () => void
  answerSubmitted: boolean
}) {
  const [showDetails, setShowDetails] = useState(false)

  const infoCardStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '18.75rem',
    minHeight: '31.25rem',
    bgcolor: '#F7F7F6',
    boxShadow: 24,
    borderRadius: '12px',
    px: 2,
    py: 6,
  }

  const getOptionButtonClasses = () => {
    return classNames('border-4 rounded-xl p-2 shadow-sm relative', {
      'hover:border-dark-pink transition-all duration-200': !answerSubmitted,
      'border-green-300': answerSubmitted && isCorrect,
      'border-red-300': answerSubmitted && !isCorrect,
      'cursor-auto disabled': answerSubmitted,
    })
  }

  const getWordButtonClasses = () => {
    return classNames({
      'underline hover:text-gray-500 hover:decoration-gray-500 decoration-1 underline-offset-2 decoration-gray-600 font-semibold':
        answerSubmitted,
    })
  }

  return (
    <button
      aria-label="Quiz option"
      className={getOptionButtonClasses()}
      value={option.word}
      onClick={onClick}
    >
      <div>
        {answerSubmitted ? (
          <button
            aria-label="Word details"
            className={getWordButtonClasses()}
            onClick={() => setShowDetails(true)}
          >
            {option.word}
          </button>
        ) : (
          <p>{option.word}</p>
        )}
      </div>
      <Modal
        open={showDetails}
        onClose={() => setShowDetails(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={infoCardStyle}>
          <WordItem word={option} />
        </Box>
      </Modal>
    </button>
  )
}
export default QuizOption
