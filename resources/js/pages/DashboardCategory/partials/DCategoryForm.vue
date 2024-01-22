<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import type { DCategoryFormProps } from '@/types/pages'

const emit = defineEmits(['success'])

const form = useForm<DCategoryFormProps>({
  name: '',
  image: null,
})

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
    class="flex flex-col gap-8"
    @submit.prevent="onSubmit"
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
