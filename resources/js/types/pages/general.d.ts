import type { Pagination } from '../components'
export type DashboardModalAttrs = {
  icon: string
  color: AppModalColors
  label: string
}

export type Image = {
  name?: string
  url: string
}

export interface PaginatedData<T> extends Pagination {
  data: T[]
}
