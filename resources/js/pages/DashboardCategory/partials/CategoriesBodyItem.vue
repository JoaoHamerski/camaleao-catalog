<script setup lang="ts">
import { Category } from '@/types/pages'
import CategoriesBodyItemDropdown from './CategoriesBodyItemDropdown.vue'

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
  <div class="group">
    <div class="flex justify-between">
      <div class="flex gap-4">
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
      </div>
      <CategoriesBodyItemDropdown
        @edit="onEdit"
        @delete="onDelete"
      />
    </div>
    <div class="divider group-last:hidden" />
  </div>
</template>
