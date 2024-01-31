import type { Method } from '@inertiajs/core'

export interface AppDropdownProps {
  icon?: string
  label?: string
  btnClass?: string | string[]
  items?: DropdownItem[]
  align?: 'left' | 'right'
}

export type DropdownItem = {
  image?: string
  label: string
  active?: boolean
  icon?: string
  onclick?: () => void
  link?: {
    url: string
    method?: Method
  }
}
