export interface User {
  id: number
  name: string
  email: string
  email_verified_at: string
  permissions?: string[]
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User | undefined
  }
}

type PaginationLink = {
  active: boolean
  label: string
  url: string | null
}
type PaginationLinks = {
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
  links: PaginationLinks
  meta: PaginationeMeta
}
