<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import type { Category, CategoryFormFields } from '@/types/pages'
import { urlToFile } from '@/utils/helpers'
import { computed, onMounted } from 'vue'

interface CategoryFormProps {
  category?: Category
  isEdit?: boolean
}

const props = withDefaults(defineProps<CategoryFormProps>(), {
  category: undefined,
  isEdit: false,
})

const form = useForm<CategoryFormFields>({
  name: '',
  image: null,
})

const endpoint = computed(() =>
  props.isEdit
    ? route('dashboard.categories.patch', {
        category: props.category!.slug,
      })
    : route('dashboard.categories.store'),
)

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
    :endpoint="endpoint"
    :is-edit="isEdit"
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

    <AppInputFile
      v-model="form.image"
      label="Imagem da categoria"
      accept="image/*"
      hint="Tamanho máximo: 1MB"
      name="image"
      :error-message="form.errors.image"
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
