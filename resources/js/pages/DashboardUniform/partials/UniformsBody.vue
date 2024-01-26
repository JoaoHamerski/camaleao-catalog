<script setup lang="ts">
import { Uniform } from '@/types/pages'
import UniformModal from './UniformModal.vue'
import UniformsBodyItem from './UniformsBodyItem.vue'

interface UniformsBodyProps {
  uniforms: Uniform[]
}
defineProps<UniformsBodyProps>()
</script>

<template>
  <AppCard
    icon="fas fa-tshirt"
    label="Uniformes"
  >
    <template #content>
      <UniformModal />

      <div v-auto-animate>
        <UniformsBodyItem
          v-for="uniform in uniforms"
          :key="uniform.id"
          :uniform="uniform"
        />
      </div>
    </template>
  </AppCard>
</template>
