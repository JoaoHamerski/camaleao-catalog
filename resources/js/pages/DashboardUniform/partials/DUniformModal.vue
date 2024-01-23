<script setup lang="ts">
import { computed } from 'vue'
import type { Uniform, UniformModalAttrs } from '@/types/pages/uniform'
import DUniformForm from './DUniformForm.vue'

interface DUniformModalProps {
  uniform?: Uniform
}

const props = defineProps<DUniformModalProps>()
const show = defineModel<boolean>('show')

const isEdit = computed(() => !!props.uniform)
const attrs = computed<UniformModalAttrs>(() =>
  isEdit.value
    ? {
        icon: 'fas fa-edit',
        color: 'primary',
        label: 'Alterar uniforme',
      }
    : {
        icon: 'fas fa-plus',
        color: 'success',
        label: 'Novo uniforme',
      },
)

const onFormSuccess = () => {
  show.value = false
}
</script>

<template>
  <AppModal
    v-model:show="show"
    :color="attrs.color"
    size="sm"
    @update:show="onFormSuccess"
  >
    <template #title>
      <FWIcon
        :icon="attrs.icon"
        class="mr-2"
      />
      <span>{{ attrs.label }}</span>
    </template>

    <template #content>
      <DUniformForm
        :is-edit="isEdit"
        :uniform="uniform"
        @success="onFormSuccess"
      />
    </template>
  </AppModal>
</template>
