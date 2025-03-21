<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue'

import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const currentText = ref('road')

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

    <div class="info-bg bg-center px-[12.5%] max-lp:px-[30px] max-mb:px-[10px] py-[25px]">
      <div class="flex justify-center">
        <img src="/images/main-logo.png" class="max-w-[400px] max-tb:hidden" />

        <img src="/images/logo.png" class="hidden max-tb:block max-mb:hidden" />

        <img src="/images/logo-mob-2.png" class="hidden max-mb:block" />
      </div>

      <h1
        class="main-font font-semibold text-[72px] max-tb:text-[36px] max-mb:text-[28px] max-tb:text-center text-white mt-[145px] max-tb:mt-[46px] drop-shadow-lg"
      >
        ПОЛЕЗНАЯ<br />
        ИНФОРМАЦИЯ
      </h1>

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

      <h2
        class="text-[36px] max-tb:text-[24px] max-tb:text-center main-font font-semibold text-[#444] uppercase mt-[75px]"
      >
        ПОЛЕЗНАЯ ИНФОРМАЦИЯ
      </h2>

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
              id="road"
              class="text-white w-[25%] transition-all duration-300 max-stb:w-full py-[29px] max-lp:py-[25px] max-stb:py-[17px] flex justify-center bg-[#e9a83a] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              <div class="self-center pointer-events-none">КАК ДОБРАТЬСЯ</div>
            </button>
            <button
              id="visa"
              class="w-[25%] max-stb:w-full transition-all duration-300 py-[29px] max-lp:py-[25px] max-stb:py-[17px] flex justify-center bg-[#f9f6ed] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              <div class="self-center pointer-events-none">ВИЗЫ, РАЗРЕШЕНИЯ</div>
            </button>
            <button
              id="faq"
              class="w-[25%] max-stb:w-full transition-all duration-300 py-[29px] max-lp:py-[25px] max-stb:py-[17px] flex justify-center bg-[#f9f6ed] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              <div class="self-center pointer-events-none">
                ЧАСТО ЗАДАВАЕМЫЕ<br />
                ВОПРОСЫ
              </div>
            </button>
            <button
              id="maps"
              class="w-[25%] max-stb:w-full transition-all duration-300 py-[29px] max-lp:py-[25px] max-stb:py-[17px] flex justify-center bg-[#f9f6ed] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              <div class="self-center pointer-events-none">КАРТЫ РАЙОНА</div>
            </button>
          </div>

          <transition>
            <div v-if="currentText === 'road'" class="mt-[25px]">
              <h2
                class="text-[20px] max-tb:text-[24px] max-tb:text-center main-font text-[#444] uppercase"
              >
                КАК ДОБРАТЬСЯ ДО БАЗОВОГО ЛАГЕРЯ
              </h2>

              <p class="main-font text-[17px] text-[#444] font-light mt-[25px]">
                Мы организуем <b>восхождение на пик Ленина с севера</b>, т.е. со стороны Киргизии.
                Поэтому отправной точкой для начала <b>экспедиции на Пик Ленина</b> является город
                <b>Ош</b> - самый большой город на юге Кыргызстана.
              </p>

              <p class="main-font text-[17px] text-[#444] font-light mt-[25px]">
                Путь <b>из Оша в Базовый лагерь</b> занимает <b>около 5 часов</b> (280 км) на
                автотранспорте и проходит по грандиозному Памирскому Тракту, через перевалы Чиирчик
                и Талдык, поселок Сары-Таш и живописную Алайскую долину.
              </p>

              <p class="main-font text-[17px] text-[#444] font-light mt-[25px]">
                Наша Компания организует переезд Ош - Базовый лагерь и обратный трансфер Базовый
                лагерь - Ош в любые удобные для вас даты в период функционирования Базовых лагерей -
                с 25 июня по 5 сентября.
              </p>

              <div class="mt-[25px] flex gap-[30px] items-center">
                <div>
                  <img src="/images/info/bus.png" />
                </div>

                <div class="main-font text-[16px] text-[#444] font-light">
                  <p class="font-semibold text-[17px]">Время отправления транспорта:</p>
                  <ul class="list-disc pl-[20px]">
                    <li><span class="">Ош - Базовый лагерь: 06:00 утра</span></li>
                    <li><span class="">Базового лагеря - Ош: в первой половине дня</span></li>
                  </ul>
                </div>
              </div>

              <h4 class="text-[17px] text-[#444] font-semibold main-font mt-[25px]">
                Добраться до Ошаможно 3 способами:
              </h4>

              <div
                class="mt-[25px] pl-[30px] border-l-4 border-[#c74e1c] text-[17px] main-font text-[#444]"
              >
                <div class="">
                  1. <b>Прямым перелетом в Ош</b> - есть прямые рейсы из Москвы и других городов СНГ
                  с прибытием в <b>международный аэропорт Оша</b>. Этот вариант заезда – самый
                  быстрый и удобный.
                </div>

                <div class="mt-[25px]">
                  2. <b>Через Бишкек</b> - столицу Кыргызстана и далее самолётом в г. Ош. Просим
                  учесть, что норма провоза багажа составляет 15 кг, оплата за перегруз – 0,5-1,5
                  USD/кг в зависимости от авиакомпании.
                </div>

                <div class="mt-[25px]">
                  3. <b>Через Ташкент</b> - столицу Узбекистана и далее автотранспортом в г. Ош за
                  6-7 часов, через живописный горный перевал «Камчик» и Ферганскую долину. Для
                  граждан более 80 государств установлен
                  <b>безвизовый режим въезда в Узбекистан</b> (подробнее о визе в Узбекистан можно
                  узнать <span class="text-[#c74e1c]">здесь</span>). При заезде через Ташкент
                  участникам экспедиции необходимо иметь при себе загранпаспорт.
                </div>
              </div>

              <div class="mt-[25px] text-[16px] text-[#c74e1c] font-semibold main-font">
                Карта заезда в Базовый лагерь под пиком Ленина »»
              </div>

              <div class="mt-[25px] h-[220px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.6439037781506!2d72.9151301!3d39.4773727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38be4f897feec1cd%3A0x61303dcd31d3e60a!2sBase%20Camp%20for%20Lenin%20Peak%20Expedition!5e0!3m2!1sru!2s!4v1742495190086!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </transition>

          <transition>
            <div v-if="currentText === 'visa'" class="mt-[25px]">
              <h3 class="text-[20px] main-font text-[#444]">
                ПРОПУСК В ЗОНУ ПОГРАНИЧНОГО КОНТРОЛЯ
              </h3>

              <p class="mt-[25px] text-[17px] main-font text-[#444]">
                <b>Пик Ленина</b> расположен <b>на границе между Киргизией и Таджикистаном</b>,
                поэтому вся территория от Базового лагеря и до самой вершины входит в
                <b>зону пограничного контроля</b>, для посещения которой требуется получить
                <b>специальное разрешение</b> - пропуск в зону пограничного контроля (ЗПК).
              </p>

              <p class="mt-[25px] text-[17px] main-font text-[#444]">
                <b>Оформить пропуск</b> можно через нашу Компанию. Для этого всем участникам без
                исключений необходимо <b>не позднее чем за 1 месяц до приезда</b> прислать нам
                ксерокопию паспорта и указать планируемые сроки пребывания. Мы оформляем пропуск
                только для своих гостей, заказавших в нашей Компании один из пакетов услуг.
                Оформление пропуска в качестве отдельной услуги не предусмотрено.
              </p>

              <h3 class="mt-[25px] text-[20px] main-font text-[#444]">ВИЗА В КЫРГЫЗСТАН</h3>

              <p class="mt-[25px] text-[17px] main-font text-[#444]">
                Въезд в Киргизию осуществляется по заграничному или общегражданскому паспорту
                (например, для граждан России). При варианте заезда через Ташкент (Узбекистан)
                необходимо при себе иметь загранпаспорт.
              </p>

              <p class="mt-[25px] text-[17px] main-font text-[#444] font-semibold">
                Для граждан следующих государств установлен безвизовый режим въезда в Кыргызстан:
              </p>

              <div
                class="mt-[25px] py-[18px] border-t-2 border-b-1 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">На неограниченный срок:</div>

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
                  <div
                    class="grid grid-cols-4 gap-[10px] justify-between text-[17px] main-font text-[#444] mt-[25px]"
                  >
                    <div>• Азербайджан</div>
                    <div>• Грузия</div>
                    <div>• Куба</div>
                    <div>• Россия</div>
                    <div>• Армения</div>
                    <div>• Казахстан</div>
                    <div>• Молдова</div>
                    <div>• Таджикистан</div>
                    <div>• Белоруссия</div>
                    <div>• КНДР</div>
                    <div>• Лаос</div>
                    <div>• Япония</div>
                    <div>• Вьетнам</div>
                  </div>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">На срок на 90 дней:</div>

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
                  <div
                    class="grid grid-cols-4 gap-[10px] justify-between text-[17px] main-font text-[#444] mt-[25px]"
                  >
                    <div>• Монголия</div>
                    <div>• Украина</div>
                  </div>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">На срок на 60 дней:</div>

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
                  <div
                    class="grid grid-cols-4 gap-[10px] justify-between text-[17px] main-font text-[#444] mt-[25px]"
                  >
                    <div>• Австралийский союз</div>
                    <div>• Австрия</div>
                    <div>• Бельгия</div>
                    <div>• Бахрейн</div>
                    <div>• Босния и Герцеговина</div>
                    <div>• Бруней-Даруссалам</div>
                    <div>• Ватикан</div>
                    <div>• Великобритания</div>
                    <div>• Венгрия</div>
                    <div>• Германия</div>
                    <div>• Нидерланды</div>
                    <div>• Греция</div>
                    <div>• Дания</div>
                    <div>• Исландия</div>
                    <div>• Ирландия</div>
                    <div>• Испания</div>
                    <div>• Италия</div>
                    <div>• Канада</div>
                    <div>• Катар</div>
                    <div>• Республика Корея</div>
                    <div>• Кувейт</div>
                    <div>• Латвия</div>
                    <div>• Литва</div>
                    <div>• Лихтенштейн</div>
                    <div>• Люксембург</div>
                    <div>• Мальта</div>
                    <div>• Монако</div>
                    <div>• Новая Зеландия</div>
                    <div>• Норвегия</div>
                    <div>• Объединенные Арабские Эмираты</div>
                    <div>• Польша</div>
                    <div>• Португалия</div>
                    <div>• Саудовская Аравия</div>
                    <div>• Сингапур</div>
                    <div>• Словакия</div>
                    <div>• Словения</div>
                    <div>• Соединенные Штаты Америки</div>
                    <div>• Турция</div>
                    <div>• Узбекистан</div>
                    <div>• Финляндия</div>
                    <div>• Франция</div>
                    <div>• Хорватия</div>
                    <div>• Чехия</div>
                    <div>• Швейцария</div>
                    <div>• Швеция</div>
                    <div>• Эстония</div>
                    <div>• Япония</div>
                  </div>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">На срок на 30 дней:</div>

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
                  <div
                    class="grid grid-cols-4 justify-between text-[17px] main-font text-[#444] mt-[25px]"
                  >
                    <div>• Малайзия</div>
                  </div>
                </div>
              </div>

              <div class="text-[#444] text-[17px] max-lp:text-[16px] main-font mt-[25px]">
                Иностранным гражданам других государств, которых нет в этих списках, требуется виза.
                Оформить <b>электронную визу в Кыргызстан</b> можно самостоятельно на
                <a href="http://www.evisa.e-gov.kg" class="text-[#c74e1c]"
                  >государственном портале</a
                >
                (http://www.evisa.e-gov.kg).
              </div>

              <div class="text-[#c74e1c] text-[16px] font-semibold main-font mt-[25px]">
                Дополнительные подробности по визе в Кыргызстан »»
              </div>

              <h3 class="mt-[25px] text-[20px] main-font text-[#444]">
                РЕГИСТРАЦИЯ ПО МЕРУ ПРЕБЫВАНИЯ
              </h3>

              <div class="text-[#444] text-[17px] max-lp:text-[16px] main-font mt-[25px]">
                Граждане 92 стран <b>освобождаются от регистрации в ОВИРе</b> в Кыргызской
                Республике, если сроки их пребывания не превышают 10 – 90 дней с момента въезда.
              </div>

              <div
                class="mt-[25px] py-[18px] border-t-2 border-b-2 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    Перечень этих государств с указанием сроков освобождения от регистрации для
                    каждой конкретной страны:
                  </div>

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
                  <table class="mt-[25px] w-full table-custom main-font font-light text-[16px]">
                    <thead>
                      <tr class="font-semibold">
                        <th>№</th>
                        <th>Наименование иностранного государства</th>
                        <th class="text-center">
                          Срок, в течение которого необходимо осуществить регистрацию в
                          уполномоченном государственном органе
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Австралия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Австрийская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Азербайджанская Республика</td>
                        <td>10 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Республика Албания</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Княжество Андорра</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Аргентинская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Республика Армения</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Содружество Багамских Островов</td>
                        <td>90 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Барбадос</td>
                        <td>28 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Королевство Бахрейн</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Республика Беларусь</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Королевство Бельгия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Республика Болгария</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Босния и Герцеговина</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>Федеративная Республика Бразилия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>Государство Бруней-Даруссалам</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>Ватикан</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>Соединенное Королевство Великобритании и Северной Ирландии</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>Венгрия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Боливарианская Республика Венесуэла</td>
                        <td>90 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>21</td>
                        <td>Социалистическая Республика Вьетнам</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>22</td>
                        <td>Федеративная Республика Германия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>Греческая Республика</td>
                        <td>90 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Грузия</td>
                        <td>90 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>Королевство Дания</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>Доминика</td>
                        <td>21 календарный день(*)</td>
                      </tr>
                      <tr>
                        <td>27</td>
                        <td>Государство Израиль</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>Республика Индонезия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>29</td>
                        <td>Исламская Республика Иран</td>
                        <td>8 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>Республика Ирландия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>31</td>
                        <td>Исландия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>Королевство Испания</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>33</td>
                        <td>Итальянская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>34</td>
                        <td>Республика Казахстан</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>35</td>
                        <td>Канада</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>36</td>
                        <td>Государство Катар</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>37</td>
                        <td>Республика Кипр (западный)</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>38</td>
                        <td>Республика Корея</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>39</td>
                        <td>Республика Коста-Рика</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>Республика Куба</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>41</td>
                        <td>Государство Кувейт</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>42</td>
                        <td>Лаосская Народно-Демократическая Республика</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>43</td>
                        <td>Латвийская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>44</td>
                        <td>Литовская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>45</td>
                        <td>Княжество Лихтенштейн</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>46</td>
                        <td>Великое Герцогство Люксембург</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>47</td>
                        <td>Республика Македония</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>48</td>
                        <td>Малайзия</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>49</td>
                        <td>Мальдивская Республика</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>50</td>
                        <td>Республика Мальта</td>
                        <td>60 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>51</td>
                        <td>Мексиканские Соединенные Штаты</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>52</td>
                        <td>Княжество Монако</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>53</td>
                        <td>Монголия</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>54</td>
                        <td>Королевство Нидерландов</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>55</td>
                        <td>Республика Никарагуа</td>
                        <td>90 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>56</td>
                        <td>Новая Зеландия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>57</td>
                        <td>Королевство Норвегия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>58</td>
                        <td>Объединенные Арабские Эмираты</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>59</td>
                        <td>Султанат Оман</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>60</td>
                        <td>Республика Перу</td>
                        <td>90 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>61</td>
                        <td>Республика Польша</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>62</td>
                        <td>Португальская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>63</td>
                        <td>Российская Федерация</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>64</td>
                        <td>Румыния</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>65</td>
                        <td>Республика Эль-Сальвадор</td>
                        <td>90 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>66</td>
                        <td>Республика Сан-Марино</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>67</td>
                        <td>Королевство Саудовская Аравия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>68</td>
                        <td>Республика Сербия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>69</td>
                        <td>Республика Сингапур</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>70</td>
                        <td>Словацкая Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>71</td>
                        <td>Республика Словения</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>72</td>
                        <td>Соединенные Штаты Америки</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>73</td>
                        <td>Королевство Таиланд</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>74</td>
                        <td>Республика Таджикистан</td>
                        <td>60 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>Туркменистан</td>
                        <td>10 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>76</td>
                        <td>Турецкая Республика</td>
                        <td>90 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>77</td>
                        <td>Украина</td>
                        <td>90 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>78</td>
                        <td>Республика Филиппины</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>79</td>
                        <td>Финляндская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>80</td>
                        <td>Французская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>81</td>
                        <td>Республика Хорватия</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>82</td>
                        <td>Черногория</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>83</td>
                        <td>Чешская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>84</td>
                        <td>Республика Чили</td>
                        <td>60 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>85</td>
                        <td>Швейцарская Конфедерация</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>86</td>
                        <td>Королевство Швеция</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>87</td>
                        <td>Демократическая Социалистическая Республика Шри-Ланка</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>88</td>
                        <td>Республика Эквадор</td>
                        <td>30 календарных дней(*)</td>
                      </tr>
                      <tr>
                        <td>89</td>
                        <td>Эстонская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>Южно-Африканская Республика</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>91</td>
                        <td>Япония</td>
                        <td>60 календарных дней</td>
                      </tr>
                      <tr>
                        <td>92</td>
                        <td>Республика Индия</td>
                        <td>30 календарных дней</td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    class="border-[#c74e1c] border-l-4 mt-[25px] text-[#444] main-font font-light text-[17px] pl-[20px]"
                  >
                    Граждане государств, которых нет в этом перечне, обязаны
                    <b>зарегистрироваться по месту пребывания</b> в течение 5 рабочих дней с момента
                    въезда в Кыргызскую Республику.
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <transition>
            <div v-if="currentText === 'faq'" class="mt-[25px]">
              <h3 class="text-[20px] main-font text-[#444]">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>

              <div class="mt-[25px] flex gap-[20px] items-center">
                <img src="/images/info/prep.png" />

                <p class="main-font text-[18px] font-bold text-[#444]">Подготовка к восхождению</p>
              </div>

              <div
                class="mt-[25px] py-[18px] border-t-2 border-b-1 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    1. Какая должна быть минимальная подготовка для восхождения на пик Ленина?
                  </div>

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
                  <p class="mt-[25px] text-[#444] main-font text-[17px] font-light">
                    Пик Ленина - технически не сложная вершина. Для совершения восхождения
                    необходимо иметь базовые альпинистские навыки:
                  </p>

                  <ul
                    class="list-disc pl-[40px] text-[17px] mt-[25px] font-light main-font text-[#444] border-l-4 border-[#c74e1c]"
                  >
                    <li>
                      <span class="pl-[20px]"
                        >Уметь <b>передвигаться в связках</b> по снежным и ледовым склонам разной
                        крутизны.</span
                      >
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        >Знать, как обращаться с <b>альпинистским снаряжением.</b></span
                      >
                    </li>
                    <li>
                      <span class="pl-[20px]">Иметь навыки <b>передвижения в кошках</b>.</span>
                    </li>
                    <li>
                      <span class="pl-[20px]">Знать <b>технику безопасности</b> в горах. </span>
                    </li>
                  </ul>

                  <p class="mt-[25px] text-[#444] main-font text-[17px] font-light">
                    Обязательна хорошая общая физическая подготовка, крепкое здоровье и грамотная
                    акклиматизация. Желателен опыт восхождений на вершины 5000+ метров.<br />

                    Если у вас мало альпинистского опыта, строго рекомендуем воспользоваться
                    услугами высотного гида. В обязательном порядке проконсультируйтесь с вашим
                    лечащим врачом на предмет возможности участия в высотных альпинистских
                    экспедициях.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">2. Должна ли быть страховка у восходителей?</div>

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
                  <div class="mt-[25px] text-[#444] main-font text-[17px] font-light">
                    Да, страховка обязательна.
                  </div>

                  <p class="mt-[25px] text-[#444] main-font text-[17px] font-light">
                    Страховой полис должен быть оформлен заранее, перед поездкой, на
                    <b>сумму не менее 20 000 долларов США</b>. Сканированную копию индивидуального
                    страхового полиса необходимо будет выслать нам на почту в ходе предварительной
                    переписки, а по прибытии в Базовый Лагерь - отдать копию страхового полиса
                    коменданту.
                  </p>

                  <div class="mt-[25px]">
                    <a href="#" class="text-[#c74e1c] main-font text-[17px] font-semibold"
                      >Подробнее о требованиях к страховому полису</a
                    >
                  </div>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    3. Какое наилучшее время для успешного восхождения на пик Ленина?
                  </div>

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
                  <p class="mt-[25px] text-[#444] main-font text-[17px] font-light">
                    Период <b>с середины июля до конца августа</b> - именно в это время
                    устанавливается наиболее стабильная и достаточно предсказуемая погода.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    4. Когда и как можно заказать услуги высотного гида?
                  </div>

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
                  <p class="mt-[25px] text-[#444] main-font text-[17px] font-light">
                    <b>Заказать услуги гида</b> можно по электронной почте
                    adventure@centralasia-travel.com во время предварительной переписки или по
                    телефонам:
                  </p>

                  <ul
                    class="list-disc list-inside pl-[20px] text-[#444] font-light text-[17px] main-font"
                  >
                    <li><span class="pl-[20px]">+7 (499) 50498 99 - Россия </span></li>
                    <li><span class="pl-[20px]">(+996) 55665 77 99 - Киргизия</span></li>
                    <li><span class="pl-[20px]">(+99871) 20002 99 - Узбекистан</span></li>
                  </ul>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    5. Где лучше пройти акклиматизацию перед восхождением на пик Ленина?
                  </div>

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
                  <div class="mt-[25px] text-[#444] main-font text-[17px] font-light">
                    Перед восхождением на семитысячник желательно совершить восхождения на вершины
                    <b>4500 - 5000+ м</b>: Эльбрус, Белуха и др. В процессе этих восхождений вы
                    получите полезный опыт и необходимую акклиматизацию, которая в дальнейшем
                    поможет быстрее адаптироваться к высоте на пике Ленина.
                  </div>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    6. Какое снаряжение мне понадобится при восхождении на пик Ленина?
                  </div>

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
                  <p class="mt-[25px] text-[#444] main-font text-[17px] font-light">
                    <b>Подходящее снаряжение</b> – один из главных факторов успешного восхождения,
                    поэтому мы посвятили этому целый раздел. Там мы подробно и с конкретными
                    примерами рассмотрели, какая одежда, обувь и другое снаряжение точно пригодятся
                    при восхождении на пик Ленина.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    7. Нужна ли мне виза в Киргизию? Нужно ли оформлять какие-то другие важные
                    документы и разрешения?
                  </div>

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
                  <p class="mt-[25px] text-[#444] main-font text-[17px] font-light">
                    Чтобы соблюсти законодательство Киргизской Республики в процессе поездки и
                    восхождения на пик Ленина, следующие три документа должны быть в порядке:
                  </p>

                  <ul
                    class="list-disc list-inside pl-[20px] text-[#444] font-light text-[17px] main-font"
                  >
                    <li>
                      <span class="pl-[20px]"
                        ><b>Виза в Кыргызстан</b>. Большинству въезжающих она не нужна, но лучше
                        заранее проверить это здесь.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Регистрация по месту пребывания</b>. Граждане 92 стран освобождаются от
                        регистрации в Киргизии на разные сроки. Перечень этих государств с указанием
                        сроков освобождения от регистрации для каждой конкретной страны можно
                        посмотреть здесь.</span
                      >
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Пропуск в зону пограничного контроля (ЗПК)</b> - специальное разрешение
                        для посещения района пика Ленина, которое необходимо оформить каждому без
                        исключений, независимо от гражданства. Если вы едете на Ленина с нами, то
                        пропуск мы вам оформим.</span
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-[50px] flex gap-[20px] items-center">
                <img src="/images/info/money.png" />

                <p class="text-[17px] font-bold main-font text-[#444]">Деньги и оплата</p>
              </div>

              <div
                class="mt-[25px] py-[18px] border-t-2 border-b-1 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">8. Когда и как производить оплату за тур?</div>

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
                    Порядок оплаты программы:
                  </p>

                  <ul
                    class="list-disc list-inside pl-[20px] text-[#444] font-light text-[17px] main-font"
                  >
                    <li>
                      <span class="pl-[20px]"
                        ><b>Предоплату в размере 30%-50%</b> от стоимости выбранного пакета
                        необходимо осуществить не позднее чем за 1 месяц до старта сезона (до конца
                        мая). Копию платёжного поручения нужно будет выслать нам в электронном виде.
                        После этого заявка на участие в программе восхождения на пик Ленина
                        считается принятой.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">
                        <b>За 2 недели до даты прибытия</b> нужно подтвердить своё участие в
                        программе и осуществить оплату остальной части стоимости выбранного пакета.
                        Копию платёжного поручения мы также попросим прислать нам в электронном
                        виде.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">
                        В некоторых случаях возможна частичная <b>оплата за тур по прибытию</b> в
                        Ош.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">9. Предоставляются ли какие-либо скидки?</div>

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
                    Да, предоставляются. Все вопросы относительно возможных скидок оговариваются в
                    индивидуальном порядке в ходе предварительной переписки.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">10. Какая валюта в ходу на пике Ленина?</div>

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
                    В лагерях пика Ленина принимаются <b>доллары США, Евро</b>, российские
                    <b>рубли</b> и киргизские <b>сомы</b>. Предпочтение отдаётся долларам США.
                    Просим учесть, что в Киргизии принимаются к обмену только новые купюры, изданные
                    не ранее 2000 года, без надписей, заломов и других повреждений.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    11. Можно пользоваться банковской картой или обязательно иметь наличные деньги?
                  </div>

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
                  <ul
                    class="mt-[25px] text-[17px] main-font font-light text-[#444] pl-[20px] list-inside list-disc"
                  >
                    <li>
                      <span
                        >В <b>лагерях пика Ленина</b> принимаются только наличные (доллары США,
                        Евро, российские рубли и киргизские сомы).
                      </span>
                    </li>
                    <li>
                      <span
                        >В <b>Бишкеке и Оше</b> банковскими картами (Visa, Mastercard) можно
                        расплатиться только в крупных супермаркетах и отелях, тогда как на рынках и
                        в небольших магазинах принимаются только наличные (киргизские сомы). При
                        себе лучше иметь достаточное количество наличных денег.</span
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    12. Сколько наличных денег нужно иметь с собой на всякий случай?
                  </div>

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
                    Наличные деньги на территории Базового Лагеря вам могут понадобиться, если вы
                    захотите посетить мини-маркет или воспользоваться дополнительными услугами, не
                    включенными в стоимость вашего пакета (скоростной интернет, незапланированная
                    аренда снаряжения, услуги портеров, дополнительная ночь в Базовом лагере,
                    сувениры, напитки и т.д.). Здесь вы можете посмотреть стоимость всех
                    дополнительных услуг, чтобы определиться, какая сумма лично вам может
                    понадобиться во время восхождения.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    13. Можно ли на месте договориться с портерами о переноске моего личного груза?
                  </div>

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
                    Да, можно. Подобные вопросы следует решать при участии коменданта Лагеря,
                    который проконтролирует работу своих подопечных, будет гарантировать сохранность
                    вашего груза и цивилизованное решение всех вопросов в случаях возникновения
                    разногласий.
                  </p>
                </div>
              </div>

              <div class="mt-[50px] flex gap-[20px] items-center">
                <img src="/images/info/trans.png" />

                <p class="text-[17px] main-font font-bold text-[#444]">
                  Организационные моменты и транспорт
                </p>
              </div>

              <div
                class="mt-[25px] py-[18px] border-t-2 border-b-1 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">14. Откуда начинается программа?</div>

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
                    Программа начинается в городе <b>Ош</b> на юге Киргизии. Здесь вас будет ожидать
                    автотранспорт, на котором вы доберетесь до Базового лагеря пика Ленина примерно
                    за 5 ч.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                    Если из вашего города нет прямых авиарейсов до Оша, то мы можем предложить
                    <b>2 альтернативных варианта заезда</b>:
                  </p>

                  <ul
                    class="list-disc list-inside text-[17px] text-[#444] main-font pl-[20px] mt-[25px]"
                  >
                    <li><b>Через Ташкент</b> (Узбекистан) и далее автотранспортом до Оша.</li>
                    <li><b>Через Бишкек</b> (Киргизия) и далее авиаперелетом в Ош.</li>
                  </ul>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    15. Где нас встретят? Как мы попадем в район пика Ленина, на каком транспорте?
                  </div>

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
                    Вас встретят наши представители в аэропорту Оша (Ташкента /Бишкека), проводят до
                    транспорта и окажут необходимое содействие при возникновении любых вопросов.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                    Переезд <b>Ош - Базовый лагерь</b> (время в пути – 5-6 часов) мы организуем на
                    <b>комфортабельном автотранспорте</b> (спринтер/ джип в зависимости от
                    количества человек) в любые удобные для вас даты в период функционирования
                    Базовых лагерей.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                    Подробнее о том, как добраться до пика Ленина.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    16. Как быть, если мне понадобится уехать из Базового лагеря раньше/позже
                    запланированного срока?
                  </div>

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
                    При посадке на транспорт, отправляющийся из Базового лагеря в Ош, приоритет
                    отдаётся тем участникам, которые <b>заранее забронировали данную дату</b> для
                    переезда в Анкете-заявке.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                    Если во время программы у вас возникла необходимость изменить запланированные
                    даты переезда из Базового лагеря в Ош, следует как можно скорее обсудить этот
                    вопрос с комендантом Базового лагеря. Комендант внесет корректировки в график и,
                    если есть свободные места в транспорте на нужную дату, подтвердит вам изменение
                    дня переезда. Или предложит ближайшую возможную дату переезда, где имеются
                    свободные места.
                  </p>
                </div>
              </div>

              <div class="mt-[50px] flex gap-[20px] items-center">
                <img src="/images/info/group.png" />

                <p class="text-[17px] main-font font-bold text-[#444]">Групповой тур</p>
              </div>

              <div
                class="py-[18px] border-t-2 border-b-1 mt-[25px] border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    17. Какое количество участников в группе обычно бывает? Сколько гидов работает с
                    группой?
                  </div>

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
                    Обычно в группу набирается от 2 до 9 человек.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">При этом:</p>

                  <ul
                    class="list-disc list-inside pl-[20px] text-[17px] main-font font-light text-[#444]"
                  >
                    <li><span class="pl-[20px]">с группой из 2-3 чел. работает 1 гид;</span></li>
                    <li><span class="pl-[20px]">с группой из 4-6 чел. работает 2 гида;</span></li>
                    <li><span class="pl-[20px]">с группой из 7-9 чел. работает 3 гида.</span></li>
                  </ul>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">18. А если группа не набралась?</div>

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
                    Такого не бывает. Все наши восхождения состоятся даже при условии одного
                    бронирования. Смело покупайте билеты.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    19. Что будет, если кто-то из группы не сможет продолжить восхождение?
                  </div>

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
                    С группой работает несколько гидов. Поэтому если кто-либо из участников не
                    сможет или не захочет продолжить восхождение, один из гидов спустит его в
                    Базовый Лагерь. Помимо гидов, работающих непосредственно с группой, у нас в
                    Лагере 1, Лагере 2 и Лагере 3 на постоянной основе находятся дежурные гиды,
                    которые всегда готовы прийти на помощь нашим гостям.
                  </p>
                </div>
              </div>

              <div class="mt-[50px] flex gap-[20px] items-center">
                <img src="/images/info/food.png" />

                <p class="text-[17px] main-font font-bold text-[#444]">Питание и здоровье</p>
              </div>

              <div
                class="py-[18px] border-t-2 border-b-1 mt-[25px] border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    20. Как мы будем питаться на каждом этапе восхождения?
                  </div>

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
                  <ul
                    class="mt-[25px] list-disc list-inside pl-[20px] text-[17px] main-font font-light text-[#444]"
                  >
                    <li>
                      <span class="pl-[20px]"
                        ><b>Города</b>. При размещении в гостинице по прибытии и убытии в стоимость
                        включен завтрак. Обеды и ужины в городах не включены.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Переезд Ош</b> – Базовый Лагерь – Ош: каждому участнику мы предоставляем
                        ланчбокс.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Базовый лагерь</b> (3600 м) и <b>Лагерь 1</b> (4400 м): полный пансион –
                        вкусное и разнообразное горячее трехразовое питание от профессиональных
                        поваров включено во все пакеты (кроме «Супер-Эконом»; в пакете «Эконом»
                        включено питание только в Базовом лагере). Есть вегетарианские блюда,
                        возможно индивидуальное питание. Подробнее о меню в Базовых лагерях.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">
                        Высотные <b>Лагерь 2</b> (5300 м) и <b>Лагерь 3</b> (6100 м): готовить пищу
                        вы будете самостоятельно из тех продуктов, которые привезете с собой или
                        возьмете/приобретете в Базовом лагере. Для участников, приехавших по пакетам
                        «Бизнес», «Бизнес Плюс», «Групповой» и «VIP» мы бесплатно предоставляем
                        фиксированный набор продуктов для восхождения со склада Базового лагеря. Для
                        пакета «VIP» - приготовление пищи в Лагере 2 и Лагере 3 включено в
                        стоимость.
                      </span>
                    </li>
                  </ul>

                  <p class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                    Фиксированный набор продуктов включает супы и каши быстрого приготовления,
                    тушёнку, рыбные консервы, колбасу, сыр, крупы, макаронные изделия, сгущёнку,
                    шоколад, шоколадные батончики, конфеты, сухофрукты, орехи, чай, кофе, сахар,
                    печенье, хлеб (в том числе, свежие лепёшки), свежие овощи и фрукты и пр.
                  </p>

                  <p class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                    Дополнительные специализированные продукты для восхождения (сублимированные
                    продукты, изотоники и т.д.) всегда можно приобрести в
                    <b>мини-маркете на территории Базового лагеря</b>.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    21. Как обстоят дела с водой? Можно ли пить воду из горных ручьев?
                  </div>

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
                  <ul
                    class="mt-[25px] pl-[20px] list-disc list-inside text-[17px] text-[#444] main-font font-light"
                  >
                    <li>
                      <span class="pl-[20px]"
                        ><b>В городах</b> следует пить только бутилированную воду.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>В Базовом лагере и Лагере 1</b> можно брать бесплатную кипяченую воду в
                        юртах-столовых, либо пить бутилированную воду.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Выше Лагеря 1</b> (4400 м) можно брать воду из горных ручьев, но пить ее
                        лучше только после кипячения.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left w-[90%]">
                    22. Возможно ли в Оше перед переездом в Базовый Лагерь закупить продукты для
                    восхождения? Есть ли в районе пика Ленина магазин, где можно купить товары
                    первой необходимости?
                  </div>

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
                    Да. Вы сможете закупить необходимые продукты на Ошском базаре или в одном из
                    супермаркетов в день прибытия в Ош или прямо перед выездом в Базовый лагерь.
                  </p>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                    На территории нашего Базового лагеря (3600 м) функционирует <b>мини-маркет</b>,
                    где можно приобрести товары первой необходимости, предметы гигиены,
                    специализированные продукты для восхождения (сублиматы, изотонические напитки и
                    т.д.), альпинистское снаряжение и многое другое.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">23. Есть ли в Базовом лагере дежурный врач?</div>

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
                    Да. В Базовом лагере и Лагере 1 есть медпункт и всегда присутствует врач.
                  </p>
                </div>
              </div>

              <div class="mt-[50px] flex gap-[20px] items-center">
                <img src="/images/info/camp.png" />

                <p class="text-[17px] main-font font-bold text-[#444]">Проживание</p>
              </div>

              <div
                class="py-[18px] mt-[25px] border-t-2 border-b-1 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left w-[90%]">
                    24. Где мы будем жить на каждом этапе восхождения?
                  </div>

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
                  <ul
                    class="mt-[25px] text-[17px] main-font font-light text-[#444] pl-[20px] list-disc list-inside"
                  >
                    <li>
                      <span class="pl-[20px]"
                        ><b>Города</b>: размещение в гостиницах в двухместных номерах с завтраком.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Базовый лагерь</b> (3600 м): размещение в отапливаемых кемпинговых
                        палатках по 2 человека. Кемпинговые палатки оснащены электричеством
                        (розетками, индивидуальными обогревателями, освещением), раскладными
                        кроватями, матрасами, одеялами, подушками, сменным постельным бельём,
                        стульями. Подробнее об инфраструктуре Базового лагеря можно почитать здесь.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">
                        <b>Лагерь 1</b> (4400 м): размещение в кемпинговых палатках по 2 человека.
                        Палатки оснащены деревянными настилами, теплоизоляцией, поролоновыми
                        матрасами. Подробнее об инфраструктуре Лагеря 1 можно почитать здесь.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        >Высотные <b>Лагерь 2</b> (5300 м) и <b>Лагерь 3</b> (6100 м): размещение в
                        заранее установленных высотных палатках (в зависимости от выбранного
                        пакета).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">25. Есть ли место для хранения вещей?</div>

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
                    Да, в Базовом лагере и Лагере 1 имеются <b>камеры хранения</b>. Перед выходом из
                    Базового лагеря (Лагеря 1) сдайте вещи, которые вы не берете с собой, в камеру
                    хранения – только в этом случае мы можем гарантировать их сохранность. Не
                    забывайте свои личные вещи и снаряжение в палатках и юртах.
                  </p>
                </div>
              </div>

              <div class="mt-[50px] flex gap-[20px] items-center">
                <img src="/images/info/wi-fi.png" />

                <p class="main-font text-[18px] font-bold text-[#444]">
                  Интернет, мобильная связь, гаджеты
                </p>
              </div>

              <div
                class="py-[18px] border-t-2 border-b-1 mt-[25px] border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    26. Какую местную симку лучше приобрести, чтобы хорошо работал мобильный
                    интернет под пиком Ленина?
                  </div>

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
                    В Киргизии услуги сотовой связи и мобильного интернета предоставляют три
                    популярных оператора:
                  </p>

                  <ul
                    class="list-disc list-inside pl-[20px] text-[17px] main-font font-light text-[#444]"
                  >
                    <li>
                      <span class="pl-[20px]">«Мегаком» </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">«Beeline» </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">«О» </span>
                    </li>
                  </ul>

                  <p class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                    Все они примерно одинаково работают в горах. 3G в районе Базового Лагеря (3600
                    м) ловит, но не стабильно. Чем выше поднимаетесь, тем более нестабильная связь.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">27. Есть ли Wi-Fi интернет в Базовых лагерях?</div>

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
                    Да, стабильный высокоскоростной Wi-Fi есть и в Базовом лагере (3600 м), и в
                    Лагере 1 (4400 м). Услуги высокоскоростного интернета включены в стоимость
                    пакетов – “VIP” и «Бизнес-Плюс». Для остальных гостей стоимость пользования
                    Wi-Fi в Базовом лагере и Лагере 1 составляет 15$ / 300 Mб.
                  </p>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    28. Где я смогу заряжать свои гаджеты во время восхождения?
                  </div>

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
                  <ul
                    class="mt-[25px] list-disc list-inside pl-[20px] text-[17px] main-font font-light text-[#444]"
                  >
                    <li>
                      <span class="pl-[20px]"
                        >В <b>Базовом лагере</b> розетки есть в каждой палатке, вы сможете свободно
                        заряжаться в любое время суток.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        >В <b>Лагере 1</b> зарядить гаджеты можно в наших юртах в вечернее время (с
                        18:00 до 22:00).
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">Выше Лагеря 1 электричества нет. </span>
                    </li>
                  </ul>

                  <p class="mt-[25px] text-[17px] main-font font-light text-[#444]">
                    Рекомендуем привезти с собой Power bank (внешний аккумулятор), чтобы иметь
                    источник энергии в верхних лагерях.
                  </p>
                </div>
              </div>

              <div class="mt-[50px] flex gap-[20px] items-center">
                <img src="/images/info/dosug.png" />

                <p class="main-font text-[18px] font-bold text-[#444]">Досуг</p>
              </div>

              <div
                class="py-[18px] border-t-2 border-b-1 mt-[25px] border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">
                    29. Что интересного есть в окрестностях Базового лагеря?
                  </div>

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
                  <ul
                    class="mt-[25px] list-disc list-inside pl-[20px] text-[17px] main-font font-light text-[#444]"
                  >
                    <li>
                      <span class="pl-[20px]"
                        ><b>Поляна эдельвейсов</b> (3600 м), где расположен Базовый Лагерь, названа
                        так не случайно. В период цветения эдельвейсов это место становится самым
                        притягательным в округе.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Луковая поляна</b> (3 800 м) – там растет дикий лук-порей и в большом
                        количестве обитают сурки.</span
                      >
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        >Многочисленные <b>озера</b> по долине реки Ачик-Таш.</span
                      >
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Юрты местных жителей</b>, где можно познакомиться с бытом, традициями и
                        образом жизни горных кочевников, а также отведать кумыс – национальный
                        кисломолочный напиток кыргызов.</span
                      >
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Водопад</b> на пути к перевалу Путешественников.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Пик Петровского</b> (4 730 м). Подъем технически не сложный и доставит
                        массу приятных эмоций любителям живописных пейзажей и фотографии.</span
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d] overflow-hidden">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full cursor-pointer"
                  @click="toggleHiddenText"
                >
                  <div class="text text-left">30. Чем заняться в Оше, если осталось время?</div>

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
                    <b>Ош</b> (его называют «Южная столица») - самый большой город на юге
                    <b>Кыргызстана</b> и один из древних пунктов Великого Шелкового пути. В Оше вас
                    встретят добродушные и гостеприимные люди, оживлённые зелёные улицы со
                    множеством уютных кафешек.
                  </p>

                  <h3 class="mt-[25px] text-[20px] main-font font-semibold text-[#444]">
                    Что посмотреть в Оше:
                  </h3>

                  <ul
                    class="mt-[25px] list-disc list-inside pl-[20px] text-[17px] main-font font-light text-[#444]"
                  >
                    <li>
                      <span class="pl-[20px]"
                        >Национальный
                        <b>историко-археологический музейный комплекс «Сулайман-Тоо»</b> - главная
                        достопримечательность города, единственный в Киргизии объект, включенный в
                        список ЮНЕСКО. Пятиглавая <b>Сулейман-Гора</b> - один из отрогов Алайского
                        хребта, представляющий собой скалу высотой более 100 метров. Гора эта
                        возвышается прямо посреди городка и тем эффектнее смотрится на фоне
                        оживленной городской жизни, напоминая о непосредственной близости ее
                        величественных собратьев - гор Памира. С вершины Сулейман-горы открывается
                        <b>превосходная панорама</b>: внизу - кипящая городская жизнь, вдали -
                        дышащие спокойствием и уверенностью высокие горы. На одной из вершин горы
                        находится знаменитый <b>домик Бабура</b>. У подножия, в <b>пещере</b>,
                        расположен <b>Краеведческий музей</b>, где представлена уникальная коллекция
                        исторических и культурных ценностей.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Новая мечеть «Сулейман-Тоо»</b> – самая крупная в стране.
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">Колоритный <b>восточный базар</b>. </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">Мемориальный комплекс <b>«Вечный огонь»</b>. </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">Монументальный комплекс <b>«Манас»</b> </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">Михайло-Архангельская церковь. </span>
                    </li>
                    <li>
                      <span class="pl-[20px]"
                        ><b>Памятник Ленину</b> – самый большой в Средней Азии (высота – 25 м).
                      </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">Памятник Алымбек-датки. </span>
                    </li>
                    <li>
                      <span class="pl-[20px]">Памятник Курманжан-датки.</span>
                    </li>
                  </ul>
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
</template>

<style scoped>
.info-bg {
  background-image: url('/images/info/bg.png');
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

.table-custom tr:nth-child(odd) {
  @apply bg-[#fffffc];
}

.table-custom tr:nth-child(even) {
  @apply bg-[#f9f6ed];
}

td {
  padding: 16px 31px 20px;
}

tr td:nth-child(3) {
  text-align: center;
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
