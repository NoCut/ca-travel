<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue'

import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const currentText = ref('base')

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.href = '/'
  }
}

const changeText = (event) => {
  const buttons = Array.from(event.currentTarget.children)

  buttons.forEach((button) => {
    button.classList.remove('text-white')
    button.classList.remove('bg-[#e9a83a]')
    button.classList.add('bg-[#f9f6ed]')
  })

  event.target.classList.add('text-white')
  event.target.classList.add('bg-[#e9a83a]')
  event.target.classList.remove('bg-[#f9f6ed]')

  currentText.value = event.target.id
}

const toggleHiddenText = (event) => {
  const button = event.currentTarget
  const hiddenBlock = button.nextElementSibling

  if (!hiddenBlock) return

  if (hiddenBlock.style.maxHeight === '0px' || !hiddenBlock.style.maxHeight) {
    // Открываем блок
    hiddenBlock.classList.remove('hidden') // Убираем display: none
    hiddenBlock.style.overflow = 'hidden' // Чтобы контент не выпадал резко
    hiddenBlock.style.maxHeight = '0px' // Сбрасываем max-height, чтобы анимация сработала

    setTimeout(() => {
      hiddenBlock.style.maxHeight = hiddenBlock.scrollHeight + 'px' // Устанавливаем реальную высоту
    }, 10)
  } else {
    // Закрываем блок

    hiddenBlock.style.maxHeight = '0px'

    setTimeout(() => {
      hiddenBlock.classList.add('hidden') // Скрываем после анимации
    }, 500)
  }

  // Меняем цвет текста кнопки
  button.classList.toggle('text-[#444]')
  button.classList.toggle('text-[#c74e1c]')

  // Ищем плюс внутри кнопки
  const plus = button.querySelector('.relative')
  if (!plus) return

  const lines = plus.querySelectorAll('div')
  if (lines.length < 2) return

  // Переключаем стили первой линии
  lines[0].classList.toggle('rotate-45')
  lines[0].classList.toggle('bg-[#c74e1c]')
  lines[0].classList.toggle('bg-[#444]')

  // Переключаем стили второй линии
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
</script>

<template>
  <main class="relative">
    <HeaderTrigger />

    <div class="camp-bg bg-center px-[12.5%] max-lp:px-[30px] max-mb:px-[10px] py-[25px]">
      <div class="flex justify-center">
        <img src="/images/main-logo.png" class="max-w-[400px] max-tb:hidden" />

        <img src="/images/logo.png" class="hidden max-tb:block max-mb:hidden" />

        <img src="/images/logo-mob-2.png" class="hidden max-mb:block" />
      </div>

      <h1 class="main-font font-semibold text-[72px] max-tb:text-[36px] max-mb:text-[28px] max-tb:text-center text-white mt-[145px] max-tb:mt-[46px] drop-shadow-lg">
        НАШИ БАЗОВЫЕ ЛАГЕРЯ
      </h1>

      <h2 class="text-[48px] max-tb:text-[24px] max-mb:text-[18px] max-tb:text-center main-font drop-shadow-lg text-white">
        Описание, инфраструктура и услуги
      </h2>

      <div
        class="pt-[106px] max-tb:pt-[67px] max-stb:pt-[41px] flex justify-between max-tb:items-center max-tb:gap-[103px] max-mb:hidden max-mb:gap-[28px] max-tb:flex-col"
      >
        <div class="flex items-center gap-[32px]">
          <button
            class="px-[73px] max-stb:px-[52px] max-sm:px-[40px] py-4 border-2 border-white text-white uppercase font-bold max-sm:font-normal bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
          >
            Отправить запрос
          </button>

          <button
            class="max-stb:hidden px-[22px] py-5 border-2 border-white text-white font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
          >
            <img src="/images/lenin/facebook.png" />
          </button>
        </div>
      </div>

      <div
        class="flex gap-4 max-tb:items-center max-tb:justify-center max-stb:px-[auto] max-sm:px-0 mt-[32px] max-stb:mt-[14px] max-mb:mt-[48px] justify-end"
      >
        <img src="/images/calendar.png" class="max-sm:w-[32px] drop-shadow-lg" />

        <div
          class="main-font text-white text-[20px] max-stb:text-[15px] max-sm:text-[14px] drop-shadow-lg"
        >
          Наши лагеря будут открыты<br class="max-tb:hidden max-mb:block" />
          с 29 июня по 1 сентября 2021 г.
        </div>
      </div>
    </div>

    <div class="px-[12.5%] max-lp:px-[30px] max-mb:px-[10px] py-[30px]">
      <button @click="goBack" class="flex gap-[10px]">
        <img src="/images/clearsnow/arrow.svg" class="text-[#c74e1c] w-[15px]" />

        <div class="text-[15px] text-[#888] main-font">(ПРЕДЫДУЩАЯ СТРАНИЦА)</div>
      </button>

      <h2 class="text-[36px] max-tb:text-[24px] max-tb:text-center main-font font-semibold text-[#444] uppercase mt-[75px]">Базовые лагеря</h2>
      <h3 class="text-[36px] max-tb:text-[24px] max-tb:text-center main-font font-light text-[#444]">компании Central Asia Travel</h3>

      <div class="flex items-start">
        <div class="w-[75%] max-tb:w-full max-tb:pt-[45px] pr-[80px] max-lp:pr-[15px] max-tb:pr-0">
          <div class="flex justify-end max-tb:justify-center gap-[27px]">
            <img src="/icons/facebook-icon.png" class="max-h-[23px]" />
            <img src="/icons/twitter.png" class="max-h-[23px]" />
            <img src="/icons/WA.png" class="max-h-[23px]" />
            <img src="/icons/viber.png" class="max-h-[23px]" />
            <img src="/icons/tg.png" class="max-h-[23px]" />
          </div>

          <div
            @click="changeText"
            class="mt-[25px] text-[15px] main-font text-[#888] flex max-stb:flex-col gap-[2px]"
          >
            <button
              id="base"
              class="text-white w-[33%] transition-all duration-300 max-stb:w-full py-[29px] max-lp:py-[25px] max-stb:py-[17px] flex justify-center bg-[#e9a83a] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              <div class="self-center pointer-events-none">БАЗОВЫЙ ЛАГЕРЬ (3600 м)</div>
            </button>
            <button
              id="camp1"
              class="w-[33%] max-stb:w-full transition-all duration-300 py-[29px] max-lp:py-[25px] max-stb:py-[17px] flex justify-center bg-[#f9f6ed] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              <div class="self-center pointer-events-none">ЛАГЕРЬ 1 «СОЛНЕЧНЫЙ» (4400 м)</div>
            </button>
            <button
              id="food"
              class="w-[33%] max-stb:w-full transition-all duration-300 py-[29px] max-lp:py-[25px] max-stb:py-[17px] flex justify-center bg-[#f9f6ed] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              <div class='self-center pointer-events-none'>МЕНЮ БАЗОВЫХ ЛАГЕРЕЙ</div>
            </button>
          </div>

          <transition>
            <div v-if="currentText === 'base'">
              <h3 class="mt-[52px] text-[20px] text-[#444] main-font">
                БАЗОВЫЙ ЛАГЕРЬ «ПОЛЯНА ЭДЕЛЬВЕСОВ» (3600 м)
              </h3>

              <img src="/images/camps/base-1.jpg" class="w-full mt-[25px]" />

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                <b>Базовый лагерь пика Ленина</b> находится в альпийской зоне, на живописной
                <b>Поляне эдельвейсов</b> (3600 м) - идеальном месте для отдыха и полноценного
                восстановления после акклиматизационных выходов, что значительно повышает шансы
                успешного восхождения на вершину.
              </p>

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                Из Базового лагеря начинается пеший маршрут восхождения на пик Ленина и другие
                вершины в этом районе.
              </p>

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                <b>Базовый Лагерь</b> «Поляна Эдельвейсов» – один из самых уютных и комфортабельных
                лагерей в <b>урочище Ачик-Таш</b>, находится
                <b>ближе всех от начала тропы на перевал Путешественников.</b>
              </p>

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                В нашем Базовом лагере всех и каждого принимают очень душевно. Всем желающим, да и
                просто заглянувшим в лагерь, мы всегда предложим <b>горячий чай</b> со сладостями.
                Мы не делаем ставку на «конвейерное обслуживание», которое так или иначе получается
                при огромном количестве гостей. У нас в лагере просторно и не очень многолюдно. Это
                позволяет нам уделять каждому персональное внимание и повышать качество
                обслуживания, что делает наш сервис эксклюзивным.
              </p>

              <div
                class="mt-[44px] py-[18px] border-t-2 border-b-1 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">Базовый лагерь пика Ленина: инфраструктура</div>

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
                    Базовый лагерь (3600 м) располагает богатой и продуманной до мелочей
                    инфраструктурой и предлагает своим гостям следующие услуги:
                  </p>

                  <p class="cust-ul mt-[25px] text-[17px] main-font font-light text-[#444]">
                    <b>Национальные юрты</b> - кают-компании для отдыха, питания и развлечений, где:
                  </p>

                  <ul
                    class="list-['-'] list-inside pl-[40px] text-[17px] font-light main-font text-[#444]"
                  >
                    <li>
                      <span class="pl-[10px]"
                        >тепло и уютно: юрты оснащены печками, протапливаемыми ежедневно;
                      </span>
                    </li>
                    <li>
                      <span class="pl-[10px]"
                        >удобно: есть необходимая мебель - столы, стулья;</span
                      >
                    </li>
                    <li>
                      <span class="pl-[10px]"
                        >весело: электричество, аудио- и видеоаппаратура;</span
                      >
                    </li>
                    <li>
                      <span class="pl-[10px]"
                        >бесподобно вкусно кормят: блюда азиатской и европейской кухонь от
                        профессиональных поваров, также имеется бар;</span
                      >
                    </li>
                    <li>
                      <span class="pl-[10px]"
                        >есть настольные игры: шахматы, карты, нарды, дартс;</span
                      >
                    </li>
                    <li><span class="pl-[10px]">самый мощный сигнал Wi-Fi.</span></li>
                  </ul>

                  <div class="px-[88px] mt-[25px]">
                    <img src="/images/camps/base-2.jpg" class="w-full" alt="" />
                  </div>

                  <p class="cust-ul mt-[25px] text-[17px] main-font font-light text-[#444]">
                    Удобные <b>отапливаемые туристические тенты</b>, оснащенные:
                  </p>

                  <ul
                    class="list-['-'] list-inside pl-[40px] text-[17px] font-light main-font text-[#444]"
                  >
                    <li><span class="pl-[10px]">электричеством; </span></li>
                    <li><span class="pl-[10px]">обогревателями;</span></li>
                    <li>
                      <span class="pl-[10px]"
                        >индивидуальным освещением - настольными лампами;</span
                      >
                    </li>
                    <li><span class="pl-[10px]">раскладными кроватями;</span></li>
                    <li>
                      <span class="pl-[10px]"
                        >одеялами, подушками и сменным постельным бельём - пододеяльниками,
                        наволочками, простынями;</span
                      >
                    </li>
                    <li><span class="pl-[10px]">стульями в «тамбуре».</span></li>
                  </ul>

                  <div class="px-[88px] mt-[25px]">
                    <img src="/images/camps/base-3.jpg" class="w-full" alt="" />
                  </div>

                  <p class="cust-ul mt-[25px] text-[17px] main-font font-light text-[#444]">
                    Альтернативное <b>размещение повышенной комфортности</b> - за дополнительную
                    плату доступно <b>проживание по два человека в просторных киргизских юртах</b>,
                    оформленных в национальном стиле и расположенных на территории Базового лагеря.
                    Юрты непременно порадуют требовательных гостей удобством проживания и
                    изысканностью декора. Каждая юрта рассчитана на проживание 2-х человек и
                    оснащена всем необходимым для комфортного пребывания.
                  </p>

                  <p class="mt-[25px] main-font font-semibold text-[17px] text-[#444]">
                    В юрте есть:
                  </p>
                  <ul
                    class="list-['-'] list-inside pl-[40px] text-[17px] font-light main-font text-[#444]"
                  >
                    <li>
                      <span class="pl-[10px]"
                        >Персональный санузел (душевая кабинка, туалет, горячая/холодная вода);
                      </span>
                    </li>
                    <li><span class="pl-[10px]">Отопление и электричество;</span></li>
                    <li>
                      <span class="pl-[10px]"
                        >2 кровати (возможна установка дополнительной кровати), 2 шкафа, стол, 2
                        кресла;</span
                      >
                    </li>
                    <li><span class="pl-[10px]">Минибар;</span></li>
                    <li>
                      <span class="pl-[10px]">2 двери;</span>
                    </li>
                    <li>
                      <span class="pl-[10px]"
                        >и ... 2 сундука (!). В настоящей киргизской юрте наличие сундуков
                        обязательно.</span
                      >
                    </li>
                  </ul>

                  <p class="mt-[25px] main-font font-light text-[17px] text-[#444]">
                    <b>Услуги</b>: уборка в юрте и смена постельного белья.
                  </p>

                  <div class="px-[88px] mt-[25px]">
                    <img src="/images/camps/base-4.jpg" class="w-full" alt="" />
                  </div>

                  <p class="cust-ul mt-[25px] text-[17px] main-font font-light text-[#444]">
                    <b>Вкусное и полезное 3-х разовое питание от профессиональных поваров</b>.
                    Лагерь вам его гарантирует, причем в изобилии - 2 горячих блюда, 2 овощных
                    салата, фруктовый десерт, чай или кофе (по желанию). Вегетарианское питание и
                    питание на заказ также предусмотрено. Опыт работы наших поваров составляет не
                    менее 10 лет.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                    В Базовом лагере установлена национальная глиняная печь - <b>тандыр</b>, где
                    выпекается свежий хлеб, лепешки и самса.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Wi-Fi</b> на всей территории лагеря.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Душевые кабинки и баня</b>. Душевые кабинки с горячей водой доступны в
                    течение всего дня. <b>Отличную баню с настоящей парилкой</b> топят ежедневно во
                    второй половине дня.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Туалеты</b> со сливными бачками, а также удобные
                    <b>системы для умывания</b> с кранами, мылом и зеркалами.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Камеры хранения</b>
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Мини-маркет</b>, где можно приобрести товары первой необходимости,
                    специализированные продукты для восхождения, альпинистское снаряжение, сувениры
                    и многое другое.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Медицинская помощь</b>. В лагере есть медицинский кабинет со всеми
                    необходимыми медикаментами для оказания первой помощи, где всегда дежурит
                    <b>врач</b>. Врач-реаниматор имеет опыт высотной работы, поэтому при
                    необходимости в любое время сможет оказать квалифицированную медицинскую помощь.
                    В его обязанности входит также проведение обследования, консультаций и выдача
                    необходимых рекомендаций относительно вашего здоровья.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Команда спасателей</b>, состоящая из опытных высотных гидов, готовых в любой
                    момент прийти на помощь.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Волейбольная площадка</b> для любителей активного досуга.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Прогноз погоды для района пика Ленина</b>, который обновляется ежедневно.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    По всей уютной и благоустроенной территории Базового лагеря установлены
                    <b>указатели</b> и <b>фонари</b>.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">Дополнительные услуги в Базовом Лагере</div>

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
                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Аренда высотного снаряжения</b>: высотные палатки Red Fox Explorer, Mountain
                    Fox, каремат, основная верёвка Ø 9 ÷ 11 мм, динамика, лавинная лопата,
                    радиостанция и GPS-навигатор (у гида), газовая горелка, посуда для приготовления
                    пищи в промежуточных высотных лагерях Л2 и Л3.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Услуги горного гида и портеров.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Перевоз личного груза из Базового лагеря в Лагерь 1.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Фиксированный набор высотных продуктов</b> на период восхождения со склада
                    Базового лагеря.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Аренда радиостанции с аккумулятором.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Аренда места для своей палатки на территории Базового лагеря.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Услуги прачечной.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Можно забронировать ночёвку в установленных в Л2 (5300 м) и Л3 (6100 м) высотных
                    палатках.
                  </p>

                  <div
                    class="mt-[25px] text-[18px] text-[#c74e1c] main-font font-semibold flex gap-[10px] items-center cursor-pointer"
                  >
                    <img src="/icons/download2.png" />

                    <div>
                      Прайс-лист на дополнительные и отдельные услуги в Базовых Лагерях под пиком
                      Ленина
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="flex justify-between">

              </div> -->
            </div>
          </transition>

          <transition>
            <div v-if="currentText === 'camp1'">
              <h3 class="mt-[52px] text-[20px] text-[#444] main-font">
                ЛАГЕРЬ 1 «СОЛНЕЧНЫЙ» (4400 м)
              </h3>

              <img src="/images/camps/camp1-1.png" class="w-full mt-[25px]" />

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                Подъем из Базового лагеря (3600 м) в Лагерь 1 (4400 м) занимает <b>4-8 часов</b> в
                зависимости от подготовки участников. Тропа проходит через перевал Путешественников
                (4200 м) и далее параллельно левому моренному отвалу к леднику Ленина.
              </p>

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                <b>Лагерь 1 «Солнечный» (4400 м)</b> находится на морене ледника Ленина,
                <b>ближе всех остальных лагерей к Горе</b>. Это преимущество вы оцените не только
                когда будете идти наверх, но и при спуске, когда больше всего на свете хочется
                скинуть тяжёлый рюкзак и ботинки, переодеться, выпить чашку горячего чая, принять
                душ, расслабиться и как следует пообедать.
              </p>

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                Передовой <b>Лагерь 1</b> является одним из самых комфортабельных лагерей на этом
                леднике. Это своеобразный оазис жизни и комфорта среди снега, льда и камней.
              </p>

              <div
                class="mt-[25px] py-[18px] border-t-2 border-b-1 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">Дополнительные услуги в Базовом Лагере</div>

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
                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Комфортабельные юрты - кают-компании</b>, как в Базовом лагере. Юрты оснащены
                    печками, столами и скамьями. Здесь тепло и уютно, регулярно обновляется прогноз
                    погоды на ближайшие дни, и можно очень вкусно поесть. В юртах есть
                    электричество, хороший Wi-Fi, аудио- и видеоаппаратура, компьютер с доступом в
                    Интернет, играет музыка, имеется <b>бар</b>.
                  </p>

                  <img src="/images/camps/camp1-2.png" class="mt-[25px] px-[88px] w-full" alt="" />

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Просторные палатки типа «полубочка»</b>, оборудованные деревянными настилами
                    с теплоизоляцией и поролоновыми матрасами.
                  </p>

                  <img src="/images/camps/camp1-3.png" class="mt-[25px] px-[88px] w-full" alt="" />

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Полноценное горячее питание</b> от профессиональных поваров
                    (завтрак/обед/ужин) - блюда европейской и азиатской кухонь, возможно также
                    <b>вегетарианское питание</b> и питание на заказ.
                  </p>

                  <img src="/images/camps/camp1-4.png" class="mt-[25px] px-[88px] w-full" alt="" />

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Wi-Fi</b> на территории лагеря.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Мобильная баня</b>. Искупаться в горячей воде среди вечных снегов - это ни с
                    чем не сравнимое удовольствие!
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Туалет</b>. Здесь он, конечно, не так крут, как в Базовом Лагере, то тоже
                    вполне комфортен. Это полевой вариант в виде домика с крышей и дверью, он всегда
                    поддерживается в абсолютно чистом гигиеническом состоянии.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Умывальники</b> с теплой водой, мылом и зеркалами.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    <b>Камера хранения.</b>
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">Дополнительные услуги в Лагере 1</div>

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
                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Возможность подзарядки батарей, телефонов и прочей аппаратуры;
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Можно купить или заправить газовые баллончики;
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Услуги высотных <b>портеров</b> (носильщиков) и <b>горных гидов</b>;
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Можно забронировать ночёвку в установленных в Л2 (5300 м) и Л3 (6100 м) высотных
                    палатках.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444] cust-ul">
                    Продажа сувениров.
                  </p>

                  <div
                    class="mt-[25px] text-[18px] text-[#c74e1c] main-font font-semibold flex gap-[10px] items-center cursor-pointer"
                  >
                    <img src="/icons/download2.png" />

                    <div>
                      Прайс-лист на дополнительные и отдельные услуги в Базовых Лагерях под пиком
                      Ленина
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <transition>
            <div v-if="currentText === 'food'">
              <h3 class="mt-[52px] text-[20px] text-[#444] main-font">
                ПИТАНИЕ В БАЗОВОМ ЛАГЕРЕ И ЛАГЕРЕ 1 ПОД ПИКОМ ЛЕНИНА<br />
                КОМПАНИИ CENTRAL ASIA TRAVEL
              </h3>

              <img src="/images/camps/food-1.png" class="w-full mt-[25px]" />

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                У нас в Базовом лагере (3600 м) и Лагере 1 (4400 м) под пиком Ленина работают
                <b>профессиональные повара</b>. Они готовят изумительно вкусные, разнообразные и
                полезные блюда исключительно из свежих и натуральных продуктов, которые мы регулярно
                привозим из Оша. Наши <b>порции всегда очень щедрые</b>, обильные, а если вдруг
                кто-то не наелся или просто желает дополнительную порцию понравившегося блюда, он
                может попросить добавку неограниченное число раз.
              </p>

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                <b>Дневное меню</b> тщательно продумано и обязательно включает в себя
                <b>большое количество свежих фруктов и овощей</b>, первые и вторые блюда
                национальной и европейской кухонь (предусмотрены также <b>вегетарианские блюда</b> и
                индивидуальное питание), десерты и сладости. Даже в Лагере 1 (4400 м), куда мы
                поднимаем продукты на лошадях, у нас всегда есть в ассортименте свежие фрукты и
                овощи, потому что мы знаем, насколько важную роль играет
                <b>правильное питание</b> при восхождении.
              </p>

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                Кроме того, наши повара очень творчески подходят к своей работе и часто удивляют
                гостей восхитительными <b>пирогами</b> и <b>тортами</b> даже в условиях сурового
                высокогорья.
              </p>

              <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                У нас в рационе также всегда есть <b>свежий хлеб</b>. Мы ежедневно выпекаем его сами в
                тандырной печи, расположенной на территории Базового лагеря.
              </p>

              <div
                class="mt-[25px] py-[18px] border-t-2 border-b-2 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">КРАТКОЕ ОПИСАНИЕ ДНЕВНОГО МЕНЮ БАЗОВОГО ЛАГЕРЯ (3600) И ЛАГЕРЯ 1 (4400)</div>

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
                  <div class="mt-[25px] text-[18px] main-font font-semibold text-[#444] flex max-tb:justify-center gap-[10px] items-center w-full bg-[#f9f6ed] px-[25px]">
                    <img src="/images/camps/break.png" />

                    <div>Завтрак</div>
                  </div>

                  <ul class="list-disc text-[17px] font-light main-font text-[#444] pl-[40px] mt-[25px]">
                    <li><span class="pl-[20px]">Колбасно-сырное ассорти;</span></li>
                    <li><span class="pl-[20px]">Первое блюдо: разнообразные молочные каши;</span></li>
                    <li><span class="pl-[20px]">Второе блюдо: гренки / оладьи / сосиски / и т.п.;</span></li>
                    <li><span class="pl-[20px]">Десерт: конфеты, печенье, вафли, сухофрукты.</span></li>
                  </ul>

                  <div class="mt-[25px] text-[17px] font-light text-[#444] pl-[20px]">
                    <span class='border-b-1 border-[#444]'>Стандартный набор:</span>
                  </div>

                  <ul class="list-disc text-[17px] font-light main-font text-[#444] pl-[40px] mt-[25px]">
                    <li><span class="pl-[20px]">Кетчуп, майонез, горчица, аджика, хрен, хлеб (ассорти);</span></li>
                    <li><span class="pl-[20px]">Чай (черный, зелый), кофе, какао, сухие сливки, шоколадный крем, варенье/джем, сахар.</span></li>
                  </ul>

                  <img src="/images/camps/food-2.png" class="w-full mt-[25px] px-[88px]" alt="" />

                  <div class="mt-[25px] text-[18px] main-font font-semibold text-[#444] flex max-tb:justify-center gap-[10px] items-center w-full bg-[#f9f6ed] px-[25px]">
                    <img src="/images/camps/lunch.png" />

                    <div>Обед</div>
                  </div>

                  <ul class="list-disc text-[17px] font-light main-font text-[#444] pl-[40px] mt-[25px]">
                    <li><span class="pl-[20px]">Салат (1 вид): разнообразный выбор овощных и мясных салатов;</span></li>
                    <li><span class="pl-[20px]">Первое блюдо: разнообразные супы (овощьные, мясные);</span></li>
                    <li><span class="pl-[20px]">Второе блюдо: разнообразный выбор блюдо восточной и европейской кухни;</span></li>
                    <li><span class="pl-[20px]">Десерт: фрукты, конфеты, печенье, вафли, сухофрукты.</span></li>
                  </ul>

                  <div class="mt-[25px] text-[17px] font-light text-[#444] pl-[20px]">
                    <span class='border-b-1 border-[#444]'>Стандартный набор:</span>
                  </div>

                  <ul class="list-disc text-[17px] font-light main-font text-[#444] pl-[40px] mt-[25px]">
                    <li><span class="pl-[20px]">Кетчуп, майонез, горчица, аджика, хрен, хлеб (ассорти);</span></li>
                    <li><span class="pl-[20px]">Чай (черный, зелый), кофе, какао, сухие сливки, шоколадный крем, варенье/джем, сахар.</span></li>
                  </ul>

                  <img src="/images/camps/food-3.png" class="w-full mt-[25px] px-[88px]" alt="" />

                  <div class="mt-[25px] text-[18px] main-font font-semibold text-[#444] flex max-tb:justify-center gap-[10px] items-center w-full bg-[#f9f6ed] px-[25px]">
                    <img src="/images/camps/dinner.png" />

                    <div>Ужин</div>
                  </div>

                  <ul class="list-disc text-[17px] font-light main-font text-[#444] pl-[40px] mt-[25px]">
                    <li><span class="pl-[20px]">Салат (2 вид): разнообразный выбор овощных и мясных салатов;</span></li>
                    <li><span class="pl-[20px]">Второе блюдо: разнообразный выбор блюдо восточной и европейской кухни;</span></li>
                    <li><span class="pl-[20px]">Десерт: фрукты, конфеты, орешки (в ассортименте).</span></li>
                  </ul>

                  <img src="/images/camps/food-4.png" class="w-full mt-[25px] px-[88px]" alt="" />

                  <div
                    class="mt-[25px] text-[18px] text-[#c74e1c] main-font font-semibold flex gap-[10px] items-center cursor-pointer"
                  >
                    <img src="/icons/download2.png" />

                    <div>
                      Скачать файл с детальным описанием меню
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <div class="mt-[96px] max-tb:mt-[79px] mb-[74px] flex justify-center">
            <div
              class="w-full max-tb:mx-[10px] max-mb:mx-[5px] flex max-lp:flex-col max-lp:gap-[19px] max-lp:items-center justify-between border-1 border-[#888] px-[35px] max-tb:px-[20px] max-mb:px-[8px] py-[22px]"
            >
              <div class="flex max-lp:flex-col gap-6 max-stb:gap-[14px] items-center">
                <img src="/images/main-page/vopros.png" class="h-[40px] w-[35px]" />

                <div class="max-lp:text-center">
                  <h3 class="text-[20px] max-mb:text-[18px] main-font text-[#444]">
                    ОСТАЛИСЬ ВОПРОСЫ? СВЯЖИТЕСЬ С НАМИ
                  </h3>
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
        </div>

        <div class="w-[25%] border-l-1 border-r-1 border-[#9d9d9d] max-tb:hidden">
          <div class="flex flex-col gap-[74px] px-[24px] items-center">
            <router-link to="">
              <img src="/images/lenin/our.jpg" />
              <div class="main-font text-[16px] uppercase text-[#444] text-center mt-[24px]">
                Наши восходители
              </div>
            </router-link>

            <router-link>
              <img src="/images/lenin/reviews.jpg" />
              <div class="main-font text-[16px] uppercase text-[#444] text-center mt-[24px]">
                Отзывы о нас
              </div>
            </router-link>

            <router-link>
              <img src="/images/lenin/clearsnow.jpg" />
              <div class="main-font text-[16px] uppercase text-[#444] text-center mt-[24px]">
                экологическая акция «Чистый снег»
              </div>
            </router-link>
          </div>

          <div class="mt-[78px] pb-[15px]">
            <div class="flex justify-center gap-[16px]">
              <img src="/icons/fb2.png" alt="" />
              <img src="/icons/inst2.png" alt="" />
              <img src="/icons/tw2.png" alt="" />
              <img src="/icons/yt2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="mount-bg bg-right py-[70px] px-[12.5%] max-lp:px-[30px] max-tb:px-[15px]">
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
      <div class="w-[33%] flex items-center flex-col max-mb:w-full">
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

      <div class="w-[33%] flex items-center flex-col max-mb:w-full">
        <div class="max-stb:w-[200px] max-mb:w-full max-stb:h-[228px]">
          <img src="/images/lenin/reviews.jpg" class="w-full h-full object-cover object-center" />
        </div>

        <div
          class="main-font text-[16px] max-stb:text-[15px] uppercase text-[#444] text-center mt-[24px]"
        >
          ОТЗЫВЫ О НАС
        </div>
      </div>

      <router-link to="/clear-snow" class="w-[33%] flex items-center flex-col max-mb:w-full">
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
</template>

<style scoped>
.camp-bg {
  background-image: url('/images/camps/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.anim {
  display: block !important; /* Оставляем в DOM */
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.5s ease-out,
    opacity 0.3s ease-out;
}

.anim:not(.hidden) {
  opacity: 1;
}

.mount-bg {
  background-image: url('/images/bg-mount.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.cust-ul::before {
  content: url('/icons/gal.png');
  margin-right: 20px;
}

.v-enter-active {
  transition: opacity 1s ease-in;
}

.v-leave-active {
  transition: opacity 0.5s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
