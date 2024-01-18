<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
</script>
<template>
  <div>
    {{ usePage().props.auth.user ?? 'no-user' }}
  </div>
</template>
