<script setup lang="ts">
import { Category, CategoryModalAttrs } from '@/types/pages'
import { computed } from 'vue'
import DCategoryForm from './DCategoryForm.vue'

interface DCategoryModalProps {
  category?: Category
}

const props = defineProps<DCategoryModalProps>()
const show = defineModel<boolean>('show')

const isEdit = computed(() => !!props.category)
const attrs = computed<CategoryModalAttrs>(() =>
  isEdit.value
    ? {
        icon: 'fas fa-edit',
        color: 'primary',
        label: 'Alterar categoria',
      }
    : {
        icon: 'fas fa-plus',
        color: 'success',
        label: 'Nova categoria',
      },
)

const onFormSuccess = () => {
  show.value = false
}
</script>

<template>
  <AppModal
    v-model:show="show"
    :color="attrs.color"
    size="sm"
    @update:show="onFormSuccess"
  >
    <template #title>
      <FWIcon
        :icon="attrs.icon"
        class="mr-2"
      />
      <span>{{ attrs.label }}</span>
    </template>

    <template #content>
      <DCategoryForm
        :is-edit="isEdit"
        :category="category"
        @success="onFormSuccess"
      />
    </template>
  </AppModal>
</template>
