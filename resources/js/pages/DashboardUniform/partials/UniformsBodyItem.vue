<script setup lang="ts">
import DashboardListItem from '@/pages/Shared/dashboard/DashboardListItem.vue'
import { Uniform } from '@/types/pages'

interface UniformsBodyItemProps {
  uniform: Uniform
}
defineProps<UniformsBodyItemProps>()
</script>
<template>
  <DashboardListItem>
    {{ uniform.name }}
  </DashboardListItem>
</template>
