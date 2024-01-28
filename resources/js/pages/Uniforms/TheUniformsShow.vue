<script setup lang="ts">
import { Uniform } from '@/types/pages'
import { computed } from 'vue'
import ContentLayout from '../Shared/layouts/ContentLayout.vue'
import { useForm } from '@inertiajs/vue3'

const props = defineProps<{ uniform: Uniform }>()
const form = useForm({})

const imagesSrc = computed(() => props.uniform.images.map((image) => image.url))

const onFavoriteClick = () => {
  form.post(
    route('uniforms.toggle-favorite', {
      uniform: props.uniform.slug,
    }),
    { preserveScroll: true },
  )
}
</script>
<template>
  <ContentLayout>
    <template #title>
      CATEGORIA > {{ uniform.category.name }} > {{ uniform.name }}
    </template>
    <div class="w-1/2 mx-auto bg-base-300 rounded-xl shadow-lg">
      <AppCarousel :images-src="imagesSrc" />
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
            :loading="form.processing"
            icon="fas fa-star"
            class="btn-warning btn-outline"
            :label="uniform.is_favorited ? 'Desfavoritar' : 'Favoritar'"
            @click.prevent="onFavoriteClick"
          />
        </div>
      </div>
    </div>
  </ContentLayout>
</template>
