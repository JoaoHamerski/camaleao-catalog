<template>
  <div class="md:px-20 px-4 mt-16">
    <div
      v-if="$slots['title']"
      class="divider divider-start text-camaleao md:text-3xl font-bold mb-10"
    >
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>
