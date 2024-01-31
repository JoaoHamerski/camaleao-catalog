<template>
  <AppTransition
    transition-as="root"
    as="div"
    class="relative z-10"
    enter="duration-100"
    enter-from="translate-y-3 opacity-0"
    enter-to=" opacity-100"
    leave-as-enter
  >
    <slot />
  </AppTransition>
</template>
