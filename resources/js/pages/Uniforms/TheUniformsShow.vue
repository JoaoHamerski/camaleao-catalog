<script setup lang="ts">
import { Uniform } from '@/types/pages'
import { computed } from 'vue'
import ContentLayout from '../Shared/layouts/ContentLayout.vue'

const props = defineProps<{ uniform: Uniform }>()

const imagesSrc = computed(() => props.uniform.images.map((image) => image.url))
</script>
<template>
  <ContentLayout>
    <template #title>
      CATEGORIA > {{ uniform.category.name }} > {{ uniform.name }}
    </template>
    <div class="w-1/2 mx-auto bg-base-300 rounded-xl shadow-lg">
      <AppCarousel :srcs="imagesSrc" />
      <div class="p-4 flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div class="font-bold text-3xl">
            {{ uniform.name }}
          </div>
          <div class="link-primary font-bold">
            {{ uniform.category.name }}
          </div>
        </div>
        <div class="flex gap-4">
          <AppButton
            icon="fab fa-whatsapp"
            class="btn-success"
            label="Encomendar"
          />
          <AppButton
            icon="fas fa-star"
            class="btn-warning btn-outline"
            label="Favoritar"
          />
        </div>
      </div>
    </div>
  </ContentLayout>
</template>
