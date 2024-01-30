<script setup lang="ts">
import { Category } from '@/types/pages'
import { useForm } from '@inertiajs/vue3'

const emit = defineEmits(['update:show'])
const props = defineProps<{ uniform?: Category }>()

const form = useForm({
  _method: 'delete',
})

const onCancelDelete = () => {
  emit('update:show', false)
}

const onConfirmDelete = () => {
  if (!props.uniform) {
    return
  }

  form.post(
    route('dashboard.uniforms.delete', {
      uniform: props.uniform.slug,
    }),
    {
      onSuccess: () => {
        emit('update:show', false)
      },
    },
  )
}
</script>

<template>
  <AppModal
    color="error"
    size="xs"
  >
    <template #title> Confirmação </template>
    <template #content>
      <div class="mt-6 mb-14">
        <div class="text-center font-bold">Você tem certeza?</div>
      </div>

      <div class="flex gap-5">
        <div class="w-full">
          <AppButton
            :loading="form.processing"
            label="Confirmar"
            class="btn-success w-full"
            @click.prevent="onConfirmDelete"
          />
        </div>
        <div class="w-full">
          <AppButton
            :disabled="form.processing"
            label="Cancelar"
            class="btn-ghost w-full"
            @click.prevent="onCancelDelete"
          />
        </div>
      </div>
    </template>
  </AppModal>
</template>
