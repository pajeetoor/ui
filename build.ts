import { cn } from "@/lib/utils"

function Chhavi({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-brown-900/10 dark:bg-brown-50/10", className)}
      {...props}
    />
  )
}

export { Chhavi }
