import * as React from 'react'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
    return <label ref={ref} className={"text-sm font-medium text-zinc-200 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"} {...props} />
})
Label.displayName = 'Label'

export { Label }
