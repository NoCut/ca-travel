<script setup>
import { ref } from 'vue'
import { logout } from '@/utils/api'
import { useRouter } from 'vue-router'

import DashboardPanel from '@/components/DashboardPanel.vue'

const curPanel = ref()
const router = useRouter()

const changePanel = (panel) => {
  curPanel.value = panel
}

const handleLogout = async () => {
  await logout()

  router.push('/')
}
</script>

<template>
  <div class="flex h-[100vh]">
    <div class="w-[20%] bg-[#c74e1c] flex flex-col">
      <div class="mt-[20px]">
        <img src="/images/clear-logo.png" class="mx-auto" />
      </div>

      <div
        class="flex-1 flex flex-col items-center justify-center gap-[25px] pl-[20px] text-[20px] text-white main-font"
      >
        <button
          class="w-full py-[10px] rounded-l-2xl hover:bg-[#f7f7cb] transition-all duration-300 hover:text-[#c74e1c] cursor-pointer"
          :class="{ 'text-[#c74e1c] bg-[#f9f6ed] pointer-events-none': curPanel === 'users' }"
          @click="changePanel('users')"
        >
          Пользователи
        </button>

        <button
          class="w-full py-[10px] rounded-l-2xl hover:bg-[#f7f7cb] transition-all duration-300 hover:text-[#c74e1c] cursor-pointer"
          :class="{ 'text-[#c74e1c] bg-[#f9f6ed] pointer-events-none': curPanel === 'tours' }"
          @click="changePanel('tours')"
        >
          Туры
        </button>

        <button
          class="w-full py-[10px] rounded-l-2xl hover:bg-[#f7f7cb] transition-all duration-300 hover:text-[#c74e1c] cursor-pointer"
          :class="{'text-[#c74e1c] bg-[#f9f6ed] pointer-events-none': curPanel === 'requests' }"
          @click="changePanel('requests')"
        >
          Заявки
        </button>
      </div>

      <div class="ml-[20px] rounded-l-2xl mb-[20px] text-center text-white main-font text-[18px] font-light px-[20px] py-[10px] hover:bg-[#f7f7cb] hover:text-black transition-all duration-300 cursor-pointer">
        <button
          @click="handleLogout"
          >Выход</button>
      </div>
    </div>

    <div class="w-full bg-[#f9f6ed] py-[30px] px-[50px]">
      <DashboardPanel :curPanel="curPanel" />
    </div>
  </div>
</template>
