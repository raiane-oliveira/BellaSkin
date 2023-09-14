import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={twMerge(
        'rounded-sm py-4 px-9 text-white text-lg font-medium bg-primary shadow-[0px_5px_70px_0px_rgba(7,8,65,0.10)]',
        props.className,
      )}
    >
      {children}
    </button>
  )
}
