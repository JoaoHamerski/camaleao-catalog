<template>
  <div class="px-20 mt-16">
    <div
      v-if="$slots['title']"
      class="divider divider-start text-camaleao text-3xl font-bold mb-10"
    >
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>
