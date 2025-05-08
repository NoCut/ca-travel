<template>
  <main class="relative pb-[120px]" v-if="isDataLoaded">
    <HeaderTrigger />

    <div class="tours-bg pt-[23px] pb-[120px]">
      <div class="flex items-center justify-center">
        <img src="/images/tours/logo.png" />
      </div>

      <div
        class="pt-[150px] px-[12.5%] text-white main-font text-[72px] font-semibold drop-shadow-lg"
      >
        <h1>{{ getLocalizedField('name') }}</h1>
      </div>

      <div class="px-[12.5%] pt-[105px]">
        <button
          class="px-[73px] py-4 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
        >
          Отправить запрос
        </button>
      </div>
    </div>

    <router-link to="/tours" class="px-[12.5%] pt-[29px] pb-[93px]">
      <div class="flex gap-[12px] px-[12.5%]">
        <img src="/images/clearsnow/arrow.svg" class="w-[15px]" />
        <div class="main-font text-[15px] text-[#888]">(ПРЕДЫДУЩАЯ СТРАНИЦА)</div>
      </div>
    </router-link>

    <h2
      class="text-[36px] max-tb:text-[24px] px-[12.5%] max-tb:text-center main-font font-semibold text-[#444] uppercase mt-[75px]"
    >
      {{ getLocalizedField('name') }}
    </h2>

    <div class="w-full max-tb:w-full max-tb:pt-[45px] px-[12.5%] flex justify-end items-center">
      <div class="flex justify-end max-tb:justify-center gap-[27px]">
        <img src="/icons/facebook-icon.png" class="max-h-[23px]" />
        <img src="/icons/twitter.png" class="max-h-[23px]" />
        <img src="/icons/WA.png" class="max-h-[23px]" />
        <img src="/icons/viber.png" class="max-h-[23px]" />
        <img src="/icons/tg.png" class="max-h-[23px]" />
      </div>
    </div>

    <p class="main-font px-[12.5%] text-[17px] text-[#444] font-light mt-[25px]">
      {{ getPlainTextField('description') }}
    </p>

    <div
      class="mt-[25px] w-full text-[15px] main-font text-[#888] flex max-stb:flex-col gap-[2px] px-[12.5%] justify-between"
      v-if="tour.routes && tour.routes.length > 1"
    >
      <button
        v-for="(route, index) in tour.routes"
        :key="index"
        class="flex-1 transition-all duration-300 max-stb:w-full py-[29px] max-lp:py-[25px] max-stb:py-[17px] flex justify-center cursor-pointer"
        :class="{
          'bg-[#e9a83a] text-white': activeRouteIndex === index,
          'bg-[#d3d3d3] text-[#444] hover:bg-[#e9a83a] hover:text-white': activeRouteIndex !== index,
        }"
        @click="setActiveRoute(index)"
      >
        <div class="self-center pointer-events-none">{{ route.route_ru }}</div>
      </button>
    </div>

    <div
      class="mt-[25px] w-full text-[15px] main-font text-[#888] flex max-stb:flex-col gap-[2px] px-[12.5%]"
    >
      <div class="flex-1" v-for="(route, index) in filteredRoutes" :key="index">
        <div class="py-[18px] mt-[25px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden" v-for="(activite, index) in route.schedules" :key="index">
          <button
            class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
            @click="toggleHiddenText"
          >
            <div class="text text-left w-[90%]">
              {{ activite.day_number }}. {{ getPlainText(activite.schedule_ru) }}
            </div>

            <div class="relative transform transition-all">
              <div
                class="w-[12px] h-[1px] bg-[#444] transform transition-all duration-200 ease-in absolute top-1/2 right-1/2"
              ></div>
              <div
                class="w-[12px] h-[1px] bg-[#444] transform transition-all duration-200 ease-in absolute top-1/2 right-1/2 rotate-90"
              ></div>
            </div>
          </button>

          <div class="hidden anim">
            <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
              {{ getPlainText(activite.activities_ru) }}
            </p>
          </div>
        </div>
      </div>
      <div class="w-[25%] p-[10px]">
        <div class="w-full bg-[#faf7ed] px-[10px] py-[5px]">
          <div class="flex justify-between items-center border-b-1 border-dotted pb-[5px]">
            <p class="text-[14px] text-[#888] font-light main-font">
              Стоимость тура
            </p>
            <p class="text-[14px] text-[#444] font-semibold main-font">
              {{ tour.price }} USD
            </p>
          </div>
          <div class="flex justify-between items-center border-b-1 border-dotted pb-[5px]">
            <p class="text-[14px] text-[#888] font-light main-font">
              Продолжительность
            </p>
            <p class="text-[14px] text-[#444] font-semibold main-font">
              {{ tour.duration }} дней
            </p>
          </div>
          <div class="flex justify-between items-center border-b-1 border-dotted pb-[5px]">
            <p class="text-[14px] text-[#888] font-light main-font">
              Категория тура
            </p>
            <p class="text-[14px] text-[#444] font-semibold main-font">
              {{ tour.category }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer class="mount-bg bg-right py-[70px] px-[12.5%] max-tb:px-[15px]">
      <h3 class="text-[36px] main-font font-light text-[#444] max-tb:hidden">
        РЕКОМЕНДУЕМ ПОСМОТРЕТЬ
      </h3>

      <div class="flex justify-between gap-8 max-tb:hidden">
        <div class="flex flex-col w-[33%]">
          <div class="relative">
            <img src="/images/req/1.png" />
            <div
              class="absolute bottom-0 right-0 bg-[#c74e1c] px-[14px] py-[12px] text-white text-[16px] main-font"
            >
              895 USD
            </div>
          </div>
          <div class="mt-[18px] main-font text-[#444]">
            <h4 class="text-[20px] font-semibold">Курортный Памир</h4>
            <div class="text-[16px] font-light">Приключенческий тур у подножья пика Ленина</div>
            <div class="mt-[25px] text-[#c74e1c] text-[14px] main-font italic">ПОДРОБНЕЕ...</div>
          </div>
        </div>

        <div class="flex flex-col w-[33%]">
          <div class="relative">
            <img src="/images/req/2.png" />
            <div
              class="absolute bottom-0 right-0 bg-[#c74e1c] px-[14px] py-[12px] text-white text-[16px] main-font"
            >
              1215 USD
            </div>
          </div>
          <div class="mt-[18px] main-font text-[#444]">
            <h4 class="text-[20px] font-semibold">Восточный микс</h4>
            <div class="text-[16px] font-light">Кыргызстан, горы Памира, Узбекистан</div>
            <div class="mt-[25px] text-[#c74e1c] text-[14px] main-font italic">ПОДРОБНЕЕ...</div>
          </div>
        </div>

        <div class="flex flex-col w-[33%]">
          <div class="relative">
            <img src="/images/req/1.png" />
            <div
              class="absolute bottom-0 right-0 bg-[#c74e1c] px-[14px] py-[12px] text-white text-[16px] main-font"
            >
              2250 USD
            </div>
          </div>
          <div class="mt-[18px] main-font text-[#444]">
            <h4 class="text-[20px] font-semibold">Восхождение на пик Хан-Тенгри</h4>
            <div class="text-[16px] font-light">Программы восхождения с Юга и с Севера</div>
            <div class="mt-[25px] text-[#c74e1c] text-[14px] main-font italic">ПОДРОБНЕЕ...</div>
          </div>
        </div>
      </div>

      <div class="hidden max-tb:flex justify-between items-center max-tb:justify-center">
        <div
          class="text-[36px] max-tb:text-[32px] max-mb:text-[20px] max-mb:text-center text-[#444] font-light main-font"
        >
          ЭТО ИНТЕРЕСНО
        </div>
      </div>

      <div class="hidden max-tb:flex items-start max-mb:flex-col justify-between gap-[10px] pt-[21px]">
        <div class="max-w-[446px] max-mb:w-full">
          <div class="max-stb:w-[200px] max-mb:w-full max-stb:h-[228px]">
            <img
              src="/images/lenin/our.jpg"
              class="max-stb:w-full max-stb:h-full object-cover object-center"
            />
          </div>
          <div
            class="main-font text-[16px] max-stb:text-[15px] uppercase text-[#444] text-center mt-[24px]"
          >
            Наши восходители
          </div>
        </div>

        <div class="max-w-[446px] max-mb:w-full">
          <div class="max-stb:w-[200px] max-mb:w-full max-stb:h-[228px]">
            <img src="/images/lenin/reviews.jpg" class="w-full h-full object-cover object-center" />
          </div>
          <div
            class="main-font text-[16px] max-stb:text-[15px] uppercase text-[#444] text-center mt-[24px]"
          >
            ОТЗЫВЫ О НАС
          </div>
        </div>

        <router-link to="/clear-snow" class="max-w-[446px] max-mb:w-full">
          <div class="max-stb:w-[200px] max-mb:w-full max-stb:h-[228px]">
            <img src="/images/lenin/clearsnow.jpg" class="w-full h-full object-cover object-center" />
          </div>
          <div
            class="main-font text-[16px] max-stb:text-[15px] uppercase text-[#444] max-mb:text-white text-center mt-[24px]"
          >
            экологическая акция «Чистый снег»
          </div>
        </router-link>
      </div>

      <div
        class="flex gap-[40px] max-tb:gap-[10px] max-stb:gap-[5px] justify-betwen max-stb:flex-col items-start mt-[170px] max-tb:mt-[70px] max-stb:mt-[80px] max-mb:mt-[57px] max-stb:px-[10px] max-mb:px-0"
      >
        <div class="">
          <img src="/images/footer-logo.png" class="max-w-[230px]" />
        </div>
        <div
          class="flex max-mb:flex-col justify-between items-start main-font text-white text-[16px] px-[90px] max-stb:px-0 max-lp:px-[15px] max-stb:mt-[22px] w-full"
        >
          <div class="w-full max-mb:border-t-1 max-mb:border-[#ad4d26] max-mb:py-[8px]">
            <div class="flex justify-between">
              <h4 class="text-[18px] max-mb:text-[15px] font-bold">Компания</h4>
              <div class="relative mb:hidden">
                <div class="w-[7px] h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-2"></div>
                <div
                  class="w-[7px] h-[1px] bg-white rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-2"
                ></div>
              </div>
            </div>
            <div class="flex flex-col pt-[18px] gap-[8px] justify-start max-mb:hidden">
              <div>О нас</div>
              <div>Вакансии</div>
              <div>Акции</div>
              <div>Отзывы</div>
              <div>Контакты</div>
            </div>
          </div>

          <div class="w-full max-mb:border-t-1 max-mb:border-[#ad4d26] max-mb:py-[8px]">
            <div class="flex justify-between">
              <h4 class="text-[18px] max-mb:text-[15px] font-bold">Медия</h4>
              <div class="relative mb:hidden">
                <div class="w-[7px] h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-2"></div>
                <div
                  class="w-[7px] h-[1px] bg-white rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-2"
                ></div>
              </div>
            </div>
            <div class="flex flex-col pt-[18px] gap-[8px] justify-start max-mb:hidden">
              <div>Статьи</div>
              <div>Фотогалерея</div>
              <div>Видеогалерея</div>
            </div>
          </div>

          <div class="w-full max-mb:border-t-1 max-mb:border-[#ad4d26] max-mb:py-[8px]">
            <div class="flex justify-between">
              <h4 class="text-[18px] max-mb:text-[15px] font-bold">Туры</h4>
              <div class="relative mb:hidden">
                <div class="w-[7px] h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-2"></div>
                <div
                  class="w-[7px] h-[1px] bg-white rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-2"
                ></div>
              </div>
            </div>
            <div class="flex flex-col pt-[18px] gap-[8px] justify-start max-mb:hidden">
              <div>Поиск туров</div>
              <div>
                Календарь <br />
                групповых туров
              </div>
            </div>
          </div>

          <div
            class="w-full max-mb:border-t-1 max-mb:border-b-1 max-mb:border-[#ad4d26] max-mb:py-[8px]"
          >
            <div class="flex justify-between">
              <h4 class="text-[18px] max-mb:text-[15px] font-bold">Направления</h4>
              <div class="relative mb:hidden">
                <div class="w-[7px] h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-2"></div>
                <div
                  class="w-[7px] h-[1px] bg-white rotate-90 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-2"
                ></div>
              </div>
            </div>
            <div class="flex flex-col pt-[18px] gap-[8px] justify-start max-mb:hidden">
              <div>Узбекистан</div>
              <div>Кыргызстан</div>
              <div>Казахстан</div>
              <div>Туркменистан</div>
              <div>Таджикистан</div>
              <div>Китай</div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-[36px] max-mb:mt-[8px] flex max-stb:flex-row-reverse max-mb:flex-col-reverse justify-between px-[90px] max-lp:px-[15px] max-mb:px-0"
      >
        <div class="max-mb:mt-[35px] max-mb:mx-auto">
          <div class="text-[16px] text-white font-bold special-font max-mb:text-center">
            Мы в соцсетях
          </div>
          <div class="flex gap-[15px] mt-[24px]">
            <img src="/images/footer/fb2.png" class="h-[35px]" />
            <img src="/images/footer/inst2.png" class="h-[35px]" />
            <img src="/images/footer/tw2.png" class="h-[35px]" />
            <img src="/images/footer/yt2.png" class="h-[35px]" />
          </div>
        </div>

        <div class="">
          <h3
            class="text-[16px] main-font text-[#f9f6ed] font-bold text-center max-mb:justify-self-start"
          >
            Подпишитесь на нашу рассылку
          </h3>
          <div class="mt-[24px] max-mb:mt-[21px] flex gap-1 max-md:justify-center">
            <input
              type="email"
              placeholder="Введите Ваш E-mail"
              class="py-[15px] pl-[56px] max-stb:pl-[11px] main-font text-[16px] max-mb:text-[15px] w-[374px] max-stb:w-[278px] bg-[#d6d4ce]"
            />
            <div
              class="px-[32px] py-[16px] bg-[#c54d1b] main-font text-[16px] text-[#362d2e] font-light"
            >
              >
            </div>
          </div>
        </div>
      </div>

      <div class="w-full text-center mt-[42px] main-font text-[#f9f6ed] text-[14px]">
        Copyright © 2020 Central Asia Travel
      </div>
    </footer>
  </main>
  <div v-else class="flex items-center justify-center h-screen">
    <p class="text-[20px] text-[#444] main-font">Загрузка...</p>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { getTourInfo } from '@/utils/api'

import HeaderTrigger from '@/components/HeaderTrigger.vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const tour = ref({
  routes: [],
  name_ru: '',
  name_en: '',
  description_ru: '',
  description_en: '',
  price: 0,
  duration: 0,
  category: '',
})

const currLang = ref(sessionStorage.getItem('selectedLanguage') || 'ru')
const loading = ref(true)
const activeRouteIndex = ref(0) // Use index instead of id

const isDataLoaded = computed(() => {
  return !loading.value && Object.keys(tour.value).length > 0 && tour.value.routes !== undefined
})

const filteredRoutes = computed(() => {
  if (tour.value.routes.length === 0) return []
  return [tour.value.routes[activeRouteIndex.value]]
})

const setActiveRoute = (index) => {
  console.log('Button clicked, setting active route index to:', index)
  activeRouteIndex.value = index
  console.log('Current activeRouteIndex:', activeRouteIndex.value)
  console.log('Filtered routes:', filteredRoutes.value)
}

const toggleHiddenText = (event) => {
  const button = event.currentTarget
  const hiddenBlock = button.nextElementSibling

  if (!hiddenBlock) return

  if (hiddenBlock.style.maxHeight === '0px' || !hiddenBlock.style.maxHeight) {
    hiddenBlock.classList.remove('hidden')
    hiddenBlock.style.overflow = 'hidden'
    hiddenBlock.style.maxHeight = '0px'

    setTimeout(() => {
      hiddenBlock.style.maxHeight = hiddenBlock.scrollHeight + 'px'
    }, 10)
  } else {
    hiddenBlock.style.maxHeight = '0px'
    setTimeout(() => {
      hiddenBlock.classList.add('hidden')
    }, 500)
  }

  button.classList.toggle('text-[#444]')
  button.classList.toggle('text-[#c74e1c]')

  const plus = button.querySelector('.relative')
  if (!plus) return

  const lines = plus.querySelectorAll('div')
  if (lines.length < 2) return

  lines[0].classList.toggle('rotate-45')
  lines[0].classList.toggle('bg-[#c74e1c]')
  lines[0].classList.toggle('bg-[#444]')

  if (lines[1].classList.contains('rotate-90')) {
    lines[1].classList.remove('rotate-90')
    lines[1].classList.add('rotate-135')
  } else {
    lines[1].classList.remove('rotate-135')
    lines[1].classList.add('rotate-90')
  }

  lines[1].classList.toggle('bg-[#c74e1c]')
  lines[1].classList.toggle('bg-[#444]')
}

const getPlainTextField = (field) => {
  const fieldName = `${field}_${currLang.value}`
  const value = tour.value[fieldName] || tour.value[`${field}_ru`] || ''
  return getPlainText(value)
}

const getPlainText = (html) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html || '', 'text/html')
  return doc.body.textContent || ''
}

const getLocalizedField = (field) => {
  const fieldName = `${field}_${currLang.value}`
  return tour.value[fieldName] || tour.value[`${field}_ru`] || ''
}

onMounted(async () => {
  try {
    const response = await getTourInfo(props.id)
    tour.value = {
      ...response.data,
      routes: response.data.routes || [],
    }
    console.log('Tour data loaded:', tour.value)
    console.log('Initial active route index:', activeRouteIndex.value)
    console.log('Initial filtered routes:', filteredRoutes.value)
  } catch (error) {
    console.error('Ошибка загрузки тура:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style>
.tours-bg {
  background-image: url('/images/tours/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.mount-bg {
  background-image: url('/images/bg-mount.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.anim {
  transition: max-height 0.5s ease-in-out;
}
</style>
