<script setup>
import { ref } from 'vue'
import { createTour } from '@/utils/api'

const emit = defineEmits(['close'])

const tourData = ref({
  name: '',
  countries: '',
  duration: 0,
  dates: '',
  description: '',
  meals: '',
  price: 0,
  extra_costs: '',
  accommodation: '',
  routes: [],
})

const addRoute = () => {
  tourData.value.routes.push({
    cities: '',
    description: '',
    schedules: [],
  })
}

const addSchedule = (routeIndex) => {
  tourData.value.routes[routeIndex].schedules.push({
    day_number: 1,
    activities: '',
    image: '',
  })
}

const submitTour = async () => {
  try {
    // Преобразуем строки в массивы
    console.log('yep')
    tourData.value.countries = tourData.value.countries.split(',').map((s) => s.trim())
    tourData.value.dates = tourData.value.dates.split(',').map((s) => s.trim())
    tourData.value.routes.forEach((route) => {
      route.cities = route.cities.split(',').map((s) => s.trim())
    })

    await createTour(tourData.value)
    alert('Тур успешно добавлен!')
  } catch (error) {
    alert('Ошибка при добавлении тура: ' + (error.response?.data?.detail || error.message))
  }
}
</script>

<template>
  <form
    class="mt-[25px] bg-[#fffffe] rounded-xl shadow-2xl px-[20px] pt-[30px] max-h-[calc(100vh-150px)] overflow-y-scroll"
    @submit.prevent="submitTour"
  >
    <div class="flex justify-between border-b-2 border-[#888] pb-[40px]">
      <div class="w-[40%]">
        <h2 class="text-[32px] font-bold main-font text-[#444]">Информация о туре</h2>
      </div>

      <div class="w-full flex flex-col gap-[30px] pt-[40px]">
        <div class="flex flex-col gap-[10px] w-[80%]">
          <label for="name" class="text-[24px] font-light main-font text-[#444]">Название</label>
          <input
            class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
            type="text"
            placeholder="Название"
            v-model="tourData.name"
            id="name"
            required
          />
        </div>

        <div class="flex flex-col gap-[10px] w-[80%]">
          <label for="countries" class="text-[24px] font-light main-font text-[#444]">Страны</label>
          <input
            class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
            type="text"
            placeholder="Страны"
            v-model="tourData.countries"
            id="countries"
            required
          />
        </div>

        <div class="flex flex-col gap-[10px] w-[80%]">
          <label for="description" class="text-[24px] font-light main-font text-[#444]"
            >Описание</label
          >
          <textarea
            class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
            type="text"
            placeholder="Описание"
            v-model="tourData.description"
            id="description"
            required
          />
        </div>
      </div>
    </div>

    <div class="flex justify-between border-b-2 border-[#888] py-[40px]">
      <div class="w-[40%]">
        <h2 class="text-[32px] font-bold main-font text-[#444]">Даты тура</h2>
      </div>

      <div class="w-full flex flex-col gap-[30px] pt-[40px]">
        <div class="flex justify-between gap-[10px] w-[80%]">
          <div class="flex flex-col gap-[10px] w-[40%]">
            <label for="duration" class="text-[24px] font-light main-font text-[#444]"
              >Продолжительность</label
            >
            <input
              class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
              type="number"
              placeholder="Дни"
              v-model="tourData.duration"
              id="duration"
              required
            />
          </div>

          <div class="flex flex-col gap-[10px] w-[40%]">
            <label for="date" class="text-[24px] font-light main-font text-[#444]">Даты</label>
            <input
              class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
              type="text"
              placeholder="Даты"
              v-model="tourData.dates"
              id="date"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between border-b-2 border-[#888] py-[40px]">
      <div class="w-[40%]">
        <h2 class="text-[32px] font-bold main-font text-[#444]">Цена</h2>
      </div>

      <div class="w-full flex flex-col gap-[30px] pt-[40px]">
        <div class="flex flex-col gap-[10px] w-[80%]">
          <label for="price" class="text-[24px] font-light main-font text-[#444]">Цена (USD)</label>
          <input
            class="w-[40%] px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
            type="number"
            placeholder="Цена"
            v-model="tourData.price"
            id="price"
            required
          />
        </div>
      </div>
    </div>

    <div class="flex justify-between py-[40px]">
      <div class="w-[40%]">
        <h2 class="text-[32px] font-bold main-font text-[#444]">Маршруты</h2>
      </div>

      <div class="w-full">
        <div class="justify-self-end">
          <button
            class="px-[20px] py-[10px] main-font text-[#fff] bg-[#c74e1c] rounded-2xl cursor-pointer hover:bg-[#db6c3f] transition-all duration-300"
            @click="addRoute"
            type="button"
          >
            Добавить маршрут
          </button>
        </div>

        <div v-for="(route, index) in tourData.routes" :key="index" class="border-b-1 border-[#888] pb-[50px]">
          <div class="flex flex-col gap-[10px] w-[80%]">
            <label for="city" class="text-[24px] font-light main-font text-[#444] pt-[10px]"
              >Город</label
            >
            <input
              class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
              type="text"
              placeholder="Город"
              v-model="route.cities"
              id="city"
              required
            />
          </div>

          <div class="flex flex-col gap-[10px] w-[80%] pt-[20px]">
            <label for="description" class="text-[24px] font-light main-font text-[#444] pt-[10px]"
              >Описание</label
            >
            <textarea
              class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
              type="text"
              placeholder="Описание"
              v-model="route.description"
              id="description"
              required
            ></textarea>
          </div>

          <div class="flex justify-between items-center mt-[50px]">
            <h3 class="text-[28px] main-font text-[#444]">Расписание</h3>
            <button
              class="px-[20px] py-[10px] main-font text-[#fff] bg-[#c74e1c] rounded-2xl cursor-pointer hover:bg-[#db6c3f] transition-all duration-300"
              @click="addSchedule(index)"
              type="button"
            >
              Добавить день
            </button>
          </div>

          <div v-for="(schedule, sIndex) in route.schedules" :key="sIndex">
            <div class="flex justify-between w-[80%]">
              <div class="flex flex-col gap-[10px] w-[40%]">
                <label for="day" class="text-[24px] font-light main-font text-[#444] pt-[10px]"
                  >День</label
                >
                <input
                  class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
                  type="number"
                  placeholder="Дата"
                  v-model="schedule.day_number"
                  id="day"
                  required
                />
              </div>

              <div class="flex flex-col gap-[10px] w-[40%]">
                <label for="image" class="text-[24px] font-light main-font text-[#444] pt-[10px]"
                  >Фото</label
                >
                <input
                  class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
                  type="text"
                  placeholder="Ссылка на фото"
                  v-model="schedule.image"
                  id="image"
                />
              </div>
            </div>

            <div class="flex flex-col gap-[10px] w-[80%] pt-[20px]">
              <label for="day-desc" class="text-[24px] font-light main-font text-[#444] pt-[10px]"
                >Описание</label
              >
              <textarea
                class="w-full px-[20px] py-[10px] border-1 border-[#444] rounded-2xl focus:outline-[#c74e1c] transition-all duration-300"
                type="text"
                placeholder="Описание"
                v-model="schedule.activities"
                id="day-desc"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div class="mt-[40px] justify-self-end">
          <button
            class="px-[20px] py-[10px] main-font text-[#fff] bg-[#c74e1c] rounded-2xl cursor-pointer hover:bg-[#db6c3f] transition-all duration-300"
            type="submit"
          >
            Создать тур
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
