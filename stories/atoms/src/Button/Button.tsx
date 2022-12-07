import React, { memo } from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
}

/**
 * Button (atom) components
 */
const Button = ({
  label = '',
  onClick = () => {}
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={[
        'h-9',
        'py-2',
        'px-4',
        'font-medium',
        'text-sm',
        'text-slate-50',
        'bg-blue-500',
        'rounded-md',
        'shadow-md',
        'hover:shadow-lg'
      ].join(' ')}
    >
      {label}
    </button>
  )
}

export default memo(Button)
