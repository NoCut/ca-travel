<script setup>
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import { useRoute } from 'vue-router'

const currentRoute = useRoute()

const notAllowedPages = ['home', 'tours']

const toggleMenu = () => {
  console.log(document.documentElement.clientWidth)
  if (document.documentElement.clientWidth > 1024) {
    document.querySelector('#header').classList.toggle('translate-y-[-100%]')
    document.querySelector('body').classList.toggle('overflow-y-hidden')
    return
  }
  document.querySelector('#header-mobile').classList.remove('translate-y-[-100%]')
  document.querySelector('body').classList.add('overflow-y-hidden')
}

const toggleSecondMenu = () => {
  console.log(document.documentElement.clientWidth)
  document.querySelector('#second-menu').classList.toggle('translate-y-[-100%]')
  document.querySelector('body').classList.toggle('overflow-y-hidden')
}
</script>

<template>
  <div class="flex px-[40px] max-mb:px-[15px] pt-[36px] justify-between items-start fixed top-0 left-0 z-50 w-full">
    <div class="flex flex-col items-center gap-[30px]">
      <button class="border-0" @click="toggleMenu">
        <img src="/images/menu-button.png" class="spec-shadow"/>
        <span class="text-white text-semibold text-[12.5px] main-font letter-spacing-[.5em] spec-shadow"
          >МЕНЮ</span
        >
      </button>

      <button class="border-0" v-if="!notAllowedPages.includes(currentRoute.name)" @click="toggleSecondMenu">
        <img src="/images/second-menu.png" />
      </button>
    </div>

    <div>
      <SearchIcon className="text-white spec-shadow w-[30px]" />
    </div>
  </div>
</template>
