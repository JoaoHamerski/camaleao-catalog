import type { Pagination } from '../index'

export type Category = {
  id: number
  name: string
  image: string
}

export interface CategoryData extends Pagination {
  data: Category[]
}

export type DCategoryFormProps = {
  name: string
  image: File | null
}
