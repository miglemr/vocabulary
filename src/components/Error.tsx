import React from 'react'

function Error({ errorMessage }: { errorMessage: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-xl font-bold">Error</h1>
      <p className="text-sm text-gray-700">
        {errorMessage || 'Something went wrong. Please try again later.'}
      </p>
    </div>
  )
}

export default Error
