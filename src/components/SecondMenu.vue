<script setup>
import HeaderTop from './HeaderTop.vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const hideSecondMenu = () => {
  document.querySelector('#second-menu').classList.add('translate-y-[-100%]')
  document.querySelector('body').classList.remove('overflow-y-hidden')
}
</script>

<template>
  <div
    id="second-menu"
    class="translate-y-[-100%] transition-all ease-in-out fixed top-0 left-0 w-full z-100 h-[100vh] bg-[rgba(255,255,255,0.5)]"
  >
    <HeaderTop @hide-menu="hideSecondMenu" />

    <div class="pt-[53px] pb-[26px] bg-[#f9f6ed]">
      <h3 class="w-full text-center text-[17px] font-semibold text-[#444] main-font">
        НАВИГАЦИЯ ПО РАЗДЕЛУ
      </h3>

      <div class="mt-[52px] flex justify-around px-[260px] max-lp:px-[30px] items-center main-font text-[#444] text-[15px]">
        <router-link @click="hideSecondMenu" to="/lenin" :class="$route.name === 'lenin' ? 'text-[#c74e1c]' : ''" class="flex gap-[10px] hover:text-[#c74e1c]">
          <div>
            <img src="/icons/second-menu/price.png" alt="price">
          </div>
          <div>
            ДАТЫ И ЦЕНЫ
          </div>
        </router-link>

        <router-link @click="hideSecondMenu" to="/camps" :class="$route.name === 'camps' ? 'text-[#c74e1c]' : ''" class="flex gap-[10px] hover:text-[#c74e1c]">
          <div>
            <img src="/icons/second-menu/bc.png" alt="camps">
          </div>
          <div>
            БАЗОВЫЕ ЛАГЕРЯ
          </div>
        </router-link>

        <router-link @click="hideSecondMenu" to="/info" :class="$route.name === 'info' ? 'text-[#c74e1c]' : ''" class="flex gap-[10px] hover:text-[#c74e1c]">
          <div>
            <img src="/icons/second-menu/info.png" alt="info">
          </div>
          <div>
            ПОЛЕЗНАЯ ИНФОРМАЦИЯ
          </div>
        </router-link>

        <router-link @click="hideSecondMenu" to="" :class="$route.name === 'safety' ? 'text-[#c74e1c]' : ''" class="flex gap-[10px] hover:text-[#c74e1c]">
          <div>
            <img src="/icons/second-menu/safety.png" alt="safety">
          </div>
          <div>
            БЕЗОПАСНОСТЬ
          </div>
        </router-link>

        <router-link @click="hideSecondMenu" to="/recom" :class="$route.name === 'recom' ? 'text-[#c74e1c]' : ''" class="flex gap-[10px] hover:text-[#c74e1c]">
          <div>
            <img src="/icons/second-menu/recom.png" alt="recom">
          </div>
          <div>
            РЕКОМЕНДАЦИИ
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
