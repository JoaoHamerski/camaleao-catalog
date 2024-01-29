<script setup lang="ts">
import { Category } from '@/types/pages'
import ContentLayout from '../Common/layouts/ContentLayout.vue'
import UniformCard from '@/pages/Uniforms/partials/UniformCard.vue'

defineProps<{ category: Category; uniforms: any }>()
</script>

<template>
  <ContentLayout>
    <template #title> CATEGORIAS > {{ category.name }} </template>

    <div class="grid grid-cols-6 gap-5">
      <UniformCard
        v-for="uniform in uniforms.data"
        :key="uniform.id"
        :uniform="uniform"
        :category="category"
      />
    </div>

    <div class="text-center mt-10">
      <AppPagination :pagination="{ ...uniforms.meta, ...uniforms.links }" />
    </div>
  </ContentLayout>
</template>
