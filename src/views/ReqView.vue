<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue'

import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.href = '/'
  }
}
</script>

<template>
  <HeaderTrigger />

  <main>
    <div class="req-bg bg-right px-[250px] pb-[25px]">
      <div class="pt-[21px] flex justify-center">
        <img src="/images/main-logo.png" class="max-w-[400px]" />
      </div>

      <h1 class="main-font font-semibold text-[72px] text-white pt-[122px] drop-shadow-lg">
        РЕКОМЕНДАЦИИ <br />ГИДОВ
      </h1>

      <div
        class="pt-[106px] max-tb:pt-[105px] max-mb:pt-[26px] flex justify-between max-tb:items-center max-tb:gap-[103px] max-mb:gap-[28px] max-tb:flex-col pb-[35px] max-mb:pb-[26px] max-sm:pb-[52px]"
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
      </div>

      <div class="flex gap-4 max-tb:items-center justify-end">
        <img src="/images/calendar.png" />

        <div class="main-font text-white text-[20px] max-mb:text-[15px] w-[310px] max-tb:w-full">
          Наши лагеря будут открыты<br class="" />
          с 29 июня по 1 сентября 2021 г.
        </div>
      </div>
    </div>

    <div class="px-[12.5%] pt-[29px]">
      <button @click="goBack" class="flex gap-[10px]">
        <img src="/images/clearsnow/arrow.svg" class="text-[#c74e1c] w-[15px]" />

        <div class="text-[15px] text-[#888] main-font">(ПРЕДЫДУЩАЯ СТРАНИЦА)</div>
      </button>

      <h2 class="text-[36px] mt-[75px] main-font text-[#444] font-semibold">РЕКОМЕНДАЦИИ ГИДОВ</h2>

      <div class="flex items-start">
        <div class="w-[75%] pr-[80px]">
          <div class="flex justify-end gap-[27px]">
            <img src="/icons/facebook-icon.png" class="max-h-[23px]" />
            <img src="/icons/twitter.png" class="max-h-[23px]" />
            <img src="/icons/WA.png" class="max-h-[23px]" />
            <img src="/icons/viber.png" class="max-h-[23px]" />
            <img src="/icons/tg.png" class="max-h-[23px]" />
          </div>

          <div class="mt-[25px] text-[15px] main-font text-[#888] flex gap-[2px]">
            <div class="text-white w-[25%] py-[29px] flex justify-center bg-[#e9a83a]">
              ПОДГОТОВКА
            </div>
            <div class="w-[25%] py-[29px] flex justify-center bg-[#f9f6ed]">СНАРЯЖЕНИЕ</div>
            <div class="w-[25%] py-[29px] flex justify-center bg-[#f9f6ed]">ПИТАНИЕ</div>
            <div class="w-[25%] py-[29px] flex justify-center bg-[#f9f6ed]">ВОСХОЖДЕНИЕ</div>
            <div class="w-[25%] py-[29px] flex justify-center bg-[#f9f6ed]">АПТЕЧКА</div>
          </div>

          <div class="hidden">
            <h3 class="main-font text-[#444] text-[20px] mt-[52px]">ПОДГОТОВКА К ВОСХОЖДЕНИЮ</h3>

            <div class="mt-[52px] text-[17px] text-[#444] main-font font-light">
              Распространено мнение, что Пик Ленина - <b>самый лёгкий из семитысячников</b> СНГ. Это
              верно, но со многими оговорками. Не стоит занижать трудность и забывать, что высота
              Пика Ленина превышает отметку в 7000 метров.
            </div>

            <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
              <b>Маршрут восхождения на пик Ленина</b> через вершину Раздельная
              <b>технически не сложный</b>, здесь нет отвесных стен, не требуется лазание, маршрут
              проходится пешком (иногда в связках).
            </div>

            <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
              Основные трудности связаны с преодолением <b>ледовых трещин</b>, с давящей
              <b>высотой</b> (нехватка кислорода, горная болезнь) и
              <b>экстремальными погодными условиями</b> (низкие температуры, сильный ветер,
              солнечная радиация, большой перепад дневных и ночных температур). Поэтому при
              подготовке к восхождению на пик Ленина следует уделить внимание тренировкам,
              направленным на <b>укрепление сердечно-сосудистой системы и силы</b> для отдельных
              групп мышц, а также повышение общей <b>выносливости организма</b>.
            </div>

            <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
              Процесс <b>подготовки к восхождению</b> можно условно разделить так:
            </div>

            <div class="mt-[44px] py-[18px] border-t-1 border-b-1 border-[#9d9d9d]">
              <div
                class="flex justify-between text-[#c74e1c] text-[17px] font-semibold items-center main-font"
              >
                <div>Физическая подготовка</div>

                <div class="relative transform transition-all">
                  <div
                    class="w-[12px] h-[1px] bg-[#c74e1c] transform transition-all duration-200 ease-in absolute rotate-45 top-1/2 right-1/2"
                  ></div>

                  <div
                    class="w-[12px] h-[1px] bg-[#c74e1c] transform transition-all duration-200 ease-in absolute top-1/2 right-1/2 rotate-135"
                  ></div>
                </div>
              </div>

              <div class="">
                <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                  Рекомендуем как минимум за полгода до восхождения начать регулярные
                  <b>кардио-тренировки</b>: бег на длинные дистанции, желательно по пересеченной
                  местности с перепадами высот + <b>бег по лестнице</b>/ беговые
                  <b>лыжи/ плавание</b>, а также <b>силовую подготовку</b> (особенно для мышц ног и
                  спины). При постоянных <b>аэробных нагрузках</b>
                  значительно повышается выносливость и стрессоустойчивость, увеличивается объем
                  легких вследствие повышенной потребности кислорода во время тренировок,
                  укрепляется сердечно-сосудистая система.
                </div>

                <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                  Кроме того, полезно заранее <b>приучать организм к холоду</b>: контрастный душ,
                  обтирание полотенцем, смоченным в холодной воде, тренировки на свежем воздухе
                  зимой, понижение температуры в помещении и т.д.
                </div>

                <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                  Примерно за две недели до восхождения следует прекратить интенсивные тренировки,
                  чтобы отдохнуть и восстановить силы. Важно уделить внимание сбалансированному
                  питанию, полноценному сну, укрепить иммунитет и повысить гемоглобин, лишний раз
                  посетить стоматолога, подлечить недомогания, если таковые имеются.
                </div>
              </div>
            </div>

            <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d]">
              <div class="flex justify-between text-[#444] text-[17px] font-semibold main-font">
                <div>Теоретическая подготовка</div>

                <div class="relative">
                  <div class="w-[12px] h-[1px] bg-[#444] absolute top-1/2 right-1/2"></div>

                  <div
                    class="w-[12px] h-[1px] bg-[#444] absolute top-1/2 right-1/2 rotate-90"
                  ></div>
                </div>
              </div>

              <div class="hidden">
                <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                  Ознакомьтесь с тактикой восхождения на пик Ленина, чтобы понимать, что вас ждет на
                  маршруте. Обязательно нужно <b>ознать технику безопасности в горах.</b> Особое
                  внимание следует уделить разделам по лавинной опасности, ледниковым трещинам,
                  переправам через реки, камнепадам.
                </div>

                <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                  Рекомендуемая публицистическая и художественная литература по альпинизму:
                </div>

                <ul class="list-['-'] ml-[20px] text-[17px] text-[#444] main-font font-light">
                  <li>Евгений Абалаков “На высочайших вершинах Советского Союза”</li>
                  <li>Владимир Шатаев “Категория трудности”</li>
                  <li>Тенцинг Норгей “Тигр Снегов”</li>
                  <li>Букреев А.Н, Г. Вестон Де Уолт “Восхождение”</li>
                </ul>
              </div>
            </div>

            <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d]">
              <div class="flex justify-between text-[#444] text-[17px] font-semibold main-font">
                <div>Подготовка снаряжения</div>

                <div class="relative">
                  <div class="w-[12px] h-[1px] bg-[#444] absolute top-1/2 right-1/2"></div>

                  <div
                    class="w-[12px] h-[1px] bg-[#444] absolute top-1/2 right-1/2 rotate-90"
                  ></div>
                </div>
              </div>

              <div class="hidden">
                <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                  Подготовьте все необходимое снаряжение для восхождения на пик Ленина в
                  соответствии с рекомендованным списком от опытных гидов. В этом списке нет ничего
                  лишнего, каждая деталь пригодится в свое время. Не забудьте про личную аптечку.
                </div>
              </div>
            </div>

            <div class="py-[18px] border-t-1 border-b-1 border-[#9d9d9d]">
              <div class="flex justify-between text-[#444] text-[17px] font-semibold main-font">
                <div>Психологическая и морально-волевая подготовка</div>

                <div class="relative">
                  <div class="w-[12px] h-[1px] bg-[#444] absolute top-1/2 right-1/2"></div>

                  <div
                    class="w-[12px] h-[1px] bg-[#444] absolute top-1/2 right-1/2 rotate-90"
                  ></div>
                </div>
              </div>

              <div class="hidden">
                <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                  Понятно, что цель любого восхождения – взойти на вершину и благополучно вернуться
                  домой живым и здоровым. При этом необходимо помнить, что от маленького человека в
                  больших горах зависит очень немного.
                </div>

                <ul
                  class="mt-[25px] list-disc ml-[20px] text-[17px] text-[#444] main-font font-light"
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
              <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                <b>Принимать важные решения в горах</b> бывает непросто, особенно в состоянии горной
                болезни, сильной усталости и истощения. Поэтому важно иметь крепкую волю, уметь
                держать под контролем спонтанные эмоции, своевременно корректировать аффективные
                реакции и поддерживать разум ясным.
              </div>

              <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                На маршруте вам, возможно, не раз придется испытывать <b>«пиковые переживания»</b>:
              </div>

              <ul class="list-['-'] ml-[20px] text-[17px] text-[#444] main-font font-light">
                <li><b>восторг</b> от невыразимо красивой природы;</li>
                <li>
                  <b>страх</b> перед преодолением ледниковых трещин и чувство удовлетворения, когда
                  этот страх преодолен;
                </li>
                <li>
                  <b>тревогу</b> при прохождении лавиноопасных участков или переправе через бурную
                  реку;
                </li>
                <li>
                  чувство огромного <b>душевного подъема</b> и радости при достижении вершины и т.д.
                </li>
              </ul>

              <div class="mt-[25px] text-[17px] text-[#444] main-font font-light">
                Чтобы испытать подобные переживания и построить из этого опыта еще один кусочек
                нашей личности, мы и едем в горы. Будьте готовы к ним.
              </div>
            </div>
          </div>

          <div>
            <h3 class="mt-[25px] text-[20px] text-[#444] main-font">
              Снаряжение для восхождения на пик Ленина (7134 м)
            </h3>

            <div class="text-[20px] text-[#444] main-font">
              Рекомендации по подбору альпинистского снаряжения, одежды и обуви для восхождения
            </div>

            <div class="text-[17px] main-font font-light text-[#444] mt-[54px]">
              Готовимся к восхождению на семитысячник и подбираем экипировку для высотного
              альпинизма.
            </div>

            <div class="mt-[25px] text-[17px] main-font font-semibold text-[#444]">
              Что нужно знать и помнить:
            </div>

            <ul
              class="list-disc list-inside mt-[25px] ml-[25px] text-[17px] text-[#444] main-font font-light flex flex-col gap-[25px]"
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
                утяжеляя при этом излишне рюкзак. Необходимо взять ровно столько снаряжения, сколько
                точно пригодится при восхождении, поскольку каждый дополнительный грамм становится
                отягощающим грузом на высоте.
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
                убора и солнцезащитных очков, а также использование солнцезащитного крема с высокой
                степенью защиты (SPF 25-40) даже в пасмурную погоду. При подъеме на каждую тысячу
                метров уровень ультрафиолетового излучения возрастает на 10% - 12%.
              </li>
            </ul>

            <div class="mt-[25px] text-[17px] main-font font-light text-[#444]">
              А теперь подробно и с конкретными примерами рассмотрим, какая
              <b>одежда, обувь и другое снаряжение</b> точно пригодятся
              <b>при восхождении на пик Ленина</b>.
            </div>

            <div class="border-t-1 border-b-1 border-[#9d9d9d] py-[24px]">
              <div
                class="flex justify-between items-center text-[#c74e1c] text-[17px] font-semibold main-font"
              >
                <div>Снаряжение для восхождение на пик Ленина (7134 м)</div>

                <div class="relative transform transition-all">
                  <div
                    class="w-[12px] h-[1px] bg-[#c74e1c] transform transition-all duration-200 ease-in absolute rotate-45 top-1/2 right-1/2"
                  ></div>

                  <div
                    class="w-[12px] h-[1px] bg-[#c74e1c] transform transition-all duration-200 ease-in absolute top-1/2 right-1/2 rotate-135"
                  ></div>
                </div>
              </div>

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
                      <b>Ботинки легкие трековые</b> (<span class="text-[#c74e1c]">Scarpa kailash GTX, Salomon Quest 4D GTX, The North
                      Face Wreck Mid GTX</span> или аналоги) или <b>кроссовки</b> (<span class="text-[#c74e1c]">SALEWA MTN Trainer GTX, Garmont
                      Dragontail MNT GTX</span> или аналоги), и/или <b>сандалии</b> (<span class="text-[#c74e1c]">Teva, Keen</span> или аналоги) для
                      перемещения по нижним лагерям (БЛ, Л1) и между ними. Кроме того, в Оше летом
                      жарко, требуется открытая обувь.
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><b>Ботинки для высотных маршрутов</b> - кожаные или пластиковые, двойные или тройные, для высот от 6000м (<span class="text-[#c74e1c]">la Sportiva Spantik, Scarpa Phantom</span> и т.д.). Можно с бахилами для пущей уверенности.</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><b>Куртка штормовая, например GORE-TEX</b> (<span class="text-[#c74e1c]">RedFox Vector GTX III</span> или подобные).</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><b>Брюки штормовые, например GORE-TEX</b> или полукомбинезон (п.6) (<span class="text-[#c74e1c]">RedFox Vector GTX III</span> или подобные).</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td><b>Куртка пуховая</b> или с синтетическим утеплителем типа PrimaLoft или ThermoBall и тд. (<span class="text-[#c74e1c]">BASK Valdez</span> и т.д.)</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td><b>Полукомбинезон GORE-TEX</b> (например, <span class="text-[#c74e1c]">RedFox Gravity GTX</span>). Если есть штормовые мембранные брюки (п.4), то комбинезон не нужен.</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td><b>Спальный мешок пуховый</b> или с синтетическим утеплителем с температурой комфорта не выше -15 (<span class="text-[#c74e1c]">BASK MUSTANG 700+FP</span> или подобный).</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td><b>Костюм POLARTEC</b> (например, куртка <span class="text-[#c74e1c]">BASK Kondor V3</span> + штаны <span class="text-[#c74e1c]">BASK Vinson Pro V2</span>)</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td><b>Белье нательное POLARTEC</b> - два комплекта: тонкое - для отвода влаги (например, <span class="text-[#c74e1c]">RedFox Dry Zone</span>) и толстое - для утепления (например, комплект <span class="text-[#c74e1c]">куртка + штаны от BASK</span>)</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Рукавицы для высотных восхождений пуховые или с синтетическим утеплителем - PrimaLoft и т.д. (например, BASK Brooks-D V2 или BASK Creative Mitten V3)
                      Чуни утепленные для сна пуховые или с синтетическим утеплителем - PrimaLoft и тд. (например, Baffin Cush Booty).</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mt-[96px] max-tb:mt-[79px] mb-[74px] flex justify-center">
            <div
              class="w-full max-tb:mx-[10px] flex max-stb:flex-col max-stb:items-center justify-between border-1 border-[#888] px-[35px] max-tb:px-[20px] py-[22px]"
            >
              <div class="flex max-stb:flex-col gap-6 max-stb:gap-[14px] items-center">
                <img src="/images/main-page/vopros.png" class="h-[40px] w-[35px]" />

                <div class="max-stb:text-center">
                  <h3 class="text-[20px] main-font text-[#444]">
                    Остались вопросы? Свяжитесь с нами
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

        <div class="w-[25%] border-l-1 border-r-1 border-[#9d9d9d]">
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
</style>
