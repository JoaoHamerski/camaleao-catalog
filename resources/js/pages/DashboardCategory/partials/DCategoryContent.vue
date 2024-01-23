<script setup lang="ts">
import { Category } from '@/types/pages'
import DCategoryContentItem from './DCategoryContentItem.vue'
import { ref } from 'vue'
import DCategoryModal from './DCategoryModal.vue'

interface DCategoryContentProps {
  categories: Category[]
}

defineProps<DCategoryContentProps>()

const editModal = ref({ category: undefined, show: false })

const onEditCategory = (category: any) => {
  editModal.value.category = category
  editModal.value.show = true
}
</script>

<template>
  <AppCard
    icon="fas fa-shapes"
    label="Categorias"
  >
    <template #content>
      <DCategoryModal
        v-model:show="editModal.show"
        :category="editModal.category"
      />

      <template
        v-for="category in categories"
        :key="category.id"
      >
        <DCategoryContentItem
          :category="category"
          @edit="onEditCategory"
        />
        <div class="divider my-2 last:hidden" />
      </template>
    </template>
  </AppCard>
</template>
