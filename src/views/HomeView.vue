<script setup>
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import UkazIcon from '@/assets/icons/UkazIcon.vue'
import MapIcon from '@/assets/icons/MapIcon.vue'
import ArrowIcon from '@/assets/icons/ArrowIcon.vue';

const toggleMenu = (event) => {
  document.querySelector("#header").classList.remove('hidden')
}
</script>

<template>
  <main>
    <div class="hero-bg">
      <div class="flex px-[40px] pt-[36px] justify-between items-center sticky top-0 left-0 z-50">
        <button class="border-0" @click="toggleMenu">
          <img src="/images/menu-button.png" />
          <span class="text-white text-semibold text-[12.5px] main-font letter-spacing-[.5em]"
            >МЕНЮ</span
          >
        </button>

        <div>
          <SearchIcon className="text-white" />
        </div>
      </div>

      <div class="pt-[220px] pl-[260px]">
        <img src="/images/main-logo.png" />
      </div>

      <div class="pt-[160px] pl-[260px]">
        <button
          class="px-[73px] py-2 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px] letter-spacing-[.25em]"
        >
          Отправить запрос
        </button>
      </div>

      <div class="pt-[48px] pl-[260px] flex gap-[2px] pb-[131px]">
        <div
          class="flex justify-center gap-5 items-center py-[20px] bg-[#f5f0e2] w-[330px] h-[81px]"
        >
          <div>
            <UkazIcon className="text-[#d35400]" />
          </div>

          <div class="flex flex-col justify-center items-center">
            <div class="text-[15px] font-semibold main-font letter-spacing-[.10em] text-[#444444]">
              СТРАНА
            </div>

            <div class="text-[12px] main-font text-[#888888] letter-spacing-[.10em]">
              КУДА ПОЕХАТЬ
            </div>
          </div>
        </div>

        <div
          class="flex justify-center gap-5 items-center py-[20px] bg-[#f5f0e2] w-[330px] h-[81px]"
        >
          <div>
            <MapIcon />
          </div>

          <div class="flex flex-col justify-center items-center">
            <div class="text-[15px] font-semibold main-font letter-spacing-[.10em] text-[#444444]">
              ТИП ПУТЕШЕСТВИЯ
            </div>

            <div class="text-[12px] main-font text-[#888888] letter-spacing-[.10em]">
              КАТЕГОРИЯ ТУРА
            </div>
          </div>
        </div>

        <div
          class="w-[146px] h-[81px] flex bg-[#c54d1b] items-center justify-center main-font text-[35.35px] text-white font-semibold"
        >
          >
        </div>
      </div>
    </div>

    <div
      class="bg-white pt-[116px] pb-[80px] pl-[260px] text-[24px] letter-spacing-[.05em] text-[#444444] w-[75%]"
    >
      <div>
        Пряный аромат шафрана, пленительные танцы азиатских красавиц, сказочное переплетение красок
        и нежность национального хан-атласа, наблюдение за звёздами с вершин восточных минаретов и
        сладкий полуденный сон под бесконечные мудрые песни акына – всё это с нетерпением ждёт Вас
        здесь, на гостеприимной Азиатской земле!
      </div>

      <div class="mt-[60px]">
        Окунитесь в сладкий плен манящего Востока в компании с «Central Asia Travel»!
      </div>
    </div>

    <div class="new-on-site-bg pt-[31px] px-[260px] pb-[40px]">
      <div class="flex justify-between items-center">
        <h2 class="main-font font-semibold text-[#444444] text-[36px]">НОВОЕ НА САЙТЕ</h2>

        <div class="flex gap-[5px]">
          <ArrowIcon className="text-white" />
          <ArrowIcon className="text-[#d35400] rotate-180" />
        </div>
      </div>

      <div class="flex justify-center gap-[32px] pt-[28px]">
        <div class="flex flex-col">
          <div class="relative">
            <img src="/images/main-page/5stans.jpg" />
            <div class="absolute bottom-0 right-0 bg-[#d35400] text-white p-[10px] maint-font text-[16px]">2250 USD</div>
          </div>

          <div class="mt-[30px] flex-1">
            <h3 class="text-[20px] letter-spacing-[.05em] text-[#444444] main-font font-semibold">Путешествие по Центральной Азии</h3>
            <p class="text-[16px] letter-spacing-[.05em] text-[#444444] main-font font-[350] mt-[16px]">Тур включает посещение основных туристических достопримечательностей и интересных мест в каждой стране</p>
          </div>

          <div class="mt-[36px]">
            <a href="#" class="font-main text-[#d35400] text-[14px] letter-spacing-[.05em] italic">ПОДРОБНЕЕ...</a>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="relative">
            <img src="/images/main-page/5stans.jpg" />
            <div class="absolute bottom-0 right-0 bg-[#d35400] text-white p-[10px] maint-font text-[16px]">2250 USD</div>
          </div>

          <div class="mt-[30px] flex-1">
            <h3 class="text-[20px] letter-spacing-[.05em] text-[#444444] main-font font-semibold">Путешествие по Центральной Азии</h3>
            <p class="text-[16px] letter-spacing-[.05em] text-[#444444] main-font font-[350] mt-[16px]">Тур включает посещение основных туристических достопримечательностей и интересных мест в каждой стране</p>
          </div>

          <div class="mt-[36px]">
            <a href="#" class="font-main text-[#d35400] text-[14px] letter-spacing-[.05em] italic">ПОДРОБНЕЕ...</a>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="relative">
            <img src="/images/main-page/5stans.jpg" />
            <div class="absolute bottom-0 right-0 bg-[#d35400] text-white p-[10px] maint-font text-[16px]">2250 USD</div>
          </div>

          <div class="mt-[30px] flex-1">
            <h3 class="text-[20px] letter-spacing-[.05em] text-[#444444] main-font font-semibold">Путешествие по Центральной Азии</h3>
            <p class="text-[16px] letter-spacing-[.05em] text-[#444444] main-font font-[350] mt-[16px]">Тур включает посещение основных туристических достопримечательностей и интересных мест в каждой стране</p>
          </div>

          <div class="mt-[36px]">
            <a href="#" class="font-main text-[#d35400] text-[14px] letter-spacing-[.05em] italic">ПОДРОБНЕЕ...</a>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="pl-[260px] pt-[120px] main-font text-[20px] letter-spacing-[.05em] font-[350] text-[#444444] w-[1340px]">
        Туроператор «Central Asia Travel» организует экскурсионные туры по Великому шелковому пути и его отдельным участкам и городам – Самарканду, Бухаре, Хиве; приключенческие туры по горам Памира и Тянь-Шаня; семейный и пляжный отдых, а также MICE-услуги и деловые поездки в Среднюю Азию. Чтобы решить, куда поехать отдыхать, посмотрите наши наиболее популярные туры:
      </div>
    </div>

    <div class="bg-white flex justify-between items-center px-[260px] pt-[60px] pb-[30px]">
      <div>
        <h2 class="text-[36px] main-font font-[350] text-[#444444]">ПОПУЛЯРНЫЕ ТУРЫ</h2>
      </div>

      <div class="flex items-center justify-center gap-[16px]">
        <a href="#" class="text-[#d35400] text-[16px] letter-spacing-[.05em] main-font font-semibold">Показать все</a>

        <div class="flex gap-1">
          <ArrowIcon className="text-white drop-shadow-lg" />
          <ArrowIcon className="text-[#d35400] rotate-180" />
        </div>
      </div>
    </div>

    <div class="bg-[#]">

  </div>
  </main>
</template>

<style scoped>
.hero-bg {
  background-image: url('/images/main-page/hero-image.jpg');
  background-size: cover;
}

.new-on-site-bg {
  background:
    url('/images/main-page/arrows.png') bottom/contain no-repeat,
    #f3ebc4;
}


</style>
