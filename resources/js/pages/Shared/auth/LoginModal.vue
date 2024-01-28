<script setup lang="ts">
import LoginForm from './LoginForm.vue'

const emit = defineEmits(['create-account'])

const onCreateAccountClick = () => {
  emit('create-account')
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
          class="btn-success w-full"
          label="Crie uma conta"
          @click.prevent="onCreateAccountClick"
        />
        <AppButton
          icon="fab fa-google"
          label="Continue com Google"
          class="btn-outline btn-error w-full"
        />
      </div>
    </template>
  </AppModal>
</template>
