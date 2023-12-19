import { cn } from '../utils/cn'

export function TypographyH1({
  children,
  className,
}: React.ComponentProps<'h1'>) {
  return (
    <h1 className={cn('text-2xl md:text-3xl lg:text-4xl', className)}>
      {children}
    </h1>
  )
}
