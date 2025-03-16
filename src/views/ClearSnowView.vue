<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue'
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'

import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isMobile = ref(window.innerWidth < 1025)

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<template>
  <main class="relative">
    <div class="clear-snow-bg bg-center relative pb-[25px]">
      <div class="pt-[21px] flex justify-center">
        <img src="/images/clearsnow/logo.png" class="max-lp:hidden" />
        <img src="/images/logo.png" class="max-lp:block hidden max-mb:w-[177px] max-sm:hidden" />
        <img src="/images/logo-mob-2.png" class="hidden max-sm:block" />
      </div>

      <div
        class="pt-[150px] max-stb:pt-[46px] text-white main-font px-[260px] max-lp:px-[15px] max-tb:text-center"
      >
        <h1
          class="font-semibold text-[72px] max-tb:text-[48px] max-stb:text-[32px] max-mb:text-[28px] drop-shadow-lg"
        >
          ЭКОЛОГИЧЕСКАЯ АКЦИЯ
        </h1>
        <div
          class="text-[48px] max-tb:text-[30px] max-stb:text-[24px] max-mb:text-[18px] drop-shadow-lg max-tb:mt-[46px] max-stb:mt-0"
        >
          «Чистый снег»
        </div>

        <div class="hidden max-sm:block mt-[25px]">
          <img src="/images/clearsnow/clear-snow_logo.png" class="w-[94px] h-[43px] mx-auto" />
        </div>

        <div
          class="flex items-center max-tb:justify-center gap-[32px] pt-[118px] max-stb:pt-[34px] max-mb:hidden"
        >
          <button
            class="px-[73px] py-4 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
          >
            Отправить запрос
          </button>

          <button
            class="px-[22px] max-stb:hidden py-5 border-2 border-white text-white font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
          >
            <img src="/images/lenin/facebook.png" />
          </button>
        </div>

        <div class="pt-[35px] max-mb:w-[70%] max-mb:w-full max-mb:mx-auto flex justify-end max-tb:justify-center">
          <div class="flex gap-4 max-tb:items-center">
            <img src="/images/calendar.png" />

            <div
              class="main-font text-white text-[20px] max-stb:text-[15px] max-mb:text-left w-[300px] max-tb:w-full"
            >
              Наши лагеря будут открыты<br class="max-tb:hidden" />
              с 29 июня по 1 сентября 2021 г.
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute top-20 max-mb:top-10 right-10 max-mb:right-5 max-tb:w-[191px] max-stb:w-[131px] max-stb:h-[62px] max-sm:hidden"
      >
        <img src="/images/clearsnow/clear-snow_logo.png" />
      </div>
    </div>

    <div class="px-[260px] max-lp:px-[15px] maxt-tb:px-[10px] pt-[29px] pb-[100px] max-mb:pb-[50px]">
      <button @click="goBack" class="flex gap-[12px] cursor-pointer">
        <img src="/images/clearsnow/arrow.svg" class="w-[15px]" />
        <div class="main-font text-[15px] max-sm:text-[11px] text-[#888]">... (Возврат на предыдущую страницу)</div>
      </button>

      <div
        class="main-font text-[36px] max-tb:text-[32px] max-stb:text-[24px] text-[#444] mt-[75px] max-stb:mt-[55px] max-tb:text-center"
      >
        <h2 class="font-semibold">ЭКОЛОГИЧЕСКАЯ АКЦИЯ «ЧИСТЫЙ СНЕГ»</h2>
        <div class="font-light">
          Ежегодное экологическое мероприятие в районе пика Ленина, Памир
        </div>
      </div>

      <div class="mt-[25px] flex justify-end max-tb:justify-center items-center gap-[27px]">
        <img src="/icons/facebook-icon.png" class="h-[23px]" />
        <img src="/icons/twitter.png" class="h-[23px]" />
        <img src="/icons/WA.png" class="h-[23px]" />
        <img src="/icons/viber.png" class="h-[23px]" />
        <img src="/icons/tg.png" class="h-[23px]" />
      </div>

      <div class="flex mt-[25px] items-center max-tb:flex-col max-tb:gap-[50px]">
        <div class="w-[50%] max-tb:w-full">
          <img src="/images/clearsnow/eco.jpg" class="h-[auto] w-full" />
        </div>

        <div class="w-[50%] max-tb:w-full ml-[71px] max-tb:ml-0 main-font font-light text-[#444]">
          <div class="text-[22px] max-tb:text-[20px] max-stb:text-[18px]">
            <span class="font-semibold">«Чистый снег»</span> – это
            <span class="font-semibold">традиционная</span> добровольная экологическая акция,
            которая проводится <span class="font-semibold">под руководством нашей Компании</span> с
            2014 года. Ежегодно наши сотрудники, а также желающие из числа приехавших туристов на
            протяжении всего летнего сезона собирают мусор не только с ледника пика Ленина, но и с
            высотных склонов вокруг <span class="text-[#c74e1c]">Лагеря 2 (5300 м)</span> и
            <span class="text-[#c74e1c]">Лагеря 3 (6100 м)</span>. Собранный мусор в обязательном
            порядке спускается вниз и отправляется на утилизацию.
          </div>

          <div class="mt-[25px] text-[17px] max-tb:text-[16px]">
            Каждый год к нашей Акции на добровольной основе присоединяются многие туристы из разных
            стран мира: России, Непала, Украины, Германии, Дании, Польши, Испании, Бразилии, Сербии,
            Хорватии и др. В среднем за сезон мы своими руками спускаем 200 – 400 кг собранного
            высотного мусора – объем зависит от числа присоединившихся волонтеров. В качестве
            небольшой награды каждому участнику Акции мы вручаем символический приз – футболку с
            логотипом мероприятия.
          </div>

          <div
            class="hidden max-mb:block main-font text-[#c74e1c] cursor-pointer mt-[25px] text-[14px] font-bold"
          >
            Читать дальше...
          </div>
        </div>
      </div>

      <div
        class="px-[228px] max-lp:px-[50px] max-tb:px-0 mt-[54px] max-tb:mt-[20px] main-font text-[16px] text-[#444] font-light max-mb:hidden"
      >
        <p>
          К сожалению, многие альпинисты продолжают оставлять за собой мусор, который загрязняет
          первозданную красоту Памирских гор, ухудшает экологическую обстановку и способствует более
          быстрому таянию ледника. Мы не можем спокойно смотреть на это, поэтому намерены продолжать
          делать все возможное, чтобы район пик Ленина оставался чистым.
        </p>

        <p class="mt-[25px] text-[17px] font-semibold">
          Призываем всех альпинистов и туристов проявлять осознанность, убирать за собой мусор, а
          желающих – присоединиться к нашей Акции и внести свой посильный вклад в процесс очищения
          склонов пика Ленина от мусора.
        </p>

        <p class="mt-[25px]">
          Акция проходит ежегодно, в период функционирования наших Базовых лагерей. Чтобы
          присоединиться к Акции, обратитесь к любому сотруднику нашего Базового лагеря или Лагеря
          1, они подскажут, как это сделать.
        </p>

        <p class="mt-[25px]">
          Мы верим, что со временем каждый альпинист и турист будет придерживаться принципа: «Чисто
          не там, где убирают, а там, где не мусорят».
        </p>

        <p class="mt-[25px]">
          Ниже вы можете найти фотографии и отчеты о проведенных экологических акциях «Чистый снег»
          за предыдущие годы.
        </p>
      </div>

      <div class="px-[228px] max-lp:px-[50px] max-tb:px-0 mt-[80px]">
        <div class="bg-white flex max-sm:flex-col max-sm:gap-[11px] justify-between items-center max-sm:items-end">
          <div class="max-mb:w-[75%] max-sm:w-full">
            <h2 class="text-[20px] max-sm:text-[15px] main-font uppercase text-[#444444]">
              Фотографии экологической акции «Чистый снег»
            </h2>
          </div>

          <div class="flex items-center justify-center max-sm:justify-end gap-[16px]">
            <a
              href="#"
              class="text-[#d35400] text-[16px] max-mb:text-[14px] w-full main-font font-semibold"
              >Показать все</a
            >

            <div class="flex gap-1" v-if="!isMobile">
              <ArrowIcon className="text-white drop-shadow-lg w-[31px]" />
              <ArrowIcon className="text-[#d35400] rotate-180 w-[31px]" />
            </div>
          </div>
        </div>

        <div class="flex justify-between mt-[20px] gap-[10px]">
          <div class="w-full">
            <img src="/images/clearsnow/collage.jpg" class="w-full h-full" />
          </div>

          <div class="w-full max-mb:hidden">
            <img src="/images/clearsnow/collage.jpg" class="w-full h-full" />
          </div>

          <div class="w-full max-stb:hidden">
            <img src="/images/clearsnow/collage.jpg" class="w-full h-full" />
          </div>
        </div>

        <div class="gap-1 hidden max-mb:flex max-mb:mt-[15px] justify-center" v-if="isMobile">
          <ArrowIcon className="text-white drop-shadow-lg w-[31px]" />
          <ArrowIcon className="text-[#d35400] rotate-180 w-[31px]" />
        </div>
      </div>
    </div>

    <div class="w-full flex max-stb:hidden">
      <div class="w-[50%]">
        <video src="/videos/camp.mp4" controls class="h-full w-full object-cover"></video>
      </div>

      <div
        class="flex-1 flex flex-col items-start justify-center relative bg-linear-to-b from-[#2778c2] to-[#0079c6] overflow-hidden px-[120px] max-lp:px-[50px] max-tb:px-[20px] pt-[140px] max-lp:pt-[50px] pb-[50px] w-[50%]"
      >
        <h2 class="main-font font-semibold text-[36px] max-lp:text-[20px] text-white">
          ПОДЪЕМ В ЛАГЕРЬ 1 (4400 м)
        </h2>

        <div
          class="main-font font-light text-white text-[24px] max-lp:text-[16px] mt-[55px] max-lp:mt-[20px]"
        >
          Путь в Лагерь 1 через перевал Путешественников, переход вдоль морены, переправа через
          бурную речку и огромный ледник Ленина с его зияющими трещинами и ослепительным блеском.
        </div>

        <div
          class="main-font font-light text-white text-[16px] max-lp:text-[15px] mt-[47px] max-lp:mt-[20px]"
        >
          Автор: Алексей Колганов
        </div>

        <button
          class="px-[16px] py-2 border-2 border-white text-white mt-[47px] bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[16px] font-light"
        >
          Перейти в видеогалерею »»
        </button>

        <div class="absolute bottom-0 right-0">
          <img src="/images/lenin/ornament.png" />
        </div>
      </div>
    </div>

    <div class="hidden max-stb:flex bg-[#2778c2] relative flex-col items-center">
      <div class="text-[20px] max-mb:text-[16px] text-white main-font font-semibold pt-[26px]">
        ПОДЪЕМ В ЛАГЕРЬ 1 (4400 м)
      </div>

      <div class="w-full pt-[20px] z-1">
        <video src="/videos/camp.mp4" controls class="w-full"></video>
      </div>

      <div
        class="flex max-mb:flex-col max-mb:gap-[20px] justify-between items-center w-full px-[15px] py-[25px]"
      >
        <div class="w-[50%] max-mb:w-full text-white main-font font-light text-[16px]">
          Путь в Лагерь 1 через первал Путешественников, переход вдоль...
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

    <HeaderTrigger />
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
          экологическая акция <br>«чистый снег»
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
.clear-snow-bg {
  background-image: url('/images/clearsnow/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.mount-bg {
  background-image: url('/images/mount-bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
