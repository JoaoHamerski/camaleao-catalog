export interface User {
  id: number
  name: string
  email: string
  email_verified_at: string
  birth_date: string
  phone: string
  permissions?: string[]
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User | undefined
  }
}
