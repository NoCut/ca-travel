<script setup>
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'
</script>

<template>
  <footer class="footer-bg pt-[21px] pb-[45px] px-[260px]">
    <div class="flex justify-between items-center">
      <div class="text-[36px] text-[#444] font-light main-font">
        ЭТО ИНТЕРЕСНО (наши публикации)
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

    <div class="flex justify-between pt-[21px]">
      <div class="max-w-[446px]">
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

    <div class="mt-[170px] flex justify-between items-start main-font text-white text-[16px] px-[90px]">
      <img src="/images/footer-logo.png" />

      <div>
        <h4 class="text-[18px] font-bold">Компания</h4>

        <div class="flex flex-col pt-[18px] gap-[12px] justify-start">
          <div>О нас</div>
          <div>Вакансии</div>
          <div>Акции</div>
          <div>Отзывы</div>
          <div>Контакты</div>
        </div>
      </div>

      <div>
        <h4 class="text-[18px] font-bold">Медиа</h4>

        <div class="flex flex-col pt-[18px] gap-[12px] justify-start">
          <div>Статьи</div>
          <div>Фотогалерея</div>
          <div>Видеогалерея</div>
        </div>
      </div>

      <div>
        <h4 class="text-[18px] font-bold">Туры</h4>

        <div class="flex flex-col pt-[18px] gap-[12px] justify-start">
          <div>Поиск туров</div>
          <div>
            Календарь <br />
            групповых туров
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-[18px] font-bold">Направления</h4>

        <div class="flex flex-col pt-[18px] gap-[12px] justify-start">
          <div>Узбекистан</div>
          <div>Кыргызстан</div>
          <div>Казахстан</div>
          <div>Туркменистан</div>
          <div>Таджикистан</div>
          <div>Китай</div>
        </div>
      </div>
    </div>

    <div class="mt-[36px] flex gap-[234px] px-[90px]">
      <div>
        <div class="text-[16px] text-white font-bold special-font">Мы в соцсетях</div>

        <div class="flex gap-[15px] mt-[24px]">
          <img src="/images/footer/fb2.png" class="h-[35px]" />
          <img src="/images/footer/inst2.png" class="h-[35px]" />
          <img src="/images/footer/tw2.png" class="h-[35px]" />
          <img src="/images/footer/yt2.png" class="h-[35px]" />
        </div>
      </div>

      <div class="">
        <h3 class="text-[16px] main-font text-[#f9f6ed] font-bold text-center">
          Подпишитесь на нашу рассылку
        </h3>

        <div class="mt-[24px] flex gap-1">
          <input
            type="email"
            placeholder="Введите Ваш E-mail"
            class="py-[15px] pl-[56px] main-font text-[16px] w-[374px] bg-[#d6d4ce]"
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
.footer-bg {
  background-image: url('/images/footer-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.special-font {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
