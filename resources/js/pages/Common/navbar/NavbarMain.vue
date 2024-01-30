<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user-store'
import { useRouteStore } from '@/store/route-store'
import { computed } from 'vue'

import NAVBAR_ITEMS from './navbar-items'

import NavbarUserGuest from './NavbarUserGuest.vue'
import LoginModal from '@/pages/Common/auth/LoginModal.vue'
import NavbarBrand from './NavbarBrand.vue'
import NavbarItems from './NavbarItems.vue'
import NavbarUserAuth from './NavbarUserAuth.vue'
import NavbarDrawer from './NavbarDrawer.vue'
import RegisterModal from '../auth/RegisterModal.vue'
import { DropdownItem } from '@/types/components'

const loginModalShow = ref(false)
const registerModalShow = ref(false)

const userStore = useUserStore()
const routeStore = useRouteStore()

const isAuth = computed(() => userStore.isAuth)

const openLoginModal = () => {
  loginModalShow.value = true
}

const onCreateAccount = () => {
  loginModalShow.value = true
}

const dropdownMobileItems = computed(() =>
  NAVBAR_ITEMS.map((item) => ({
    label: item.label,
    link: {
      url: item.url,
    },
    icon: item.icon,
  })),
)
</script>

<template>
  <div
    class="navbar px-5 transition-colors"
    :class="[
      routeStore.isCurrent('dashboard.*') ? 'navbar-admin' : 'navbar-user',
    ]"
  >
    <div class="navbar-start gap-3 hidden md:flex">
      <NavbarBrand />
      <NavbarItems />
    </div>

    <div class="navbar-start md:hidden gap-2">
      <NavbarDrawer
        v-if="userStore.hasPermission('access_admin_panel')"
        class="w-fit"
      />
      <AppDropdown
        icon="fas fa-bars"
        :items="dropdownMobileItems"
      />
    </div>

    <div class="navbar-center md:hidden">
      <NavbarBrand />
    </div>

    <div class="navbar-end">
      <NavbarUserAuth v-if="isAuth" />
      <NavbarUserGuest
        v-else
        @login-clicked="openLoginModal"
        @register-clicked="onCreateAccount"
      />
    </div>
    <LoginModal
      v-model:show="loginModalShow"
      @create-account="onCreateAccount"
    />
    <RegisterModal v-model:show="registerModalShow" />
  </div>
</template>