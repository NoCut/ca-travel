<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue'

import { useRouter, RouterLink } from 'vue-router'
import { ref, nextTick } from 'vue'

const router = useRouter()

const currentText = ref('preparation')

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.href = '/'
  }
}

const changeText = async (event) => {
  currentText.value = ''
  await nextTick()
  currentText.value = event.target.id

  const buttons = Array.from(event.currentTarget.children)

  buttons.forEach((button) => {
    button.classList.remove('text-white')
    button.classList.remove('bg-[#e9a83a]')
    button.classList.add('bg-[#f9f6ed]')
  })

  event.target.classList.add('text-white')
  event.target.classList.add('bg-[#e9a83a]')
  event.target.classList.remove('bg-[#f9f6ed]')
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
  <HeaderTrigger />

  <main>
    <div class="req-bg bg-center max-tb:bg-left max-stb:bg-center max-mb:bg-left max-sm:bg-center px-[12.5%] max-lp:px-[14px] pb-[25px]">
      <div class="pt-[21px] flex justify-center">
        <img src="/images/main-logo.png" class="max-w-[400px] max-tb:hidden" />

        <img src="/images/logo.png" class="hidden max-tb:block max-mb:w-[177px] max-sm:hidden" />

        <img src="/images/logo-mob-2.png" class="hidden max-sm:block" />
      </div>

      <h1
        class="main-font font-semibold text-[72px] max-tb:text-[48px] max-stb:text-[36px] max-mb:text-[28px] max-tb:text-center text-white pt-[122px] max-tb:pt-[142px] max-stb:pt-[67px] max-sm:pt-[71px] drop-shadow-lg"
      >
        РЕКОМЕНДАЦИИ <br class="max-tb:hidden" />ГИДОВ
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
        class="flex gap-4 max-tb:items-center max-tb:justify-center max-tb:px-[32px] max-stb:px-[auto] max-sm:px-0 mt-[32px] max-stb:mt-[14px] max-mb:mt-[48px] justify-end"
      >
        <img src="/images/calendar.png" class="max-sm:w-[32px]" />

        <div class="main-font text-white text-[20px] max-stb:text-[15px] max-sm:text-[14px] max-tb:w-full">
          Наши лагеря будут открыты<br class="max-tb:hidden max-mb:block" />
          с 29 июня по 1 сентября 2021 г.
        </div>
      </div>
    </div>

    <div class="px-[12.5%] max-lp:px-[14px] max-mb:px-[5px] pt-[29px]">
      <button @click="goBack" class="flex gap-[10px]">
        <img src="/images/clearsnow/arrow.svg" class="text-[#c74e1c] w-[15px]" />

        <div class="text-[15px] text-[#888] main-font">(ПРЕДЫДУЩАЯ СТРАНИЦА)</div>
      </button>

      <h2
        class="text-[36px] max-tb:text-[32px] max-mb:text-[24px] max-tb:text-center mt-[75px] main-font text-[#444] font-semibold"
      >
        РЕКОМЕНДАЦИИ ГИДОВ
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
              id="preparation"
              class="text-white w-[25%] transition-all duration-300 max-stb:w-full py-[29px] max-stb:py-[17px] flex justify-center bg-[#e9a83a] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              ПОДГОТОВКА
            </button>
            <button
              id="equipment"
              class="w-[25%] max-stb:w-full transition-all duration-300 py-[29px] max-stb:py-[17px] flex justify-center bg-[#f9f6ed] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              СНАРЯЖЕНИЕ
            </button>
            <button
              id="food"
              class="w-[25%] max-stb:w-full transition-all duration-300 py-[29px] max-stb:py-[17px] flex justify-center bg-[#f9f6ed] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              ПИТАНИЕ
            </button>
            <button
              id="arrival"
              class="w-[25%] max-stb:w-full transition-all duration-300 py-[29px] max-stb:py-[17px] flex justify-center bg-[#f9f6ed] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              ВОСХОЖДЕНИЕ
            </button>
            <button
              id="kit"
              class="w-[25%] max-stb:w-full transition-all duration-300 py-[29px] max-stb:py-[17px] flex justify-center bg-[#f9f6ed] hover:bg-[#e9a83a] hover:text-white cursor-pointer"
            >
              АПТЕЧКА
            </button>
          </div>

          <transition name="fade" mode="out-in">
            <div class="" v-if="currentText === 'preparation'">
              <h3 class="main-font text-[#444] text-[20px] max-sm:text-[15pxЫ] mt-[25px]">ПОДГОТОВКА К ВОСХОЖДЕНИЮ</h3>

              <div
                class="mt-[52px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
              >
                Распространено мнение, что Пик Ленина - <b>самый лёгкий из семитысячников</b> СНГ.
                Это верно, но со многими оговорками. Не стоит занижать трудность и забывать, что
                высота Пика Ленина превышает отметку в 7000 метров.
              </div>

              <div
                class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
              >
                <b>Маршрут восхождения на пик Ленина</b> через вершину Раздельная
                <b>технически не сложный</b>, здесь нет отвесных стен, не требуется лазание, маршрут
                проходится пешком (иногда в связках).
              </div>

              <div
                class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
              >
                Основные трудности связаны с преодолением <b>ледовых трещин</b>, с давящей
                <b>высотой</b> (нехватка кислорода, горная болезнь) и
                <b>экстремальными погодными условиями</b> (низкие температуры, сильный ветер,
                солнечная радиация, большой перепад дневных и ночных температур). Поэтому при
                подготовке к восхождению на пик Ленина следует уделить внимание тренировкам,
                направленным на <b>укрепление сердечно-сосудистой системы и силы</b> для отдельных
                групп мышц, а также повышение общей <b>выносливости организма</b>.
              </div>

              <div
                class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
              >
                Процесс <b>подготовки к восхождению</b> можно условно разделить так:
              </div>

              <div
                class="mt-[44px] py-[18px] border-t-2 border-b-1 border-[#9d9d9d] overflow-hidden"
              >
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold items-center main-font w-full"
                  @click="toggleHiddenText"
                >
                  <div class="text">Физическая подготовка</div>

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
                    class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                  >
                    Рекомендуем как минимум за полгода до восхождения начать регулярные
                    <b>кардио-тренировки</b>: бег на длинные дистанции, желательно по пересеченной
                    местности с перепадами высот + <b>бег по лестнице</b>/ беговые
                    <b>лыжи/ плавание</b>, а также <b>силовую подготовку</b> (особенно для мышц ног
                    и спины). При постоянных <b>аэробных нагрузках</b>
                    значительно повышается выносливость и стрессоустойчивость, увеличивается объем
                    легких вследствие повышенной потребности кислорода во время тренировок,
                    укрепляется сердечно-сосудистая система.
                  </div>

                  <div
                    class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                  >
                    Кроме того, полезно заранее <b>приучать организм к холоду</b>: контрастный душ,
                    обтирание полотенцем, смоченным в холодной воде, тренировки на свежем воздухе
                    зимой, понижение температуры в помещении и т.д.
                  </div>

                  <div
                    class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                  >
                    Примерно за две недели до восхождения следует прекратить интенсивные тренировки,
                    чтобы отдохнуть и восстановить силы. Важно уделить внимание сбалансированному
                    питанию, полноценному сну, укрепить иммунитет и повысить гемоглобин, лишний раз
                    посетить стоматолога, подлечить недомогания, если таковые имеются.
                  </div>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d]">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold main-font w-full"
                  @click="toggleHiddenText"
                >
                  <div class="text">Теоретическая подготовка</div>

                  <div class="relative">
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
                    class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                  >
                    Ознакомьтесь с тактикой восхождения на пик Ленина, чтобы понимать, что вас ждет
                    на маршруте. Обязательно нужно
                    <b>ознать технику безопасности в горах.</b> Особое внимание следует уделить
                    разделам по лавинной опасности, ледниковым трещинам, переправам через реки,
                    камнепадам.
                  </div>

                  <div
                    class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                  >
                    Рекомендуемая публицистическая и художественная литература по альпинизму:
                  </div>

                  <ul
                    class="list-['-'] ml-[20px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                  >
                    <li>Евгений Абалаков “На высочайших вершинах Советского Союза”</li>
                    <li>Владимир Шатаев “Категория трудности”</li>
                    <li>Тенцинг Норгей “Тигр Снегов”</li>
                    <li>Букреев А.Н, Г. Вестон Де Уолт “Восхождение”</li>
                  </ul>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d]">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold main-font w-full"
                  @click="toggleHiddenText"
                >
                  <div class="text">Подготовка снаряжения</div>

                  <div class="relative">
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
                    class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                  >
                    Подготовьте все необходимое снаряжение для восхождения на пик Ленина в
                    соответствии с рекомендованным списком от опытных гидов. В этом списке нет
                    ничего лишнего, каждая деталь пригодится в свое время. Не забудьте про личную
                    аптечку.
                  </div>
                </div>
              </div>

              <div class="py-[18px] border-t-1 border-b-2 border-[#9d9d9d]">
                <div
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold main-font w-full"
                  @click="toggleHiddenText"
                >
                  <div>Психологическая и морально-волевая подготовка</div>

                  <div class="relative">
                    <div
                      class="w-[12px] h-[1px] bg-[#444] transform transition-all duration-200 ease-in absolute top-1/2 right-1/2"
                    ></div>

                    <div
                      class="w-[12px] h-[1px] bg-[#444] transform transition-all duration-200 ease-in absolute top-1/2 right-1/2 rotate-90"
                    ></div>
                  </div>
                </div>

                <div class="hidden anim">
                  <div
                    class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                  >
                    Понятно, что цель любого восхождения – взойти на вершину и благополучно
                    вернуться домой живым и здоровым. При этом необходимо помнить, что от маленького
                    человека в больших горах зависит очень немного.
                  </div>

                  <ul
                    class="mt-[25px] list-disc ml-[20px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                  >
                    <li>
                      Мы не можем влиять на погоду, можем только подстроиться под нее. Нужно быть
                      готовым к тому, что, возможно, придется ждать погоды или менять свои планы в
                      соответствии с ней.
                    </li>
                    <li>
                      Нужно быть готовым повернуть назад во время штурма вершины, если вы не
                      укладываетесь в контрольное время в силу различных причин. Сделать это всегда
                      очень трудно, однако от этого решения может зависеть ваша жизнь.
                    </li>
                    <li>
                      Нужно всегда быть на стороне своего здоровья, если вдруг ваш организм поведет
                      себя на высоте не так, как вы планировали.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div
                  class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                >
                  <b>Принимать важные решения в горах</b> бывает непросто, особенно в состоянии
                  горной болезни, сильной усталости и истощения. Поэтому важно иметь крепкую волю,
                  уметь держать под контролем спонтанные эмоции, своевременно корректировать
                  аффективные реакции и поддерживать разум ясным.
                </div>

                <div
                  class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                >
                  На маршруте вам, возможно, не раз придется испытывать
                  <b>«пиковые переживания»</b>:
                </div>

                <ul
                  class="list-['-'] ml-[20px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                >
                  <li><b>восторг</b> от невыразимо красивой природы;</li>
                  <li>
                    <b>страх</b> перед преодолением ледниковых трещин и чувство удовлетворения,
                    когда этот страх преодолен;
                  </li>
                  <li>
                    <b>тревогу</b> при прохождении лавиноопасных участков или переправе через бурную
                    реку;
                  </li>
                  <li>
                    чувство огромного <b>душевного подъема</b> и радости при достижении вершины и
                    т.д.
                  </li>
                </ul>

                <div
                  class="mt-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
                >
                  Чтобы испытать подобные переживания и построить из этого опыта еще один кусочек
                  нашей личности, мы и едем в горы. Будьте готовы к ним.
                </div>
              </div>
            </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div class="" v-if="currentText === 'equipment'">
              <h3 class="mt-[25px] text-[20px] text-[#444] uppercase main-font">
                Снаряжение для восхождения на пик Ленина (7134 м)
              </h3>

              <div class="text-[20px] text-[#444] main-font">
                Рекомендации по подбору альпинистского снаряжения, одежды и обуви для восхождения
              </div>

              <div
                class="text-[17px] max-lp:text-[16px] main-font font-light text-[#444] mt-[54px]"
              >
                Готовимся к восхождению на семитысячник и подбираем экипировку для высотного
                альпинизма.
              </div>

              <div
                class="mt-[25px] text-[17px] max-lp:text-[16px] main-font font-semibold text-[#444]"
              >
                Что нужно знать и помнить:
              </div>

              <ul
                class="list-disc list-inside mt-[25px] ml-[25px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light flex flex-col gap-[25px]"
              >
                <li>
                  Необходимо соблюдать проверенный и отлично зарекомендовавший себя
                  <b>принцип многослойности</b> одежды (термобелье + флисовый/шерстяной/пуховый
                  утеплитель + защита от ветра, влаги и мороза). Меняя количество слоев одежды на
                  себе, можно легко и быстро реагировать на изменение погодных условий и собственных
                  ощущений, не допуская ни перегрева, ни переохлаждения.
                </li>
                <li>
                  Успех восхождения во многом зависит от <b>качества экипировки</b>. Грамотно
                  подобранное качественное снаряжение позволит находиться в тепле и комфорте, не
                  утяжеляя при этом излишне рюкзак. Необходимо взять ровно столько снаряжения,
                  сколько точно пригодится при восхождении, поскольку каждый дополнительный грамм
                  становится отягощающим грузом на высоте.
                </li>
                <li>
                  При подъеме на каждую тысячу метров <b>температура снижается</b> в среднем на 6ºС.
                  Кроме того, нужно быть готовым к резким перепадам и изменениям погоды и большой
                  разнице между дневными и ночными температурами.
                </li>
                <li>
                  Ощущение температуры окружающей среды сильно <b>зависит от силы ветра</b>. Чем
                  сильнее ветер, тем холоднее.
                </li>
                <li>
                  <b>Ультрафиолетовое солнечное излучение</b> на высоте очень активно. Более того,
                  окружающий лед и снег до 80% его отражают. Вывод: обязательно ношение головного
                  убора и солнцезащитных очков, а также использование солнцезащитного крема с
                  высокой степенью защиты (SPF 25-40) даже в пасмурную погоду. При подъеме на каждую
                  тысячу метров уровень ультрафиолетового излучения возрастает на 10% - 12%.
                </li>
              </ul>

              <div
                class="mt-[25px] text-[17px] max-lp:text-[16px] main-font font-light text-[#444]"
              >
                А теперь подробно и с конкретными примерами рассмотрим, какая
                <b>одежда, обувь и другое снаряжение</b> точно пригодятся
                <b>при восхождении на пик Ленина</b>.
              </div>

              <div class="border-t-1 border-b-1 border-[#9d9d9d] py-[24px] mt-[25px]">
                <button
                  class="flex justify-between items-center text-[#444] text-[17px] max-lp:text-[16px] font-semibold main-font w-full"
                  @click="toggleHiddenText"
                >
                  <div>Снаряжение для восхождение на пик Ленина (7134 м)</div>

                  <div class="relative transform transition-all">
                    <div
                      class="w-[12px] h-[1px] bg-[#444] transform transition-all duration-200 ease-in absolute rotate-45 top-1/2 right-1/2"
                    ></div>

                    <div
                      class="w-[12px] h-[1px] bg-[#444] transform transition-all duration-200 ease-in absolute top-1/2 right-1/2 rotate-135"
                    ></div>
                  </div>
                </button>

                <div class="hidden anim">
                  <div class="flex gap-[10px] items-center mt-[29px]">
                    <img src="/icons/download2.png" />
                    <div class="text-[16px] main-font font-semibold text-[#c74e1c]">
                      Скачать список снаряжения
                    </div>
                  </div>

                  <table class="w-full mt-[30px] main-font text-[16px] font-light table-custom">
                    <thead>
                      <tr class="">
                        <th class="w-[50px] px-[31px] pt-[16px] bg-[#f9f6ed]">№</th>
                        <th class="w-full bg-[#f9f6ed]">Рекомендуемое снаряжение</th>
                      </tr>
                    </thead>

                    <tbody class="text-left">
                      <tr>
                        <td class="font-light align-top">1</td>
                        <td class="font-light">
                          <b>Ботинки легкие трековые</b> (<span class="text-[#c74e1c]"
                            >Scarpa kailash GTX, Salomon Quest 4D GTX, The North Face Wreck Mid
                            GTX</span
                          >
                          или аналоги) или <b>кроссовки</b> (<span class="text-[#c74e1c]"
                            >SALEWA MTN Trainer GTX, Garmont Dragontail MNT GTX</span
                          >
                          или аналоги), и/или <b>сандалии</b> (<span class="text-[#c74e1c]"
                            >Teva, Keen</span
                          >
                          или аналоги) для перемещения по нижним лагерям (БЛ, Л1) и между ними.
                          Кроме того, в Оше летом жарко, требуется открытая обувь.
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <b>Ботинки для высотных маршрутов</b> - кожаные или пластиковые, двойные
                          или тройные, для высот от 6000м (<span class="text-[#c74e1c]"
                            >la Sportiva Spantik, Scarpa Phantom</span
                          >
                          и т.д.). Можно с бахилами для пущей уверенности.
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <b>Куртка штормовая, например GORE-TEX</b> (<span class="text-[#c74e1c]"
                            >RedFox Vector GTX III</span
                          >
                          или подобные).
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <b>Брюки штормовые, например GORE-TEX</b> или полукомбинезон (п.6) (<span
                            class="text-[#c74e1c]"
                            >RedFox Vector GTX III</span
                          >
                          или подобные).
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <b>Куртка пуховая</b> или с синтетическим утеплителем типа PrimaLoft или
                          ThermoBall и тд. (<span class="text-[#c74e1c]">BASK Valdez</span> и т.д.)
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <b>Полукомбинезон GORE-TEX</b> (например,
                          <span class="text-[#c74e1c]">RedFox Gravity GTX</span>). Если есть
                          штормовые мембранные брюки (п.4), то комбинезон не нужен.
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <b>Спальный мешок пуховый</b> или с синтетическим утеплителем с
                          температурой комфорта не выше -15 (<span class="text-[#c74e1c]"
                            >BASK MUSTANG 700+FP</span
                          >
                          или подобный).
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <b>Костюм POLARTEC</b> (например, куртка
                          <span class="text-[#c74e1c]">BASK Kondor V3</span> + штаны
                          <span class="text-[#c74e1c]">BASK Vinson Pro V2</span>)
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          <b>Белье нательное POLARTEC</b> - два комплекта: тонкое - для отвода влаги
                          (например, <span class="text-[#c74e1c]">RedFox Dry Zone</span>) и толстое
                          - для утепления (например, комплект
                          <span class="text-[#c74e1c]">куртка + штаны от BASK</span>)
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>
                          <b>Рукавицы для высотных восхождений</b> пуховые или с синтетическим
                          утеплителем - PrimaLoft и т.д. (например,
                          <span class="text-[#c74e1c]">BASK Brooks-D V2</span> или
                          <span class="text-[#c74e1c]">BASK Creative Mitten V3</span>) Чуни
                          утепленные для сна пуховые или с синтетическим утеплителем - PrimaLoft и
                          тд. (например, <span class="text-[#c74e1c]">Baffin Cush Booty</span>).
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>
                          <b>Перчатки тонкие Fleece</b>, Polartec, WindBloc и толстые с утеплителем
                          (например, <span class="text-[#c74e1c]">RedFox Ice</span>)
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>
                          <b>Кепка или панама + утепленная шапка</b>. Кепка легкая с защитой шеи
                          (Outdoor Research Sun Runner Cap, Outdoor Research Activeice Cap или
                          похожая) или панама (Outdoor Research Conzumel Sombrero, Outdoor Research
                          Helios Sun Hat или похожая) + шапка утепленная (Outdoor Research
                          Windwarrior Hat, Outdoor Research Peruvian Hat или похожая).
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Майки трикотажные.</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>
                          Фонарики от снега (например Outdoor Research Rocky Mountain High Gaiters)
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>
                          Носки высокие, термоноски типа Boreal TREK Thermolite или аналоги +
                          обычные носки.
                        </td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>
                          Балаклава (BASK THOR V2, BASK Cascade V2 или похожая) или теплая баффка
                          (типа Thermal Buff).
                        </td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>
                          Термос металлический емкостью не менее 1 литра, а лучше 1,2 литра
                          (например, термофляга Polar с термочехлом - легче).
                        </td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>
                          Коврик «Каремат». Обычный двойной ижевский коврик может оказаться
                          холодным, лучше тонкий каремат + тонкий надувной коврик типа Therm-A-rest
                          Neo-Air XLite (и комфортно, и тепло).
                        </td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>
                          Рюкзак для восхождения 70-80 л с накидкой от дождя - так рюкзак и
                          фурнитура дольше проживут.
                        </td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>
                          Зажимы - жумары правый или левый - 1 жумар. Или что-то полегче типа
                          WildCountry Ropeman или Petzl Tibloc.
                        </td>
                      </tr>
                      <tr>
                        <td>21</td>
                        <td>
                          Страховочное устройство типа «Восьмерка». Но гораздо современнее Petzl
                          Reverso, а еще лучше Black Diamond ATC Guide, ВЕНТО Лукошко или аналоги.
                        </td>
                      </tr>
                      <tr>
                        <td>22</td>
                        <td>Обвязка - страховочная система.</td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>Карабин с муфтой (3+1 шт).</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Два 6-7 мм репшнура (кордалета) длиной 4-5 м.</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>Два ледобура.</td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>Лопата снежная (достаточно 1 шт. на палатку).</td>
                      </tr>
                      <tr>
                        <td>27</td>
                        <td>Губная помада гигиеническая.</td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>Крем солнцезащитный SPF 25-40 единиц.</td>
                      </tr>
                      <tr>
                        <td>29</td>
                        <td>
                          Баул транспортный. Не обязателен, но удобен для того, чтобы довезти вещи
                          до Базового лагеря и поднять их на лошадях в Лагерь 1.
                        </td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>Нож перочинный.</td>
                      </tr>
                      <tr>
                        <td>31</td>
                        <td>Кошки - должны подходить к выбранным ботинкам.</td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>
                          Ледоруб с прямой ручкой без накладок, должен быть подобран по росту
                          (например, Black Diamond Raven).
                        </td>
                      </tr>
                      <tr>
                        <td>33</td>
                        <td>Очки солнцезащитные + иметь запасные.</td>
                      </tr>
                      <tr>
                        <td>34</td>
                        <td>Палки телескопические.</td>
                      </tr>
                      <tr>
                        <td>35</td>
                        <td>Фонарь налобный.</td>
                      </tr>
                      <tr>
                        <td>36</td>
                        <td>
                          Веревка альпинистская (нейлон, сейлон) 8,6 - 10 мм, 20-45 м. Длина - в
                          зависимости от количества человек в связке. Для спортивных групп
                          оптимальным считается – 20 м на 2 чел, 45 м на 3-4 чел.
                        </td>
                      </tr>
                      <tr>
                        <td>37</td>
                        <td>Палатка 2-3 местная.</td>
                      </tr>
                      <tr>
                        <td>38</td>
                        <td>Газовая горелка под резьбовые баллоны.</td>
                      </tr>
                      <tr>
                        <td>39</td>
                        <td>
                          Газовый баллончик (230 мл), в количестве из расчета 1 баллончик на 1
                          человека в день. Их всегда можно купить в БЛ или Л1, так как к перевозке
                          на самолёте они запрещены.
                        </td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>Посуда.</td>
                      </tr>
                      <tr>
                        <td>41</td>
                        <td>Радиостанция УКВ (не обязательно, выдается на месте под залог).</td>
                      </tr>
                      <tr>
                        <td>42</td>
                        <td>Аптечка (личная + групповая).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div class="" v-if="currentText === 'food'">
              <h3 class="main-font text-[20px] text-[#444] mt-[25px] font-semibold">
                ПИТАНИЕ ВО ВРЕМЯ ВОСХОЖДЕНИЯ
              </h3>

              <div class="main-font text-[16px] font-light text-[#444] mt-[25px]">
                На высотах <b>до 4400 м</b> включительно никаких проблем с приготовлением пищи не
                возникнет, т.к. в <b>Базовом лагере (3600 м)</b> и <b>Лагере 1 (4400 м)</b> вкусные,
                полезные и разнообразные блюда будут готовить для вас профессиональные повара. При
                этом мы учитываем особенности питания на высоте и составляем сбалансированное меню
                на каждый день.
                <span class="text-[#c74e1c]">Подробнее о меню в Базовых лагерях</span>.
              </div>

              <div class="main-font text-[16px] font-light text-[#444] mt-[25px]">
                <b>Выше Лагеря 1</b> готовить пищу вы будете <b>самостоятельно</b> (кроме участников
                пакета «VIP», для которых в стоимость включено приготовление пищи в Лагере 2 и
                Лагере 3).
              </div>

              <div class="main-font text-[16px] font-light text-[#444] mt-[25px]">
                Продукты для восхождения необходимо привезти с собой или можно взять
                <b>со склада Базового лагеря фиксированный набор продуктов</b> (бесплатно - для
                пакетов «Бизнес», «Бизнес Плюс», «Групповой» и «VIP»). Если набор не входит в
                стоимость пакета, по которому вы приехали, его можно купить отдельно, цена указана в
                <span class="text-[#c74e1c]">прайс-листе на дополнительные услуги.</span>
              </div>

              <div class="main-font text-[16px] font-light text-[#444] mt-[25px]">
                На территории Базового лагеря также есть <b>мини-маркет</b>, где можно приобрести
                предметы первой необходимости, разнообразные продукты для восхождения
                (сублимированные супы, овощи, мясо, консервы, изотонические напитки и проч.),
                альпинистское снаряжение и многое другое.
              </div>

              <div class="mt-[25px] border-t-1 border-b-1 border-[#9d9d9d] py-[24px]">
                <button
                  class="flex justify-between text-[#444] text-[17px] max-lp:text-[16px] font-semibold main-font w-full"
                  @click="toggleHiddenText"
                >
                  <div class="w-[60%]">
                    Фиксированный набор продуктов на период восхождения для пакетов «Бизнес»,
                    «Бизнес Плюс», «Групповой» и «VIP»
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
                  <table class="mt-[25px] w-full table-custom text-[16px]">
                    <thead class="bg-[#F8F6ED]">
                      <tr class="bg-[#F8F6ED]">
                        <th class="w-[70%] bg-[#F8F6ED]">Перечень продуктов в наборе:</th>
                        <th class="w-[30%] bg-[#F8F6ED]">Норма в наборе</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Суп быстрого приготовления / каша быстрого приготовления / пюре быстрого
                          приготовления
                        </td>
                        <td class="text-center">10 пакетиков (55-75 г)</td>
                      </tr>
                      <tr>
                        <td>Консервы «Говядина тушеная»</td>
                        <td class="text-center">2 банки (325 г)</td>
                      </tr>
                      <tr>
                        <td>Консервы рыбные: сельдь, сардинелла, сайра, килька в томате, шпроты</td>
                        <td class="text-center">3 банки (180-250 г)</td>
                      </tr>
                      <tr>
                        <td>Сосиски говяжьи / куриные или колбаски охотничьи</td>
                        <td class="text-center">2 упаковки (400-500 г)</td>
                      </tr>
                      <tr>
                        <td>Сало копченое/соленое</td>
                        <td class="text-center">300 г</td>
                      </tr>
                      <tr>
                        <td>Колбаса копченая</td>
                        <td class="text-center">500 г</td>
                      </tr>
                      <tr>
                        <td>Сыр твёрдый, сыр плавленый</td>
                        <td class="text-center">500 г</td>
                      </tr>
                      <tr>
                        <td>
                          Орехи: арахис в кунжуте, арахис в сахаре, грецкий чищенный Сухофрукты:
                          курага, изюм желтый, изюм черный, инжир финики, чернослив
                        </td>
                        <td class="text-center">500 г</td>
                      </tr>
                      <tr>
                        <td>Конфеты (леденцы, карамель - барбарис, мятные, фруктовые)</td>
                        <td class="text-center">300 г</td>
                      </tr>
                      <tr>
                        <td>Фруктово-шоколадные батончики</td>
                        <td class="text-center">8 шт. по 40 г</td>
                      </tr>
                      <tr>
                        <td>Козинаки, халва</td>
                        <td class="text-center">10 шт</td>
                      </tr>
                      <tr>
                        <td>Сахар-рафинад в упаковке</td>
                        <td class="text-center">500 г</td>
                      </tr>
                      <tr>
                        <td>Чай в пакетиках</td>
                        <td class="text-center">1 упаковка (25 шт)</td>
                      </tr>
                      <tr>
                        <td>Растворимый кофе в пакетиках 3 в 1</td>
                        <td class="text-center">10 пакетиков</td>
                      </tr>
                      <tr>
                        <td>Вафли, печенье (крекеры/ овсяные/ бисквитные)</td>
                        <td class="text-center">400 г</td>
                      </tr>
                      <tr>
                        <td>Сгущенное молоко или джем на выбор (мягкая упаковка)</td>
                        <td class="text-center">2 уп. по 250 г</td>
                      </tr>
                      <tr>
                        <td>Яйца вареные</td>
                        <td class="text-center">10 шт</td>
                      </tr>
                      <tr>
                        <td colspan="2" class="text-center">По необходимости:</td>
                      </tr>
                      <tr>
                        <td>Соль</td>
                        <td class="text-center">-</td>
                      </tr>
                      <tr>
                        <td>Свежие овощи региональные, сезонные при наличии на складе</td>
                        <td class="text-center">-</td>
                      </tr>
                      <tr>
                        <td>Фрукты свежие, региональные, сезонные при наличии на складе</td>
                        <td class="text-center">-</td>
                      </tr>
                      <tr>
                        <td>Хлеб (лепёшка)</td>
                        <td class="text-center">-</td>
                      </tr>
                      <tr>
                        <td>Туалетная бумага</td>
                        <td class="text-center">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font text-[#444]"
              >
                В крайне редких случаях на складе может не оказаться какого-то продукта из списка на
                момент вашего пребывания в Базовом лагере. Просим отнестись с пониманием, если такое
                произойдёт. Завоз продуктов в Базовый лагерь проводится на регулярной основе, и
                недостающие продукты будут доставлены ближайшей машиной.
              </div>

              <h3 class="mt-[25px] text-[20px] main-font text-[#444]">
                ОБЩИЕ РЕКОМЕНДАЦИИ ПО ПИТАНИЮ
              </h3>

              <ul
                class="mt-[25px] flex flex-col gap-[25px] list-disc list-inside ml-[20px] text-[17px] max-lp:text-[16px] text-[#444] main-font font-light"
              >
                <li>
                  Идеальные <b>продукты для восхождения</b> - это такие, которые не требуют
                  длительной варки, мало весят, но при этом достаточно питательны (например,
                  <b>сублимированные продукты</b>: различные супы, овощное рагу, мясо и т.д.).
                </li>
                <li>
                  Как правило, выше 6000 м большинство восходителей испытывают апатию к еде, поэтому
                  не стоит нести наверх слишком много съедобного. Кто-то на высоте предпочитает
                  <b>жидкую и соленую пищу</b>, другие восходители охотнее употребляют
                  <b>кисло-сладкое</b>. В любом случае рекомендуем сильно не экспериментировать,
                  есть то, к чему организм привык, и не переусердствовать, так как расстройства
                  пищеварительной системы (высотный дисбактериоз) - явление далеко не редкое, но
                  всегда обидное на подступах к вершине.
                </li>
                <li>
                  На высотах свыше 6000 м человеку необходимо выпивать
                  <b>до 4 л жидкости в сутки</b>, чтобы компенсировать потерю жидкости. Из-за
                  больших физических нагрузок и отсутствия в талой воде солей и минералов
                  электролитный баланс организма нарушается. Для питья лучше использовать
                  <b>минеральную воду</b> или разнообразить питьевой рацион
                  <b>изотоническими напитками</b>, добавляя в кипяченую воду специальные
                  <b>соли-электролиты</b> (натрий, калий, магний) и витамины.
                </li>
                <li>
                  Также необходимо помнить, что на больших высотах
                  <b>вода закипает при меньших температурах</b> вследствие низкого атмосферного
                  давления, поэтому требуется больше времени для приготовления пищи (и,
                  соответственно, больше газовых баллончиков).
                </li>
              </ul>
            </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div class="" v-if="currentText === 'arrival'">
              <h3 class="mt-[25px] text-[20px] main-font text-[#444]">
                ТАКТИКА ВОСХОЖДЕНИЯ НА ПИК ЛЕНИНА
              </h3>

              <div
                class="mt-[25px] text-[17px] max-lp:text-[16px] main-font font-light text-[#444]"
              >
                Для успешного восхождения на пик Ленина требуется хорошая
                <span class="text-[#c74e1c]">физическая подготовка</span>, соответствующее
                <span class="text-[#c74e1c]">снаряжение</span> и полноценная <b>акклиматизация</b>.
                Для надежной поэтапной акклиматизации рекомендуется сделать несколько
                <b>радиальных выходов на высоту</b>, которые поначалу будут казаться очень тяжелыми
                (головная боль, потеря аппетита, нехватка кислорода). Только после того, как
                самочувствие на высоте будет нормальным, можно штурмовать вершину. К решению всех
                вопросов во время восхождения нужно подходить взвешенно, рационально, не
                эмоционально, всегда следовать указаниям гида и придерживаться здравого смысла.
              </div>

              <div
                class="mt-[25px] text-[17px] max-lp:text-[16px] main-font font-light text-[#444]"
              >
                Советуем <b>не совершать одиночных восхождений</b>, а подобрать хорошего напарника,
                присоединиться к какой-либо группе или воспользоваться услугами опытного высотного
                гида. Статистика показывает, что большинство несчастных случаев на Горе происходит
                именно с одиночными восходителями.
              </div>

              <h4 class="main-font font-semibold mt-[25px] text-[18px] text-[#444]">
                Этапы восхождения
              </h4>

              <div
                class="mt-[25px] py-[25px] text-[17px] max-lp:text-[16px] border-t-2 border-b-1 border-[#9d9d9d] main-font text-[#444]"
              >
                <button class="flex items-center justify-between w-full" @click="toggleHiddenText">
                  <div class="text-[17px] main-font font-semibold">
                    1. Базовые Лагерь (3600 м) - Лагерь 1 (4400 м)
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
                  <div class="mt-[25px] flex justify-center">
                    <img src="/images/req/lg-1.jpg" />
                  </div>

                  <div
                    class="border-l-4 border-[#c74e1c] text-[17px] max-lp:text-[16px] font-light main-font pl-[25px] mt-[25px]"
                  >
                    <b>Важно</b>:
                    <span class="border-b-1 border-[#888] text-[#888]"
                      >подниматься в Лагерь 1 рекомендуется после акклиматизации в Базовом лагере
                      (3600м) не менее 1 суток.</span
                    >
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Подъем на <b>перевал Путешественников (4200 м)</b> по хорошей, проторенной тропе
                    обычно занимает 1,5 - 2.5 часа, в зависимости от физической подготовки
                    участников. На перевале всегда ветрено и может лежать снег.
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Спуск с перевала несложен и непродолжителен. Далее тропа переходит практически в
                    горизонтальную плоскость и долго тянется параллельно левому моренному отвалу.
                    Пересекаем бурную горную речку и поднимаемся на тропу, ведущую к леднику Ленина
                    - примерно 2,5-3 часа. Вдоль по телу ледника идти придется совсем недолго -
                    30-40 минут, огибая немногочисленные трещины.
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    <b>Общее время пути из Базового лагеря до Лагеря 1</b>: 4-8 часов, в зависимости
                    от физической подготовки и погодных условий.
                  </div>
                </div>
              </div>

              <div class="py-[25px] border-t-1 border-b-1 border-[#9d9d9d]">
                <button
                  class="flex items-center justify-between text-[#444] w-full"
                  @click="toggleHiddenText"
                >
                  <div class="text-[17px] max-lp:text-[16px] main-font font-semibold">
                    2. Лагерь 1 (4400 м) - Лагерь 2 (5300 м)
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
                  <div class="mt-[25px] flex justify-center">
                    <img src="/images/req/lg-2.jpg" />
                  </div>

                  <div
                    class="border-l-4 border-[#c74e1c] text-[17px] max-lp:text-[16px] font-light main-font pl-[25px] mt-[25px]"
                  >
                    <b>Важно</b>:
                    <span class="border-b-1 border-[#888] text-[#888]"
                      >переход Л1-Л2 объективно является
                      <b>самым опасным участком восхождения</b> (лавины, закрытые трещины). Поэтому
                      нужно выходить на него в максимально подготовленном состоянии, чтобы
                      минимизировать различные риски. Подниматься в Лагерь 2 рекомендуется
                      <b>после акклиматизации в Лагере 1 (4400 м)</b> не менее 1 суток. Один день в
                      Л1 следует посвятить практическим занятиям по технической безопасности на
                      леднике, проверить снаряжение в действии, отработать взаимодействие с
                      напарником по связке при движении и отдыхе и т.д.</span
                    >
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Выходим из Лагеря 1 (4400 м) по леднику прямо <b>к центру Северной стены</b>,
                    обходя множество трещин, до крутого снежного взлёта и вверх по нему (80 м,
                    крутизна 35 - 40 градусов) по фиксированной верёвке или зигзагом. Затем вверх по
                    <b>склону Северной стены</b>.
                  </div>

                  <div
                    class="border-l-4 border-[#c74e1c] text-[17px] max-lp:text-[16px] font-light main-font pl-[25px] mt-[25px]"
                  >
                    <b>Важно</b>:
                    <span class="border-b-1 border-[#888] text-[#888]"
                      >независимо от количества снега и времени суток, этот
                      <b>склон является лавиноопасным</b>, так как лавина может быть спровоцирована
                      ледовыми обвалами. Чтобы минимизировать риски лавинной опасности,
                      рекомендуется <b>стартовать из Лагеря 1 в 4 утра</b> и в пути не
                      останавливаться на отдых дольше 5-10 мин. На стене есть несколько безопасных
                      мест для более продолжительного отдыха, которые вам покажет гид или начспас
                      непосредственно на месте. Кроме того, ранний выход позволит избежать
                      длительного хождения под палящим солнцем, что является очень изматывающим на
                      данном отрезке пути.
                    </span>
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Далее траверс вправо и выход на <b>снежное плато</b>, известное в народе как
                    «<b>Сковорода</b>». Этот траверс <b>крайне лавиноопасен</b>, поэтому проходить
                    его нужно по возможности быстро, постараться избежать остановок для отдыха, даже
                    на 5 мин.
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    После траверса «Сковороды» - подъём на осыпной склон к <b>Лагерю 2</b>. На всём
                    протяжении участка рекомендуется осуществлять движение в связках, так как на
                    пути имеется очень много <b>закрытых и открытых трещин</b>.
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    <b>Оптимальное время для выхода</b> из Лагеря 1 (4400 м) - 4 часа утра. <br />
                    <b>Время в пути</b>: 5 -10 часов.
                  </div>
                </div>
              </div>

              <div class="py-[25px] border-t-1 border-b-1 border-[#9d9d9d]">
                <button
                  class="flex items-center justify-between text-[#444] w-full"
                  @click="toggleHiddenText"
                >
                  <div class="text-[17px] max-lp:text-[16px] main-font font-semibold">
                    3. Лагерь 2 (5300 м) - Лагерь 3 (6100 м)
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
                  <div class="mt-[25px] flex justify-center">
                    <img src="/images/req/lg-3.jpg" />
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Из Лагеря 2 поднимаемся по 30 - 40 градусному склону, придерживаясь левее скал,
                    на гребень; на гребне возможен <b>сильный ветер</b>. Затем движение налево по
                    пологому гребню к взлёту на <b>вершину Раздельная</b> (6148 м). Подъём на эту
                    вершину проходит при крутизне склона в 30-40 градусов и глубоком снеге. В районе
                    вершины расположен <b>Лагерь 3 (6100 м)</b>.
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Самая трудная часть пути – это взлет от 5850 м до Лагеря 3. В верхней части - от
                    6000 м до 6100 м - есть <b>закрытые трещины</b>, будьте аккуратны! Чаще всего на
                    переходе Л2-Л3 поднимаются, не связываясь. Но мы рекомендуем промежуток от 5950
                    м до Л3 <b>проходить в связках</b>.
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    <b>Оптимальное время для выхода</b> - до 9-ти часов утра.<br />
                    <b>Время в пути</b>: 4 - 7 часов.
                  </div>
                </div>
              </div>

              <div class="py-[25px] border-t-1 border-b-2 border-[#9d9d9d]">
                <button class="flex items-center justify-between w-full" @click="toggleHiddenText">
                  <div class="text-[17px] max-lp:text-[16px] main-font font-semibold">
                    4. Лагерь 3 (6100 м) - пик Ленина (7134 м) - Лагерь 3 (6100 м)
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
                  <div class="mt-[25px] flex justify-center">
                    <img src="/images/req/lg-4.jpg" />
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Из Лагеря 3 траверс вершины в юго-восточном направлении и спуск на седловину. На
                    седловине есть несколько опасных, чаще всего <b>закрытых трещин</b>, желательно
                    также пройти это место <b>в связках</b>. С седловины вверх по каменистому взлету
                    до выхода на <b>гребневое плато</b>. Здесь некоторые команды иногда предпочитают
                    устанавливать промежуточный Лагерь 4 (6400 м), однако большинство восходителей
                    обходятся без него. Решение о необходимости установки Лагеря 4 каждая команда
                    принимает для себя самостоятельно.
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Далее по пологому широкому гребню до узкого крутого
                    <b>ледового взлета</b> (называемого «<b>Нож</b>»). Возможны сильные порывы
                    ветра. Крутизна «ножа» примерно 35-50 градусов, протяженность 60-70 метров.
                    Прохождение данного участка рекомендуется с использованием веревки, в
                    «<b>кошках</b>», поскольку при срыве существует опасность выноса на Северную
                    стену к сбросам. Дальше путь продолжается <b>между скал по гребню</b>, затем
                    подъем по <b>скально-снежному взлету</b> (протяженностью 20-30 м) до выхода на
                    снежное <b>плато Парашютистов</b> (6900-7000 м).
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Прохождение <b>снежного плато</b> затруднено глубоким снегом. Пересекать плато
                    рекомендуется в условиях ясной погоды и хорошей видимости, сверяясь с
                    <b>GPS-навигатором</b>, т.к. при плохой видимости существует опасность
                    заблудиться.
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    Далее вверх по протяженному вершинному куполу (по снегу, осыпи) с выходом на
                    <b>вершину пика Ленина</b> (самый большой тур, выложенный из камней). Спуск
                    осуществлять по пути подъёма.
                  </div>

                  <div class="mt-[25px] text-[17px] max-lp:text-[16px] font-light main-font">
                    <b>Обязателен очень ранний выход из Лагеря 3 (6100 м)</b> в 3 - 4 часа утра.<br />
                    <b>Общее время в пути</b>: 10 - 14 ч.
                  </div>

                  <div
                    class="border-l-4 border-[#c74e1c] text-[17px] max-lp:text-[16px] font-light main-font pl-[25px] mt-[25px]"
                  >
                    <b>Важно</b>:
                    <span class="border-b-1 border-[#888] text-[#888]"
                      >рекомендуемое <b>время поворота на спуск - 14-00</b> - независимо от того,
                      достигли вы вершины или нет.
                    </span>
                  </div>
                </div>
              </div>

              <div class="mt-[25px]">
                <div
                  class="flex gap-[10px] items-center text-[16px] main-font text-[#c74e1c] font-semibold cursor-pointer"
                >
                  <img src="/icons/download2.png" />

                  <div>GPS-трек восхождения на пик Ленина</div>
                </div>

                <div class="mt-[10px] text-[15px] font-light main-font text-[#888] w-[75%]">
                  Просим учесть, что в связи с подвижностью ледника, изменением рельефа и появлением
                  новых трещин, тропа между Лагерем 1 (4400м) и Лагерем 2 (5300 м) и соответствующие
                  GPS-точки (GPS-координаты) на этом участке могут меняться год от года.
                </div>
              </div>
            </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div class="" v-if="currentText === 'kit'">
              <h3 class="mt-[25px] text-[20px] main-font text-[#444]">ПЕРСОНАЛЬНАЯ АПТЕЧКА</h3>
              <div class="text-[20px] main-font text-[#444]">
                Список медикаментов,рекомендуемых при восхождении на пик Ленина
              </div>

              <div
                class="mt-[25px] text-[#c74e1c] text-[16px] main-font font-semibold flex items-center gap-[10px]"
              >
                <img src="/icons/download2.png" />

                <div>Скачать файл с перечнем рекомендуемых медикаментов</div>
              </div>

              <table class="table-custom mt-[25px] w-full main-font text-[16px]">
                <thead>
                  <tr>
                    <th class="w-[70%] bg-[#f9f6ed] font-semibold py-[26px]">Наименование</th>
                    <th class="bg-[#f9f6ed] font-semibold">Форма выпуска</th>
                  </tr>
                </thead>
                <tbody class="font-light">
                  <tr>
                    <td>Декамевит - мультивитамин</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Метионин – аминокислота для усвоения жиров/белков</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>
                      Глутаминовая кислота – аминокислота, необходимая для работы мозга на высоте
                    </td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Аскорутин – витамины</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Нифедипин – от отека легких</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Аспаркам – улучшение работы сердечной мышцы</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Дексаметазон – от отека мозга</td>
                    <td>амп. по 1мл</td>
                  </tr>
                  <tr>
                    <td>Дексаметазон</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>
                      Ацетазоламид (диакарб, диамокс) – профилактика горной болезни, головной боли,
                      мочегонное
                    </td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Аскорбиновая кислота - витамин С</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Трентал – для расширения периферических сосудов</td>
                    <td>таб. и 2 амп. по 5мл</td>
                  </tr>
                  <tr>
                    <td>Рибоксин - улучшение работы сердца/печени</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>
                      Ксантинола никотинат – против обморожений, для расширения периферических
                      сосудов
                    </td>
                    <td>таб и амп по 2мл</td>
                  </tr>
                  <tr>
                    <td>
                      Калия оротат (витамин В12) – антидистрофическое, нормализует работу сердца и
                      печени, циркуляцию в капиллярах
                    </td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Фуросемид (лазикс) - сильное мочегонное, против отеков</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Эуфиллин - бронхорасширяющее, допинг</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Сульфокамфокаин - стимулятор дыхания/сердца</td>
                    <td>амп по 2мл</td>
                  </tr>
                  <tr>
                    <td>Феррамин-вита или любой другой железосодержащий препарат</td>
                    <td>таб.</td>
                  </tr>
                  <tr>
                    <td>Верошпирон - средней силы мочегонное</td>
                    <td>таб.</td>
                  </tr>
                </tbody>
              </table>
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

  <footer class="mount-bg bg-right py-[70px] px-[12.5%] max-tb:px-[15px]">
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
.req-bg {
  background-image: url('/images/req/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
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

.mount-bg {
  background-image: url('/images/bg-mount.png');
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

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.fade-enter {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
