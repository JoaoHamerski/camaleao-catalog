import { Category, Image } from '.'

export type Uniform = {
  id: string
  category: Category
  slug: string
  name: string
  is_favorited?: boolean
  images: Image[]
}

export type UniformFormFields = {
  name: string
  category: Category | null
  images: File[] | Promise<File>[] | null
}
