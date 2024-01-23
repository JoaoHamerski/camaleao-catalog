<script setup lang="ts">
import { onMounted } from 'vue'
import { useForm } from '@inertiajs/vue3'
import type { Uniform, UniformFormProps } from '@/types/pages'
import { computed } from 'vue'

interface DCategoryFormProps {
  uniform?: Uniform
  isEdit?: boolean
}

const emit = defineEmits(['success'])
const props = withDefaults(defineProps<DCategoryFormProps>(), {
  uniform: undefined,
  isEdit: false,
})

const form = useForm<UniformFormProps>({
  _method: 'post',
  name: '',
  category: null,
  images: null,
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
      category: props.uniform!.id,
    })

    submitForm(url)

    return
  }

  submitForm(route('dashboard.categories.post'))
}

const populateForm = async () => {
  if (!props.uniform) {
    return
  }
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
      name="name"
      label="Nome"
      placeholder="Digite o nome..."
      :error-message="form.errors.name"
      autofocus
    />

    <AppButton
      :loading="form.processing"
      :label="submitBtnLabel"
      class="btn-primary font-bold"
    />
  </form>
</template>
