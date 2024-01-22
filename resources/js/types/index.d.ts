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

export type Pagination = {
  current_page: number
  first_page_url: string | null
  last_page_url: string | null
  last_page: number
  next_page_url: string | null
  prev_page_url: string | null
  links: PagiationLink[]
  from: number
  to: number
  path: string
  per_page: number
  total: number
}
