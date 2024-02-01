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
      class="absolute inset-0 w-full h-full z-50"
      @close="closeModal"
    >
      <ModalOverlay />

      <ModalTransitionWrapper>
        <div class="flex justify-center items-center h-full">
          <DialogPanel
            class="fixed bg-base-100 rounded-lg shadow-lg"
            :class="sizeClass"
          >
            <ModalCloseButton @click.prevent="closeModal" />

            <DialogTitle
              v-if="$slots['title']"
              class="text-white text-xl font-semibold mb-3 p-5 rounded-t-lg border-b-2 flex items-center gap-3"
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
