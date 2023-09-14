import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface DescriptionProps extends ComponentProps<'p'> {
  children: ReactNode
}

export function Description({ children, ...props }: DescriptionProps) {
  return (
    <p {...props} className={twMerge('text-lg', props.className)}>
      {children}
    </p>
  )
}
