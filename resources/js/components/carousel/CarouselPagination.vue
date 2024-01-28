<script setup lang="ts">
defineProps<{ slidesCount: number; activeIndex: number }>()
</script>

<template>
  <div class="absolute bottom-4 left-[50%] -translate-x-[50%]">
    <div class="bg-black/30 px-1.5 py-1 rounded-full flex gap-1">
      <span
        v-for="(slide, index) in slidesCount"
        :key="index"
        class="w-1.5 h-1.5 block bg-white rounded-full"
        :class="index === activeIndex ? 'opacity-100' : 'opacity-50'"
      />
    </div>
  </div>
</template>
