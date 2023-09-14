import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type LineProps = ComponentProps<'div'>

export function Line(props: LineProps) {
  return (
    <div
      {...props}
      aria-hidden
      className={twMerge(
        'bg-secondary h-[0.125rem] w-14 mb-4',
        props.className,
      )}
    />
  )
}
