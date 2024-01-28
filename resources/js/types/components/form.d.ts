import { type InertiaForm } from '@inertiajs/vue3'

export interface AppFormProps {
  isEdit?: boolean
  form: InertiaForm<object>
  routes: {
    post?: () => string | undefined
    patch?: () => string | undefined
  }
  transformedData?: (data: object) => object
  populateForm?: () => void
}
