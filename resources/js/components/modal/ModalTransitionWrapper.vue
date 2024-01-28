<template>
  <AppTransition
    transition-as="child"
    enter="duration-100"
    enter-from="opacity-0 scale-95"
    enter-to="opacity-100 scale-100"
    as="template"
  >
    <slot />
  </AppTransition>
</template>
