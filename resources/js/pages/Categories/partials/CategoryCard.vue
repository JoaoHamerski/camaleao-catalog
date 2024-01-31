<script setup lang="ts">
import { Category } from '@/types/pages'
import { Link } from '@inertiajs/vue3'
defineProps<{ category: Category }>()
</script>

<template>
  <Link
    :href="
      route('categories.show', {
        category: category.slug,
      })
    "
    as="div"
    class="card mx-auto w-40 h-40 md:w-60 md:h-52 bg-base-100 shadow-xl rounded-xl hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
  >
    <AppImage
      :src="category.image.url"
      alt="Imagem da categoria"
      class="bg-bottom h-52 w-60 rounded-xl overflow-hidden"
    />
    <div
      class="px-5 py-2 font-bold text-lg absolute bottom-0 backdrop-blur-md bg-black/10 rounded-b-xl text-white w-full uppercase"
    >
      {{ category.name }}
    </div>
    <div
      class="absolute flex items-baseline gap-1 top-3 right-3 text-white font-bold bg-black/50 px-2 py-1 rounded-full"
    >
      <FWIcon
        class="text-xs"
        icon="fas fa-tshirt"
        fixed-width
      />
      <span class="text-sm">{{ category.uniforms_count }}</span>
    </div>
  </Link>
</template>
