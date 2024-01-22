<script setup lang="ts">
import DashboardCategoryForm from './DashboardCategoryForm.vue'

const emit = defineEmits(['update:show'])

const onFormSuccess = () => {
  emit('update:show', false)
}
</script>

<template>
  <AppModal
    color="success"
    size="sm"
  >
    <template #title> Cadastre uma nova categoria</template>

    <template #content>
      <DashboardCategoryForm @success="onFormSuccess" />
    </template>
  </AppModal>
</template>
