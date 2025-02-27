<script setup>
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import { useRoute } from 'vue-router'

const currentRoute = useRoute()

const toggleMenu = (event) => {
  document.querySelector('#header').classList.remove('hidden')
}
</script>

<template>
  <div class="flex px-[40px] pt-[36px] justify-between items-start fixed top-0 left-0 z-50 w-full">
    <div class="flex flex-col items-center gap-[30px]">
      <button class="border-0" @click="toggleMenu">
        <img src="/images/menu-button.png" class="drop-shadow-lg"/>
        <span class="text-white text-semibold text-[12.5px] main-font letter-spacing-[.5em] drop-shadow-lg"
          >МЕНЮ</span
        >
      </button>

      <button class="border-0" v-if="currentRoute.name !== 'home'">
        <img src="/images/second-menu.png" />
      </button>
    </div>

    <div>
      <SearchIcon className="text-white" />
    </div>
  </div>
</template>
