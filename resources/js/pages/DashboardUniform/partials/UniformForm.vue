<script setup lang="ts">
import { onMounted } from 'vue'
import { useForm } from '@inertiajs/vue3'
import type { Uniform, UniformFormFields } from '@/types/pages'
import { computed } from 'vue'

interface UniformFormProps {
  uniform?: Uniform
  isEdit?: boolean
}

const props = withDefaults(defineProps<UniformFormProps>(), {
  uniform: undefined,
  isEdit: false,
})

const form = useForm({
  name: '',
  image: null,
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

const populateForm = async () => {
  if (!props.uniform) {
    return
  }

  // const populatedData: UniformFormFields = {
  //
  // }

  // Object.assign(form, populatedData)
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
  </AppForm>
</template>
