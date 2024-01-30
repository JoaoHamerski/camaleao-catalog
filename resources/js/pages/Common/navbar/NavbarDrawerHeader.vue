<script setup lang="ts">
import { useUserStore } from '@/store/user-store'
import { computed } from 'vue'

const userStore = useUserStore()

const user = computed(() => userStore.user)
</script>

<template>
  <div class="mx-4 my-6 text-center">
    <FWIcon
      icon="fas fa-user-shield"
      size="3x"
    />
    <div class="mt-4 font-bold">
      {{ user?.name }}
    </div>
  </div>
  <div class="divider after:bg-camaleao before:bg-camaleao" />
</template>
