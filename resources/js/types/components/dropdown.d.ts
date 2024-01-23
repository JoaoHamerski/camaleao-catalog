import type { Method } from '@inertiajs/core'

export type DropdownItem = {
  label: string
  icon?: string
  onclick?: () => void
  link?: {
    url: string
    method?: Method
  }
}
