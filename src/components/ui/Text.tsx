import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const textVariants = cva(
  'active:scale-95 flex rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',
  {
    variants: {
      variant: {
        default:
            '',
        headingBig:
            '',
        headingSmall:
            'font-bold ',
        paragraphBig:
            '',
        paragraphSmall:
            '',
      },
      size: {
        default: 'text-xl ',
        sm: 'text-base ',
        lg: 'text-3xl ',
      },
        position: {
            default: 'items-center justify-center',
            center: 'items-center justify-center',
            left: 'justify-start items-start',
            right: 'justify-end items-end',
        },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      position: 'default',
    },
  }
)

//Button
export interface TextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof textVariants> {
  isLoading?: boolean
}

const Text = React.forwardRef<HTMLButtonElement, TextProps>(
  ({ className, children, variant, isLoading, size, position, ...props }, ref) => {
    return (
      <button
        className={cn(textVariants({ variant, size, position, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
      </button>
    )
  }
)
Text.displayName = 'Text'

export { Text, textVariants }
