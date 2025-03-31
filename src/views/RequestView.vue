<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue'

import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { createApplication } from '@/utils/api'

const router = useRouter()
const userData = ref({
  tour_id: 1,
  last_name: '',
  first_name: '',
  middle_name: '',
  gender: '',
  citizenship: '',
  date_of_birth: '',
  passport_number: '',
  passport_issue_date: '',
  passport_expiry_date: '',
  home_address: '',
  phone_numbers: '',
  email: '',
  emergency_contact_phones: '',
  emergency_contact_emails: '',
  workplace: '',
  package_type: '',
  altitude_experience: '',
  additional_info: '',
  additional_services: [],
  arrival_airport: '',
  arrival_date: '',
  arrival_time: '',
  arrival_flight_number: '',
  arrival_osh_to_base_date: '',
  departure_airport: '',
  departure_date: '',
  departure_time: '',
  departure_flight_number: '',
  departure_osh_to_base_date: '',
  insurance_policy_number: '',
  insurance_coverage: '',
  insurance_company_name: '',
  insurance_company_phone: '',
  emergency_contact_phone: '',
})

const submitRequest = async () => {
  try{
  // Perform form submission logic here
    userData.value.id = userData.value.id + 1
    userData.value.phone_numbers = userData.value.phone_numbers.split(',').map((s) => s.trim())
    userData.value.emergency_contact_phones = userData.value.emergency_contact_phones
      .split(',')
      .map((s) => s.trim())

    userData.value.emergency_contact_emails = userData.value.emergency_contact_emails
      .split(',')
      .map((s) => s.trim())
    await createApplication(userData.value)
    alert('Заявка успешно отправлена!')
  } catch (error) {
    alert('Ошибка при отправке заявки: ' + (error.response?.data?.detail || error.message))
    userData.value.phone_numbers = ''
    userData.value.emergency_contact_phones = ''
    userData.value.emergency_contact_emails = ''
  }
}

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.href = '/'
  }
}
</script>

<template>
  <main class="relative">
    <HeaderTrigger />

    <div class="bg bg-center px-[12.5%] max-lp:px-[30px] max-mb:px-[10px] py-[25px]">
      <div class="flex justify-center">
        <img src="/images/main-logo.png" class="max-w-[400px] max-tb:hidden" />

        <img src="/images/logo.png" class="hidden max-tb:block max-mb:hidden" />

        <img src="/images/logo-mob-2.png" class="hidden max-mb:block" />
      </div>

      <h1
        class="main-font font-semibold text-[72px] max-tb:text-[36px] max-mb:text-[28px] max-tb:text-center text-white mt-[145px] max-tb:mt-[46px] drop-shadow-lg uppercase"
      >
        Восхождение
      </h1>

      <h2
        class="main-font text-[44px] max-tb:text-[36px] max-mb:text-[28px] max-tb:text-center text-white drop-shadow-lg"
      >
        на Пик Ленина (7134 м)
      </h2>

      <div
        class="pt-[106px] max-tb:pt-[67px] max-stb:pt-[41px] flex justify-between max-tb:items-center max-tb:gap-[103px] max-mb:hidden max-mb:gap-[28px] max-tb:flex-col"
      >
        <div class="flex items-center gap-[32px]">
          <button
            class="px-[73px] max-stb:px-[52px] max-sm:px-[40px] py-4 border-2 border-[rgba(255,255,255,0.2] text-[rgba(255,255,255,0.2)] uppercase font-bold max-sm:font-normal bg-white/20 backdrop-blur-none transition rounded main-font text-[18px]"
            disabled
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

    <div class="max-lp:px-[30px] max-mb:px-[10px] py-[30px]">
      <button @click="goBack" class="flex cursor-pointer gap-[10px] px-[12.5%]">
        <img src="/images/clearsnow/arrow.svg" class="text-[#c74e1c] w-[15px]" />

        <div class="text-[15px] text-[#888] main-font">(ПРЕДЫДУЩАЯ СТРАНИЦА)</div>
      </button>

      <div class="mt-[40px] px-[12.5%]">
        <h2 class="main-font text-[48px] text-[#444] font-semibold">АНКЕТА-ЗАЯВКА</h2>
        <h3 class="main-font text-[40px] text-[#444]">для участия в экспедиции на пик Ленина</h3>
      </div>

      <div class="mt-[40px] px-[12.5%]">
        <p class="main-font text-[28px] text-[#444] font-semibold">
          ЗАЯВКЕ ПРИСВОЕН № L {{ userData.tour_id + 1 }}
        </p>
      </div>

      <form class="mt-[40px]" @submit.prevent="submitRequest">
        <div class="bg-[#f9f6ed] px-[12.5%] grid grid-cols-2 py-[30px]">
          <div class="pr-[10%] border-r-2 border-white">
            <h4 class="text-[24px] main-font text-[#444] font-semibold">ПАСПОРТНЫЕ ДАННЫЕ</h4>

            <div class="mt-[25px]">
              <label for="last_name" class="text-[20px] main-font text-[#444] w-full block"
                >Фамилия</label
              >
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.last_name"
                id="last_name"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label for="first_name" class="text-[20px] main-font text-[#444] w-full block"
                >Имя</label
              >
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.first_name"
                id="first_name"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label for="patronymic" class="text-[20px] main-font text-[#444] w-full block"
                >Отчество</label
              >
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.middle_name"
                id="patronymic"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label for="gender" class="text-[20px] main-font text-[#444]">Пол</label>
              <select
                class="w-[40%] ml-[20px] bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                name="gender"
                id="gender"
                v-model="userData.gender"
                required
              >
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </select>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="citizenship" class="text-[20px] main-font text-[#444]">Гражданство</label>
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.citizenship"
                id="citizenship"
                required
              />
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="birth_date" class="text-[20px] w-full main-font text-[#444]"
                >Дата рождения</label
              >
              <div class="flex w-full justify-start">
                <input
                  class="bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="date"
                  v-model="userData.date_of_birth"
                  id="birth_date"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="passport_number" class="text-[20px] main-font text-[#444]"
                >№ паспорта</label
              >
              <div class="flex-1">
                <input
                  class="bg-white w-full px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="text"
                  v-model="userData.passport_number"
                  id="passport_number"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="passport_issue_date" class="text-[20px] w-full main-font text-[#444]"
                >Дата выдачи</label
              >
              <div class="flex w-full">
                <input
                  class="bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="date"
                  v-model="userData.passport_issue_date"
                  id="passport_issue_date"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="passport_expiry_date" class="text-[20px] w-full main-font text-[#444]"
                >Дата окончания</label
              >
              <div class="flex w-full">
                <input
                  class="bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="date"
                  v-model="userData.passport_expiry_date"
                  id="passport_expiry_date"
                  required
                />
              </div>
            </div>
          </div>

          <div class="pl-[10%] border-l-2 border-white">
            <h4 class="text-[24px] main-font text-[#444] font-semibold">КОНТАКТНЫЕ ДАННЫЕ</h4>

            <div class="mt-[25px]">
              <label for="home_address" class="text-[20px] main-font text-[#444] w-full block"
                >Домашний адресс(прописка)</label
              >
              <textarea
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.home_address"
                id="home_address"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label for="phone" class="text-[20px] main-font text-[#444] w-full block"
                >Ваши номера телефонов (все возможные)</label
              >
              <textarea
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.phone_numbers"
                id="phone"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label for="email" class="text-[20px] main-font text-[#444] w-full block"
                >Электронная почта</label
              >
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="email"
                v-model="userData.email"
                id="email"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label
                for="emergency_contact_phones"
                class="text-[20px] main-font text-[#444] w-full block"
                >Телефон Ваших близких/родственников</label
              >
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.emergency_contact_phones"
                id="emergency_contact_phones"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label for="emergency_emails" class="text-[20px] main-font text-[#444] w-full block"
                >Email Ваших близких/родственников</label
              >
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.emergency_contact_emails"
                id="emergency_emails"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label for="workplace" class="text-[20px] main-font text-[#444] w-full block"
                >Место работы и должность</label
              >
              <textarea
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.workplace"
                id="workplace"
                required
              />
            </div>
          </div>
        </div>

        <div class="bg-[#f2ebd9] px-[12.5%] grid grid-cols-2 py-[30px] mt-[25px]">
          <div class="pr-[10%] border-r-2 border-white">
            <h4 class="text-[24px] main-font text-[#444] font-semibold">ПАКЕТ</h4>

            <div class="mt-[25px] flex items-center">
              <label for="package" class="text-[20px] main-font text-[#444]"
                >Укажите ценовой пакет</label
              >
              <div class="flex-1 gap-[20px] pr-[20px]">
                <select
                  class="w-full ml-[20px] bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  name="package"
                  id="package"
                  v-model="userData.package_type"
                  required
                >
                  <option value="basic">Базовый</option>
                  <option value="business plus">Бизнес Плюс</option>
                  <option value="group">Групповой</option>
                  <option value="2 lenin">2 вершины Ленина</option>
                  <option value="3 lenin">3 вершины Ленина</option>
                  <option value="4 lenin">4 вершины Ленина</option>
                  <option value="vip">VIP</option>
                  <option value="oxygen">С кислородом</option>
                  <option value="business small">Бизнес малый</option>
                  <option value="economy">Эконом</option>
                  <option value="super-economy">Супер-эконом</option>
                  <option value="resort">Курортный Памир</option>
                </select>
              </div>
            </div>

            <div class="mt-[25px]">
              <label
                for="altitude_experience"
                class="text-[20px] main-font text-[#444] w-full block"
                >Ваш высотный опыт</label
              >
              <textarea
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.altitude_experience"
                id="altitude_experience"
              />
            </div>

            <div class="mt-[40px]">
              <label
                for="additional_information"
                class="text-[22px] main-font font-semibold text-[#444] w-full block uppercase"
                >Дополнительная информация, <br />
                О которой вы считаете нужным нам сообщить</label
              >
              <p class="text-[20px] main-font text-[#444] w-full block">
                (вегетарианство, аллергия и пр.)
              </p>
              <textarea
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                rows="4"
                type="text"
                v-model="userData.additional_info"
                id="additional_information"
              />
            </div>
          </div>

          <div class="pl-[10%] border-l-2 border-white">
            <h4 class="text-[24px] main-font text-[#444] font-semibold">
              ПЕРЕЧЕНЬ ЗАПРАШИВАЕМЫХ УСЛУГ
            </h4>

            <div class="mt-[25px] flex items-center gap-[20px]">
              <input
                type="checkbox"
                id="guide"
                v-model="userData.additional_services"
                value="Guide"
              />
              <label for="guide" class="text-[20px] main-font text-[#444] w-full block"
                >Услуги высотного гида</label
              >
            </div>

            <div class="mt-[25px]">
              <h5 class="text-[20px] main-font text-[#444] w-full block">
                Размещение в установленных высотных палатках
              </h5>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="camp2"
                  v-model="userData.additional_services"
                  value="Camp 2"
                />
                <label for="camp2" class="text-[20px] main-font text-[#444] w-full block"
                  >в Лагере 2 (5300 м)</label
                >
              </div>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="camp3"
                  v-model="userData.additional_services"
                  value="Camp 3"
                />
                <label for="camp3" class="text-[20px] main-font text-[#444] w-full block"
                  >в Лагере 3 (6100 м)</label
                >
              </div>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="food"
                  v-model="userData.additional_services"
                  value="food"
                />
                <label for="food" class="text-[20px] main-font text-[#444] w-full block"
                  >Фиксированный набор высотных продуктов (+100$)</label
                >
              </div>
            </div>

            <div class="mt-[25px]">
              <h5 class="text-[20px] main-font text-[#444] w-full block">
                Аренда снаряжения, количество шт.:
              </h5>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="tent"
                  v-model="userData.additional_services"
                  value="tent"
                />
                <label for="tent" class="text-[20px] main-font text-[#444] w-full block"
                  >высотная палатка (+80$ на всю программу)</label
                >
              </div>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="gas"
                  v-model="userData.additional_services"
                  value="gas"
                />
                <label for="gas" class="text-[20px] main-font text-[#444] w-full block"
                  >газовые баллончики «Kovea» 230 г с резьбовым соединением (10$/1 шт.)</label
                >
              </div>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="climbing"
                  v-model="userData.additional_services"
                  value="climbing"
                />
                <label for="climbing" class="text-[20px] main-font text-[#444] w-full block"
                  >кошки (+30$ на всю программу)</label
                >
              </div>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="ice peak"
                  v-model="userData.additional_services"
                  value="ice peak"
                />
                <label for="ice peak" class="text-[20px] main-font text-[#444] w-full block"
                  >ледоруб (+30$ на всю программу)</label
                >
              </div>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="burner"
                  v-model="userData.additional_services"
                  value="burner"
                />
                <label for="burner" class="text-[20px] main-font text-[#444] w-full block"
                  >газовая горелка (+25$ на всю программу)</label
                >
              </div>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="sleeping"
                  v-model="userData.additional_services"
                  value="sleeping"
                />
                <label for="sleepnig" class="text-[20px] main-font text-[#444] w-full block"
                  >каремет (+25$ на всю программу)</label
                >
              </div>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="rope"
                  v-model="userData.additional_services"
                  value="rope"
                />
                <label for="rope" class="text-[20px] main-font text-[#444] w-full block"
                  >основная веревка ⌀ 9÷11мм, динамика (+50$ на всю программу)</label
                >
              </div>

              <div class="mt-[10px] flex items-center gap-[20px]">
                <input
                  type="checkbox"
                  id="dishes"
                  v-model="userData.additional_services"
                  value="dishes"
                />
                <label for="dishes" class="text-[20px] main-font text-[#444] w-full block"
                  >посуда для приготовления пищи в выстоных лагерях (+25$ на всю программу)</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#f9f6ed] px-[12.5%] grid grid-cols-2 py-[30px] mt-[25px]">
          <div class="pr-[10%] border-r-2 border-white">
            <h4 class="text-[24px] main-font text-[#444] font-semibold">ПРИБЫТИЕ</h4>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="arrival_airport" class="text-[20px] main-font text-[#444]"
                >Аэропорт</label
              >
              <div class="flex-1">
                <input
                  class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="text"
                  v-model="userData.arrival_airport"
                  id="arrival_airport"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="arrival_date" class="text-[20px] main-font text-[#444]"
                >Дата прибытия</label
              >
              <div class="flex justify-center flex-1">
                <input
                  class="bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="date"
                  v-model="userData.arrival_date"
                  id="arrival_date"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="arrival_time" class="text-[20px] main-font text-[#444]"
                >Время прибытия</label
              >
              <div class="flex justify-center flex-1">
                <input
                  class="bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="time"
                  v-model="userData.arrival_time"
                  id="arrival_time"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="arrival_flight_number" class="text-[20px] main-font text-[#444]"
                >№ рейс</label
              >
              <div class="flex-1">
                <input
                  class="bg-white w-full px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="text"
                  v-model="userData.arrival_flight_number"
                  id="arrival_flight_number"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="arrival_osh_to_base_date" class="text-[20px] main-font text-[#444]"
                >Переезд Ош-Базовый лагерь</label
              >
              <div class="flex-1 flex justify-start">
                <input
                  class="bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="date"
                  v-model="userData.arrival_osh_to_base_date"
                  id="arrival_osh_to_base_date"
                  required
                />
              </div>
            </div>
          </div>

          <div class="pl-[10%] border-l-2 border-white">
            <h4 class="text-[24px] main-font text-[#444] font-semibold">Отбытие</h4>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="departure_airport" class="text-[20px] main-font text-[#444]"
                >Аэропорт</label
              >
              <div class="flex-1">
                <input
                  class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="text"
                  v-model="userData.departure_airport"
                  id="departure_airport"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="departure_date" class="text-[20px] main-font text-[#444]"
                >Дата прибытия</label
              >
              <div class="flex justify-center flex-1">
                <input
                  class="bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="date"
                  v-model="userData.departure_date"
                  id="departure_date"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="departure_time" class="text-[20px] main-font text-[#444]"
                >Время прибытия</label
              >
              <div class="flex justify-center flex-1">
                <input
                  class="bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="time"
                  v-model="userData.departure_time"
                  id="departure_time"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="departure_flight_number" class="text-[20px] main-font text-[#444]"
                >№ рейс</label
              >
              <div class="flex-1">
                <input
                  class="bg-white w-full px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="text"
                  v-model="userData.departure_flight_number"
                  id="departure_flight_number"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="departure_osh_to_base_date" class="text-[20px] main-font text-[#444]"
                >Переезд Ош-Базовый лагерь</label
              >
              <div class="flex-1 flex justify-start">
                <input
                  class="bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="date"
                  v-model="userData.departure_osh_to_base_date"
                  id="departure_osh_to_base_date"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#f2ebd9] px-[12.5%] grid grid-cols-2 py-[30px] mt-[25px]">
          <div class="pr-[10%]">
            <h4 class="text-[24px] main-font text-[#444] font-semibold">ИНФОРМАЦИЯ О СТРАХОВКЕ</h4>

            <div
              class="border-l-4 border-[#c74e1c] pl-[20px] mt-[25px] text-[20px] main-font text-[#444]"
            >
              Копия страхового полиса предоставляется Коменданту сразу по прибытии в БЛ
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="insurance_number" class="text-[20px] main-font text-[#444]"
                >№ страхового полиса</label
              >
              <div class="flex-1">
                <input
                  class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="text"
                  v-model="userData.insurance_policy_number"
                  id="insurance_number"
                  required
                />
              </div>
            </div>

            <div class="mt-[25px] flex gap-[20px] items-center">
              <label for="coverage" class="text-[20px] main-font text-[#444]">Сумма покрытия</label>
              <div class="flex-1">
                <input
                  class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                  type="number"
                  v-model="userData.insurance_coverage"
                  id="coverage"
                  required
                />
              </div>
            </div>
          </div>

          <div class="pl-[20%]">
            <div class="mt-[25px]">
              <label
                for="insurance_company_name"
                class="text-[20px] main-font text-[#444] w-full block"
                >Название страховой компании</label
              >
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.insurance_company_name"
                id="insurance_company_name"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label
                for="insurance_company_phone"
                class="text-[20px] main-font text-[#444] w-full block"
                >Телефон страховой компании</label
              >
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.insurance_company_phone"
                id="insurance_company_phone"
                required
              />
            </div>

            <div class="mt-[25px]">
              <label
                for="emergency_contact_phone"
                class="text-[20px] main-font text-[#444] w-full block"
                >Адрес страховой компании</label
              >
              <input
                class="w-full bg-white px-[20px] py-[10px] border-1 border-[#888] focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                v-model="userData.emergency_contact_phone"
                id="emergency_contact_phone"
                required
              />
            </div>
          </div>
        </div>

        <div class="px-[12.5%] mt-[40px] flex items-center gap-[40px]">
          <input type="checkbox" class="" required />
          <label class="text-[20px] main-font text-[#444]"
            >Решение об участие в экспедиции я принимаю сознательно и добровольно, ясно осознавая
            степень риска</label
          >
        </div>

        <div class="mt-[50px] flex items-center gap-[40px] justify-center">
          <button
            @click="goBack"
            class="px-[40px] py-[15px] bg-[#888] hover:bg-[#444] cursor-pointer transition-all duration-300 text-white text-[20px] main-font font-semibold"
            type="button"
          >
            Отмена
          </button>
          <button
            class="px-[40px] py-[15px] bg-[#c74e1c] hover:bg-[#c74f1cc7] cursor-pointer transition-all duration-300 text-white text-[20px] main-font font-semibold"
            type="submit"
          >
            Отправить заявку
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
.bg {
  background-image: url('/images/request/bg.png');
  background-size: cover;
}
</style>
