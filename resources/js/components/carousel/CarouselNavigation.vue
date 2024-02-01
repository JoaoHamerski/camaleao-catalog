<script setup lang="ts">
defineEmits(['right', 'left'])
</script>

<template>
  <div class="absolute w-full top-[50%] -translate-y-[50%]">
    <div class="flex justify-between mx-5">
      <div
        class="btn btn-ghost btn-circle bg-black/20 text-white hover:bg-black/50"
        @click.prevent="$emit('left')"
      >
        <FWIcon icon="fas fa-angle-left" />
      </div>
      <div
        class="btn btn-ghost btn-circle bg-black/20 text-white hover:bg-black/50"
        @click.prevent="$emit('right')"
      >
        <FWIcon icon="fas fa-angle-right" />
      </div>
    </div>
  </div>
</template>
