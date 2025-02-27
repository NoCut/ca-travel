<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue'
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'
</script>

<template>
  <main class="relative">
    <div class="clear-snow-bg pb-[25px]">
      <div class="pt-[21px] flex justify-center">
        <img src="/images/clearsnow/logo.png" class="" />
      </div>

      <div class="pt-[150px] text-white main-font px-[260px]">
        <h1 class="font-semibold text-[72px] drop-shadow-lg">ЭКОЛОГИЧЕСКАЯ АКЦИЯ</h1>
        <div class="text-[48px] drop-shadow-lg">«Чистый снег»</div>

        <div class="flex items-center gap-[32px] pt-[118px]">
          <button
            class="px-[73px] py-4 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
          >
            Отправить запрос
          </button>

          <button
            class="px-[22px] py-5 border-2 border-white text-white font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
          >
            <img src="/images/lenin/facebook.png" />
          </button>
        </div>

        <div class="pt-[35px] flex justify-end">
          <div class="flex gap-4">
            <img src="/images/calendar.png" />

            <div class="main-font text-white text-[20px] w-[300px]">
              Наши лагеря будут открыты<br />с 29 июня по 1 сентября 2021 г.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-[260px] pt-[29px] pb-[100px]">
      <div class="flex gap-[12px]">
        <img src="/images/clearsnow/arrow.svg" class="w-[15px]" />
        <div class="main-font text-[15px] text-[#444]">... (Возврат на предыдущую страницу)</div>
      </div>

      <div class="main-font text-[36px] text-[#444] mt-[75px]">
        <h2 class="font-semibold">ЭКОЛОГИЧЕСКАЯ АКЦИЯ «ЧИСТЫЙ СНЕГ»</h2>
        <div class="font-light">
          Ежегодное экологическое мероприятие в районе пика Ленина, Памир
        </div>
      </div>

      <div class="mt-[25px] flex justify-end items-center gap-[27px]">
        <img src="/icons/facebook-icon.png" class="h-[23px]" />
        <img src="/icons/twitter.png" class="h-[23px]" />
        <img src="/icons/WA.png" class="h-[23px]" />
        <img src="/icons/viber.png" class="h-[23px]" />
        <img src="/icons/tg.png" class="h-[23px]" />
      </div>

      <div class="flex mt-[25px] items-center">
        <div class="w-[50%]">
          <img src="/images/clearsnow/eco.jpg" class="h-[auto]" />
        </div>

        <div class="w-[50%] ml-[71px] main-font font-light text-[#444]">
          <div class="text-[22px]">
            <span class="font-semibold">«Чистый снег»</span> – это
            <span class="font-semibold">традиционная</span> добровольная экологическая акция,
            которая проводится <span class="font-semibold">под руководством нашей Компании</span> с
            2014 года. Ежегодно наши сотрудники, а также желающие из числа приехавших туристов на
            протяжении всего летнего сезона собирают мусор не только с ледника пика Ленина, но и с
            высотных склонов вокруг <span class="text-[#c74e1c]">Лагеря 2 (5300 м)</span> и
            <span class="text-[#c74e1c]">Лагеря 3 (6100 м)</span>. Собранный мусор в обязательном
            порядке спускается вниз и отправляется на утилизацию.
          </div>

          <div class="mt-[25px] text-[17px]">
            Каждый год к нашей Акции на добровольной основе присоединяются многие туристы из разных
            стран мира: России, Непала, Украины, Германии, Дании, Польши, Испании, Бразилии, Сербии,
            Хорватии и др. В среднем за сезон мы своими руками спускаем 200 – 400 кг собранного
            высотного мусора – объем зависит от числа присоединившихся волонтеров. В качестве
            небольшой награды каждому участнику Акции мы вручаем символический приз – футболку с
            логотипом мероприятия.
          </div>
        </div>
      </div>

      <div class="px-[228px] mt-[54px] main-font text-[16px] text-[#444] font-light">
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

      <div class="px-[228px] mt-[80px]">
        <div class="bg-white flex justify-between items-center">
          <div>
            <h2 class="text-[20px] main-font text-[#444444]">
              Фотографии экологической акции «Чистый снег»
            </h2>
          </div>

          <div class="flex items-center justify-center gap-[16px]">
            <a href="#" class="text-[#d35400] text-[16px] main-font font-semibold">Показать все</a>

            <div class="flex gap-1">
              <ArrowIcon className="text-white drop-shadow-lg w-[31px]" />
              <ArrowIcon className="text-[#d35400] rotate-180 w-[31px]" />
            </div>
          </div>
        </div>

        <div class="flex justify-between mt-[20px]">
          <img src="/images/clearsnow/collage.jpg" />
          <img src="/images/clearsnow/collage.jpg" />
          <img src="/images/clearsnow/collage.jpg" />
        </div>
      </div>
    </div>

    <div class="w-full flex">
      <div class="w-[50%]">
        <video src="/videos/camp.mp4" class="h-full w-full object-cover"></video>
      </div>

      <div
        class="flex-1 relative bg-linear-to-b from-[#2778c2] to-[#0079c6] overflow-hidden px-[120px] pt-[140px] pb-[50px] w-[50%]"
      >
        <h2 class="main-font font-semibold text-[36px] text-white">
          ПОДЪЕМ В ЛАГЕРЬ 1 (4400 м)
        </h2>

        <div class="main-font font-light text-white text-[24px] mt-[55px]">
          Путь в Лагерь 1 через перевал Путешественников, переход вдоль морены, переправа через бурную речку и огромный ледник Ленина с его зияющими трещинами и ослепительным блеском.
        </div>

        <div class="main-font font-light text-white text-[16px] mt-[47px]">
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

    <div class="mt-[96px] mb-[74px] flex justify-center">
      <div class="w-[50%] flex justify-between border-1 border-[#888] px-[35px] py-[22px]">
        <div class="flex gap-6 items-center">
          <img src="/images/main-page/vopros.png" class="h-[40px] w-[35px]" />

          <div>
            <h3 class="text-[20px] main-font text-[#444]">Остались вопросы? Свяжитесь с нами</h3>
            <p class="text-[16px] main-font text-[#444] font-light">
              И наши специалисты подробно на них ответят
            </p>
          </div>
        </div>

        <div class="py-[16px] px-[58px] bg-[#c74e1c] text-white rounded-lg main-font text-[18px]">
          Задать вопрос
        </div>
      </div>
    </div>

    <HeaderTrigger />
  </main>
</template>

<style scoped>
.clear-snow-bg {
  background-image: url('/images/clearsnow/bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
