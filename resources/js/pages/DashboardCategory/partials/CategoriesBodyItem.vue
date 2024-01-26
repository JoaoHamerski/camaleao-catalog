<script setup lang="ts">
import { Category } from '@/types/pages'
import CategoriesBodyItemDropdown from './CategoriesBodyItemDropdown.vue'
import DashboardListItem from '@/pages/Shared/dashboard/DashboardListItem.vue'

interface DCategoryContentItem {
  category: Category
}

const emit = defineEmits(['edit', 'delete'])
const props = defineProps<DCategoryContentItem>()

const onEdit = () => {
  emit('edit', props.category)
}

const onDelete = () => {
  emit('delete', props.category)
}
</script>

<template>
  <DashboardListItem>
    <div>
      <img
        :src="category.image.url"
        class="w-36 rounded"
        alt=""
      />
    </div>
    <div>
      <span class="text-lg font-bold">
        {{ category.name }}
      </span>
    </div>
  </DashboardListItem>
</template>
