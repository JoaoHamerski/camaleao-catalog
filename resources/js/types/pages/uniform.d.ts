import { Category } from '.'

export type Uniform = {
  id: string
  category: Category
  name: string
  images: string[]
}

export type UniformFormFields = {
  name: string
  category: Category | null
  images: File[] | null
}
