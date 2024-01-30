<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import LoginForm from './LoginForm.vue'

// const emit = defineEmits(['create-account'])

// const onCreateAccountClick = () => {
//   emit('create-account')
// }

const onGoogleLogin = () => {
  window.location.href = route('oauth.google')
}
</script>

<template>
  <AppModal
    ref="modal"
    size="xs"
    color="primary"
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

      <LoginForm />
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
