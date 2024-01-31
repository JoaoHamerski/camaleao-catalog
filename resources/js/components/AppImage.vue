<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src?: string
  alt?: string
}>()

const isLoaded = ref(false)

const onLoad = () => {
  isLoaded.value = true
}
</script>

<template>
  <div class="flex justify-center items-center bg-base-content">
    <div
      v-if="!isLoaded"
      class="skeleton w-full h-full rounded-none"
    />
    <Transition
      enter-active-class="transition-opacity duration-750"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-750"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <img
        v-show="isLoaded"
        v-bind="{ src, alt }"
        @load="onLoad"
      />
    </Transition>
  </div>
</template>
