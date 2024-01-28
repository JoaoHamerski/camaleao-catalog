export type ComboboxItem = {
  id: string
  [prop: string]: any
}

export type AppComboboxInputProps = {
  by?: string
  name: string
  modelValue: object | null
  placeholder?: string
  displayProp: string
  label?: string
  loading?: boolean
  displayValue?: (item: unknown) => string
  hint?: string
  error?: boolean
  errorMessage?: string
}

export type AppComboboxProps = AppComboboxInputProps & {
  items: ComboboxItem[] | []
}
