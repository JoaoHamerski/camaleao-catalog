<script setup lang="ts">
import type { Category, Uniform, UniformFormFields } from '@/types/pages'
import { useForm } from '@inertiajs/vue3'
import { computed } from 'vue'
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import UniformFormCategoryOption from './UniformFormCategoryOption.vue'
import { urlToFile } from '@/utils/helpers'

interface UniformFormProps {
  uniform?: Uniform
  isEdit?: boolean
}

const props = withDefaults(defineProps<UniformFormProps>(), {
  uniform: undefined,
  isEdit: false,
})

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

const form = useForm({
  name: '',
  category: null,
  images: FileList,
})

const routes = computed(() => ({
  post: () => route('dashboard.uniforms.store'),
  patch: () =>
    props.uniform
      ? route('dashboard.uniforms.patch', {
          uniform: props.uniform.slug,
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

const transformedData = (data: any) => ({
  category: data?.category?.id || null,
})

const populateForm = async () => {
  if (!props.uniform) {
    return
  }

  const images = props.uniform.images.map(
    async (image) => await urlToFile(image.url, image.name),
  )

  console.log(images)

  const populatedData: UniformFormFields = {
    name: props.uniform.name,
    category: props.uniform.category,
    images,
  }

  Object.assign(form, populatedData)
}
</script>

<template>
  <AppForm
    class="flex flex-col gap-8"
    :form="form"
    :routes="routes"
    :is-edit="isEdit"
    :transformed-data="transformedData"
    :populate-form="populateForm"
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
      :error-message="form.errors.category"
      @input="onCategorySearch"
    >
      <template #option="item">
        <UniformFormCategoryOption :item="item" />
      </template>
    </AppCombobox>

    <AppInputFile
      v-model="form.images"
      name="images"
      label="Imagens do uniforme"
      multiple
      accept="image/*"
      hint="Máx. 300kB por imagem"
      :error-message="form.errors.images"
    />
  </AppForm>
</template>
