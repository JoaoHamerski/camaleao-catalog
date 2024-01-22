<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user-store'
import { watch } from 'vue'
import { computed } from 'vue'

import HeaderBarUserGuest from './HeaderBarUserGuest.vue'
import LoginModal from '@/components/auth/LoginModal.vue'
import HeaderBarBrand from './HeaderBarBrand.vue'
import HeaderBarItems from './HeaderBarItems.vue'
import HeaderBarUserAuth from './HeaderBarUserAuth.vue'
import HeaderBarDrawer from './HeaderBarDrawer.vue'
import { useRouteStore } from '@/store/route-store'

const loginModalShow = ref(false)

const userStore = useUserStore()
const routeStore = useRouteStore()

const isAuth = computed(() => userStore.isAuth)

const openLoginModal = () => {
  loginModalShow.value = true
}

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
    class="navbar px-5 transition-colors"
    :class="[
      routeStore.isCurrent('dashboard.*') ? 'navbar-admin' : 'navbar-user',
    ]"
  >
    <div class="navbar-start gap-5">
      <HeaderBarDrawer
        v-if="userStore.hasPermission('access_admin_panel')"
        class="w-fit"
      />
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
