<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue'

import { ref } from 'vue'

const isMobile = ref(window.innerWidth < 1025)
</script>

<template>
  <main class="relative">
    <HeaderTrigger />

    <div class="lenin-bg max-mb:bg-top px-[260px] max-lp:px-[20px] max-sm:px-[15px]">
      <div class="flex justify-center pt-[23px] max-tb:pt-[19px] max-mb:pt-[17px]">
        <img src="/images/lenin/logo.png" class="w-[400px] max-mb:hidden" />
        <img src="/images/clear-logo.png" class="hidden max-mb:block" />
      </div>

      <div
        class="pt-[289px] max-tb:pt-[276px] max-mb:pt-[36px] max-sm:pt-[131px] text-white main-font max-tb:text-center"
      >
        <h1 class="font-semibold text-[72px] max-tb:text-[68px] max-mb:text-[36px] drop-shadow-lg">
          ПИК ЛЕНИНА
        </h1>
        <div class="text-[48px] max-tb:text-[42px] max-mb:text-[20px] drop-shadow-lg">
          Восхождения · Треккинг · Отдых на Памире
        </div>
      </div>

      <div
        class="pt-[252px] max-tb:pt-[105px] max-mb:pt-[26px] flex justify-between max-tb:items-center max-tb:gap-[103px] max-mb:gap-[28px] max-tb:flex-col pb-[86px] max-mb:pb-[26px] max-sm:pb-[52px]"
      >
        <div class="flex items-center gap-[32px]">
          <button
            class="px-[73px] max-mb:px-[52px] max-sm:px-[40px] py-4 border-2 border-white text-white uppercase font-bold max-sm:font-normal bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
          >
            Отправить запрос
          </button>

          <button
            class="max-mb:hidden px-[22px] py-5 border-2 border-white text-white font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
          >
            <img src="/images/lenin/facebook.png" />
          </button>
        </div>

        <div class="flex gap-4 max-tb:items-center">
          <img src="/images/calendar.png" />

          <div class="main-font text-white text-[20px] max-mb:text-[15px] w-[310px] max-tb:w-full">
            Наши лагеря будут открыты<br class="" />
            с 29 июня по 1 сентября 2021 г.
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-[260px] max-lp:px-[20px] max-mb:px-[18px] max-mb:text-[16px] pt-[115px] max-mb:pt-[74px] pb-[62px]"
    >
      <div class="max-tb:text-center">
        <h3 class="main-font text-[36px] max-mb:text-[18px] font-semibold text-[#444]">
          ВОСХОЖДЕНИЕ НА ПИК ЛЕНИНА (7134 м)
        </h3>
        <div class="main-font text-[36px] max-mb:text-[18px] font-light text-[#444]">
          Памир, Кыргызстан
        </div>
      </div>

      <div
        class="flex justify-between max-tb:flex-col gap-[77px] max-lp:gap-[30px] pt-[25px] max-lp:pt-[19px]"
      >
        <div class="w-[50%] max-tb:w-full">
          <div class="flex justify-end max-tb:justify-center gap-[27px] items-center">
            <img src="/icons/facebook-icon.png" class="max-h-[23px]" />
            <img src="/icons/twitter.png" class="max-h-[23px]" />
            <img src="/icons/WA.png" class="max-h-[23px]" />
            <img src="/icons/viber.png" class="max-h-[23px]" />
            <img src="/icons/tg.png" class="max-h-[23px]" />
          </div>

          <div
            class="main-font text-[17px] max-lp:text-[16px] text-[#444] pt-[30px] max-lp:pt-[20px] font-light"
          >
            <span class="font-semibold">Пик Ленина (7134.3 м)</span> - один из самых известных,
            доступных и наиболее часто посещаемых
            <span class="font-semibold">семитысячников Памира</span>, расположен на границе между
            Киргизией и Таджикистаном и входит в альпинистскую программу
            <span class="font-semibold">«Снежный барс»</span>. <br /><br />
            Мы организуем
            <span class="font-semibold">восхождение на пик Ленина по классическому маршруту</span> с
            севера через вершину <span class="font-semibold">Раздельная</span>. Несмотря на то, что
            <span class="font-semibold">технически маршрут прост</span> и не имеет крутых скальных
            или ледовых участков, нужно принимать во внимание значительную
            <span class="font-semibold">высоту</span> и суровые погодные условия, из-за чего
            <span class="font-semibold">восхождение на пик Ленина</span> относится к классу
            <span class="font-semibold">высотного альпинизма</span> и считается
            <span class="font-semibold">экстремальным видом спорта</span>. Для успешного восхождения
            участникам потребуется крепкое физическое и душевное здоровье, соответствующее
            снаряжение, грамотная акклиматизация, а также опыт восхождений на вершины не менее 5000
            м. <br /><br />
            Во время <span class="font-semibold">экспедиции на пик Ленина</span> вы сможете
            пользоваться богатой инфраструктурой наших собственных современных и
            <span class="font-semibold">комфортабельных базовых лагерей</span>, расположенных на
            разных высотах – 3600 м и 4400 м.
          </div>
        </div>

        <div class="w-[50%] max-tb:w-full max-stb:h-[238px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12342.14464178692!2d72.87759929999999!3d39.34409335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38befc513bcb0635%3A0xa7c9fe33c28cb1!2z0J_QuNC6INCb0LXQvdC40L3QsA!5e0!3m2!1sru!2s!4v1740508998582!5m2!1sru!2s"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <div
      class="flex justify-center items-center gap-[35px] flex-wrap max-tb:gap-[15px] bg-[#f9f6ed] py-[24px] text-[#444] main-font text-[18px] text-center"
    >
      <div
        class="bg-white px-[36px] max-tb:px-[18px] hover:text-[#c74e1c] w-[205px] max-stb:w-[139px] h-[180px] max-stb:h-[137px] flex flex-col justify-center"
      >
        <img src="/images/lenin/prices.png" class="mx-auto" />

        <div class="pt-[8px] main-font font-light text-[18px] max-stb:text-[14px]">Воспользуйтесь поиском туров</div>
      </div>

      <div
        class="bg-white px-[36px] max-tb:px-[18px] hover:text-[#c74e1c] w-[205px] max-stb:w-[139px] h-[180px] max-stb:h-[137px] flex flex-col justify-center"
      >
        <img src="/images/main-page/calendar2.png" class="mx-auto" />

        <div class="pt-[8px] main-font font-light text-[18px] max-stb:text-[14px]">Посмотрите календарь туров</div>
      </div>

      <div
        class="bg-white px-[36px] max-tb:px-[18px] hover:text-[#c74e1c] w-[205px] max-stb:w-[139px] h-[180px] max-stb:h-[137px] flex flex-col justify-center"
      >
        <img src="/images/main-page/review.png" class="mx-auto" />

        <div class="pt-[8px] main-font font-light text-[18px] max-stb:text-[14px]">Почитайте отзывы</div>
      </div>

      <div
        class="bg-white px-[36px] max-tb:px-[18px] hover:text-[#c74e1c] w-[205px] max-stb:w-[139px] h-[180px] max-stb:h-[137px] flex flex-col justify-center"
      >
        <img src="/images/main-page/mail.png" class="mx-auto" />

        <div class="pt-[8px] main-font font-light text-[18px]">Отправьте заявку</div>
      </div>
    </div>

    <div
      class="px-[260px] max-lp:px-[20px] max-sm:px-[16px] pt-[118px] max-tb:pt-[96px] max-mb:pt-[76px] main-font text-[#444] text-[36px] max-stb:text-[24px] max-mb:text-[20px] max-tb:text-center"
    >
      <div>
        <h2 class="font-semibold">ЦЕНОВЫЕ ПАКЕТЫ</h2>
        <div class="font-light">для программы восхождения на пик Ленина</div>
      </div>

      <div class="mt-[44px] max-tb:mt-[32px] max-stb:mt-[26px] mb-[44px] max-w-[1075px]">
        <div class="main-font text-light text-[18px] max-stb:text-[17px] max-mb:text-[16px] text-[#444]">
          Здесь вы можете выбрать один из <span class="font-semibold">12 ценовых пакетов</span>,
          которые различаются по набору включенных услуг и, соответственно, по стоимости – от самого
          <span class="font-semibold">бюджетного </span>
          <span class="text-[#c74e1c]">Супер Эконом</span> варианта до наиболее
          <span class="font-semibold">комфортного </span>
          <span class="text-[#c74e1c]">VIP-пакета</span>.
        </div>

        <div class="mt-[30px] text-[18px]">
          Каждый сможет подобрать для себя оптимальный формат путешествия!
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 max-tb:grid-cols-2 max-mb:grid-cols-1">
      <div class="relative">
        <img src="/images/lenin/basic.jpg" class="object-cover w-full" />

        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center main-font"
        >
          <div class="text-[40px] max-mb:text-[24px] font-light">БАЗОВЫЙ</div>
          <div class="text-[24px] max-mb:text-[20px] font-bold">9999 USD</div>
        </div>
      </div>

      <div class="relative">
        <img src="/images/lenin/basic.jpg" class="object-cover w-full" />

        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center main-font"
        >
          <div class="text-[40px] max-mb:text-[24px] font-light">БАЗОВЫЙ</div>
          <div class="text-[24px] max-mb:text-[20px] font-bold">9999 USD</div>
        </div>
      </div>

      <div class="relative">
        <img src="/images/lenin/basic.jpg" class="object-cover w-full" />

        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center main-font"
        >
          <div class="text-[40px] max-mb:text-[24px] font-light">БАЗОВЫЙ</div>
          <div class="text-[24px] max-mb:text-[20px] font-bold">9999 USD</div>
        </div>
      </div>
    </div>

    <div class="bg-[#f9f6ed] pt-[37px] px-[260px] max-lp:px-[20px] pb-[110px]">
      <div
        class="bg-white flex max-mb:flex-col px-[50px] max-tb:px-[20px] justify-between py-[16px] gap-[134px] max-tb:gap-[60px] items-center"
      >
        <div class="main-font font-light text-[17px] max-tb:text-[16px] text-[#444] flex-1">
          <span class="font-semibold text-[#c74e1c]">ВАЖНО!</span> В каждый пакет включен переезд
          <span class="font-semibold">Ош – Базовый лагерь – Ош</span> на комфортабельном транспорте,
          который мы организуем <span class="font-semibold">в любые удобные для вас даты</span> в
          период с 29 июня по 1 сентября 2021.
        </div>

        <div class="flex-1 main-font font-light text-[17px] max-tb:text-[16px] text-[#444]">
          <div class="font-semibold text-[#c74e1c]">Время отправления транспорта:</div>

          <ul class="list-disc list-inside pl-[20px] max-sm:pl-0">
            <li><span class="font-semibold">Ош – Базовый лагерь:</span> утром в 06:00;</li>
            <li>
              <span class="font-semibold">Базовый лагерь – Ош:</span> первая половина дня (время
              отправления уточните у начальника Базового лагеря накануне выезда).
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mx-[88px] max-tb:mx-[20px] max-stb:mx-[18px] max-mb:mx-[8px] mt-[34px] border-t-1 border-[#888] pt-[26px] flex justify-between items-center"
      >
        <div class="main-font font-bold text-[17px] max-stb:text-[16px] text-[#c74e1c]">
          Сколько стоит экспедиция на пик Ленина и из чего складывается цена
        </div>

        <div class="">
          <img src="/images/lenin/cross.svg" class="w-[24px]" />
        </div>
      </div>

      <div
        class="grid grid-cols-3 max-tb:grid-cols-2 max-mb:grid-cols-1 mx-[88px] max-lp:mx-[20px] mt-[50px] gap-y-[38px] gap-x-[80px]"
      >
        <div class="flex items-center gap-[24px]">
          <div class="bg-white rounded-[90px] w-[97px] h-[97px] flex justify-center items-center">
            <img src="/images/lenin/passport.png" />
          </div>

          <div class="main-font font-light text-[18px] text-[#444] flex-1">
            Оформление разрешительных документов
          </div>
        </div>

        <div class="flex items-center gap-[24px]">
          <div class="bg-white rounded-[90px] w-[97px] h-[97px] flex justify-center items-center">
            <img src="/images/lenin/bus.png" />
          </div>

          <div class="main-font font-light text-[18px] text-[#444] flex-1">
            Дорога до Базового лагеря и обратно
          </div>
        </div>

        <div class="flex items-center gap-[24px]">
          <div class="bg-white rounded-[90px] w-[97px] h-[97px] flex justify-center items-center">
            <img src="/images/lenin/food1.png" />
          </div>

          <div class="main-font font-light text-[18px] text-[#444] flex-1">
            Проживание и питание в каждый из дней экспедиции
          </div>
        </div>

        <div class="flex items-center gap-[24px]">
          <div class="bg-white rounded-[90px] w-[97px] h-[97px] flex justify-center items-center">
            <img src="/images/lenin/alpinist.png" />
          </div>

          <div class="main-font font-light text-[18px] text-[#444] flex-1">
            Услуги горного гида и портеров
          </div>
        </div>

        <div class="flex items-center gap-[24px]">
          <div
            class="bg-white rounded-[90px] w-[97px] h-[97px] flex justify-center pl-[15px] items-center"
          >
            <img src="/images/lenin/ledorub.png" />
          </div>

          <div class="main-font font-light text-[18px] text-[#444] flex-1">Аренда снаряжения</div>
        </div>

        <div class="flex items-center gap-[24px]">
          <div class="bg-white rounded-[90px] w-[97px] h-[97px] flex justify-center items-center">
            <img src="/images/lenin/services.png" />
          </div>

          <div class="main-font font-light text-[18px] text-[#444] flex-1">
            Интернет в базовых лагерях, баня/душ, услуги прачечной, камера хранения и т.д.
          </div>
        </div>
      </div>

      <div
        class="flex items-center gap-3 mt-[40px] mx-[88px] max-tb:mx-[20px] max-mb:mx-[8px] pb-[14px] border-b-1 border-[#888]"
      >
        <img src="/images/lenin/download2.png" />
        <div class="main-font font-semibold text-[16px] max-mb:text-[15px] text-[#c74e1c]">
          Прайс-лист на дополнительные и отдельные услуги в Базовых лагерях под пиком Ленина
        </div>
      </div>
    </div>

    <div
      class="w-full relative flex items-stretch bg-linear-to-b max-stb:hidden from-[#2778c2] to-[#0079c6]"
    >
      <div class="w-[50%] self-center">
        <video src="/videos/camp.mp4" controls class="h-full w-full object-fill"></video>
      </div>

      <div
        class="flex flex-col self-center h-full relative overflow-hidden px-[120px] max-lp:px-[50px] max-tb:px-[30px] max-tb:py-[32px] justify-center items-start w-[50%]"
      >
        <h2 class="main-font font-semibold text-[36px] max-lp:text-[20px] text-white">
          ВОСХОЖДЕНИЕ<br class="max-lp:hidden" />
          НА ПИК ЛЕНИНА
        </h2>

        <div
          class="main-font font-light text-white text-[24px] max-lp:text-[16px] mt-[55px] max-lp:mt-[16px]"
        >
          Подъем на вершину пика Ленина (7134 м) и фантастические панорамы вокруг
        </div>

        <div
          class="main-font font-light text-white text-[16px] max-lp:text-[15px] mt-[47px] max-lp:mt-[16px]"
        >
          Автор: Алексей Колганов
        </div>

        <button
          class="px-[16px] py-2 border-2 border-white text-white mt-[47px] max-tb:mt-[43px] bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[16px] font-light"
        >
          Перейти в видеогалерею »»
        </button>
      </div>
      <div class="absolute bottom-0 right-0">
        <img src="/images/lenin/ornament.png" />
      </div>
    </div>

    <div class="hidden max-stb:flex bg-[#2778c2] relative flex-col items-center">
      <div class="text-[20px] max-mb:text-[16px] text-white main-font font-semibold pt-[26px]">
        ВОСХОЖДЕНИЕ НА ПИК ЛЕНИНА
      </div>

      <div class="w-full pt-[20px] z-1">
        <video src="/videos/camp.mp4" controls class="w-full"></video>
      </div>

      <div class="flex max-mb:flex-col max-mb:gap-[20px] justify-between items-center w-full px-[18px] py-[25px]">
        <div class="w-[50%] max-mb:w-full text-white main-font font-light text-[16px]">
          Подъем на вершину пика Ленина (7134 м) и фантастические панорамы вокруг
        </div>

        <button
          class="px-[16px] py-2 border-2 border-white text-white bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[16px] font-light"
        >
          Перейти в видеогалерею »»
        </button>
      </div>

      <div class="absolute bottom-0 right-0 max-mb:w-[150px]">
        <img src="/images/lenin/ornament.png" />
      </div>
    </div>

    <div class="px-[15%] max-lp:px-[20px] pt-[95px] max-tb:hidden">
      <div class="flex items-stretch relative bg-[#e8aa3b]">
        <div
          class="relative w-[50%] main-font flex flex-col items-start justify-center text-white pt-[26px]"
        >
          <span
            class="ml-[30px] absolute top-6 left-2 text-[24px] max-lp:text-[22px] border-b-1 border-white"
            >8 гарантированных дат</span
          >

          <div class="pl-[148px] max-lp:pl-[90px] pb-[43px] pt-[67px]">
            <h3 class="font-bold text-[36px] max-lp:text-[32px]">КУРОРТНЫЙ ПАМИР</h3>
            <div class="mt-[22px] text-[22px] max-lp:text-[20px]">
              Активный семейный отдых в горах Памира Приключенческий тур с треккингом
            </div>

            <div class="text-[15px] font-light mt-[22px]">
              Кыргызстан, горы Памира <br />8 дней / 7 ночей
            </div>

            <button
              class="px-[16px] py-2 border-2 border-white text-white mt-[47px] bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[16px] font-light"
            >
              Подробнее »»
            </button>
          </div>
        </div>

        <div class="w-[50%]">
          <img src="/images/lenin/pamir-group.jpg" class="h-full w-full object-cover" />
        </div>

        <div class="absolute top-[50%] translate-y-[-50%] left-2">
          <img src="/images/lenin/left-arrow.png" />
        </div>

        <div class="absolute top-[50%] translate-y-[-50%] right-2">
          <img src="/images/lenin/right-arrow.png" />
        </div>
      </div>
    </div>

    <div class="mt-[96px] max-tb:mt-[79px] mb-[74px] flex justify-center">
      <div
        class="w-[50%] max-lp:w-[75%] max-tb:w-full max-tb:mx-[10px] flex max-stb:flex-col max-stb:items-center justify-between border-1 border-[#888] px-[35px] max-tb:px-[20px] py-[22px]"
      >
        <div class="flex max-stb:flex-col gap-6 max-stb:gap-[14px] items-center">
          <img src="/images/main-page/vopros.png" class="h-[40px] w-[35px]" />

          <div class="max-stb:text-center">
            <h3 class="text-[20px] main-font text-[#444]">Остались вопросы? Свяжитесь с нами</h3>
            <p class="text-[16px] main-font text-[#444] font-light">
              И наши специалисты подробно на них ответят
            </p>
          </div>
        </div>

        <div
          class="py-[16px] max-stb:mt-[19px] px-[58px] bg-[#c74e1c] text-white rounded-lg main-font text-[18px]"
        >
          Задать вопрос
        </div>
      </div>
    </div>
  </main>

  <footer
    class="mount-bg bg-right-bottom max-md:bg-top pt-[21px] pb-[45px] px-[260px] max-lp:px-[30px] max-tb:px-[15px]"
  >
    <div class="flex justify-between items-center max-tb:justify-center">
      <div
        class="text-[36px] max-mb:text-[20px] max-mb:text-center text-[#444] font-light main-font"
      >
        ЭТО ИНТЕРЕСНО
      </div>
    </div>

    <div class="flex items-center max-mb:flex-col justify-between gap-[10px] pt-[21px]">
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
          экологическая акция «Чистый снег »
        </div>
      </router-link>
    </div>

    <div
      class="flex gap-[40px] max-tb:gap-[10px] max-stb:gap-[5px] justify-betwen max-stb:flex-col items-start mt-[170px] max-stb:mt-[80px] max-mb:mt-[57px] max-stb:px-[10px] max-mb:px-0"
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
</template>

<style scoped>
.lenin-bg {
  background-image: url('/images/lenin/bg.jpg');
  background-size: cover;
}

.mount-bg {
  background-image: url('/images/bg-mount.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
