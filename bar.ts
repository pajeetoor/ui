"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

export const Pragati = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { markClassName?: string }
>(({ className, value, markClassName, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-indigo-100 dark:bg-indigo-700",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        `h-full w-full flex-1 transition-all bg-orange-600 dark:bg-orange-400`,
        markClassName
      )}
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`,
      }}
    />
  </ProgressPrimitive.Root>
))

Pragati.displayName = ProgressPrimitive.Root.displayName
