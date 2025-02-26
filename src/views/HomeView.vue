<script setup>
import UkazIcon from '@/assets/icons/UkazIcon.vue'
import MapIcon from '@/assets/icons/MapIcon.vue'
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'
import HeaderTrigger from '@/components/HeaderTrigger.vue';
</script>

<template>
  <main class="relative">
    <HeaderTrigger />
    <div class="hero-bg">
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
            <div
              class="absolute bottom-0 right-0 bg-[#d35400] text-white p-[10px] maint-font text-[16px]"
            >
              2250 USD
            </div>
          </div>

          <div class="mt-[30px] flex-1">
            <h3 class="text-[20px] letter-spacing-[.05em] text-[#444444] main-font font-semibold">
              Путешествие по Центральной Азии
            </h3>
            <p
              class="text-[16px] letter-spacing-[.05em] text-[#444444] main-font font-[350] mt-[16px]"
            >
              Тур включает посещение основных туристических достопримечательностей и интересных мест
              в каждой стране
            </p>
          </div>

          <div class="mt-[36px]">
            <a href="#" class="font-main text-[#d35400] text-[14px] letter-spacing-[.05em] italic"
              >ПОДРОБНЕЕ...</a
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

          <div class="mt-[30px] flex-1">
            <h3 class="text-[20px] letter-spacing-[.05em] text-[#444444] main-font font-semibold">
              Путешествие по Центральной Азии
            </h3>
            <p
              class="text-[16px] letter-spacing-[.05em] text-[#444444] main-font font-[350] mt-[16px]"
            >
              Тур включает посещение основных туристических достопримечательностей и интересных мест
              в каждой стране
            </p>
          </div>

          <div class="mt-[36px]">
            <a href="#" class="font-main text-[#d35400] text-[14px] letter-spacing-[.05em] italic"
              >ПОДРОБНЕЕ...</a
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

          <div class="mt-[30px] flex-1">
            <h3 class="text-[20px] letter-spacing-[.05em] text-[#444444] main-font font-semibold">
              Путешествие по Центральной Азии
            </h3>
            <p
              class="text-[16px] letter-spacing-[.05em] text-[#444444] main-font font-[350] mt-[16px]"
            >
              Тур включает посещение основных туристических достопримечательностей и интересных мест
              в каждой стране
            </p>
          </div>

          <div class="mt-[36px]">
            <a href="#" class="font-main text-[#d35400] text-[14px] letter-spacing-[.05em] italic"
              >ПОДРОБНЕЕ...</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div
        class="pl-[260px] pt-[120px] main-font text-[20px] letter-spacing-[.05em] font-[350] text-[#444444] w-[1340px]"
      >
        Туроператор «Central Asia Travel» организует экскурсионные туры по Великому шелковому пути и
        его отдельным участкам и городам – Самарканду, Бухаре, Хиве; приключенческие туры по горам
        Памира и Тянь-Шаня; семейный и пляжный отдых, а также MICE-услуги и деловые поездки в
        Среднюю Азию. Чтобы решить, куда поехать отдыхать, посмотрите наши наиболее популярные туры:
      </div>
    </div>

    <div class="bg-white flex justify-between items-center px-[260px] pt-[60px] pb-[30px]">
      <div>
        <h2 class="text-[36px] main-font font-[350] text-[#444444]">ПОПУЛЯРНЫЕ ТУРЫ</h2>
      </div>

      <div class="flex items-center justify-center gap-[16px]">
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

    <div
      class="bg-[#eb9532] flex justify-center items-center text-white main-font text-[16px] letter-spacing-[.5em] font-semibold"
    >
      <div class="px-[20px] py-[10px] hover:text-[#d35300] cursor-pointer">ЭКСКУРСИОННЫЕ</div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] cursor-pointer"
      >
        ТЕМАТИЧЕСКИЕ
      </div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] cursor-pointer"
      >
        НОВОГОДНИЕ
      </div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] cursor-pointer"
      >
        ПРИКЛЮЧЕНЧЕСКИЕ
      </div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] cursor-pointer"
      >
        АЛЬПИНИЗМ
      </div>
      <div
        class="border-l-[1px] border-white px-[20px] py-[10px] hover:text-[#d35300] cursor-pointer"
      >
        ТРЕККИНГ
      </div>
    </div>

    <div class="flex justify-center gap-8 items-center pt-[50px] pb-[70px]">
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
      class="flex justify-center items-center gap-[35px] bg-[#f9f6ed] py-[10px] text-[#444] main-font text-[18px] text-center"
    >
      <div
        class="bg-white px-[36px] hover:text-[#c74e1c] w-[205px] h-[180px] flex flex-col justify-center"
      >
        <img src="/images/main-page/lupa.png" class="mx-auto" />

        <div class="pt-[8px] w-[135px]">Воспользуйтесь поиском туров</div>
      </div>

      <div class="px-[36px] w-[225px] h-[180px] flex flex-col justify-center">
        <img src="/images/main-page/calendar2.png" class="mx-auto" />

        <div class="pt-[8px] w-[150px]">Посмотрите календарь туров</div>
      </div>

      <div class="px-[36px] w-[205px] h-[180px] flex flex-col justify-center">
        <img src="/images/main-page/review.png" class="mx-auto" />

        <div class="pt-[8px] w-[135px]">Почитайте отзывы</div>
      </div>

      <div class="px-[36px] w-[205px] h-[180px] flex flex-col justify-center">
        <img src="/images/main-page/mail.png" class="mx-auto" />

        <div class="pt-[8px] w-[135px]">Отправьте заявку</div>
      </div>
    </div>

    <div class="px-[260px] pt-[123px]">
      <h2 class="text-[#444] main-font text-[36px]">КУДА ПОЕДЕМ</h2>
    </div>

    <div class="w-full grid grid-cols-3 pt-[26px]">
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

    <div class="pt-[116px] px-[260px] flex justify-between">
      <h2 class="main-font font-light text-[36px] text-[#444]">
        ПОПУЛЯРНОЕ: места, где следует побывать
      </h2>

      <div class="flex gap-1">
        <ArrowIcon className="text-white drop-shadow-lg" />
        <ArrowIcon className="text-[#d35400] rotate-180" />
      </div>
    </div>

    <div class="pt-[26px] px-[260px] flex justify-between">
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

    <div class="pt-[118px] w-full">
      <div class="w-full lenin-bg pt-[265px] px-[260px] pb-[96px]">
        <div>
          <h1 class="main-font font-semibold text-[72px] text-white">ПИК ЛЕНИНА</h1>
          <h2 class="main-font text-[48px] text-white">Восхождения · Треккинг · Отдых на Памире</h2>
        </div>

        <div class="pt-[178px] flex items-end gap-[46px]">
          <a href="/lenin"
            class="px-[111px] py-4 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px] letter-spacing-[.25em]"
          >
            Подробнее
        </a>

          <div class="flex gap-[24px]">
            <img src="/images/calendar.png" />

            <div class="main-font text-white text-[20px]">
              Наши лагеря будут открыты <br />
              с 28 июня по 7 сентября 2025 г.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-[75px] px-[260px] main-font text-[20px] text-[#444] font-light">
      <span class="font-semibold">Пик Ленина</span> (7134.3 м) – один из самых известных, доступных
      и наиболее посещаемых семитысячников Памира, расположен на границе между Кыргызстаном и
      Таджикистаном и входит в альпинистскую программу «Снежный барс». Мы располагаем собственными
      базовыми лагерями «Поляна Эдельвейсов» на высоте 3600 м и «Солнечный» 4400 м, где гарантируем
      комфорт, безопасность, чистоту, богатое меню и обслуживание на высоте.
    </div>

    <div class="pt-[135px] px-[260px]">
      <div class="flex justify-center gap-[101px]">
        <div class="pt-[46px] pl-[46px] w-[550px] relative">
          <div class="flex gap-[32px]">
            <img src="/images/main-page/mice1.svg" class="w-[71px]" />
            <h3 class="main-font text-[36px] text-[#444] w-[400px]">
              M.I.C.E. В УЗБЕКИСТАНЕ, КЫРГЫЗСТАНЕ, КАЗАХСТАНЕ
            </h3>
          </div>

          <div class="main-font font-light text-[18px] pt-[32px]">
            Любая численность группы, любое наполнение программы! Компания
            <b>Central Asia Travel</b> предлагает полный комплекс услуг по организации M.I.C.E. в
            Средней Азии
          </div>

          <div class="pt-[68px] flex gap-1 justify-center">
            <ArrowIcon className="text-white drop-shadow-lg" />
            <ArrowIcon className="text-[#d35400] rotate-180" />
          </div>

          <div
            class="absolute top-0 left-0 w-[368px] h-[241px] border-l-1 border-t-1 border-[#444]"
          ></div>
        </div>

        <div class="w-[704px]">
          <img src="/images/main-page/mice.jpg" class="w-full" />
        </div>
      </div>
    </div>

    <div class="pt-[82px] pb-[95px]">
      <div
        class="border-1 border-[#444] py-[21px] mx-auto w-[930px] flex justify-between px-[35px]"
      >
        <div class="flex gap-6 items-center">
          <img src="/images/main-page/vopros.png" class="h-[40px] w-[35px]" />

          <div>
            <h3 class="text-[20px] main-font text-[#444]">Остались вопросы? Свяжитесь с нами</h3>
            <p class="text-[16px] main-font text-[#444] font-light">
              И наши специалисты подробно на них ответят
            </p>
          </div>
        </div>

        <div class="py-[16px] px-[58px] bg-[#c74e1c] text-white rounded-xl main-font text-[18px]">
          Задать вопрос
        </div>
      </div>
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

.lenin-bg {
    background-image: url('/images/main-page/Lenin-peak.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
