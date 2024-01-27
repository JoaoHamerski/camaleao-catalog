<script setup lang="ts">
import { PaginationLinks, PaginationMeta } from '@/types'
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import { onMounted } from 'vue'

const { pagination } = defineProps<{
  pagination: PaginationLinks & PaginationMeta
}>()

const links = computed(() => {
  const links = pagination.links

  links.pop()
  links.shift()

  return links
})

const hasPages = computed(() => pagination.to > 1)
</script>

<template>
  <div
    v-if="hasPages"
    class="join"
  >
    <Link
      as="button"
      :href="pagination.prev || ''"
      class="btn join-item w-20"
      :disabled="pagination.prev === null"
    >
      <FWIcon icon="fas fa-circle-left" />
    </Link>

    <Link
      v-for="link in links"
      :key="link.label"
      as="button"
      :href="link.url || ''"
      class="btn join-item"
      :disabled="link.url === null"
      :class="{
        'btn-primary': link.active,
      }"
    >
      {{ link.label }}
    </Link>

    <Link
      as="button"
      :href="pagination.next || ''"
      class="btn join-item w-20"
      :disabled="pagination.next === null"
    >
      <FWIcon icon="fas fa-circle-right" />
    </Link>
  </div>
</template>
