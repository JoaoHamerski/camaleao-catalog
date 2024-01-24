<script setup lang="ts">
import { Category } from '@/types/pages'
import { computed } from 'vue'
import CategoryForm from './CategoryForm.vue'
import DashboardFormModal from '@/pages/Shared/DashboardFormModal.vue'

interface CategoryModal {
  category?: Category
}

const emit = defineEmits(['update:show'])

const labels = {
  create: 'Cadastre uma categoria',
  edit: 'Altere a categoria',
}

const props = defineProps<CategoryModal>()

const isEdit = computed(() => !!props.category)

const onSuccess = () => {
  emit('update:show', false)
}
</script>

<template>
  <DashboardFormModal
    :is-edit="isEdit"
    :labels="labels"
  >
    <CategoryForm
      :is-edit="isEdit"
      :category="category"
      @success="onSuccess"
    />
  </DashboardFormModal>
</template>
