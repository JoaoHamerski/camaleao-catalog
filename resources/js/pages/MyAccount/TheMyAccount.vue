<script setup lang="ts">
import ContentLayout from '@/pages/Shared/layouts/ContentLayout.vue'
import MyAccountForm from './partials/MyAccountForm.vue'
import { User } from '@/types'

defineProps<{ user: User }>()
</script>

<template>
  <ContentLayout>
    <AppCard class="w-1/3 mx-auto">
      <template #title> Altere suas informações </template>
      <template #content>
        <div class="mx-4">
          <MyAccountForm :user="user" />
        </div>
      </template>
    </AppCard>
  </ContentLayout>
</template>
