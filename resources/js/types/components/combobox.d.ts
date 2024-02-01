export type AppComboboxInputProps = {
  by?: string
  name: string
  modelValue: object | null
  placeholder?: string
  label?: string
  loading?: boolean
  displayValue?: (item: any) => string
  hint?: string
  error?: boolean
  errorMessage?: string
}

export type AppComboboxProps = AppComboboxInputProps & {
  searchProp?: string
  items: Record<string, any>[]
}
