<script setup lang="ts">
import LoginForm from './LoginForm.vue'
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
    </template>
  </AppModal>
</template>
