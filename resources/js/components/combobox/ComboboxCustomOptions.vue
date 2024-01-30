<script setup lang="ts">
import { ComboboxOptions, ComboboxOption } from '@headlessui/vue'
defineProps<{ items: any; by: string }>()
</script>

<template>
  <ComboboxOptions
    class="min-w-40 shadow-lg rounded-b-lg max-h-52 overflow-auto w-full absolute bg-white z-10"
  >
    <ComboboxOption
      v-for="item in items"
      :key="item[by]"
      v-slot="{ selected }"
      :value="item"
    >
      <div
        class="px-3 py-2 transition-colors cursor-pointer z-50"
        :class="{
          'hover:bg-base-200 active:bg-primary active:text-white': !selected,
          'bg-primary text-white': selected,
        }"
      >
        <slot
          name="option"
          v-bind="item"
        />
      </div>
    </ComboboxOption>
  </ComboboxOptions>
</template>
