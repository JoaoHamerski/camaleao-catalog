<script setup lang="ts">
import { Pagination } from '@/types/components'
import BreadcrumbsContent, { BreadcrumbPath } from '../BreadcrumbsContent.vue'
import { computed } from 'vue'

const props = defineProps<{
  breadcrumbPaths?: BreadcrumbPath[]
  pagination?: Pagination
}>()

const hasBreadcrumb = computed<boolean>(() => !!props.breadcrumbPaths)
</script>

<template>
  <div class="md:px-20 px-4 mt-16">
    <div
      v-if="hasBreadcrumb"
      class="divider divider-start text-camaleao md:text-3xl font-bold mb-10"
    >
      <BreadcrumbsContent :paths="breadcrumbPaths!" />
    </div>

    <slot />

    <div
      v-if="pagination"
      class="text-center mt-10"
    >
      <AppPagination :pagination="pagination" />
    </div>
  </div>
</template>
