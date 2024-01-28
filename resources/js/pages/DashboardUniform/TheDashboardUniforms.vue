<script setup lang="ts">
import { ref } from 'vue'
import DashboardContentLayout from '../Shared/layouts/DashboardContentLayout.vue'
import UniformsBody from './partials/UniformsBody.vue'
import UniformModal from './partials/UniformModal.vue'

defineProps<{ uniforms: any }>()
const uniformCreateModal = ref(false)

const openModal = () => {
  uniformCreateModal.value = true
}
</script>

<template>
  <DashboardContentLayout>
    <template #header>
      <AppButton
        icon="fas fa-plus"
        class="btn-success rounded-md"
        label="Novo uniforme"
        @click.prevent="openModal"
      />
    </template>

    <UniformModal v-model:show="uniformCreateModal" />

    <UniformsBody :uniforms="uniforms.data" />
  </DashboardContentLayout>
</template>
