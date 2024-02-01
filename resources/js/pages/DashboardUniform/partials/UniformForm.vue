<script setup lang="ts">
import type { Category, Uniform, UniformFormFields } from '@/types/pages'
import { useForm } from '@inertiajs/vue3'
import { ref, computed, onMounted } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { urlToFile } from '@/utils/helpers'
import UniformFormCategoryOption from './UniformFormCategoryOption.vue'

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

const form = useForm<{
  name?: string
  category?: Category | null
  images?: FileList
}>({
  name: undefined,
  category: undefined,
  images: undefined,
})

const endpoint = computed(() =>
  props.isEdit
    ? route('dashboard.uniforms.patch', {
        uniform: props.uniform!.slug,
      })
    : route('dashboard.uniforms.store'),
)

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

const transformedData = () => {
  return {
    category: form.category?.id || null,
  }
}

const populateForm = async () => {
  if (!props.uniform) {
    return
  }

  const images = await Promise.all(
    props.uniform.images.map(
      async (image) => await urlToFile(image.url, image.name),
    ),
  )

  const populatedData: UniformFormFields = {
    name: props.uniform.name,
    category: props.uniform.category,
    images,
  }

  Object.assign(form, populatedData)
}

onMounted(() => {
  if (props.isEdit) {
    populateForm()
  }
})
</script>

<template>
  <AppForm
    class="flex flex-col gap-8"
    :form="form"
    :endpoint="endpoint"
    :transformed-data="transformedData"
    :method="isEdit ? 'patch' : 'post'"
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

    <template #footer>
      <AppButton
        :loading="form.processing"
        :label="isEdit ? 'Atualizar' : 'Cadastrar'"
        class="btn btn-outline"
        :class="isEdit ? 'btn-primary' : 'btn-success'"
      />
    </template>
  </AppForm>
</template>
