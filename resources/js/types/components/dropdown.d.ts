import type { Method } from '@inertiajs/core'

export interface AppDropdownProps {
  icon?: string
  label?: string
  btnClass?: string | string[]
  items?: DropdownItem[]
  align?: 'left' | 'right'
}

export type DropdownItem = {
  label: string
  icon?: string
  onclick?: () => void
  link?: {
    url: string
    method?: Method
  }
}
