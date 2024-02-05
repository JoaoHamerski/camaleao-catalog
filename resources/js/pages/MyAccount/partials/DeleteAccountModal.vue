<script setup lang="ts">
import { useToastStore } from '@/store/toast-store'
import { User } from '@/types'
import { useForm } from '@inertiajs/vue3'

defineProps<{ user: User }>()

const toastStore = useToastStore()
const form = useForm({
  password: '',
})

const onSubmit = () => {
  form
    .transform((data) => ({
      ...data,
      _method: 'delete',
    }))
    .post(route('auth.delete-account'), {
      onSuccess() {
        toastStore.success('Conta deletada!')
      },
    })
}
</script>

<template>
  <AppModal
    color="error"
    size="xs"
  >
    <template #title> Deletar conta </template>
    <template #content>
      <div class="text-xl text-center font-bold mb-10">Você tem certeza?</div>
      <form @submit.prevent="onSubmit">
        <AppInput
          v-if="user.has_password"
          v-model="form.password"
          type="password"
          name="password"
          autocomplete="off"
          label="Confirme sua senha"
          :error-message="form.errors.password"
          placeholder="Digite sua senha..."
        />

        <AppButton
          class="btn btn-success w-full"
          label="Deletar"
        />
      </form>
    </template>
  </AppModal>
</template>
