<script setup lang="ts">
import HeaderBar from '../headerbar/HeaderBar.vue'
import ToastComponent from '@/components/toast/ToastComponent.vue'
</script>

<template>
  <div>
    <ToastComponent />
    <HeaderBar />
    <div class="my-5">
      <slot />
    </div>
  </div>
</template>
