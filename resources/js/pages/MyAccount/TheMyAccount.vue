<script setup lang="ts">
import ContentLayout from '@/pages/Common/layouts/ContentLayout.vue'
import { User } from '@/types'
import { ref, computed } from 'vue'
import DeleteAccountModal from './partials//DeleteAccountModal.vue'
const { user } = defineProps<{ user: User }>()

const deleteModal = ref(false)

const userInfo = computed(() => [
  { label: 'Nome', value: user.name },
  { label: 'Email', value: user.email },
])

const onDeleteBtnClick = () => {
  deleteModal.value = true
}
</script>

<template>
  <ContentLayout title="Minha conta">
    <AppCard class="w-full md:w-1/2 lg:w-1/3">
      <template #title>
        <div class="flex gap-2 items-center">
          <FWIcon icon="fas fa-user-circle" />
          <span>Sua conta</span>
        </div>
      </template>
      <template #content>
        <DeleteAccountModal v-model:show="deleteModal" />
        <div class="mx-3 flex flex-col gap-10 mb-4">
          <ul>
            <li
              v-for="info in userInfo"
              :key="info.label"
              class="my-3 flex"
            >
              <b class="w-24">{{ info.label }}:</b>
              <span>{{ info.value }}</span>
            </li>
          </ul>
          <div>
            <AppButton
              class="btn btn-error btn-outline"
              label="Deletar conta"
              @click.prevent="onDeleteBtnClick"
            />
          </div>
        </div>
      </template>
    </AppCard>
  </ContentLayout>
</template>
