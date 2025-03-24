<script setup>
import { auth } from '@/utils/api';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const login = ref('')
const password = ref('')
const message = ref('')

const handleLogin = async () => {
  try{
    const data = await auth(login.value, password.value);
    message.value = "Авторизация успешна! Теперь войдите.";
    setTimeout(() => {
      router.push({ name: 'dashboard' })
    }, 1000)
  } catch (error) {
    message.value = "Ошибка входа: " + (error.response?.data || error.message);
  }
}
</script>

<template>
  <main class="w-[100vw] h-[100vh] flex justify-center items-center bg">
    <div class="w-[30%] rounded-2xl overflow-hidden bg-white">
      <h1 class="text-[32px] text-white main-font font-light bg-[#c54d1b] text-center border-b-1 border-[#888] py-[30px]">АВТОРИЗАЦИЯ</h1>

      <div class="flex flex-col gap-[30px] items-center py-[30px]">
        <p class="text-center text-[16px] text-[red] main-font">{{ message }}</p>

        <input
          type="text"
          placeholder="Логин"
          v-model="login"
          class="w-[80%] p-4 border-1 border-[#888] focus:border-[#c54d1b] focus:outline-none rounded-3xl">

        <input
          type="password"
          placeholder="Пароль"
          v-model="password"
          class="w-[80%] p-4 border-1 border-[#888] focus:border-[#c54d1b] focus:outline-none rounded-3xl">

        <button
          @click="handleLogin"
         class="rounded-3xl py-4 px-8 bg-[#c54d1b] text-white font-bold hover:bg-[#e69370] transition-all duration-300 cursor-pointer">ВОЙТИ</button>
      </div>
    </div>
  </main>
</template>


<style scoped>
.bg {
  background-image: url('/images/clearsnow/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
