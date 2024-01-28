<script setup lang="ts">
import { Uniform } from '@/types/pages'
import { computed } from 'vue'
import ContentLayout from '../Shared/layouts/ContentLayout.vue'
import { Link, useForm } from '@inertiajs/vue3'
import { useToastStore } from '@/store/toast-store'

const props = defineProps<{ uniform: Uniform }>()
const form = useForm({})

const imagesSrc = computed(() => props.uniform.images.map((image) => image.url))
const useToast = useToastStore()

const onFavoriteClick = () => {
  form.post(
    route('uniforms.toggle-favorite', {
      uniform: props.uniform.slug,
    }),
    {
      preserveScroll: true,
      onError() {
        useToast.info('Entre para favoritar')
      },
      onSuccess() {
        if (props.uniform.is_favorited) {
          useToast.success('Uniforme adicionado as favoritos!')
          return
        }
        useToast.success('Uniforme removido dos favoritos!')
      },
    },
  )
}
</script>

<template>
  <ContentLayout>
    <template #title>
      CATEGORIA > {{ uniform.category.name }} > {{ uniform.name }}
    </template>
    <div class="w-1/3 bg-base-300 rounded-xl shadow-lg">
      <AppCarousel
        :src-slides="imagesSrc"
        pagination
        navigation
        autoplay
        :autoplay-interval="3000"
      />
      <div class="p-4 flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div class="font-bold text-3xl">
            {{ uniform.name }}
          </div>
          <Link
            :href="
              route('categories.show', { category: uniform.category.slug })
            "
            as="span"
            class="link-primary w-fit font-bold cursor-pointer"
          >
            {{ uniform.category.name }}
          </Link>
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