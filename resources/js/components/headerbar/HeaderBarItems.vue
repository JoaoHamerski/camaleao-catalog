<script setup lang="ts">
import navbarItems from './navbar-items'
</script>

<template>
  <div class="flex gap-2">
    <template
      v-for="item in navbarItems"
      :key="item.label"
    >
      <AppButton
        class="btn-ghost text-camaleao-content text-sm min-h-10 h-10"
        :class="{
          'bg-black bg-opacity-20 text-white': false,
        }"
        :label="item.label"
        :icon="item.icon"
      />
    </template>
  </div>
</template>
