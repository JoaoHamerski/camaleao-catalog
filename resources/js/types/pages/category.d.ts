import { Image } from '.'
import type { Pagination } from '../index'

export type Category = {
  id: string
  slug: string
  name: string
  uniforms_count: number
  image: Image
}

export interface CategoryPaginated extends Pagination {
  data: Category[] | []
}

export type CategoryFormFields = {
  name: string
  image: File | null
}
