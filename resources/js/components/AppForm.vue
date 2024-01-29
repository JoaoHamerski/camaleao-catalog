<script setup lang="ts">
import { type VisitOptions } from '@inertiajs/core'
import { computed } from 'vue'
import { onMounted } from 'vue'
import type { AppFormProps } from '@/types/components'

const emit = defineEmits(['success', 'error'])
const props = withDefaults(defineProps<AppFormProps>(), {
  isEdit: false,
  transformedData: () => ({}),
  populateForm: () => {},
})

const { form, isEdit, routes, transformedData, populateForm } = props

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

const transformedForm = computed(() =>
  form.transform((data) => ({
    _method: submitMethod.value,
    ...data,
    ...transformedData(data),
  })),
)

const submit = (options?: Partial<VisitOptions>) => {
  if (isEdit && routes.patch) {
    transformedForm.value.post(routes.patch()!, options)
    return
  }

  if (routes.post) {
    transformedForm.value.post(routes.post()!, options)
    return
  }

  throw Error('Nenhuma rota POST ou PATCH especificada')
}

const onSubmit = () => {
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

onMounted(() => {
  if (isEdit) {
    populateForm()
  }
})
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    @focus.capture="onFocus"
  >
    <slot />

    <AppButton
      v-if="!$slots['footer']"
      type="submit"
      :loading="form.processing"
      class="btn btn-outline"
      :class="btnAttrs.className"
      :label="btnAttrs.label"
    />
    <slot
      v-else
      name="footer"
    />
  </form>
</template>
