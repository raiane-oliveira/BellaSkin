import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadingProps extends ComponentProps<'h2'> {
  children: ReactNode
}

export function Heading({ children, ...props }: HeadingProps) {
  return (
    <h2
      {...props}
      className={twMerge(
        'text-heading-small leading-heading-small font-extrabold',
        props.className,
      )}
    >
      {children}
    </h2>
  )
}
