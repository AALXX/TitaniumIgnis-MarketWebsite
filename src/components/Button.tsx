import * as React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles =
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const variantStyles = {
        default: 'bg-zinc-100 text-zinc-950 hover:bg-zinc-200',
        destructive: 'bg-red-500 text-zinc-50 hover:bg-red-600',
        outline: 'border border-zinc-800 bg-transparent hover:bg-zinc-800 text-zinc-100',
        secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700',
        ghost: 'hover:bg-zinc-800 hover:text-zinc-100',
        link: 'text-zinc-100 underline-offset-4 hover:underline'
    }

    const sizeStyles = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
    }

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} cursor-pointer`

    return <button className={combinedClassName} ref={ref} {...props} />
})

Button.displayName = 'Button'

export { Button }
