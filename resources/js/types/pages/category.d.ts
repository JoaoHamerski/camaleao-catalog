import type { Method } from '@inertiajs/core'
import type { AppModalColors } from '../components/modal'
import type { Pagination } from '../index'

export type Category = {
  id: string
  name: string
  image: {
    name?: string
    url: string
  }
}

export interface CategoryData extends Pagination {
  data: Category[]
}

export type CategoryFormProps = {
  _method: Method
  name: string
  image: File | null
}

export type CategoryModalAttrs = {
  icon: string
  color: AppModalColors
  label: string
}
