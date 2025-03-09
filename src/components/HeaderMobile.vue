<script setup>
import CrossIcon from '@/assets/icons/CrossIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import langs from '@/dicts/lang.js'

import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'

const currentLinksId = ref('')
const currentMenu = ref('main-menu')
const direction = ref('')
const currentLang = ref(sessionStorage.getItem('selectedLanguage') || 'ru')

const route = useRoute()
const router = useRouter()
const supportedLanguages = ['en', 'ru', 'fr', 'de', 'es']

const changeLanguage = (lang) => {
  sessionStorage.setItem('selectedLanguage', lang)
  currentLang.value = lang
  router.push(`/${lang}${route.path.replace(/^\/[a-z]{2}/, '')}`)
}

const hideMenuMobile = () => {
  document.querySelector('#header-mobile').classList.add('translate-y-[-100%]')
  document.querySelector('body').classList.remove('overflow-y-hidden')
}

const switchMenu = (event, id) => {
  currentMenu.value = id
  if (event.currentTarget.id === 'back') {
    direction.value = 'slide-right'
    return
  }

  direction.value = 'slide-left'
}

const showLinks = (event, type) => {
  const links = Array.from(document.querySelectorAll(`#${type}-mob button`))

  links.forEach((link) => {
    link.classList.remove('text-[#c74e1c]')
    link.querySelector('.duration-300').classList.add('rotate-90')
    link.querySelector('.duration-300').classList.remove('bg-[#c74e1c]')
  })

  if (currentLinksId.value === event.currentTarget.id) {
    currentLinksId.value = ''
    event.currentTarget.classList.remove('text-[#c74e1c]')
    event.currentTarget.querySelector('.duration-300').classList.add('rotate-90')
    event.currentTarget.querySelector('.duration-300').classList.remove('bg-[#c74e1c]')
    return
  }

  currentLinksId.value = event.currentTarget.id
  event.currentTarget.classList.add('text-[#c74e1c]')
  event.currentTarget.querySelector('.duration-300').classList.remove('rotate-90')
  event.currentTarget.querySelector('.duration-300').classList.add('bg-[#c74e1c]')
}

onMounted(() => {
  const selectedLanguage = sessionStorage.getItem('selectedLanguage')
  if (selectedLanguage && supportedLanguages.includes(selectedLanguage)) {
    changeLanguage(selectedLanguage)
  }
})
</script>

<template>
  <header
    id="header-mobile"
    class="fixed top-0 left-0 z-999 h-[100vh] w-full flex flex-col transition-transform duration-300 transform translate-y-[-100%]"
  >
    <div
      class="flex items-center justify-center relative px-[12px] py-[12px] bg-[#c74e1c] transition-all"
    >
      <div>
        <img src="/images/small-logo.png" alt="logo" />
      </div>

      <div class="absolute left-[12px] top-[38px]" @click="hideMenuMobile" v-if="currentMenu === 'main-menu'">
        <CrossIcon class="text-white" />
      </div>

      <div class="absolute left-[12px] top-[38px] w-[24px] h-[24px]" @click="switchMenu($event, 'main-menu')" id="back" v-if="currentMenu !== 'main-menu'">
        <img src="/svg/arrow.svg" class="text-white" />
      </div>
    </div>

    <div class="flex-1 overflow-y-auto bg-[#f9f6ed]">
      <transition :name="direction">
        <div
          v-if="currentMenu === 'main-menu'"
          class="py-[30px] px-[15px] bg-[#f9f6ed] flex-1 main-font text-[15px] font-semibold text-[#444]"
          id="main-menu"
        >
          <button
            class="py-[12px] flex justify-between items-center border-b-1 border-[#eae5db] w-full"
            @click="switchMenu($event, 'country-mob')"
          >
            <div class="flex items-center">
              <img src="/icons/ukaz-sm.png" class="w-[30px]" />
              <div class="ml-[12px]">КУДА ПОЕХАТЬ</div>
            </div>

            <div class="">></div>
          </button>

          <button
            class="py-[12px] flex justify-between items-center border-b-1 border-[#eae5db] w-full"
            id="type-mob"
            @click="switchMenu($event, 'type-mob')"
          >
            <div class="flex items-center">
              <img src="/icons/type-sm.png" class="w-[25px]" />
              <div class="ml-[12px]">ТИП ПУТЕШЕСТВИЯ</div>
            </div>

            <div class="">></div>
          </button>

          <div class="py-[12px] flex justify-between border-b-1 border-[#eae5db]">
            <div class="flex items-center">
              <img src="/icons/podbor-sm.png" class="w-[30px]" />
              <div class="ml-[12px]">ПОДБОР ТУРА</div>
            </div>
          </div>

          <div class="py-[12px] flex justify-between border-b-1 border-[#eae5db]">
            <div class="flex items-center">
              <img src="/icons/us-sm.png" class="w-[25px]" />
              <div class="ml-[12px]">О НАС</div>
            </div>
          </div>

          <div class="py-[12px] flex justify-between border-b-1 border-[#eae5db]">
            <div class="flex items-center">
              <img src="/icons/contact-sm.png" class="w-[30px]" />
              <div class="ml-[12px]">КОНТАКТЫ</div>
            </div>
          </div>

          <button class="py-[12px] flex justify-between items-center w-full"
            @click="switchMenu($event, 'lang-mob')"
            id="lang-mob"
          >
            <div class="flex items-center" id="cur-lang">
              <img :src="langs[currentLang].flag" class="w-[30px]" />
              <div class="ml-[12px]">{{ langs[currentLang].lang }}</div>
            </div>

            <div class="">></div>
          </button>
        </div>
      </transition>

      <transition :name="direction">
        <div
          id="country-mob"
          class="py-[30px] px-[15px] bg-[#f9f6ed] main-font text-[15px] font-semibold text-[#444] transition-transform duration-300 ease-in-out"
          v-if="currentMenu === 'country-mob'"
        >
          <div>
            <button
              class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full transition-colors duration-300"
              @click="showLinks($event, 'country')"
              id="uz-mob"
            >
              <div>УЗБЕКИСТАН</div>

              <div class="relative">
                <div
                  class="w-[11px] h-[1px] bg-[#444] absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <div
                  class="w-[11px] h-[1px] bg-[#444] rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </button>

            <transition name="dropdown">
              <div v-if="currentLinksId === 'uz-mob'" class="origin-top">
                <div class="bg-white flex flex-col gap-[25px] py-[20px] pl-[20px]">
                  <RouterLink>Туры в Узбекистан</RouterLink>
                  <RouterLink>Достопримечательности</RouterLink>
                  <RouterLink>Информация об Узбекистане</RouterLink>
                  <RouterLink>Виза в Узбекистан</RouterLink>
                  <RouterLink>Узбекская Кухня</RouterLink>
                  <RouterLink>Фото Узбекистана</RouterLink>
                  <RouterLink>Гостиницы Узбекистана</RouterLink>
                  <RouterLink>Конференц-залы</RouterLink>
                  <RouterLink>Рестораны</RouterLink>
                  <RouterLink>Транспортные услуги</RouterLink>
                </div>
              </div>
            </transition>
          </div>

          <div>
            <button
              class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full"
              id="kg-mob"
              @click="showLinks($event, 'country')"
            >
              <div>КЫРГЫЗСТАН</div>

              <div class="relative">
                <div
                  class="w-[11px] h-[1px] bg-[#444] absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <div
                  class="w-[11px] h-[1px] bg-[#444] rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </button>

            <transition name="dropdown">
              <div v-if="currentLinksId === 'kg-mob'" class="origin-top">
                <div class="bg-white flex flex-col gap-[25px] py-[20px] pl-[20px]">
                  <RouterLink>Туры в Кыргызстан</RouterLink>
                  <RouterLink>Достопримечательности</RouterLink>
                  <RouterLink>Информация об Кыргзыстане</RouterLink>
                  <RouterLink>Виза в Кыргызстан</RouterLink>
                  <RouterLink>Кыргызская Кухня</RouterLink>
                  <RouterLink>Фото Кыргызстана</RouterLink>
                  <RouterLink>Гостиницы Кыргызстана</RouterLink>
                  <RouterLink>Конференц-залы</RouterLink>
                  <RouterLink>Рестораны</RouterLink>
                  <RouterLink>Транспортные услуги</RouterLink>
                </div>
              </div>
            </transition>
          </div>

          <div>
            <button
              class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full"
              id="kz-mob"
              @click="showLinks($event, 'country')"
            >
              <div>КАЗАХСТАН</div>

              <div class="relative">
                <div
                  class="w-[11px] h-[1px] bg-[#444] absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <div
                  class="w-[11px] h-[1px] bg-[#444] rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </button>

            <transition name="dropdown">
              <div v-if="currentLinksId === 'kz-mob'" class="origin-top">
                <div class="bg-white flex flex-col gap-[25px] py-[20px] pl-[20px]">
                  <RouterLink>Туры в Казахстан</RouterLink>
                  <RouterLink>Достопримечательности</RouterLink>
                  <RouterLink>Информация об Казахстане</RouterLink>
                  <RouterLink>Виза в Казахстан</RouterLink>
                  <RouterLink>Казахская Кухня</RouterLink>
                  <RouterLink>Фото Казахстана</RouterLink>
                  <RouterLink>Гостиницы Казахстана</RouterLink>
                  <RouterLink>Конференц-залы</RouterLink>
                  <RouterLink>Рестораны</RouterLink>
                  <RouterLink>Транспортные услуги</RouterLink>
                </div>
              </div>
            </transition>
          </div>

          <div>
            <button
              class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full"
              id="tj-mob"
              @click="showLinks($event, 'country')"
            >
              <div>ТАДЖИКИСТАН</div>

              <div class="relative">
                <div
                  class="w-[11px] h-[1px] bg-[#444] absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <div
                  class="w-[11px] h-[1px] bg-[#444] rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </button>

            <transition name="dropdown">
              <div v-if="currentLinksId === 'tj-mob'" class="origin-top">
                <div class="bg-white flex flex-col gap-[25px] py-[20px] pl-[20px]">
                  <RouterLink>Туры в Таджикистан</RouterLink>
                  <RouterLink>Достопримечательности</RouterLink>
                  <RouterLink>Информация об Таджикистане</RouterLink>
                  <RouterLink>Виза в Таджикистан</RouterLink>
                  <RouterLink>Таджикская Кухня</RouterLink>
                  <RouterLink>Фото Таджикистана</RouterLink>
                  <RouterLink>Гостиницы Таджикистана</RouterLink>
                  <RouterLink>Конференц-залы</RouterLink>
                  <RouterLink>Рестораны</RouterLink>
                  <RouterLink>Транспортные услуги</RouterLink>
                </div>
              </div>
            </transition>
          </div>

          <div>
            <button
              class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full"
              id="tm-mob"
              @click="showLinks($event, 'country')"
            >
              <div>ТУРКМЕНИСТАН</div>

              <div class="relative">
                <div
                  class="w-[11px] h-[1px] bg-[#444] absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <div
                  class="w-[11px] h-[1px] bg-[#444] rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </button>

            <transition name="dropdown">
              <div v-if="currentLinksId === 'tm-mob'" class="origin-top">
                <div class="bg-white flex flex-col gap-[25px] py-[20px] pl-[20px]">
                  <RouterLink>Туры в Туркменистан</RouterLink>
                  <RouterLink>Достопримечательности</RouterLink>
                  <RouterLink>Информация об Туркменистане</RouterLink>
                  <RouterLink>Виза в Туркменистан</RouterLink>
                  <RouterLink>Туркменская Кухня</RouterLink>
                  <RouterLink>Фото Туркменистана</RouterLink>
                  <RouterLink>Гостиницы Туркменистана</RouterLink>
                  <RouterLink>Конференц-залы</RouterLink>
                  <RouterLink>Рестораны</RouterLink>
                  <RouterLink>Транспортные услуги</RouterLink>
                </div>
              </div>
            </transition>
          </div>

          <div>
            <button
              class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full"
              id="ch-mob"
              @click="showLinks($event, 'country')"
            >
              <div>КИТАЙ</div>

              <div class="relative">
                <div
                  class="w-[11px] h-[1px] bg-[#444] absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <div
                  class="w-[11px] h-[1px] bg-[#444] rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </button>

            <transition name="dropdown">
              <div v-if="currentLinksId === 'ch-mob'" class="origin-top">
                <div class="bg-white flex flex-col gap-[25px] py-[20px] pl-[20px]">
                  <RouterLink>Туры в Китай</RouterLink>
                  <RouterLink>Достопримечательности</RouterLink>
                  <RouterLink>Информация об Китае</RouterLink>
                  <RouterLink>Виза в Китай</RouterLink>
                  <RouterLink>Китайская Кухня</RouterLink>
                  <RouterLink>Фото Китая</RouterLink>
                  <RouterLink>Гостиницы Китая</RouterLink>
                  <RouterLink>Конференц-залы</RouterLink>
                  <RouterLink>Рестораны</RouterLink>
                  <RouterLink>Транспортные услуги</RouterLink>
                </div>
              </div>
            </transition>
          </div>

          <div>
            <button
              class="flex justify-between items-center py-[12px] w-full"
              id="aj-mob"
              @click="showLinks($event, 'country')"
            >
              <div>АЗЕРБАЙДЖАН</div>

              <div class="relative">
                <div
                  class="w-[11px] h-[1px] bg-[#444] absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <div
                  class="w-[11px] h-[1px] bg-[#444] rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </button>

            <transition name="dropdown">
              <div v-if="currentLinksId === 'aj-mob'" class="origin-top">
                <div class="bg-white flex flex-col gap-[25px] py-[20px] pl-[20px]">
                  <RouterLink>Туры в Азербайджан</RouterLink>
                  <RouterLink>Достопримечательности</RouterLink>
                  <RouterLink>Информация об Азербайджане</RouterLink>
                  <RouterLink>Виза в Азербайжан</RouterLink>
                  <RouterLink>Азербайджанская Кухня</RouterLink>
                  <RouterLink>Фото Азербайджана</RouterLink>
                  <RouterLink>Гостиницы Азербайджана</RouterLink>
                  <RouterLink>Конференц-залы</RouterLink>
                  <RouterLink>Рестораны</RouterLink>
                  <RouterLink>Транспортные услуги</RouterLink>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </transition>

      <transition :name="direction">
        <div
          id="type-mob"
          class="py-[30px] px-[15px] bg-[#f9f6ed] main-font text-[15px] font-semibold text-[#444] transition-transform duration-300 ease-in-out"
          v-if="currentMenu === 'type-mob'"
        >
          <RouterLink class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full">
            <div class="flex gap-[15px] items-center">
              <img src="/icons/exc.png" class="w-[30px]" />
              <div class="uppercase">Экскурсионные туры</div>
            </div>
          </RouterLink>

          <RouterLink class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full">
            <div class="flex gap-[15px] items-center">
              <img src="/icons/theme.png" class="w-[30px]" />
              <div class="uppercase">Тематические туры</div>
            </div>
          </RouterLink>

          <RouterLink class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full">
            <div class="flex gap-[15px] items-center">
              <img src="/icons/holy.png" class="w-[30px]" />
              <div class="uppercase">Праздничные туры</div>
            </div>
          </RouterLink>

          <RouterLink class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full">
            <div class="flex gap-[15px] items-center">
              <img src="/icons/mice.png" class="w-[30px]" />
              <div class="uppercase">m.i.c.e</div>
            </div>
          </RouterLink>

          <div>
            <button
              class="flex justify-between items-center border-b-1 border-[#eae5db] py-[12px] w-full"
              id="adv-mob"
              @click="showLinks($event, 'type')"
            >
              <div class="flex gap-[15px] items-center">
                <img src="/icons/velo.png" class="w-[30px] h-[30px]" />
                <div class="uppercase">Приключенческие туры</div>
              </div>

              <div class="relative">
                <div
                  class="w-[11px] h-[1px] bg-[#444] absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <div
                  class="w-[11px] h-[1px] bg-[#444] rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </button>

            <transition name="dropdown">
              <div v-if="currentLinksId === 'adv-mob'" class="origin-top">
                <div class="bg-white flex flex-col gap-[25px] py-[20px] pl-[20px]">
                  <RouterLink>Треккинг</RouterLink>
                  <RouterLink>Семейный отдых в горах</RouterLink>
                  <RouterLink>Конные туры</RouterLink>
                  <RouterLink>Рыболовные туры</RouterLink>
                  <RouterLink>Паралпнеризм</RouterLink>
                  <RouterLink>4 WD туры</RouterLink>
                  <RouterLink>Велотуры</RouterLink>
                  <RouterLink>Туры на верблюдах</RouterLink>
                  <RouterLink>Горнолыжные туры</RouterLink>
                </div>
              </div>
            </transition>
          </div>

          <div>
            <button
              class="flex justify-between items-center py-[12px] w-full"
              id="alp-mob"
              @click="showLinks($event, 'type')"
            >
              <div class="flex gap-[15px] items-center">
                <img src="/icons/alp.png" class="w-[30px] " />
                <div class="uppercase">Альпинизм</div>
              </div>

              <div class="relative">
                <div
                  class="w-[11px] h-[1px] bg-[#444] absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <div
                  class="w-[11px] h-[1px] bg-[#444] rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </button>

            <transition name="dropdown">
              <div v-if="currentLinksId === 'alp-mob'" class="origin-top">
                <div class="bg-white flex flex-col gap-[25px] py-[20px] pl-[20px]">
                  <RouterLink>Пик Ленина</RouterLink>
                  <RouterLink>Вершины Памира</RouterLink>
                  <RouterLink>Пик Музтаг-Ата</RouterLink>
                  <RouterLink>Пик Музтаг-Ата + пик Ленина</RouterLink>
                  <RouterLink>Пик Хан-Тенгри</RouterLink>
                  <RouterLink>Пик Хан-Тенгри + пик Ленина</RouterLink>
                  <RouterLink>Пик Ленина + пик Хан-Тенгри + пик Победы</RouterLink>
                  <RouterLink>Пик Победы</RouterLink>
                  <RouterLink>Пик Коммунизма</RouterLink>
                  <RouterLink>Майская альпиниада в Чимгане</RouterLink>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </transition>

      <transition :name="direction">
        <div v-if="currentMenu === 'lang-mob'" class="py-[30px] px-[15px] bg-[#f9f6ed] main-font text-[15px] font-semibold text-[#444] transition-transform duration-300 ease-in-out">
          <button class="flex justify-center py-[12px] border-b-1 border-[#eae5db] w-full" @click="changeLanguage('ru', $event)">
            <div class="flex gap-[20px] items-center justify-start w-[110px]" :class="{ 'text-[#c74e1c]': currentLang === 'ru' }">
              <img src="/icons/russia.png" class="w-[30px]" />
              <div>Русский</div>
            </div>
          </button>

          <button class="flex justify-center py-[12px] border-b-1 border-[#eae5db] w-full" @click="changeLanguage('en', $event)">
            <div class="flex gap-[20px] items-center justify-start w-[110px]" :class="{ 'text-[#c74e1c]': currentLang === 'en' }">
              <img src="/icons/english.png" class="w-[30px]" />
              <div>English</div>
            </div>
          </button>

          <button class="flex justify-center py-[12px] border-b-1 border-[#eae5db] w-full" @click="changeLanguage('de', $event)">
            <div class="flex gap-[20px] items-center justify-start w-[110px]" :class="{ 'text-[#c74e1c]': currentLang === 'de' }">
              <img src="/icons/germany.png" class="w-[30px]" />
              <div>Deutsch</div>
            </div>
          </button>

          <button class="flex justify-center py-[12px] border-b-1 border-[#eae5db] w-full" @click="changeLanguage('fr', $event)">
            <div class="flex gap-[20px] items-center justify-start w-[110px]" :class="{ 'text-[#c74e1c]': currentLang === 'fr' }">
              <img src="/icons/france.png" class="w-[30px]" />
              <div>Français</div>
            </div>
          </button>

          <button class="flex justify-center py-[12px] w-full" @click="changeLanguage('es', $event)">
            <div class="flex gap-[20px] items-center justify-start w-[110px]" :class="{ 'text-[#c74e1c]': currentLang === 'es' }">
              <img src="/icons/spain.png" class="w-[30px]" />
              <div>Español</div>
            </div>
          </button>
        </div>
      </transition>
    </div>

    <div class="px-[15px] bg-[#f9f6ed] pb-[10px] pt-[10px]">
      <div class="flex gap-0 border-1 border-[#dbdbd9]">
        <input type="text" class="flex-1 bg-white px-[5px] py-[6px]" />
        <SearchIcon class="bg-white px-[5px] py-[6px] text-[#c74e1c] w-[36px] h-[36px]" />
      </div>

      <div
        class="border-t-1 border-[#777777] mt-[30px] pt-[10px] flex justify-between items-center"
      >
        <RouterLink to="/" class="flex flex-col items-center gap-[2px]" @click="hideMenuMobile">
          <img src="/icons/home.png" />
          <div>На главную</div>
        </RouterLink>

        <div class="flex gap-[20px]">
          <a href="" class="w-[25px] h-[25px]"><img src="/icons/fb2.png" alt="" /></a>
          <a href="" class="w-[25px] h-[25px]"><img src="/icons/inst2.png" alt="" /></a>
          <a href="" class="w-[25px] h-[25px]"><img src="/icons/tw2.png" alt="" /></a>
          <a href="" class="w-[25px] h-[25px]"><img src="/icons/yt2.png" alt="" /></a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  overflow: hidden;
}
.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}
.dropdown-enter-to,
.dropdown-leave-from {
  max-height: 490px;
  opacity: 1;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  position: absolute;
  width: 100%;
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  position: absolute;
  width: 100%;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
