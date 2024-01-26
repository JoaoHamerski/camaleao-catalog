<script setup lang="ts">
import { Uniform } from '@/types/pages'
import UniformModal from './UniformModal.vue'
import UniformsBodyItem from './UniformsBodyItem.vue'
import { ref } from 'vue'

interface UniformsBodyProps {
  uniforms: Uniform[]
}

defineProps<UniformsBodyProps>()

const editUniformModal = ref({ uniform: undefined, show: false })

const onEditUniform = (uniform: any) => {
  editUniformModal.value.uniform = uniform
  editUniformModal.value.show = true
}
</script>

<template>
  <AppCard
    icon="fas fa-tshirt"
    label="Uniformes"
  >
    <template #content>
      <UniformModal
        v-model:show="editUniformModal.show"
        :uniform="editUniformModal.uniform"
      />

      <div v-auto-animate>
        <UniformsBodyItem
          v-for="uniform in uniforms"
          :key="uniform.id"
          :uniform="uniform"
          @edit="onEditUniform"
        />
      </div>
    </template>
  </AppCard>
</template>
