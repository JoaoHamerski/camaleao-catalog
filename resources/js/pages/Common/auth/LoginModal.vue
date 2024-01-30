<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import LoginForm from './LoginForm.vue'
import { useToastStore } from '@/store/toast-store'

const emit = defineEmits(['update:show'])
const toast = useToastStore()
const onGoogleLogin = () => {
  window.location.href = route('oauth.google')
}

const onFormSuccess = () => {
  emit('update:show', false)

  toast.success('Boas vindas!')
}
</script>

<template>
  <AppModal
    ref="modal"
    size="xs"
    color="primary"
    @update:show="emit('update:show', $event)"
  >
    <template #title>Entre com sua conta </template>
    <template #content>
      <div class="mt-5">
        <div class="text-center mb-5">
          <FWIcon
            icon="fas fa-user-circle"
            size="5x"
          />
        </div>
      </div>

      <LoginForm @success="onFormSuccess" />

      <div class="divider my-5">OU</div>

      <div class="flex flex-col gap-3">
        <AppButton
          icon="fab fa-google"
          label="Continue com Google"
          class="btn-outline btn-error w-full"
          @click.prevent="onGoogleLogin"
        />
      </div>
    </template>
  </AppModal>
</template>
