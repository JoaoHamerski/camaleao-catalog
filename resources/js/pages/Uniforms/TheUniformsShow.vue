<script setup lang="ts">
import { Uniform } from '@/types/pages'
import { computed } from 'vue'

const props = defineProps<{ uniform: Uniform }>()

const imagesSrc = computed(() => props.uniform.images.map((image) => image.url))
</script>
<template>
  <div>
    <AppCarousel :srcs="imagesSrc" />
  </div>
</template>
