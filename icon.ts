import { memo } from 'react'

import { icons } from 'lucide-react'

import { cn } from '@/lib/utils'

import type { IconName } from '@/types'

export type ChitraProps = {
  name: IconName
  className?: string
  strokeWidth?: number
}

export const Chitra = memo(({ name, className, strokeWidth }: ChitraProps) => {
  const ChitraComponent = icons[name]

  if (!ChitraComponent) {
    return null
  }

  return <ChitraComponent className={cn('w-4 h-4', className)} strokeWidth={strokeWidth || 2.5} />
})

Chitra.displayName = 'Chitra'
