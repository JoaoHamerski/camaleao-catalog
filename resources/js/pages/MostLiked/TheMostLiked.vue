<script setup lang="ts">
import NoItemsFound from '@/components/NoItemsFound.vue'
import ContentLayout from '../Shared/layouts/ContentLayout.vue'
</script>
<template>
  <ContentLayout>
    <template #title>Mais curtidos</template>
    <NoItemsFound> Nada por aqui ainda </NoItemsFound>
  </ContentLayout>
</template>
