<script setup lang="ts">
import RegisterForm from './RegisterForm.vue'

const emit = defineEmits(['update:show'])
const onSuccess = () => {
  emit('update:show', false)
}
</script>

<template>
  <AppModal
    ref="modal"
    size="xs"
    color="success"
    @update:show="$emit('update:show', $event)"
  >
    <template #title>Nova conta</template>
    <template #content>
      <RegisterForm @success="onSuccess" />
    </template>
  </AppModal>
</template>
