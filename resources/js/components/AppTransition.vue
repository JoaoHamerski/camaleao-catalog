<script setup lang="ts">
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import { pick } from 'lodash-es'
import { computed } from 'vue'

interface AppTransitionProps {
  transitionAs: keyof typeof COMPONENTS
  enter?: string
  enterTimeFn?: string
  enterFrom?: string
  enterTo?: string
  leave?: string
  leaveTimeFn?: string
  leaveFrom?: string
  leaveTo?: string
  leaveAsEnter?: boolean
}

const COMPONENTS = {
  root: TransitionRoot,
  child: TransitionChild,
}

const props = withDefaults(defineProps<AppTransitionProps>(), {
  transitionAs: 'root',
  leaveAsEnter: true,
  enter: undefined,
  enterTimeFn: 'ease-out',
  enterFrom: undefined,
  enterTo: undefined,
  leave: undefined,
  leaveTimeFn: 'ease-in',
  leaveFrom: undefined,
  leaveTo: undefined,
})

const componentIs = computed(() => COMPONENTS[props.transitionAs])

const transition = computed(() => {
  const transitionProps = pick(props, [
    'enter',
    'enterFrom',
    'enterTo',
    'leave',
    'leaveFrom',
    'leaveTo',
  ])

  if (props.leaveAsEnter) {
    return {
      ...transitionProps,
      enter: props.enter + ' ' + props.enterTimeFn,
      leave: props.enter + ' ' + props.leaveTimeFn,
      leaveFrom: transitionProps.enterTo,
      leaveTo: transitionProps.enterFrom,
    }
  }

  return transitionProps
})
</script>

<template>
  <Component
    :is="componentIs"
    v-bind="transition"
  >
    <slot />
  </Component>
</template>
