<script setup lang="ts">
import NoItemsFound from '@/components/NoItemsFound.vue'
import ContentLayout from '../Common/layouts/ContentLayout.vue'
import { Uniform } from '@/types/pages'
import UniformCard from '@/pages/Uniforms/partials/UniformCard.vue'

defineProps<{ uniforms: Uniform[] }>()
</script>

<template>
  <ContentLayout title="Meus favoritos">
    <template #title> Meus favoritos </template>

    <NoItemsFound v-if="!uniforms.length"> Nada por aqui ainda </NoItemsFound>
    <div class="grid grid-cols-6 gap-5">
      <UniformCard
        v-for="uniform in uniforms"
        :key="uniform.id"
        :uniform="uniform"
        :category="uniform.category"
      />
    </div>
  </ContentLayout>
</template>
