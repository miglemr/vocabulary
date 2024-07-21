//https://mui.com/material-ui/guides/composition/#caveat-with-refs
import classNames from 'classnames'
import Image from 'next/image'
import { forwardRef } from 'react'

const WordSelectBox = forwardRef<
  HTMLDivElement,
  { name: string; imgSrc: string; isDisabled: boolean; clicked: boolean }
>(({ name, imgSrc, isDisabled, clicked, ...rest }, ref) => {
  const buttonClasses = classNames(
    'flex flex-col justify-evenly items-center w-full h-full border-4 rounded-md',
    {
      'bg-stone-200': isDisabled,
      'border-green-300': !isDisabled && clicked,
      'border-stone-200': !clicked,
    },
  )

  return (
    <span {...rest} ref={ref} className="flex flex-col w-32 h-32 hover:cursor-pointer">
      <button disabled={isDisabled} className={buttonClasses}>
        <span className="capitalize text-xs font-semibold">{name}</span>
        <Image src={imgSrc} alt={name} height={50} width={50} unoptimized={true} />
      </button>
    </span>
  )
})

WordSelectBox.displayName = 'WordSelectBox'

export default WordSelectBox
