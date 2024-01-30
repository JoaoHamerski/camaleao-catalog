<script setup lang="ts">
import NoItemsFound from '@/components/NoItemsFound.vue'
import ContentLayout from '../Common/layouts/ContentLayout.vue'
</script>
<template>
  <ContentLayout title="Mais curtidos">
    <template #title>Mais curtidos</template>
    <NoItemsFound> Nada por aqui ainda </NoItemsFound>
  </ContentLayout>
</template>
