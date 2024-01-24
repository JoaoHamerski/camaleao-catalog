<script setup lang="ts">
import { type InertiaForm } from '@inertiajs/vue3'
import { type VisitOptions } from '@inertiajs/core'
import { computed } from 'vue'

interface AppFormProps {
  isEdit?: boolean
  form: InertiaForm<object>
  routes: {
    post?: string
    patch?: string
  }
}

const emit = defineEmits(['success', 'error'])
const { form, isEdit, routes } = withDefaults(defineProps<AppFormProps>(), {
  isEdit: false,
})

const btnAttrs = computed(() =>
  isEdit
    ? {
        className: 'btn-primary',
        label: 'Atualizar',
      }
    : {
        className: 'btn-success',
        label: 'Cadastrar',
      },
)
const submitMethod = computed(() => (isEdit ? 'patch' : 'post'))

const transformForm = () => {
  form.transform((data) => ({
    _method: submitMethod.value,
    ...data,
  }))
}

const submit = (options?: Partial<VisitOptions>) => {
  if (isEdit && routes.patch) {
    form.patch(routes.patch, options)
    return
  }

  if (routes.post) {
    form.post(routes.post, options)
    return
  }

  throw Error('Nenhuma rota POST ou PATCH especificada')
}

const onSubmit = () => {
  transformForm()

  submit({
    onSuccess() {
      emit('success')
    },
    onError() {
      emit('error')
    },
  })
}

const onFocus = (event: Event) => {
  const target = event.target as HTMLInputElement

  form.clearErrors(target.name as never)
}
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    @focus.capture="onFocus"
  >
    <slot />

    <AppButton
      type="submit"
      :loading="form.processing"
      class="btn btn-outline"
      :class="btnAttrs.className"
      :label="btnAttrs.label"
    />
  </form>
</template>
