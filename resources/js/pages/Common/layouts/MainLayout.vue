<script setup lang="ts">
import Navbar from '../navbar/NavbarMain.vue'
import ToastComponent from '@/components/toast/ToastComponent.vue'
</script>

<template>
  <div>
    <ToastComponent />
    <Navbar />
    <div class="my-5">
      <slot />
    </div>
  </div>
</template>
