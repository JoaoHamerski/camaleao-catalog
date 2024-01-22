<script setup lang="ts">
import DCategoryForm from './DCategoryForm.vue'

const show = defineModel<boolean>('show')

const onFormSuccess = () => {
  show.value = false
}
</script>

<template>
  <AppModal
    v-model:show="show"
    color="success"
    size="sm"
    @update:show="onFormSuccess"
  >
    <template #title>
      <FWIcon
        icon="fas fa-plus"
        class="mr-2"
      />
      <span>Cadastre uma nova categoria</span>
    </template>

    <template #content>
      <DCategoryForm @success="onFormSuccess" />
    </template>
  </AppModal>
</template>
