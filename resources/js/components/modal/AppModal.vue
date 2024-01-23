<script setup lang="ts">
import { computed } from 'vue'
import { MODAL_COLORS_MAP, MODAL_SIZES_MAP } from './modal-constants'
import type { AppModalSizes, AppModalColors } from '@/types/components/modal'
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

interface AppModalProps {
  size?: AppModalSizes
  color?: AppModalColors
}

const props = withDefaults(defineProps<AppModalProps>(), {
  color: 'primary',
  size: 'md',
})

const show = defineModel<boolean>('show')

const sizeClass = computed(() => MODAL_SIZES_MAP[props.size])
const colorClass = computed(() => MODAL_COLORS_MAP[props.color])

const closeModal = () => {
  show.value = false
}
</script>

<template>
  <TransitionRoot
    :show="show"
    as="template"
  >
    <Dialog
      class="absolute inset-0 w-full h-full z-50"
      @close="closeModal"
    >
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="absolute inset-0 bg-black/30"
          aria-hidden="true"
        />
      </TransitionChild>

      <TransitionChild
        enter="duration-100 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
        as="template"
      >
        <div class="flex justify-center items-center h-full">
          <DialogPanel
            class="relative bg-base-100 rounded-lg shadow-lg"
            :class="sizeClass"
          >
            <AppButton
              class="btn-ghost text-gray-200 btn-sm rounded-full h-10 w-10 absolute right-4 top-4"
              icon="fas fa-times"
              @click.prevent="closeModal"
            />

            <DialogTitle
              class="text-xl font-semibold mb-3 p-5 rounded-t-lg border-b-2"
              :class="colorClass"
            >
              <slot name="title" />
            </DialogTitle>

            <DialogDescription class="text-secondary p-5">
              <slot name="content" />
            </DialogDescription>
          </DialogPanel>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>