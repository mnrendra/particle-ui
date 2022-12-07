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
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={[
        'h-9',
        'py-2',
        'px-4',
        'font-medium',
        'text-sm',
        'text-slate-50',
        'bg-pink-500',
        'rounded-md',
        'shadow-md'
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}

export default memo(Button)
