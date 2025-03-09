<script setup>
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'
import HeaderTrigger from '@/components/HeaderTrigger.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMobile = ref(window.innerWidth < 1025)
</script>

<template>
  <main class="relative">
    <HeaderTrigger />
    <div class="hero-bg bg-right max-stb:bg-bottom">
      <div
        class="pt-[220px] max-tb:pt-[380px] max-stb:pt-[142px] pl-[260px] max-lp:pl-[30px] max-tb:pl-0"
      >
        <img
          src="/images/main-logo.png"
          class="max-tb:w-[717px] max-tb:justify-self-center max-stb:hidden"
        />
        <img
          src="/images/mob_logo.png"
          class="justify-self-center max-mb:w-[290px] max-mb:block hidden"
        />
      </div>

      <div
        class="pt-[160px] max-tb:pt-[100px] max-stb:pt-[132px] max-mb:pt-[43px] pl-[260px] max-lp:pl-[30px] max-tb:justify-self-center max-tb:pl-0"
      >
        <button
          class="px-[73px] max-mb:px-[30px] py-2 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
        >
          Отправить запрос
        </button>
      </div>

      <div
        class="pt-[48px] pl-[260px] max-lp:pl-[30px] max-tb:px-[16px] flex max-tb:justify-center gap-[2px] pb-[131px]"
      >
        <div
          class="flex justify-center gap-5 items-center py-[20px] max-mb:py-[10px] bg-[#f5f0e2] w-[330px] max-mb:w-[70px] h-[81px] max-mb:h-[55px]"
        >
          <div>
            <img src="/icons/ukaz-sm.png" class="max-mb:w-[30px] max-mb:h-[30px]" />
          </div>

          <div class="flex flex-col justify-center items-center max-mb:hidden">
            <div class="text-[15px] font-semibold main-font letter-spacing-[.10em] text-[#444444]">
              СТРАНА
            </div>

            <div class="text-[12px] main-font text-[#888888] letter-spacing-[.10em]">
              КУДА ПОЕХАТЬ
            </div>
          </div>
        </div>

        <div
          class="flex justify-center gap-5 items-center py-[20px] max-mb:py-[10px] bg-[#f5f0e2] w-[330px] max-mb:w-[70px] h-[81px] max-mb:h-[55px]"
        >
          <div>
            <img src="/icons/type-sm.png" class="max-mb:w-[30px] max-mb:h-[30px]" />
          </div>

          <div class="flex flex-col justify-center items-center max-mb:hidden">
            <div class="text-[15px] font-semibold main-font text-[#444444]">ТИП ПУТЕШЕСТВИЯ</div>

            <div class="text-[12px] main-font text-[#888888]">КАТЕГОРИЯ ТУРА</div>
          </div>
        </div>

        <div
          class="w-[146px] max-mb:w-[70px] h-[81px] max-mb:h-[55px] flex bg-[#c54d1b] items-center justify-center"
        >
          <img src="/icons/right.png" />
        </div>
      </div>
    </div>

    <div
      class="bg-white pt-[116px] max-tb:pt-[100px] max-mb:pt-[74px] pb-[80px] max-tb:pb-[47px] max-stb:pb-[72px] max-mb:pb-[40px] pl-[260px] max-lp:pl-[30px] max-tb:px-[96px] max-stb:px-[24px] max-mb:px-[15px] max-tb:text-[20px] text-[24px] max-mb:text-[16px] text-[#444444] w-[75%] max-tb:w-full"
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

    <div
      class="new-on-site-bg bg-bottom pt-[31px] max-mb:pt-[13px] px-[260px] max-lp:px-[30px] max-mb:px-[15px] pb-[40px] max-mb:pb-[20px]"
    >
      <div class="flex justify-between items-center max-tb:justify-center">
        <h2
          class="main-font font-semibold text-[#444444] text-[36px] max-mb:text-[20px] text-center"
        >
          НОВОЕ НА САЙТЕ
        </h2>

        <div class="flex gap-[5px]" v-if="!isMobile">
          <ArrowIcon className="text-white" />
          <ArrowIcon className="text-[#d35400] rotate-180" />
        </div>
      </div>

      <div class="flex justify-center gap-[32px] pt-[28px] max-mb:pt-[18px]">
        <div class="flex flex-col max-stb:hidden">
          <div class="relative">
            <img src="/images/main-page/5stans.jpg" />
            <div
              class="absolute bottom-0 right-0 bg-[#d35400] text-white p-[10px] maint-font text-[16px]"
            >
              2250 USD
            </div>
          </div>

          <div class="mt-[30px] flex-1">
            <h3 class="text-[20px] text-[#444444] main-font font-semibold">
              Путешествие по Центральной Азии
            </h3>
            <p class="text-[16px] text-[#444444] main-font font-[350] mt-[16px]">
              Тур включает посещение основных туристических достопримечательностей и интересных мест
              в каждой стране
            </p>
          </div>

          <div class="mt-[36px]">
            <RouterLink to="/tours" class="font-main text-[#d35400] text-[14px] italic"
              >ПОДРОБНЕЕ...</RouterLink
            >
          </div>
        </div>

        <div class="flex flex-col max-mb:hidden">
          <div class="relative">
            <img src="/images/main-page/5stans.jpg" />
            <div
              class="absolute bottom-0 right-0 bg-[#d35400] text-white p-[10px] maint-font text-[16px]"
            >
              2250 USD
            </div>
          </div>

          <div class="mt-[30px] flex-1">
            <h3 class="text-[20px] text-[#444444] main-font font-semibold">
              Путешествие по Центральной Азии
            </h3>
            <p class="text-[16px] text-[#444444] main-font font-[350] mt-[16px]">
              Тур включает посещение основных туристических достопримечательностей и интересных мест
              в каждой стране
            </p>
          </div>

          <div class="mt-[36px]">
            <RouterLink to="/tours" class="font-main text-[#d35400] text-[14px] italic"
              >ПОДРОБНЕЕ...</RouterLink
            >
          </div>
        </div>

        <div class="flex flex-col">
          <div class="relative">
            <img src="/images/main-page/5stans.jpg" />
            <div
              class="absolute bottom-0 right-0 bg-[#d35400] text-white p-[10px] maint-font text-[16px]"
            >
              2250 USD
            </div>
          </div>

          <div class="mt-[30px] max-mb:mt-[16px] flex-1">
            <h3 class="text-[20px] max-mb:text-[15px] text-[#444444] main-font font-semibold">
              Путешествие по Центральной Азии
            </h3>
            <p class="text-[16px] max-mb:text-[14px] text-[#444444] main-font font-[350] mt-[16px]">
              Тур включает посещение основных туристических достопримечательностей и интересных мест
              в каждой стране
            </p>
          </div>

          <div class="mt-[36px] max-mb:hidden">
            <RouterLink to="/tours" class="font-main text-[#d35400] text-[14px] italic"
              >ПОДРОБНЕЕ...</RouterLink
            >
          </div>
        </div>
      </div>

      <div class="flex gap-[5px] justify-center pt-[9px]" v-if="isMobile">
        <ArrowIcon className="text-white w-[15px]" />
        <ArrowIcon className="text-[#d35400] rotate-180 w-[15px]" />
      </div>
    </div>

    <div class="bg-white">
      <div
        class="pl-[260px] max-lp:px-[30px] max-mb:px-[15px] pt-[120px] max-tb:pt-[75px] max-mb:pt-[53px] main-font text-[20px] max-mb:text-[16px] font-[350] text-[#444444] max-w-[1340px]"
      >
        Туроператор «Central Asia Travel» организует экскурсионные туры по Великому шелковому пути и
        его отдельным участкам и городам – Самарканду, Бухаре, Хиве; приключенческие туры по горам
        Памира и Тянь-Шаня; семейный и пляжный отдых, а также MICE-услуги и деловые поездки в
        Среднюю Азию. Чтобы решить, куда поехать отдыхать, посмотрите наши наиболее популярные туры:
      </div>
    </div>

    <div
      class="bg-white flex justify-between items-center px-[260px] max-lp:px-[30px] max-mb:px-[15px] pt-[60px] max-mb:pt-[52px] pb-[30px]"
    >
      <div class="w-full">
        <h2
          class="text-[36px] max-mb:text-[20px] main-font font-[350] text-[#444444] max-mb:text-center"
        >
          ПОПУЛЯРНЫЕ ТУРЫ
        </h2>
      </div>

      <div class="flex items-center justify-end gap-[16px] min-w-[25%] max-stb:hidden">
        <RouterLink to="/tours" class="text-[#d35400] text-[16px] main-font font-semibold"
          >Показать все</RouterLink
        >

        <div class="flex gap-1">
          <ArrowIcon className="text-white drop-shadow-lg" />
          <ArrowIcon className="text-[#d35400] rotate-180" />
        </div>
      </div>
    </div>

    <div
      class="bg-[#eb9532] flex justify-center max-tb:justify-stretch max-tb:items-stretch items-center text-white main-font text-[16px] font-semibold"
    >
      <div
        class="px-[20px] py-[10px] hover:text-[#d35300] w-full cursor-pointer flex justify-center items-center"
      >
        <img src="/icons/exc.png" v-if="isMobile" class="justify-self-center" />
        <span v-if="!isMobile"> ЭКСКУРСИОННЫЕ </span>
      </div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] flex justify-center items-center w-full cursor-pointer"
      >
        <img src="/icons/theme.png" v-if="isMobile" class="justify-self-center" />
        <span v-if="!isMobile"> ТЕМАТИЧЕСКИЕ </span>
      </div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] flex justify-center items-center w-full cursor-pointer"
      >
        <img src="/icons/holy.png" v-if="isMobile" class="justify-self-center" />
        <span v-if="!isMobile"> НОВОГОДНИЕ </span>
      </div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] flex justify-center items-center w-full cursor-pointer"
      >
        <img src="/icons/velo.png" v-if="isMobile" class="justify-self-center" />
        <span v-if="!isMobile"> ПРИКЛЮЧЕНЧЕСКИЕ </span>
      </div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] flex justify-center items-center w-full cursor-pointer"
      >
        <img src="/icons/alp.png" v-if="isMobile" class="justify-self-center" />
        <span v-if="!isMobile"> АЛЬПИНИЗМ </span>
      </div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] flex justify-center items-center w-full cursor-pointer"
      >
        <img src="/icons/trek.png" v-if="isMobile" class="justify-self-center" />
        <span v-if="!isMobile"> ТРЕККИНГ </span>
      </div>
    </div>

    <div
      class="flex justify-center gap-8 max-stb:gap-2 max-stb:px-2 items-center pt-[50px] pb-[70px]"
    >
      <div class="max-w-[328px] max-tb:hidden">
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
            8 дней: <span class="font-semibold">695 USD</span>
          </div>
        </div>
        <div class="pt-[20px] bg-white border-1 border-[#c7c7c7] text-center pb-[18px]">
          <div class="flex justify-center gap-1">
            <span class="text-[#d35400] text-[12px] letter-spacing-[.25em] main-font"
              >#ЭКСКУРСИОННЫЙ</span
            >
          </div>

          <div class="pt-5 text-[#444] text-[20px] main-font letter-spacing-[0.05em]">
            КЛАССИЧЕСКИЙ<br />
            УЗБЕКИСТАН
          </div>

          <div class="pt-7 text-[#888] text-[16px] main-font">Экскурсионный тур в Узбекистан</div>
        </div>
      </div>

      <div class="max-w-[328px] max-stb:hidden">
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
            8 дней: <span class="font-semibold">695 USD</span>
          </div>
        </div>
        <div class="pt-[20px] bg-white border-1 border-[#c7c7c7] text-center pb-[18px]">
          <div class="flex justify-center gap-1">
            <span class="text-[#d35400] text-[12px] letter-spacing-[.25em] main-font"
              >#ЭКСКУРСИОННЫЙ</span
            >
          </div>

          <div class="pt-5 text-[#444] text-[20px] main-font letter-spacing-[0.05em]">
            КЛАССИЧЕСКИЙ<br />
            УЗБЕКИСТАН
          </div>

          <div class="pt-7 text-[#888] text-[16px] main-font">Экскурсионный тур в Узбекистан</div>
        </div>
      </div>

      <div class="max-w-[328px] max-mb:hidden">
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
            8 дней: <span class="font-semibold">695 USD</span>
          </div>
        </div>
        <div class="pt-[20px] bg-white border-1 border-[#c7c7c7] text-center pb-[18px]">
          <div class="flex justify-center gap-1">
            <span class="text-[#d35400] text-[12px] letter-spacing-[.25em] main-font"
              >#ЭКСКУРСИОННЫЙ</span
            >
          </div>

          <div class="pt-5 text-[#444] text-[20px] main-font letter-spacing-[0.05em]">
            КЛАССИЧЕСКИЙ<br />
            УЗБЕКИСТАН
          </div>

          <div class="pt-7 text-[#888] text-[16px] main-font">Экскурсионный тур в Узбекистан</div>
        </div>
      </div>

      <div class="max-w-[328px]">
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
            8 дней: <span class="font-semibold">695 USD</span>
          </div>
        </div>
        <div class="pt-[20px] bg-white border-1 border-[#c7c7c7] text-center pb-[18px]">
          <div class="flex justify-center gap-1">
            <span class="text-[#d35400] text-[12px] letter-spacing-[.25em] main-font"
              >#ЭКСКУРСИОННЫЙ</span
            >
          </div>

          <div class="pt-5 text-[#444] text-[20px] main-font letter-spacing-[0.05em]">
            КЛАССИЧЕСКИЙ<br />
            УЗБЕКИСТАН
          </div>

          <div class="pt-7 text-[#888] text-[16px] main-font">Экскурсионный тур в Узбекистан</div>
        </div>
      </div>
    </div>

    <div
      class="flex justify-center items-center gap-[35px] max-lp:gap-[16px] bg-[#f9f6ed] py-[10px] text-[#444] main-font text-[18px] max-mb:text-[14px] text-center max-mb:flex-wrap"
    >
      <div
        class="bg-white px-[36px] max-tb:px-[5px] hover:text-[#c74e1c] w-[205px] max-tb:w-[160px] max-mb:w-[137px] h-[180px] max-mb:h-[137px] flex flex-col justify-center"
      >
        <div class="max-mb:h-[56px] flex items-center">
          <img src="/images/main-page/lupa.png" class="mx-auto max-mb:max-w-[55px]" />
        </div>
        <div class="pt-[8px] mx-auto max-w-[135px]">Воспользуйтесь поиском туров</div>
      </div>

      <div
        class="px-[36px] max-tb:px-[5px] w-[225px] max-tb:w-[160px] max-mb:w-[137px] h-[180px] max-mb:h-[137px] flex flex-col justify-center"
      >
        <div class="max-mb:h-[56px] flex items-center">
          <img src="/images/main-page/calendar2.png" class="mx-auto max-mb:max-w-[55px]" />
        </div>

        <div class="pt-[8px] mx-auto max-w-[150px]">Посмотрите календарь туров</div>
      </div>

      <div
        class="px-[36px] max-tb:px-[5px] w-[205px] max-tb:w-[160px] max-mb:w-[137px] h-[180px] max-mb:h-[137px] flex flex-col justify-center"
      >
        <div class="max-mb:h-[56px] flex items-center">
          <img src="/images/main-page/review.png" class="mx-auto max-mb:max-w-[55px]" />
        </div>

        <div class="pt-[8px] mx-auto max-w-[135px]">Почитайте отзывы</div>
      </div>

      <div
        class="px-[36px] max-tb:px-[5px] w-[205px] max-tb:w-[160px] max-mb:w-[137px] h-[180px] max-mb:h-[137px] flex flex-col justify-center"
      >
        <div class="max-mb:h-[56px] flex items-center">
          <img src="/images/main-page/mail.png" class="mx-auto max-mb:max-w-[55px]" />
        </div>

        <div class="pt-[8px] mx-auto max-w-[135px]">Отправьте заявку</div>
      </div>
    </div>

    <div class="px-[260px] max-lp:px-[30px] pt-[123px] max-mb:pt-[71px]">
      <h2 class="text-[#444] main-font text-[36px] max-mb:text-[20px] max-tb:text-center">КУДА ПОЕДЕМ</h2>
    </div>

    <div class="w-full grid grid-cols-3 max-tb:grid-cols-2 max-mb:grid-cols-1 pt-[26px]">
      <div class="relative">
        <img class="object-cover w-full" src="/images/main-page/Uzbekistan.jpg" />
        <div
          class="absolute bottom-1 left-[50%] translate-x-[-50%] text-white main-font text-[40px] font-light"
        >
          Узбекистан
        </div>
      </div>
      <div class="relative">
        <img class="object-cover w-full" src="/images/main-page/Kyrgyzstan.jpg" />
        <div
          class="absolute bottom-1 left-[50%] translate-x-[-50%] text-white main-font text-[40px] font-light"
        >
          Кыргызстан
        </div>
      </div>
      <div class="relative">
        <img class="object-cover w-full" src="/images/main-page/Kazakhstan.jpg" />
        <div
          class="absolute bottom-1 left-[50%] translate-x-[-50%] text-white main-font text-[40px] font-light"
        >
          Казахстан
        </div>
      </div>
      <div class="relative">
        <img class="object-cover w-full" src="/images/main-page/Tajikistan.jpg" />
        <div
          class="absolute bottom-1 left-[50%] translate-x-[-50%] text-white main-font text-[40px] font-light"
        >
          Таджикстан
        </div>
      </div>
      <div class="relative">
        <img class="object-cover w-full" src="/images/main-page/Turkmenistan.jpg" />
        <div
          class="absolute bottom-1 left-[50%] translate-x-[-50%] text-white main-font text-[40px] font-light"
        >
          Туркменистан
        </div>
      </div>
      <div class="relative">
        <img class="object-cover w-full" src="/images/main-page/China.jpg" />
        <div
          class="absolute bottom-1 left-[50%] translate-x-[-50%] text-white main-font text-[40px] font-light"
        >
          Китай
        </div>
      </div>
    </div>

    <div class="pt-[116px] max-mb:pt-[65px] px-[260px] max-lp:px-[30px] flex justify-between max-tb:justify-center">
      <h2 class="main-font font-light text-[36px] max-tb:text-[32px] max-mb:text-[20px] max-mb:text-center text-[#444]">
        ПОПУЛЯРНОЕ: места, где следует побывать
      </h2>

      <div class="flex gap-1" v-if="!isMobile">
        <ArrowIcon className="text-white drop-shadow-lg" />
        <ArrowIcon className="text-[#d35400] rotate-180" />
      </div>
    </div>

    <div class="pt-[26px] px-[260px] max-lp:px-[30px] max-mb:px-[15px] max-lp:gap-[10px] flex justify-between">
      <div class="max-w-[448px] max-mb:hidden">
        <div>
          <img src="/images/main-page/Samarkand.jpg" />
        </div>

        <div class="main-font font-light text-[#444] text-[16px] mt-4">
          <span class="text-[#d35400] font-medium">Самарканд</span> насчитывает более 2750 лет своей
          насыщенной истории. Древний Афросиаб (руины которого Вы можете увидеть....
        </div>

        <div class="mt-4 main-font italic text-[#d35400] text-[14px]">Подробнее...</div>
      </div>
      <div class="max-w-[448px] max-sm:hidden">
        <div>
          <img src="/images/main-page/Samarkand.jpg" />
        </div>

        <div class="main-font font-light text-[#444] text-[16px] mt-4">
          <span class="text-[#d35400] font-medium">Самарканд</span> насчитывает более 2750 лет своей
          насыщенной истории. Древний Афросиаб (руины которого Вы можете увидеть....
        </div>

        <div class="mt-4 main-font italic text-[#d35400] text-[14px]">Подробнее...</div>
      </div>
      <div class="max-w-[448px]">
        <div>
          <img src="/images/main-page/Samarkand.jpg" />
        </div>

        <div class="main-font font-light text-[#444] text-[16px] mt-4">
          <span class="text-[#d35400] font-medium">Самарканд</span> насчитывает более 2750 лет своей
          насыщенной истории. Древний Афросиаб (руины которого Вы можете увидеть....
        </div>

        <div class="mt-4 main-font italic text-[#d35400] text-[14px]">Подробнее...</div>
      </div>
    </div>

    <div class="flex gap-1 justify-center pt-[32px]" v-if="isMobile">
      <ArrowIcon className="text-white drop-shadow-lg" />
      <ArrowIcon className="text-[#d35400] rotate-180" />
    </div>

    <div class="pt-[118px] max-tb:pt-[92px] max-mb:pt-[63px] w-full">
      <div
        class="w-full lenin-bg bg-top pt-[265px] max-stb:pt-[76px] max-mb:pt-[260px] px-[260px] max-lp:px-[30px] max-mb:px-[15px] pb-[96px] max-stb:pb-[20px] max-mb:pb-[50px]"
      >
        <div>
          <h1
            class="main-font font-semibold text-[72px] text-white max-tb:text-[68px] max-stb:text-[40px] max-mb:text-[32px] max-tb:text-center"
          >
            ПИК ЛЕНИНА
          </h1>
          <h2
            class="main-font text-[48px] max-tb:text-[42px] max-stb:text-[24px] max-mb:text-[20px] max-tb:text-center text-white"
          >
            Восхождения · Треккинг · Отдых на Памире
          </h2>
        </div>

        <div
          class="pt-[178px] max-tb:pt-[105px] max-stb:pt-[25px] flex items-end gap-[46px] max-stb:gap-[33px] max-tb:flex-col max-tb:items-stretch"
        >
          <RouterLink
            to="/lenin"
            class="px-[111px] py-4 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
            v-if="!isMobile"
          >
            Подробнее
          </RouterLink>

          <div class="w-full flex gap-[32px] justify-center" v-if="isMobile">
            <RouterLink
              to="/lenin"
              class="px-[75px] max-mb:px-[50px] py-4 max-mb:py-[17px] border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px] max-mb:text-[16px]"
            >
              Отправить запрос
            </RouterLink>
            <RouterLink
              to="/lenin"
              class="px-[75px] py-4 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px] max-stb:hidden"
            >
              <img src="/images/lenin/facebook.png" />
            </RouterLink>
          </div>

          <div class="flex gap-[24px] max-tb:items-center">
            <img src="/images/calendar.png" />

            <div class="main-font text-white text-[20px] max-mb:text-[15px]">
              Наши лагеря будут открыты <br v-if="!isMobile" />
              с 28 июня по 7 сентября 2025 г.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="pt-[75px] max-stb:pt-[24px] px-[260px] max-lp:px-[30px] max-mb:px-[15px] main-font text-[20px] max-tb:text-[18px] max-mb:text-[14px] text-[#444] font-light"
    >
      <span class="font-semibold">Пик Ленина</span> (7134.3 м) – один из самых известных, доступных
      и наиболее посещаемых семитысячников Памира, расположен на границе между Кыргызстаном и
      Таджикистаном и входит в альпинистскую программу «Снежный барс». Мы располагаем собственными
      базовыми лагерями «Поляна Эдельвейсов» на высоте 3600 м и «Солнечный» 4400 м, где гарантируем
      комфорт, безопасность, чистоту, богатое меню и обслуживание на высоте.
    </div>

    <div class="pt-[135px] max-stb:pt-[44px] max-mb:pt-[50px] px-[260px] max-lp:px-[30px] max-mb:px-[15px]">
      <div class="flex justify-center gap-[101px] max-lp:gap-[40px] max-tb:flex-col">
        <div class="pt-[46px] pl-[46px] max-tb:pl-0 max-w-[50%] max-tb:max-w-full relative">
          <div class="flex gap-[32px] max-tb:flex-col max-tb: items-center">
            <img src="/images/main-page/mice1.svg" class="w-[71px]" />
            <h3
              class="main-font text-[36px] max-lp:text-[26px] max-tb:text-[28px] max-mb:text-[20px] max-tb:text-center text-[#444] max-w-[400px] max-tb:max-w-full"
            >
              M.I.C.E. В УЗБЕКИСТАНЕ, КЫРГЫЗСТАНЕ, КАЗАХСТАНЕ
            </h3>
          </div>

          <div
            class="main-font font-light text-[18px] max-lp:text-[14px] max-tb:text-[18px] max-mb:text-[14px] max-tb:w-[500px] max-mb:w-full max-tb:mx-auto pt-[32px] max-tb:text-center"
          >
            Любая численность группы, любое наполнение программы! Компания
            <b>Central Asia Travel</b> предлагает полный комплекс услуг по организации M.I.C.E. в
            Средней Азии
          </div>

          <div class="pt-[68px] max-lp:pt-[17px] flex gap-1 justify-center" v-if="!isMobile">
            <ArrowIcon className="text-white drop-shadow-lg max-lp:w-[35px]" />
            <ArrowIcon className="text-[#d35400] rotate-180 max-lp:w-[35px]" />
          </div>

          <div
            class="absolute top-0 left-0 w-[368px] h-[241px] border-l-1 border-t-1 border-[#444]"
            v-if="!isMobile"
          ></div>
        </div>

        <div class="min-w-[50%] flex-1">
          <img src="/images/main-page/mice.jpg" class="w-full" />
        </div>

        <div class="pt-[68px] max-lp:pt-[17px] flex gap-1 justify-center" v-if="isMobile">
          <ArrowIcon className="text-white drop-shadow-lg max-lp:w-[35px]" />
          <ArrowIcon className="text-[#d35400] rotate-180 max-lp:w-[35px]" />
        </div>
      </div>
    </div>

    <div class="pt-[82px] pb-[95px] max-stb:pb-[57px]">
      <div
        class="border-1 border-[#444] max-stb:border-0 py-[21px] mx-auto max-w-[930px] flex max-stb:flex-col max-stb:items-center justify-between px-[35px] max-tb:px-[15px] max-tb:mx-[16px]"
      >
        <div
          class="flex max-stb:flex-col gap-6 max-stb:gap-[14px] items-center max-stb:text-center"
        >
          <img src="/images/main-page/vopros.png" class="h-[40px] w-[35px]" />

          <div>
            <h3 class="text-[20px] main-font text-[#444] ">Остались вопросы? Свяжитесь с нами</h3>
            <p class="text-[16px] main-font text-[#444] font-light">
              И наши специалисты подробно на них ответят
            </p>
          </div>
        </div>

        <div
          class="max-stb:mt-[20px] py-[16px] px-[58px] bg-[#c74e1c] text-white rounded-xl main-font text-[18px]"
        >
          Задать вопрос
        </div>
      </div>
    </div>
  </main>

  <footer class="city-bg bg-right pt-[21px] pb-[45px] px-[260px] max-lp:px-[30px] max-tb:px-[15px]">
    <div class="flex justify-between items-center max-tb:justify-center">
      <div class="text-[36px] max-mb:text-[20px] max-mb:text-center text-[#444] font-light main-font">
        ЭТО ИНТЕРЕСНО (наши публикации)
      </div>

      <div class="flex items-center justify-center gap-[16px]" v-if="!isMobile">
        <a
          href="#"
          class="text-[#d35400] text-[16px] letter-spacing-[.05em] main-font font-semibold"
          >Показать все</a
        >

        <div class="flex gap-1">
          <ArrowIcon className="text-white drop-shadow-lg" />
          <ArrowIcon className="text-[#d35400] rotate-180" />
        </div>
      </div>
    </div>

    <div class="flex justify-between gap-[10px] pt-[21px]">
      <div class="max-w-[446px] max-mb:hidden">
        <img src="/images/footer/plov.jpg" />

        <div class="main-font text-[16px] text-[#444] font-light pt-6">
          <span class="text-[20px] font-bold">Плов</span> – одно из самых распространенных на
          Среднем Востоке блюд – получил наибольшее развитие в Узбекистане, где и была создана
          классическая технология приготовления...
        </div>

        <div class="main-font text-[14px] italic text-[#d35400] pt-[36px]">ПОДРОБНЕЕ...</div>
      </div>

      <div class="max-w-[446px] max-sm:hidden">
        <img src="/images/footer/plov.jpg" />

        <div class="main-font text-[16px] text-[#444] font-light pt-6">
          <span class="text-[20px] font-bold">Плов</span> – одно из самых распространенных на
          Среднем Востоке блюд – получил наибольшее развитие в Узбекистане, где и была создана
          классическая технология приготовления...
        </div>

        <div class="main-font text-[14px] italic text-[#d35400] pt-[36px]">ПОДРОБНЕЕ...</div>
      </div>

      <div class="max-w-[446px]">
        <img src="/images/footer/plov.jpg" />

        <div class="main-font text-[16px] text-[#444] font-light pt-6">
          <span class="text-[20px] font-bold">Плов</span> – одно из самых распространенных на
          Среднем Востоке блюд – получил наибольшее развитие в Узбекистане, где и была создана
          классическая технология приготовления...
        </div>

        <div class="main-font text-[14px] italic text-[#d35400] pt-[36px]">ПОДРОБНЕЕ...</div>
      </div>
    </div>

    <div class="flex max-stb:flex-col items-start mt-[170px] max-stb:mt-[80px] max-stb:px-[30px] max-mb:px-0">
      <img src="/images/footer-logo.png" class="max-w-[230px]" />

      <div
        class="flex max-mb:flex-col justify-between items-start main-font text-white text-[16px] px-[90px] max-stb:px-0 max-lp:px-[15px] max-stb:mt-[22px] w-full"
      >
        <div class="w-full max-mb:border-t-1 max-mb:border-[#ad4d26] max-mb:py-[8px]">
          <div class="flex justify-between">
            <h4 class="text-[18px] max-mb:text-[15px] font-bold">Компания</h4>

            <div class="relative mb:hidden">
                <div
                  class="w-[7px] h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-2"
                ></div>
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
                <div
                  class="w-[7px] h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-2"
                ></div>
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
                <div
                  class="w-[7px] h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-2"
                ></div>
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

        <div class="w-full max-mb:border-t-1 max-mb:border-b-1 max-mb:border-[#ad4d26] max-mb:py-[8px]">
          <div class="flex justify-between">
            <h4 class="text-[18px] max-mb:text-[15px] font-bold">Направления</h4>

            <div class="relative mb:hidden">
                <div
                  class="w-[7px] h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-2"
                ></div>
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

    <div class="mt-[36px] max-mb:mt-[8px] flex max-stb:flex-row-reverse max-mb:flex-col-reverse justify-between px-[90px] max-lp:px-[15px] max-mb:px-0">
      <div class="max-mb:mt-[35px] max-mb:mx-auto">
        <div class="text-[16px] text-white font-bold special-font max-mb:text-center">Мы в соцсетях</div>

        <div class="flex gap-[15px] mt-[24px]">
          <img src="/images/footer/fb2.png" class="h-[35px]" />
          <img src="/images/footer/inst2.png" class="h-[35px]" />
          <img src="/images/footer/tw2.png" class="h-[35px]" />
          <img src="/images/footer/yt2.png" class="h-[35px]" />
        </div>
      </div>

      <div class="">
        <h3 class="text-[16px] main-font text-[#f9f6ed] font-bold text-center max-mb:justify-self-start">
          Подпишитесь на нашу рассылку
        </h3>

        <div class="mt-[24px] max-mb:mt-[21px] flex gap-1">
          <input
            type="email"
            placeholder="Введите Ваш E-mail"
            class="py-[15px] pl-[56px] max-mb:pl-[11px] main-font text-[16px] max-mb:text-[15px] max-w-[374px] max-stb:w-full bg-[#d6d4ce]"
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

.lenin-bg {
  background-image: url('/images/main-page/Lenin-peak.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.city-bg {
  background-image: url('/images/city-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
