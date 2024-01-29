<script setup lang="ts">
import DashboardListItem from '@/pages/Shared/dashboard/DashboardListItem.vue'
import { DropdownItem } from '@/types/components'
import { Uniform } from '@/types/pages'
import { computed } from 'vue'

interface UniformsBodyItemProps {
  uniform: Uniform
}

const emit = defineEmits(['edit', 'delete'])
const props = defineProps<UniformsBodyItemProps>()

const onEdit = () => {
  emit('edit', props.uniform)
}

const onDelete = () => {
  emit('delete', props.uniform)
}

const options: DropdownItem[] = [
  { label: 'Editar', icon: 'fas fa-edit', onclick: onEdit },
  { label: 'Excluir', icon: 'fas fa-trash', onclick: onDelete },
]

const images = computed(() => props.uniform.images.map((item) => item.url))
</script>

<template>
  <DashboardListItem
    :options="options"
    class="flex gap-4"
  >
    <div class="w-40 rounded">
      <AppCarousel
        :src-slides="images"
        autoplay
        :autoplay-interval="3000"
        pagination
        img-class="w-full h-32 object-cover"
        carousel-class="rounded-lg shadow-xl"
      />
    </div>
    <div>
      <span class="text-xl font-bold">{{ uniform.name }}</span>
      <div>
        <div class="badge badge-primary">
          <FWIcon
            icon="fas fa-shapes"
            fixed-width
            class="mr-2"
          />
          <span class="font-bold">{{ uniform.category.name }}</span>
        </div>
      </div>
    </div>
  </DashboardListItem>
</template>
