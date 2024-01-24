<script setup lang="ts">
import { onMounted } from 'vue'
import { useForm } from '@inertiajs/vue3'
import type { Category, CategoryFormFields } from '@/types/pages'
import { urlToFile } from '@/utils/helpers'
import { computed } from 'vue'

interface CategoryFormProps {
  category?: Category
  isEdit?: boolean
}
const props = withDefaults(defineProps<CategoryFormProps>(), {
  category: undefined,
  isEdit: false,
})

const form = useForm({
  name: '',
  image: null,
})

const routes = computed(() => ({
  post: route('dashboard.categories.store'),
  patch: props.category
    ? route('dashboard.categories.patch', {
        category: props.category.id,
      })
    : undefined,
}))

const populateForm = async () => {
  if (!props.category) {
    return
  }

  const populatedData: CategoryFormFields = {
    name: props.category.name,
    image: await urlToFile(props.category.image.url, props.category.image.name),
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

    <AppInputFile
      v-model="form.image"
      label="Imagem da categoria"
      accept="image/*"
      hint="Tamanho máximo: 1MB"
      name="image"
      :error-message="form.errors.image"
    />
  </AppForm>
</template>
