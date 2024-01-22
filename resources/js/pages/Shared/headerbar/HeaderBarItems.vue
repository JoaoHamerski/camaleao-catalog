<script setup lang="ts">
import navbarItems from './navbar-items'
</script>

<template>
  <div class="flex gap-2">
    <AppButton
      v-for="item in navbarItems"
      :key="item.label"
      class="text-white text-sm min-h-10 h-10 btn-ghost"
      :class="[
        { active: false }, // TODO: Se ativo
      ]"
      :label="item.label"
      :icon="item.icon"
    />
  </div>
</template>
