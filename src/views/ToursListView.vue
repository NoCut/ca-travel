<script setup>
  import HeaderTrigger from '@/components/HeaderTrigger.vue';

  import { getAllTours } from '@/utils/api';
  import { ref, onMounted } from 'vue';

  const tours = ref([])
  const currLang = ref('')

  onMounted(async () => {
    tours.value = (await getAllTours()).data
    console.log(tours.value)
    currLang.value = sessionStorage.getItem('lang') || 'ru'
  })
</script>

<template>
  <main class="relative">
    <div class="tours-bg pt-[23px] pb-[120px]">
      <div class="flex items-center justify-center ">
        <img src="/images/tours/logo.png" />
      </div>

      <div class="pt-[150px] px-[260px] text-white main-font text-[72px] font-semibold drop-shadow-lg">
        <h1 class="">
          ТУРЫ <br>
          В СРЕДНЮЮ АЗИЮ
        </h1>
      </div>

      <div class="px-[260px] pt-[105px]">
        <button
            class="px-[73px] py-4 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
          >
            Отправить запрос
          </button>
      </div>
    </div>

    <div class="px-[260px] pt-[29px] pb-[93px]">
      <div class="flex gap-[12px]">
        <img src="/images/clearsnow/arrow.svg" class="w-[15px]" />
        <div class="main-font text-[15px] text-[#888]"> (ПРЕДЫДУЩАЯ СТРАНИЦА)</div>
      </div>
    </div>

    <div class="flex gap-[2px] items-center px-[260px] justify-between">
      <div class="bg-[#f9f6ed] flex items-center justify-center w-[25%] py-[18px] gap-[21px]">
        <img src="/icons/ukaz-sm.png" class="w-[25px]" />

        <div class="main-font text-center">
          <div class="text-[#444] font-semibold text-[15px]">
            СТРАНА
          </div>
          <div class="text-[#888] text-[12px]">
          КУДА ПОЕХАТЬ
          </div>
        </div>
      </div>
      <div class="bg-[#f9f6ed] flex items-center justify-center w-[25%] py-[18px] gap-[21px]">
        <img src="/icons/type-sm.png" class="w-[25px]" />

        <div class="main-font text-center">
          <div class="text-[#444] font-semibold text-[15px]">
            ТИП ПУТЕШЕСТВИЯ
          </div>
          <div class="text-[#888] text-[12px]">
          КАТЕГОРИЯ ТУРА
          </div>
        </div>
      </div>
      <div class="bg-[#f9f6ed] flex items-center justify-center w-[25%] py-[18px] gap-[21px]">
        <img src="/icons/cal2.png" class="w-[25px]" />

        <div class="main-font text-center">
          <div class="text-[#444] font-semibold text-[15px]">
            ВРЕМЯ ПУТЕШЕСТВИЯ
          </div>
          <div class="text-[#888] text-[12px]">
          ДАТЫ
          </div>
        </div>
      </div>
      <div class="bg-[#f9f6ed] flex items-center justify-center w-[25%] py-[18px] gap-[21px]">
        <img src="/icons/moon.png" class="w-[25px]" />

        <div class="main-font text-center">
          <div class="text-[#444] font-semibold text-[15px]">
            ДИТЕЛЬНОСТЬ
          </div>
          <div class="text-[#888] text-[12px]">
          КОЛИЧЕСТВО НОЧЕЙ
          </div>
        </div>
      </div>
    </div>

    <div class="mt-[30px] px-[260px] font-main flex items-center gap-8">
      <div class="text-[#444] font-bold text-[18px]">
        Всего найдено туров: {{ tours.length }}
      </div>

      <div class="text-[#888] text-[17px]">
        Сортировать по: <span>цене</span> | <span>длительности</span>
      </div>
    </div>

    <div class='mt-[46px] gap-[10px] grid grid-cols-4 justify-stretch px-[260px]' v-auto-animate  >
      <div class="max-w-[328px] mx-auto" v-for="tour in tours" :key="tour.id">
        <div class="relative overflow-hidden">
          <img
            src="/images/main-page/classic_uzbekistan.jpg"
            class="h-[337px] object-cover object-left"
          />

          <div class="absolute top-1 right-1 bg-[#e9a83a] rounded-2xl p-[6px] pb-[11px]">
            <img src="/images/main-page/small-group.png" />
          </div>

          <div
            class="absolute bottom-1 left-[50%] translate-x-[-50%] text-white text-[16px] letter-spacing-[.1em] main-font"
          >
            8 дней: <span class="font-semibold">{{ tour.price }}</span>
          </div>
        </div>
        <div class="pt-[20px] bg-white border-1 border-[#c7c7c7] text-center pb-[18px]">
          <div class="flex justify-center gap-1">
            <span class="text-[#d35400] text-[12px] letter-spacing-[.25em] main-font"
              >{{tour.tags.join(' #') }}</span
            >
          </div>

          <div class="pt-5 text-[#444] text-[20px] main-font letter-spacing-[0.05em]">
            {{ currLang === 'ru' ? tour.name_ru : tour.name_en }}
          </div>

          <div class="pt-7 text-[#888] text-[16px] main-font">Экскурсионный тур в Узбекистан</div>
        </div>
      </div>
    </div>

    <div class="mt-[72px] mb-[93px] flex justify-center">
      <button class="uppercase text-[#3b3534] text-[18px] font-light main-font px-[142px] py-[17px] border-1 border-[#888]">
        показать больше
      </button>
    </div>

    <HeaderTrigger />
  </main>
</template>

<style scoped>
  .tours-bg {
    background-image: url('/images/tours/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
