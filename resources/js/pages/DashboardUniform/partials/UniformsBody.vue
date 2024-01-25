<script setup lang="ts">
import UniformModal from './UniformModal.vue'
import UniformsBodyItem from './UniformsBodyItem.vue'
</script>
<template>
  <AppCard
    icon="fas fa-tshirt"
    label="Uniformes"
  >
    <template #content>
      <UniformModal />

      <div v-auto-animate>
        <UniformsBodyItem />
      </div>
    </template>
  </AppCard>
</template>
