<script setup lang="ts">
import HeaderBar from '../headerbar/HeaderBar.vue'
</script>

<template>
  <div>
    <HeaderBar />
    <div class="my-5">
      <slot />
    </div>
  </div>
</template>
