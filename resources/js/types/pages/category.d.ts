import { Image } from '.'
import type { AppModalColors } from '../components/modal'
import type { Pagination } from '../index'

export type Category = {
  id: string
  name: string
  image: Image
}

export interface CategoryData extends Pagination {
  data: Category[] | []
}

export type CategoryFormFields = {
  name: string
  image: File | null
}

export type CategoryModalAttrs = {
  icon: string
  color: AppModalColors
  label: string
}
