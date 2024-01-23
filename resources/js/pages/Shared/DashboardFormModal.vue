<script setup lang="ts">
import { computed } from 'vue'
import type { DashboardModalAttrs } from '@/types/pages'

interface DashboardFormModal {
  isEdit: boolean
  labels: {
    create: string
    edit: string
  }
}

const props = defineProps<DashboardFormModal>()

const attrs = computed<DashboardModalAttrs>(() =>
  props.isEdit
    ? {
        label: props.labels.edit,
        color: 'primary',
        icon: 'fas fa-edit',
        btnLabel: 'Atualizar',
      }
    : {
        label: props.labels.create,
        color: 'success',
        icon: 'fas fa-plus',
        btnLabel: 'Cadastrar',
      },
)
</script>

<template>
  <AppModal
    :color="attrs.color"
    size="sm"
  >
    <template #title>
      <FWIcon :icon="attrs.icon" />
      <span>{{ attrs.label }}</span>
    </template>

    <template #content>
      <slot />
    </template>
  </AppModal>
</template>
