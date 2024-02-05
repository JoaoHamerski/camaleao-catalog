<script setup lang="ts">
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { computed } from 'vue'
import type { AppModalProps } from '@/types/components'
import { MODAL_COLORS, MODAL_SIZES } from './modal-constants'

import ModalOverlay from './ModalOverlay.vue'
import ModalCloseButton from './ModalCloseButton.vue'
import ModalTransitionWrapper from './ModalTransitionWrapper.vue'

const props = withDefaults(defineProps<AppModalProps>(), {
  color: 'primary',
  size: 'md',
})

const show = defineModel<boolean>('show')

const sizeClass = computed(() => MODAL_SIZES[props.size])
const colorClass = computed(() => MODAL_COLORS[props.color])

const closeModal = () => {
  show.value = false
}
</script>

<template>
  <AppTransition
    transition-as="root"
    :show="show"
    as="template"
  >
    <Dialog
      class="absolute inset-0 z-50 h-full w-full"
      @close="closeModal"
    >
      <ModalOverlay />

      <ModalTransitionWrapper>
        <div class="flex items-center justify-center h-full">
          <DialogPanel
            class="fixed rounded-lg shadow-lg bg-base-100"
            :class="sizeClass"
          >
            <ModalCloseButton @click.prevent="closeModal" />

            <DialogTitle
              v-if="$slots['title']"
              class="flex items-center gap-3 p-5 mb-3 text-xl font-semibold text-white border-b-2 rounded-t-lg"
              :class="colorClass"
            >
              <slot name="title" />
            </DialogTitle>

            <DialogDescription
              class="text-secondary p-5 max-h-[80vh] overflow-auto scrollbar-thin"
            >
              <slot name="content" />
            </DialogDescription>
          </DialogPanel>
        </div>
      </ModalTransitionWrapper>
    </Dialog>
  </AppTransition>
</template>
