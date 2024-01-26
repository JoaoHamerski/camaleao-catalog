<script setup lang="ts">
import type { Category, Uniform } from '@/types/pages'
import { useForm } from '@inertiajs/vue3'
import { computed } from 'vue'
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import UniformFormCategoryOption from './UniformFormCategoryOption.vue'

interface UniformFormProps {
  uniform?: Uniform
  isEdit?: boolean
}

const categorySearch = ref('')

const {
  data: categories,
  isFetching: isCategoriesFetching,
  refetch: refetchCategories,
} = useQuery({
  queryKey: ['categories'],
  queryFn: () => fetchCategories(),
  initialData: [],
})

const props = withDefaults(defineProps<UniformFormProps>(), {
  uniform: undefined,
  isEdit: false,
})

const form = useForm({
  name: '',
  category: null,
})

const routes = computed(() => ({
  post: () => route('dashboard.uniforms.store'),
  patch: () =>
    props.uniform
      ? route('dashboard.uniforms.patch', {
          uniform: props.uniform.id,
        })
      : undefined,
}))

const fetchCategories = async (): Promise<Category[]> => {
  const endpoint = route('api.categories.get', { name: categorySearch.value })

  return await fetch(endpoint).then((response) => response.json())
}

const onCategorySearch = (event: Event) => {
  const target = event.target as HTMLInputElement

  categorySearch.value = target.value

  refetchCategories()
}

const categoryDisplayValue = (item?: Category) => {
  if (!item) {
    return ''
  }

  return item.name
}
</script>

<template>
  <AppForm
    class="flex flex-col gap-8"
    :form="form"
    :routes="routes"
    :is-edit="isEdit"
  >
    <AppInput
      v-model="form.name"
      name="name"
      label="Nome"
      placeholder="Digite o nome..."
      :error-message="form.errors.name"
      autofocus
    />

    <AppCombobox
      v-model="form.category"
      label="Categoria"
      name="category"
      placeholder="Escolha uma categoria..."
      :items="categories"
      :display-value="categoryDisplayValue"
      :loading="isCategoriesFetching"
      @input="onCategorySearch"
    >
      <template #option="item">
        <UniformFormCategoryOption :item="item" />
      </template>
    </AppCombobox>
  </AppForm>
</template>
