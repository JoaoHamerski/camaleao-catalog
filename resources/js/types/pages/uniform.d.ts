import { Category, Image } from '.'

export type Uniform = {
  id: string
  category: Category
  name: string
  images: Image[]
}

export type UniformFormFields = {
  name: string
  category: Category | null
  images: File[] | null
}
