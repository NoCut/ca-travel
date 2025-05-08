<script setup>
import { ref } from 'vue'
import { register } from '@/utils/api';
import { useRouter } from 'vue-router'

const user = ref({
  email: '',
  password: '',
  access: []
})

const router = useRouter()

const updateAccess = (permission, checked) => {
  if (checked) {
    if (!user.value.access.includes(permission)) {
      user.value.access.push(permission)
    }
  } else {
    user.value.access = user.value.access.filter(item => item !== permission)
  }
}

const regUser = async () => {
  try {
    await register(user.value.email, user.value.password, user.value.access)
    alert('Пользователь успешно зарегистрирован!')
    router.push('/dashboard')
  } catch (error) {
    alert('Ошибка при регистрации пользователя: ' + (error.response?.data?.detail || error.message))
  }
}
</script>

<template>
  <form class="flex flex-col gap-[30px] items-center justify-center py-[240px] bg-[#FFFFFC] rounded-2xl" @submit.prevent="regUser">
    <div>
      <label for="email">Логин</label>
      <input
        type="text"
        class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
        id="email"
        v-model="user.email"
        placeholder="Введите email"
        required
      />
    </div>

    <div>
      <label for="password">Пароль</label>
      <input
        type="password"
        class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
        id="password"
        v-model="user.password"
        placeholder="Введите пароль"
        required
      />
    </div>

    <div class="flex flex-col gap-3 w-full max-w-xs">
      <label class="text-lg font-medium text-[#444]">Права доступа</label>
      <div class="grid grid-cols-2 gap-2">
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            :checked="user.access.includes('users')"
            @change="updateAccess('users', $event.target.checked)"
            class="w-5 h-5 appearance-none border-2 border-[#444] rounded-md checked:bg-[#EE204D] checked:border-[#EE204D] focus:outline-[#c74e1c] transition-all duration-300"
          />
          <span class="text-[#444] hover:text-[#EE204D] transition-colors duration-300">Пользователи</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            :checked="user.access.includes('tours')"
            @change="updateAccess('tours', $event.target.checked)"
            class="w-5 h-5 appearance-none border-2 border-[#444] rounded-md checked:bg-[#EE204D] checked:border-[#EE204D] focus:outline-[#c74e1c] transition-all duration-300"
          />
          <span class="text-[#444] hover:text-[#EE204D] transition-colors duration-300">Туры</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            :checked="user.access.includes('mountaineering')"
            @change="updateAccess('mountaineering', $event.target.checked)"
            class="w-5 h-5 appearance-none border-2 border-[#444] rounded-md checked:bg-[#EE204D] checked:border-[#EE204D] focus:outline-[#c74e1c] transition-all duration-300"
          />
          <span class="text-[#444] hover:text-[#EE204D] transition-colors duration-300">Альпинизм</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            :checked="user.access.includes('requests')"
            @change="updateAccess('requests', $event.target.checked)"
            class="w-5 h-5 appearance-none border-2 border-[#444] rounded-md checked:bg-[#EE204D] checked:border-[#EE204D] focus:outline-[#c74e1c] transition-all duration-300"
          />
          <span class="text-[#444] hover:text-[#EE204D] transition-colors duration-300">Заявки</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            :checked="user.access.includes('mountaineering_requests')"
            @change="updateAccess('mountaineering_requests', $event.target.checked)"
            class="w-5 h-5 appearance-none border-2 border-[#444] rounded-md checked:bg-[#EE204D] checked:border-[#EE204D] focus:outline-[#c74e1c] transition-all duration-300"
          />
          <span class="text-[#444] hover:text-[#EE204D] transition-colors duration-300">Заявки альпинизм</span>
        </label>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="px-[20px] py-[10px] border-1 rounded-xl transition-all duration-300 border-[#EE204D] text-[#EE204D] hover:bg-[#EE204D] hover:text-white cursor-pointer"
      >
        Создать
      </button>
    </div>
  </form>
</template>
