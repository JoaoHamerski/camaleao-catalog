<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'

import { Carousel, Pagination, Slide } from 'vue3-carousel'
import { computed } from 'vue'

interface AppCarouselProps {
  srcs: string[]
  alt?: string
}

const props = defineProps<AppCarouselProps>()

const hasMultipleSlides = computed(() => props.srcs.length > 1)
</script>

<template>
  <Carousel
    pause-autoplay-on-hover
    :autoplay="hasMultipleSlides ? 3000 : 0"
    wrap-around
    :mouse-drag="hasMultipleSlides"
  >
    <Slide
      v-for="src in srcs"
      :key="src"
    >
      <img
        :src="src"
        :alt="alt"
      />
    </Slide>

    <template #addons>
      <Pagination v-if="hasMultipleSlides" />
    </template>
  </Carousel>
</template>

<style>
.carousel__viewport {
  @apply rounded;
}

.carousel__pagination {
  @apply absolute bottom-2 right-0 left-0;
}

.carousel__pagination-item .carousel__pagination-button::after {
  @apply w-1.5 h-1.5 rounded-full;
}
</style>
