<script setup>
import { ref, onMounted } from 'vue'
import { getAllApplications } from '@/utils/api'

import PanelItems from './PanelItems.vue'

const typePanel = ref('list')
const applications = ref([])
const curItem = ref({})

const handlerListPanel = () => {
  typePanel.value = 'list'
}

const handlerRequestPanel = (item) => {
  typePanel.value = 'request'
  curItem.value = item
}

const handlerDelRequest = async (item) => {
  await deleteApplication(item.id)
  applications.value = (await getAllApplications()).data
  console.log(applications.value)
}

onMounted(async () => {
  applications.value = (await getAllApplications()).data
  console.log(applications)
})
</script>

<template>
  <div v-if="typePanel === 'list'">
    <h1 class="text-2xl main-font text-black text-center">Заявки</h1>

    <div class="relative mt-[25px] overflow-x-auto sm:rounded-lg">
      <div class="pb-4">
        <div class="flex justify-between items-center">
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative mt-1 bg-[#fffffe]">
            <div
              class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-[#444]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block py-2 ps-10 text-sm text-[#444] focus:outline-[#d35400] transition-all border border-[#d35400] rounded-lg w-80"
              placeholder="Название тура"
            />
          </div>
        </div>
      </div>
      <table
        class="w-full text-sm text-left rounded-lg overflow-hidden drop-shadow-lg shadow-2xl border-2 border-[#444]"
      >
        <thead class="text-xs text-black bg-[#fffffe] uppercase">
          <tr>
            <th scope="col" class="p-4 w-[5%]">№</th>
            <th scope="col" class="px-6 py-3 w-[75%]">Номер заявки</th>
            <th scope="col" class="px-6 py-3 w-[20%] text-center">Действия</th>
          </tr>
        </thead>
        <tbody>
          <PanelItems
            v-for="application in applications"
            :key="application.id"
            :item="application"
            editButton="Просмотреть"
            @editItem="handlerRequestPanel"
            @deleteItem="handlerDelRequest"
          />
        </tbody>
      </table>
    </div>
  </div>

  <div v-if="typePanel === 'request'">
    <div class="flex items-center w-full">
      <button
        class="gap-[10px] flex items-center cursor-pointer transition-all hover:-translate-x-1"
        @click="handlerListPanel"
      >
        <img
          src="/svg/arrow-2.svg"
          class="text-[#c74e1c] rotate-180 cursor-pointer w-[20px] h-[20px]"
        />

        <div class="text-[#c74e1c] main-font text-[20px]">Назад</div>
      </button>

      <div class="w-full">
        <h1 class="text-[42px] main-font text-black text-center">Заявка {{ curItem.id }}</h1>
      </div>
    </div>

    <div class="flex flex-col gap-[10px] w-[80%] pt-[20px]">
      <label for="name" class="text-[24px] font-light main-font text-[#444] pt-[10px]">Имя</label>
      <input
        class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
        type="text"
        placeholder="Имя"
        v-model="curItem.first_name"
        id="name"
        required
      />
    </div>

    <div class="flex flex-col gap-[10px] w-[80%]">
      <label for="surname" class="text-[24px] font-light main-font text-[#444] pt-[10px]">Фамилия</label>
      <input
        class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
        type="text"
        placeholder="Фамилия"
        v-model="curItem.last_name"
        id="surname"
        required
      />
    </div>

    <div class="flex flex-col gap-[10px] w-[80%]">
      <label for="phone" class="text-[24px] font-light main-font text-[#444] pt-[10px]">Телефон</label>
      <input
        class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
        type="text"
        placeholder="Телефон"
        v-model="curItem.phone_numbers"
        id="phone"
        required
      />
    </div>

    <div class="flex flex-col gap-[10px] w-[80%]">
      <label for="email" class="text-[24px] font-light main-font text-[#444] pt-[10px]">Email</label>
      <input
        class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
        type="text"
        placeholder="Email"
        v-model="curItem.email"
        id="email"
        required
      />
    </div>

    <div class="flex flex-col gap-[10px] w-[80%]">
      <label for="tour" class="text-[24px] font-light main-font text-[#444] pt-[10px]">Тур</label>
      <input
        class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
        type="text"
        placeholder="Тур"
        v-model="curItem.package_type"
        id="tour"
        required
      />
    </div>

    <div class="flex flex-col gap-[10px] w-[80%]">
      <label for="date" class="text-[24px] font-light main-font text-[#444] pt-[10px]">Дата</label>
      <input
        class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
        type="text"
        placeholder="Дата"
        v-model="curItem.departure_date"
        id="departure_date"
        required
      />
    </div>
  </div>
</template>
