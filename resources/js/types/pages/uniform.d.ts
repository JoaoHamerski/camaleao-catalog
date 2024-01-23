import type { Method } from '@inertiajs/core'
import { Category } from '.'

export type Uniform = {
  id: string
  category: Category
  name: string
  images: string[]
}

export type UniformFormProps = {
  _method: Method
  name: string
  category: Category | null
  images: File[] | null
}
