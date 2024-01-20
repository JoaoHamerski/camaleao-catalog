<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user-store'
import { watch } from 'vue'
import { computed } from 'vue'

import LoginModal from '@/components/auth/LoginModal.vue'
import HeaderBarBrand from './HeaderBarBrand.vue'
import HeaderBarItems from './HeaderBarItems.vue'
import HeaderBarUserGuest from './HeaderBarUserGuest.vue'
import HeaderBarUserAuth from './HeaderBarUserAuth.vue'
import { useRouteStore } from '@/store/route-store'

const loginModalShow = ref(false)

const openLoginModal = () => {
  loginModalShow.value = true
}

const authStore = useUserStore()
const routeStore = useRouteStore()

const isAuth = computed(() => authStore.isAuth)
watch(
  () => isAuth.value,
  () => {
    if (isAuth.value) {
      loginModalShow.value = false
    }
  },
)
</script>

<template>
  <div
    class="navbar p-0 min-h-14 px-5 transition-colors"
    :class="[
      routeStore.isCurrent('dashboard.*') ? 'bg-slate-800' : 'bg-camaleao',
    ]"
  >
    <div class="navbar-start gap-10">
      <HeaderBarBrand />
      <HeaderBarItems />
    </div>
    <div class="navbar-end">
      <HeaderBarUserAuth v-if="isAuth" />
      <HeaderBarUserGuest
        v-else
        @login-clicked="openLoginModal"
      />
    </div>
    <LoginModal v-model:show="loginModalShow" />
  </div>
</template>
