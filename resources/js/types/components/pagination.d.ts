import { PaginationLinks, PaginationMeta } from '..'

export interface AppPaginationProps {
  pagination: PaginationLinks & PaginationMeta
}

type PaginationLink = {
  active: boolean
  label: string
  url: string | null
}

type PaginationSimpleUrls = {
  first: string
  last: string
  next: string | null
  prev: string | null
}

export type PaginationMeta = {
  current_page: number
  from: number
  last_page: number
  links: PagiationLink[]
  path: string
  per_page: number
  to: number
  total: number
}

export type Pagination = {
  links: PaginationSimpleUrls
  meta: PaginationMeta
}
