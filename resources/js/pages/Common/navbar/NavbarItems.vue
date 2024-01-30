<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import NAVBAR_ITEMS from './navbar-items'
</script>

<template>
  <div class="flex gap-2">
    <Link
      v-for="item in NAVBAR_ITEMS"
      :key="item.label"
      :href="item.url"
    >
      <AppButton
        class="text-white text-xs md:text-sm min-h-10 h-14 md:h-10 btn btn-ghost"
        :class="[{ active: item.active }]"
        :icon="item.icon"
        :label="item.label"
      />
    </Link>
  </div>
</template>
