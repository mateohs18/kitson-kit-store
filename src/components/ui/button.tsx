import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
        outline:
          "border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:text-card-foreground shadow-sm hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg transform hover:scale-[1.02]",
        ghost: "hover:bg-muted hover:text-muted-foreground transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        professional: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300",
        elegant: "bg-card border border-border text-card-foreground hover:border-primary/50 hover:bg-gradient-to-r hover:from-card hover:to-primary/5 shadow-sm hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300",
        gaming: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] font-semibold",
        social: "bg-card/80 backdrop-blur-sm text-card-foreground hover:bg-card hover:text-primary border border-border shadow-sm hover:shadow-md transform hover:scale-[1.02]",
        premium: "bg-gradient-to-r from-accent to-accent-strong text-accent-foreground shadow-lg hover:shadow-2xl transform hover:scale-[1.02] font-semibold border border-accent/20",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-12 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
