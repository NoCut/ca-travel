<script setup>
import { onMounted, ref } from 'vue'
import { getAllUsers } from '@/utils/api'

import PanelItems from './PanelItems.vue'
import UserForm from '../forms/UserForm.vue'

const users = ref([])
const typePanel = ref('list')
const curItem = ref('')
const handlerAddPanel = () => {
  typePanel.value = 'add'
}
const handlerListPanel = () => {
  typePanel.value = 'list'
}

const handlerEditPanel = (item) => {
  typePanel.value = 'edit'
  curItem.value = item
  console.log(curItem.value)
}

// const handleDelUser = async (item) => {
//   await deleteUser(item.id)
//   users.value = (await getAllUsers()).data
//   console.log(users.value)
// }

const getUsers = async () => {
  users.value = (await getAllUsers()).data
  console.log(users.value)
}

onMounted(async () => {
  await getUsers()
})
</script>

<template>
  <div class="" v-if="typePanel === 'list'">
    <h1 class="text-2xl text-black text-center">Пользователи</h1>

    <div class="relative mt-[25px] overflow-x-auto sm:rounded-lg">
      <div class="flex justify-between items-center">
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

        <div>
          <button
            @click="handlerAddPanel"
            class="px-[20px] py-[10px] border-1 rounded-xl transition-all duration-300 border-[#EE204D] text-[#EE204D] hover:bg-[#EE204D] hover:text-white cursor-pointer"
          >
            Создать
          </button>
        </div>
      </div>
      <table
        class="w-full text-sm text-left rounded-lg overflow-hidden drop-shadow-lg shadow-2xl border-2 border-[#444]"
      >
        <thead class="text-xs text-black bg-[#fffffe] uppercase">
          <tr>
            <th scope="col" class="p-4 w-[5%]">№</th>
            <th scope="col" class="px-6 py-3 w-[75%]">Email</th>
            <th scope="col" class="px-6 py-3 w-[20%] text-center">Действия</th>
          </tr>
        </thead>
        <tbody>
          <PanelItems v-for="user in users" :key="user.id" :item="user" editButton="Изменить" @editItem="handlerEditPanel" @deleteItem="deleteUser"  />
        </tbody>
      </table>
    </div>
  </div>
  <div v-if="typePanel === 'add'">
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
        <h1 class="text-[42px] main-font text-black text-center">Добавление пользователя</h1>
      </div>
    </div>

    <UserForm />
  </div>
</template>
