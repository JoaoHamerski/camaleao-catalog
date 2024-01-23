<script setup lang="ts">
import { Category } from '@/types/pages'
import DCategoryContentItemDropdown from './DCategoryContentItemDropdown.vue'

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

    <DCategoryContentItemDropdown
      @edit="onEdit"
      @delete="onDelete"
    />
  </div>
</template>
