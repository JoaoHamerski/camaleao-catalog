<script setup lang="ts">
import { ref } from 'vue'
import DashboardContentLayout from '../Shared/layouts/DashboardContentLayout.vue'
import DUniformContent from './partials/DUniformContent.vue'
import DUniformModal from './partials/DUniformModal.vue'

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
    <DUniformModal v-model:show="uniformCreateModal" />
    <DUniformContent />
  </DashboardContentLayout>
</template>
