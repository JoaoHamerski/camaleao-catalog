<script setup lang="ts">
import { onMounted } from 'vue'
import { computed } from 'vue'
import { useForm } from '@inertiajs/vue3'
import type { Category, CategoryFormProps } from '@/types/pages'
import { urlToFile } from '@/utils/helpers'

interface DCategoryFormProps {
  category?: Category
}

const emit = defineEmits(['success'])
const props = defineProps<DCategoryFormProps>()

const form = useForm<CategoryFormProps>({
  _method: 'post',
  name: '',
  image: null,
})

const isEdit = computed(() => !!props.category)

const submitForm = (url: string) => {
  form.post(url, {
    onSuccess() {
      emit('success')
    },
  })
}

const onSubmit = () => {
  if (isEdit.value) {
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
  if (isEdit.value) {
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
      label="Cadastrar"
      class="btn-primary font-bold"
    />
  </form>
</template>
