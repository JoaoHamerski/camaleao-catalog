<script setup lang="ts">
import { onMounted } from 'vue'
import { useForm } from '@inertiajs/vue3'
import type { Category, CategoryFormProps } from '@/types/pages'
import { urlToFile } from '@/utils/helpers'
import { computed } from 'vue'

interface DCategoryFormProps {
  category?: Category
  isEdit?: boolean
}

const emit = defineEmits(['success'])
const props = withDefaults(defineProps<DCategoryFormProps>(), {
  category: undefined,
  isEdit: false,
})

const form = useForm<CategoryFormProps>({
  _method: 'post',
  name: '',
  image: null,
})

const submitBtnLabel = computed(() =>
  props.isEdit ? 'Atualizar' : 'Cadastrar',
)

const submitForm = (url: string) => {
  form.post(url, {
    onSuccess() {
      emit('success')
    },
  })
}

const onSubmit = () => {
  if (props.isEdit) {
    const url = route('dashboard.categories.patch', {
      category: props.category!.id,
    })

    submitForm(url)

    return
  }

  submitForm(route('dashboard.categories.post'))
}

const populateForm = async () => {
  if (!props.category) {
    return
  }

  const populatedData: CategoryFormProps = {
    _method: 'patch',
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
  <form
    class="flex flex-col gap-8"
    @submit.prevent="onSubmit"
  >
    <AppInput
      v-model="form.name"
      :value="form.image"
      name="name"
      label="Nome"
      placeholder="Digite o nome..."
      :error-message="form.errors.name"
      autofocus
    />

    <AppInputFile
      v-model="form.image"
      accept="image/*"
      hint="Tamanho máximo: 1MB"
      name="image"
      :error-message="form.errors.image"
    />

    <AppButton
      :loading="form.processing"
      :label="submitBtnLabel"
      class="btn-primary font-bold"
    />
  </form>
</template>
