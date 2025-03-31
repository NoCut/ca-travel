<script setup>
import { ref } from 'vue'
import { register } from '@/utils/api';
import { useRouter } from 'vue-router'

const user = ref({
  email: '',
  password: '',
})

const router = useRouter()

const regUser = async () => {
  try {
    await register(user.value.email, user.value.password)
    alert('Пользователь успешно зарегистрирован!')
    router.push('/dashboard')
  } catch (error) {
    alert('Ошибка при регистрации пользователя: ' + (error.response?.data?.detail || error.message))
  }
}
</script>

<template>
  <form class="flex flex-col gap-[30px] items-center justify-center py-[240px] bg-[#FFFFFC] rouded-2xl" @submit.prevent="regUser">
    <div>
      <label for="email">Логин</label>
      <input type="text" class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300" id="email" v-model="user.email" placeholder="Введите email" required />
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
