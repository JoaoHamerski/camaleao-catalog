<script setup lang="ts">
import LoginModal from '@/components/auth/LoginModal.vue'
import { ref } from 'vue'
import HeaderBarBrand from './HeaderBarBrand.vue'
import HeaderBarItems from './HeaderBarItems.vue'
import HeaderBarUser from './HeaderBarUser.vue'

const loginModalShow = ref(false)

const openLoginModal = () => {
  loginModalShow.value = true
}
</script>

<template>
  <div class="navbar p-0 min-h-14 px-5 bg-camaleao">
    <div class="navbar-start gap-10">
      <HeaderBarBrand />
      <div>
        <HeaderBarItems />
      </div>
    </div>
    <div class="navbar-end">
      <HeaderBarUser @login-clicked="openLoginModal" />
    </div>
    <LoginModal v-model:show="loginModalShow" />
  </div>
</template>
