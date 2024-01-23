<script setup lang="ts">
import { ref } from 'vue'
import DashboardContentLayout from '../Shared/layouts/DashboardContentLayout.vue'
import UniformContent from './partials/UniformContent.vue'

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
    <UniformContent />
  </DashboardContentLayout>
</template>
