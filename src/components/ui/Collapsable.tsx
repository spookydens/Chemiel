import { FC } from 'react'

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const collapsableVariants = cva(
    '',
    {
        variants: {
            globalStyle:{
                default: '',
                rounded: 'rounded-2xl',
            },
            globalColor: {
                default: '',
                blueTransparent: 'bg-light-blue bg-opacity-50',
                gray: 'bg-gray-200',
                ghost: 'bg-opacity-0',
            },
            headingStyle: {
                default: '',
                rounded: 'rounded-2xl',
            },
            headingColor: {
                default: '',
                blueTransparent: 'bg-light-blue bg-opacity-50',
                ghost: 'bg-opacity-0',
            },
            contentStyle: {
                default: '',
                rounded: 'rounded-b-lg',
            },
            contentColor: {
                default: '',
                blueTransparent: 'bg-light-blue bg-opacity-50',
                ghost: 'bg-opacity-0',
            },
        },
        defaultVariants: {
            globalStyle: 'default',
            headingStyle: 'default',
            contentStyle: 'default',
            globalColor: 'default',
            headingColor: 'default',
            contentColor: 'default',
        },
    }
)


interface CollapsableProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof collapsableVariants> {
    heading: string
    content: string
}

const Collapsable: FC<CollapsableProps> = ({
                                                    children,
                                                    className,
                                                    headingStyle,
                                                    contentStyle,
                                                    headingColor,
                                                    contentColor,
                                                    globalStyle,
                                                    globalColor,
                                                    heading,
                                                    content,
                                                    ...props
                                             }) => {
    return (
            <div {...props} className="flex justify-center items-center">
                <div className={cn(collapsableVariants({globalStyle, globalColor}), "relative w-[400px] overflow-hidden")}>
                    <input
                        type="checkbox"
                        className="
                        peer
                        absolute top-0 inset-x-0
                        w-full h-12
                        opacity-0 z-10 cursor-pointer
                        "
                    />
                    <div className={cn(collapsableVariants({headingStyle, headingColor}),
                        "h-12 w-full pl-5 flex items-center"
                    )}>
                        <p className="text-lg font-semibold text-black">
                            {heading}
                        </p>
                    </div>

                    <div className="
                        absolute top-3 right-3
                        transition-transform duration-500
                        rotate-0 peer-checked:rotate-180
                        ">
                        <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div className={cn(collapsableVariants({contentStyle, contentColor}),
                    "overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96"
                    )}>
                        <div className="p-4">
                            <p>
                                {content}
                            </p>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Collapsable