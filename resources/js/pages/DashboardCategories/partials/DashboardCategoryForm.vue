<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'

type FormProps = {
  name: string
  image?: File
}

const emit = defineEmits(['success'])

const form = useForm<FormProps>({
  name: '',
  image: undefined,
})

const onFileChange = (files: FileList) => {
  form.image = files[0]
}

const onSubmit = () => {
  form.post(route('dashboard.categories.store'), {
    onSuccess: () => {
      emit('success')
    },
  })
}
</script>

<template>
  <form
    class="flex flex-col gap-3"
    @submit.prevent="onSubmit"
  >
    <AppInput
      v-model="form.name"
      name="name"
      label="Nome"
      placeholder="Digite o nome..."
      :error-message="form.errors.name"
    />

    <AppInputFile
      accept="image/*"
      hint="Tamanho máximo: 1MB"
      name="image"
      :error-message="form.errors.image"
      @input="onFileChange"
    />

    <AppButton
      label="Cadastrar"
      class="btn-primary font-bold"
    />
  </form>
</template>
