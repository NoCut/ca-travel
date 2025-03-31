<script setup>
import HeaderTop from './HeaderTop.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'

import { RouterLink, useRoute, useRouter } from 'vue-router'

import { ref, onMounted } from 'vue'

defineProps(['getSystemLang'])

const countryIndex = ref(0)

const route = useRoute()
const router = useRouter()
const supportedLanguages = ['en', 'ru', 'fr', 'de', 'es']

const changeLanguage = (lang, event = null) => {
  sessionStorage.setItem('selectedLanguage', lang)

  if (event) {
    const textElements = Array.from(event.currentTarget.parentElement.children)
    textElements.forEach((element) => {
      element.classList.remove('text-[#c74e1c]')
    })
    event.target.classList.add('text-[#c74e1c]')
  }
}

const changeImageChange = (event, isHovered) => {
  if (event.currentTarget.classList.contains('active-links')) return
  const imgElement = event.currentTarget.querySelector('img')
  const defaultSrc = imgElement.getAttribute('data-default') || imgElement.src
  const baseName = defaultSrc.replace(/(-hl)?(\.\w+)$/, '')
  const extension = defaultSrc.match(/\.\w+$/)[0]
  imgElement.src = isHovered ? `${baseName}-hl${extension}` : defaultSrc
}

const changeCountry = (event) => {
  const imageSelect = document.getElementById('country-select')
  const target = event.target.closest('div')

  const index = Array.from(imageSelect.children).indexOf(target)
  if (index === -1) return

  const images = imageSelect.querySelectorAll('img')
  const text = imageSelect.querySelectorAll('div')

  text.forEach((item) => {
    item.classList.remove('text-[#c74e1c]')
    item.classList.remove('active-links')
  })

  images.forEach((img) => {
    img.src = img.getAttribute('data-default')
  })

  target.classList.add('active-links')

  const img = target.querySelector('img')
  img.src = img.src.replace(/(-hl)?(\.\w+)$/, '-hl$2')

  target.classList.add('text-[#c74e1c]')

  const countryLink = document.getElementById('country-link')
  countryLink.classList.remove('translate-y-[-100%]')
  countryLink.classList.remove('hidden')

  const links = Array.from(countryLink.children)

  links.forEach((link) => {
    link.classList.remove('hidden')
    link.classList.remove('anim-opacity')

    if (links.indexOf(link) === index) {
      link.classList.remove('hidden')
      link.classList.add('anim-opacity')

      return
    }

    link.classList.add('hidden')
  })
}

const showCountry = () => {
  const countrySelect = document.getElementById('country-select')
  countrySelect.classList.remove('translate-y-[-100%]')
  countrySelect.classList.remove('hidden')
  countrySelect.classList.add('anim-opacity')
}

const hideCountry = () => {
  const countrySelect = document.getElementById('country-select')
  countrySelect.classList.add('translate-y-[-100%]')
  countrySelect.classList.remove('anim-opacity')
  countrySelect.classList.add('hidden')

  const images = Array.from(countrySelect.querySelectorAll('img'))

  images.forEach((img) => {
    img.src = img.getAttribute('data-default')
  })

  const text = countrySelect.querySelectorAll('div')

  text.forEach((item) => {
    item.classList.remove('text-[#c74e1c]')
    item.classList.remove('active-links')
  })
}

const hideCountryLink = () => {
  const countryLink = document.getElementById('country-link')
  countryLink.classList.add('translate-y-[-100%]')
  countryLink.classList.remove('anim-opacity')
  countryLink.classList.add('hidden')
}

const hideMenu = () => {
  document.querySelector('#header').classList.add('translate-y-[-100%]')
  document.querySelector('body').classList.remove('overflow-y-hidden')
}

const showType = () => {
  const countrySelect = document.getElementById('type-select')
  countrySelect.classList.remove('translate-y-[-100%]')
  countrySelect.classList.remove('hidden')
  countrySelect.classList.add('anim-opacity')
}

const hideType = () => {
  const countrySelect = document.getElementById('type-select')
  countrySelect.classList.add('translate-y-[-100%]')
  countrySelect.classList.remove('anim-opacity')
  countrySelect.classList.add('hidden')

  const images = Array.from(countrySelect.querySelectorAll('img'))

  images.forEach((img) => {
    img.src = img.getAttribute('data-default')
  })

  const text = countrySelect.querySelectorAll('button')

  text.forEach((item) => {
    item.classList.remove('text-[#c74e1c]')
    item.classList.remove('active-links')
  })
}

const changeType = (event, id) => {

  const typeSelect = document.getElementById('type-select')
  const images = Array.from(typeSelect.querySelectorAll('img'))

  images.forEach((img) => {
    img.src = img.getAttribute('data-default')
  })

  const text = typeSelect.querySelectorAll('button')

  text.forEach((item) => {
    item.classList.remove('text-[#c74e1c]')
    item.classList.remove('active-links')
  })

  const target = event.currentTarget
  target.classList.add('active-links')
  const img = target.querySelector('img')
  img.src = img.src.replace(/(-hl)?(\.\w+)$/, '-hl$2')

  target.classList.add('text-[#c74e1c]')

  document.querySelector('#type-link').classList.remove('translate-y-[-100%]')
  document.querySelector('#type-link').classList.remove('hidden')
  document.querySelector('#type-link').classList.add('anim-opacity')

  if (id === 'excursion') {
    document.querySelector('#excursion').classList.remove('hidden')
    document.querySelector('#excursion').classList.add('anim-opacity')
    document.querySelector('#excursion').classList.remove('translate-y-[-100%]')

    document.querySelector('#alpinism').classList.add('hidden')
    document.querySelector('#alpinism').classList.remove('anim-opacity')
    document.querySelector('#alpinism').classList.add('translate-y-[-100%]')
    return
  }

  document.querySelector('#excursion').classList.add('hidden')
  document.querySelector('#excursion').classList.remove('anim-opacity')
  document.querySelector('#excursion').classList.add('translate-y-[-100%]')
  document.querySelector('#alpinism').classList.remove('hidden')
  document.querySelector('#alpinism').classList.add('anim-opacity')
  document.querySelector('#alpinism').classList.remove('translate-y-[-100%]')
}

const hideTypeLink = () => {
  document.querySelector('#type-link').classList.add('translate-y-[-100%]')
  document.querySelector('#type-link').classList.remove('anim-opacity')
  document.querySelector('#type-link').classList.add('hidden')
}
const toggleMenu = (event) => {
  if (event.currentTarget.id === 'country') {
    hideType()
    hideTypeLink()
    showCountry()

    document.querySelector('#country').classList.add('text-[#d35400]')
    document.querySelector('#type').classList.remove('text-[#d35400]')
    return
  }

  document.querySelector('#country').classList.remove('text-[#d35400]')
  document.querySelector('#type').classList.add('text-[#d35400]')

  hideCountry()
  hideCountryLink()
  showType()
}

onMounted(() => {
  const selectedLanguage = sessionStorage.getItem('selectedLanguage')
  if (!selectedLanguage && !supportedLanguages.includes(selectedLanguage)) {
    const systemLang = navigator.language.slice(0, 2)
    sessionStorage.setItem('selectedLanguage', systemLang)
  } else {
    sessionStorage.setItem('selectedLanguage', selectedLanguage)
  }


  document.querySelector(`#${selectedLanguage}`).classList.add('text-[#c74e1c]')
  changeLanguage(selectedLanguage)
})
</script>

<template>
  <header
    id="header"
    class="translate-y-[-100%] transition-all ease-in-out fixed top-0 left-0 w-full z-100 h-[100vh] bg-[rgba(255,255,255,0.5)]"
  >
    <HeaderTop @hide-menu="hideMenu" />

    <div class="bg-[#FAF8EE] px-[250px] max-lp:px-[15px]">
      <div
        class="flex justify-between items-center px-4 py-[20px] main-font font-semibold text-[15px] text-[#444] border-b-2 border-[#b8b6b2]"
      >
        <button
          class="flex gap-[12px] hover:text-[#d35400] text-[#d35400] items-center cursor-pointer transition-colors"
          @click="toggleMenu"
          id="country"
        >
          <img src="/icons/ukaz-sm.png" />
          <span class="uppercase">Куда поехать</span>
        </button>

        <button
          class="flex gap-[12px] hover:text-[#d35400] cursor-pointer items-center transition-colors"
          @click="toggleMenu"
          id="type"
        >
          <img src="/icons/type-sm.png" />
          <span class="uppercase">Тип путешествия</span>
        </button>

        <RouterLink
          to="/tours"
          class="flex gap-[12px] hover:text-[#d35400] cursor-pointer items-center transition-colors"
          @click="hideMenu"
        >
          <img src="/icons/podbor-sm.png" />
          <span class="uppercase">Подбор тура</span>
        </RouterLink>

        <RouterLink
          to="/about"
          class="flex gap-[12px] hover:text-[#d35400] cursor-pointer items-center transition-colors"
          @click="hideMenu"
        >
          <img src="/icons/us-sm.png" />
          <span class="uppercase">О нас</span>
        </RouterLink>

        <RouterLink
          to="/contacts"
          class="flex gap-[12px] hover:text-[#d35400] cursor-pointer items-center transition-colors"
          @click="hideMenu"
        >
          <img src="/icons/contact-sm.png" />
          <span class="uppercase">Контакты</span>
        </RouterLink>

        <button
          class="flex gap-[12px] hover:text-[#d35400] cursor-pointer items-center transition-colors"
        >
          <SearchIcon className="text-[#d35400]"  class="w-[28px] drop-shadow-lg" />
          <span class="uppercase">Поиск по сайт</span>
        </button>
      </div>

      <div>
        <div
          id="country-select"
          class="flex justify-between items-center transition-all px-[100px] text-[#444444] pb-[30px] pt-[25px] border-b-2 border-[#b8b6b2] main-font text-[15px]"
          @click="changeCountry"
        >
          <div
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/maps/uz-map.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/maps/uz-map.png'"
            />
            <div>Узбекистан</div>
          </div>
          <div
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/maps/kg-map.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/maps/kg-map.png'"
            />
            <div>Кыргызстан</div>
          </div>
          <div
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/maps/kz-map.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/maps/kz-map.png'"
            />
            <div>Казахстан</div>
          </div>
          <div
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/maps/tj-map.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/maps/tj-map.png'"
            />
            <div>Таджикистан</div>
          </div>
          <div
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/maps/tm-map.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/maps/tm-map.png'"
            />
            <div>Туркменистан</div>
          </div>
          <div
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/maps/cn-map.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/maps/cn-map.png'"
            />
            <div>Китай</div>
          </div>
          <div
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/maps/az-map.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/maps/az-map.png'"
            />
            <div>Азербайджан</div>
          </div>
        </div>

        <div id="country-link" class="translate-y-[-100%] transition-all">
          <div
            class="border-b-2 border-[#b8b6b2] hidden py-[24px] grid grid-cols-4 gap-x-[10%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[40px]"
          >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Туры в Узбекистан</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Гостиницы Узбекистана</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Транспортные услуги</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Узбекская кухня</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Достопримечательности</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Конференц-залы</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Бронирование автомобилей</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Фото Узбекистана</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Информация об Узбекистане</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Рестораны</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Виза в Узбекистан</RouterLink
            >
          </div>

          <div
            class="border-b-2 hidden border-[#b8b6b2] py-[24px] grid grid-cols-4 gap-x-[10%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[40px]"
          >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Туры в Кыргызстан</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Гостиницы Кыргызстана</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Транспортные услуги</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Кыргызская кухня</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Достопримечательности</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Конференц-залы</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Бронирование автомобилей</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Фото Кыргызстана</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Информация об Кыргызстане</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Рестораны</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Виза в Кыргызстан</RouterLink
            >
          </div>

          <div
            class="border-b-2 border-[#b8b6b2] hidden py-[24px] grid grid-cols-4 gap-x-[10%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[40px]"
          >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Туры в Казахстан</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Гостиницы Казахстана</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Транспортные услуги</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Казахская кухня</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Достопримечательности</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Конференц-залы</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Бронирование автомобилей</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Фото Казахстана</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Информация об Казахстане</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Рестораны</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Виза в Казахстан</RouterLink
            >
          </div>

          <div
            class="border-b-2 border-[#b8b6b2] hidden py-[24px] grid grid-cols-4 gap-x-[8%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[40px]"
          >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Туры в Таджикистан</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Гостиницы Таджикистана</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Транспортные услуги</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Таджикская кухня</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Достопримечательности</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Конференц-залы</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Бронирование автомобилей</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Фото Таджикистана</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Информация об Таджикистане</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Рестораны</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Виза в Таджикистан</RouterLink
            >
          </div>

          <div
            class="border-b-2 border-[#b8b6b2] hidden py-[24px] grid grid-cols-4 gap-x-[8%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[40px]"
          >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Туры в Туркменистан</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Гостиницы Туркменистана</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Транспортные услуги</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Туркменская кухня</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Достопримечательности</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Конференц-залы</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Бронирование автомобилей</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Фото Туркменистана</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Информация об Туркменистане</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Рестораны</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Виза в Туркменистан</RouterLink
            >
          </div>

          <div
            class="border-b-2 border-[#b8b6b2] hidden py-[24px] grid grid-cols-4 gap-x-[10%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[40px]"
          >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Туры в Китай</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Гостиницы Китая</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Транспортные услуги</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Китайская кухня</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Достопримечательности</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Конференц-залы</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Бронирование автомобилей</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Фото Китая</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Информация об Китае</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Рестораны</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Виза в Китай</RouterLink
            >
          </div>

          <div
            class="border-b-2 border-[#b8b6b2] hidden py-[24px] grid grid-cols-4 gap-x-[8%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[40px]"
          >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Туры в Азербайджан</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Гостиницы Азербайджана</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Транспортные услуги</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Азербайджанская кухня</RouterLink
            >
            <RouterLink
              class="font-semibold link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Достопримечательности</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Конференц-залы</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Бронирование автомобилей</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Фото Азербайджана</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Информация об Азербайджане</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Рестораны</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Виза в Азербайджан</RouterLink
            >
          </div>
        </div>
      </div>

      <div>
        <div
          id="type-select"
          class="flex justify-between items-start transition-all translate-y-[-100%] hidden px-[100px] text-[#444444] pb-[30px] pt-[25px] border-b-2 border-[#b8b6b2] main-font text-[15px] text-center"
        >
          <RouterLink
            to="#"
            class="flex flex-col items-ce justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/type/excursion.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/type/excursion.png'"
            />
            <div class="link">
              Экскурсионные<br />
              туры
            </div>
          </RouterLink>
          <RouterLink
            to="#"
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/type/tema.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/type/tema.png'"
            />
            <div class="link">
              Тематические<br />
              туры
            </div>
          </RouterLink>
          <RouterLink
            to="#"
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/type/tree.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/type/tree.png'"
            />
            <div class="link">
              Праздничные<br />
              туры
            </div>
          </RouterLink>
          <RouterLink
            to="#"
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
          >
            <img
              src="/images/type/mice.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/type/mice.png'"
            />
            <div class="link">M.I.C.E.</div>
          </RouterLink>
          <button
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
            @click="changeType($event, 'excursion')"
          >
            <img
              src="/images/type/velo.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/type/velo.png'"
            />
            <div>
              Приключенческие<br />
              туры
            </div>
          </button>
          <button
            class="flex flex-col items-center justify-center hover:text-[#c74e1c] transtion-all cursor-pointer"
            @mouseover="changeImageChange($event, true)"
            @mouseleave="changeImageChange($event, false)"
            @click="changeType($event, 'alpinism')"
          >
            <img
              src="/images/type/alpinism.png"
              class="w-[100px] max-h-[80px]"
              :data-default="'/images/type/alpinism.png'"
            />
            <div>Альпинизм</div>
          </button>
        </div>

        <div id="type-link" class="translate-y-[-100%] transition-all">
          <div
            class="border-b-2 border-[#b8b6b2] hidden py-[24px] grid grid-cols-4 gap-x-[10%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[40px]"
            id="excursion"
          >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Треккинг</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Семейный отдых в горах</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Конные туры</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Рыболовные туры</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Парапланеризм</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >4 WD туры</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Велотуры</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Туры на верблюдах</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Горнолыжные туры</RouterLink
            >
          </div>

          <div
            class="border-b-2 border-[#b8b6b2] hidden py-[24px] grid grid-cols-4 gap-x-[10%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[20px]"
            id="alpinism"
          >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Пик Ленина</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Пик Музтаг-Ата + пик Ленина</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Пик Ленина + пик Хан-Тенгри + пик Победы</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Майская альпиниада в Чимгане</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Вершины Памира</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Пик Хан-Тенгри</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Пик Победы</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Пик Музтаг-Ата</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Пик Хан-Тенгри + пик Ленина</RouterLink
            >
            <RouterLink
              class="font-light link hover:text-[#d35400] transition-colors"
              :disabled="true"
              to="#"
              >Пик Коммунизма</RouterLink
            >
          </div>

          <div
            class="border-b-2 border-[#b8b6b2] hidden py-[24px] grid grid-cols-4 gap-x-[10%] gap-y-[20px] justify-between main-font text-[17px] text-[#444] px-[40px]"
          ></div>
        </div>
      </div>

      <div class="flex justify-between items-center pt-[17px] pb-[28px]">
        <RouterLink
          to="/"
          class="flex items-center gap-[14px] main-font font-semibold text-[14px] text-[#444] hover:text-[#d35400] transition-colors"
          @click="hideMenu"
        >
          <img src="/icons/home.png" class="w-[30px]" />

          <div>На главную</div>
        </RouterLink>

        <div class="flex main-font font-semibold text-[14px] text-[#444]" id="languages">
          <button
            id="ru"
            @click="changeLanguage('ru', $event)"
            class="hover:text-[#d35400] transition-all px-[25px] cursor-pointer"
          >
            Русский
          </button>
          <button
            id="en"
            @click="changeLanguage('en', $event)"
            class="hover:text-[#d35400] transition-all border-l-1 border-[#888] px-[25px] cursor-pointer"
          >
            English
          </button>
          <button
            id="es"
            @click="changeLanguage('es', $event)"
            class="hover:text-[#d35400] transition-all border-l-1 border-[#888] px-[25px] cursor-pointer"
          >
            Español
          </button>
          <button
            id="fr"
            @click="changeLanguage('fr', $event)"
            class="hover:text-[#d35400] transition-all border-l-1 border-[#888] px-[25px] cursor-pointer"
          >
            Français
          </button>
          <button
            id="de"
            @click="changeLanguage('de', $event)"
            class="hover:text-[#d35400] transition-all border-l-1 border-[#888] px-[25px] cursor-pointer"
          >
            Deutsch
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.link {
  position: relative;
}

.link::before {
  content: '>';
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #d35400;
  margin-right: 6px;
  position: absolute;
  left: -20px;
}

.anim-opacity {
  animation: sliderOpacity 1s;
}

@keyframes sliderOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
