<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue'
</script>

<template>
  <main class="relative">
    <HeaderTrigger />

    <div class="lenin-bg px-[260px]">
      <div class="flex justify-center pt-[23px]">
        <img src="/images/lenin/logo.png" class="w-[400px]" />
      </div>

      <div class="pt-[289px] text-white main-font">
        <h1 class="font-semibold text-[72px]">ПИК ЛЕНИНА</h1>
        <div class="text-[48px]">Восхождения · Треккинг · Отдых на Памире</div>
      </div>

      <div class="pt-[252px] flex justify-between pb-[86px]">
        <div class="flex items-center gap-[32px]">
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

        <div class="flex gap-4">
          <img src="/images/calendar.png" />

          <div class="main-font text-white text-[20px] w-[300px]">
            Наши лагеря будут открыты<br />с 29 июня по 1 сентября 2021 г.
          </div>
        </div>
      </div>
    </div>

    <div class="px-[260px] pt-[115px] pb-[62px]">
      <div>
        <h3 class="main-font text-[36px] font-semibold text-[#444]">
          ВОСХОЖДЕНИЕ НА ПИК ЛЕНИНА (7134 м)
        </h3>
        <div class="main-font text-[36px] font-light text-[#444]">Памир, Кыргызстан</div>
      </div>

      <div class="flex justify-between gap-[77px] pt-[25px]">
        <div>
          <div class="flex justify-end gap-[27px] items-center">
            <img src="/images/lenin/facebook-icon.png" class="h-[23px]" />
            <img src="/images/lenin/twitter.png" class="h-[23px]" />
            <img src="/images/lenin/WA.png" class="h-[23px]" />
            <img src="/images/lenin/viber.png" class="h-[23px]" />
            <img src="/images/lenin/tg.png" class="h-[23px]" />
          </div>

          <div class="main-font text-[17px] text-[#444] pt-[30px] font-light">
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

        <div class="w-[645px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12342.14464178692!2d72.87759929999999!3d39.34409335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38befc513bcb0635%3A0xa7c9fe33c28cb1!2z0J_QuNC6INCb0LXQvdC40L3QsA!5e0!3m2!1sru!2s!4v1740508998582!5m2!1sru!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <div
      class="flex justify-center items-center gap-[35px] bg-[#f9f6ed] py-[24px] text-[#444] main-font text-[18px] text-center"
    >
      <div
        class="bg-white px-[36px] hover:text-[#c74e1c] w-[205px] h-[180px] flex flex-col justify-center"
      >
        <img src="/images/lenin/prices.png" class="mx-auto" />

        <div class="pt-[8px] main-font font-light text-[18px]">Воспользуйтесь поиском туров</div>
      </div>

      <div
        class="bg-white px-[36px] hover:text-[#c74e1c] w-[205px] h-[180px] flex flex-col justify-center"
      >
        <img src="/images/main-page/calendar2.png" class="mx-auto" />

        <div class="pt-[8px] main-font font-light text-[18px]">Посмотрите календарь туров</div>
      </div>

      <div
        class="bg-white px-[36px] hover:text-[#c74e1c] w-[205px] h-[180px] flex flex-col justify-center"
      >
        <img src="/images/main-page/review.png" class="mx-auto" />

        <div class="pt-[8px] main-font font-light text-[18px]">Почитайте отзывы</div>
      </div>

      <div
        class="bg-white px-[36px] hover:text-[#c74e1c] w-[205px] h-[180px] flex flex-col justify-center"
      >
        <img src="/images/main-page/mail.png" class="mx-auto" />

        <div class="pt-[8px] main-font font-light text-[18px]">Отправьте заявку</div>
      </div>
    </div>

    <div class="px-[260px] pt-[118px] main-font text-[#444] text-[36px]">
      <div>
        <h2 class="font-semibold">ЦЕНОВЫЕ ПАКЕТЫ</h2>
        <div class="font-light">для программы восхождения на пик Ленина</div>
      </div>

      <div class="mt-[44px] mb-[44px] max-w-[1075px]">
        <div class="main-font text-light text-[18px] text-[#444]">
          Здесь вы можете выбрать один из <span class="font-semibold">12 ценовых пакетов</span>,
          которые различаются по набору включенных услуг и, соответственно, по стоимости – от самого
          <span class="font-semibold">бюджетного</span>
          <span class="text-[#c74e1c]">Супер Эконом</span> варианта до наиболее
          <span class="font-semibold">комфортного</span>
          <span class="text-[#c74e1c]">VIP-пакета</span>.
        </div>

        <div class="mt-[30px] text-[18px]">
          Каждый сможет подобрать для себя оптимальный формат путешествия!
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3">
      <div class="relative">
        <img src="/images/lenin/basic.jpg" class="object-cover w-full" />

        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center main-font"
        >
          <div class="text-[40px] font-light">БАЗОВЫЙ</div>
          <div class="text-[24px] font-bold">9999 USD</div>
        </div>
      </div>

      <div class="relative">
        <img src="/images/lenin/basic.jpg" class="object-cover w-full" />

        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center main-font"
        >
          <div class="text-[40px] font-light">БАЗОВЫЙ</div>
          <div class="text-[24px] font-bold">9999 USD</div>
        </div>
      </div>

      <div class="relative">
        <img src="/images/lenin/basic.jpg" class="object-cover w-full" />

        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center main-font"
        >
          <div class="text-[40px] font-light">БАЗОВЫЙ</div>
          <div class="text-[24px] font-bold">9999 USD</div>
        </div>
      </div>
    </div>

    <div class="bg-[#f9f6ed] pt-[37px] px-[260px] pb-[110px]">
      <div class="bg-white flex px-[50px] justify-between py-[16px] gap-[134px] items-center">
        <div class="main-font font-light text-[17px] text-[#444] flex-1">
          <span class="font-semibold text-[#c74e1c]">ВАЖНО!</span> В каждый пакет включен переезд
          <span class="font-semibold">Ош – Базовый лагерь – Ош</span> на комфортабельном транспорте,
          который мы организуем <span class="font-semibold">в любые удобные для вас даты</span> в
          период с 29 июня по 1 сентября 2021.
        </div>

        <div class="flex-1 main-font font-light text-[17px] text-[#444]">
          <div class="font-semibold text-[#c74e1c]">Время отправления транспорта:</div>

          <ul class="list-disc pl-[20px]">
            <li><span class="font-semibold">Ош – Базовый лагерь</span>: утром в 06:00;</li>
            <li>
              <span class="font-semibold">Базовый лагерь – Ош</span>: первая половина дня (время
              отправления уточните у начальника Базового лагеря накануне выезда).
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mx-[88px] mt-[34px] border-t-1 border-[#888] pt-[26px] flex justify-between items-center"
      >
        <div class="main-font font-bold text-[17px] text-[#c74e1c]">
          Сколько стоит экспедиция на пик Ленина и из чего складывается цена
        </div>

        <div class="">
          <img src="/images/lenin/cross.svg" class="w-[24px]" />
        </div>
      </div>

      <div class="grid grid-cols-3 mx-[88px] mt-[50px] gap-y-[38px] gap-x-[80px]">
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

      <div class="flex items-center gap-3 mt-[40px] mx-[88px] pb-[14px] border-b-1 border-[#888]">
        <img src="/images/lenin/download2.png" />
        <div class="main-font font-semibold text-[16px] text-[#c74e1c]">
          Прайс-лист на дополнительные и отдельные услуги в Базовых лагерях под пиком Ленина
        </div>
      </div>
    </div>

    <div class="w-full flex">
      <div class="w-[50%]">
        <video></video>
      </div>

      <div
        class="flex-1 relative bg-linear-to-b from-[#2778c2] to-[#0079c6] overflow-hidden px-[120px] pt-[140px] pb-[50px] w-[50%]"
      >
        <h2 class="main-font font-semibold text-[36px] text-white">
          ВОСХОЖДЕНИЕ<br />
          НА ПИК ЛЕНИНА
        </h2>

        <div class="main-font font-light text-white text-[24px] mt-[55px]">
          Подъем на вершину пика Ленина (7134 м) и фантастические панорамы вокруг
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

    <div class="px-[348px] pt-[95px]">
      <div class="flex relative">
        <div class="bg-[#e8aa3b] w-[50%] main-font text-white">
          <span class="pt-[26px] ml-[30px] text-[24px] border-b-1 border-white">8 гарантированных дат</span>

          <div class="pl-[148px] pb-[43px] pt-[67px]">
            <h3 class="font-bold text-[36px]">КУРОРТНЫЙ ПАМИР</h3>
            <div class="mt-[22px] text-[22px]">Активный семейный отдых в горах Памира Приключенческий тур с треккингом</div>

            <div class="text-[15px] font-light mt-[22px]">Кыргызстан, горы Памира <br>8 дней / 7 ночей</div>

            <button
              class="px-[16px] py-2 border-2 border-white text-white mt-[47px] bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[16px] font-light"
            >
              Подробнее »»
            </button>
          </div>
        </div>

        <div>
          <img src="/images/lenin/pamir-group.jpg" class="h-full w-full object-cover"/>
        </div>

        <div class="absolute top-[50%] translate-y-[-50%] left-2">
          <img src="/images/lenin/left-arrow.png" />
        </div>

        <div class="absolute top-[50%] translate-y-[-50%] right-2">
          <img src="/images/lenin/right-arrow.png" />
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

        <div class="py-[16px] px-[58px] bg-[#c74e1c] text-white rounded-xl main-font text-[18px]">
          Задать вопрос
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.lenin-bg {
  background-image: url('/images/lenin/bg.jpg');
  background-size: cover;
}
</style>
