<script setup lang="ts">
import { Uniform } from '@/types/pages'
import { computed } from 'vue'
import UniformForm from './UniformForm.vue'
import DashboardFormModal from '@/pages/Common/dashboard/DashboardFormModal.vue'

interface UniformModalProps {
  uniform?: Uniform
}

const emit = defineEmits(['update:show'])

const labels = {
  create: 'Cadastre um uniforme',
  edit: 'Altere o uniforme',
}

const props = defineProps<UniformModalProps>()

const isEdit = computed(() => !!props.uniform)

const onSuccess = () => {
  emit('update:show', false)
}
</script>

<template>
  <DashboardFormModal
    :is-edit="isEdit"
    :labels="labels"
    @update:show="$emit('update:show', $event)"
  >
    <UniformForm
      :is-edit="isEdit"
      :uniform="uniform"
      @success="onSuccess"
    />
  </DashboardFormModal>
</template>
