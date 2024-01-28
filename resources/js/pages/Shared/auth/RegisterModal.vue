<script setup lang="ts">
import RegisterForm from './RegisterForm.vue'

const emit = defineEmits(['update:model-show'])
const onSuccess = () => {
  emit('update:model-show', false)
}
</script>

<template>
  <AppModal
    ref="modal"
    size="xs"
    color="success"
  >
    <template #title>Nova conta</template>
    <template #content>
      <RegisterForm @succcess="onSuccess" />
    </template>
  </AppModal>
</template>
