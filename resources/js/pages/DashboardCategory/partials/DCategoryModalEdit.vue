<script setup lang="ts">
import { Category } from '@/types/pages'
import DCategoryForm from './DCategoryForm.vue'

interface DCategoryModalEdit {
  category: Category | null
}

const show = defineModel<boolean>('show')

defineProps<DCategoryModalEdit>()

const onFormSuccess = () => {
  show.value = false
}
</script>

<template>
  <AppModal
    v-model:show="show"
    color="primary"
    size="sm"
    @update:show="onFormSuccess"
  >
    <template #title>
      <FWIcon
        icon="fas fa-plus"
        class="mr-2"
      />
      <span>Edite a categoria {{ category?.name }}</span>
    </template>

    <template #content>
      <DCategoryForm
        :category="category"
        @success="onFormSuccess"
      />
    </template>
  </AppModal>
</template>
