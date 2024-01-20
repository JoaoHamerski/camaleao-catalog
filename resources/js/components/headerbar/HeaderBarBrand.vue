<script setup lang="ts">
import HeaderBarBrandSvg from './HeaderBarBrandSvg.vue'
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <Link
    :href="route('home')"
    class="w-24"
  >
    <HeaderBarBrandSvg class="fill-white" />
  </Link>
</template>
