import type { Image } from '.'

export type Category = {
  id: string
  slug: string
  name: string
  uniforms_count: number
  image: Image
}

export type CategoryFormFields = {
  name: string
  image: File | null
}
