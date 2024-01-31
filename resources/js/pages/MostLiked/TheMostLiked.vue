<script setup lang="ts">
import NoItemsFound from '@/components/NoItemsFound.vue'
import ContentLayout from '../Common/layouts/ContentLayout.vue'
</script>

<template>
  <ContentLayout title="Mais curtidos">
    <template #title>Mais curtidos</template>
    <NoItemsFound> Nada por aqui ainda </NoItemsFound>

    <AppImage
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrndiU_PO1V0_bgxgUr6kH_awoIIDK9b8uMUdFt9kZsg&s"
    />
  </ContentLayout>
</template>
