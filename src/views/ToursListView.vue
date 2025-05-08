<script setup>
import HeaderTrigger from '@/components/HeaderTrigger.vue';
import { RouterLink } from 'vue-router';
import { getAllTours } from '@/utils/api';
import { ref, onMounted, computed } from 'vue';
import { applyFilters } from '@/utils/filter'; // Import the filter functions

const tours = ref([]);
const currLang = ref('');
const activeFilter = ref(null); // State to track which filter is open
const filtersActive = ref(false); // State to control whether filters are applied

// State for date filter
const selectedMonth = ref(5); // 0-based index (June is 5, for 2021)
const selectedYear = ref(2021);
const selectedDate = ref(null); // Reset to null initially

// State for duration filter
const selectedDurationRange = ref('ЛЮБОЕ'); // Reset to 'ЛЮБОЕ' initially
const durationRanges = ['ЛЮБОЕ', '1-3', '4-7', '8+'];

// State for country filter
const selectedCountries = ref([]); // Reset to empty array initially

// State for sort option
const sortOption = ref('price'); // Default sort by price

// List of months for quick selection
const months = [
  'ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ',
  'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'
];

// Compute days in the selected month
const daysInMonth = computed(() => {
  return new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate();
});

// Compute the first day of the month (1 = Monday, ..., 7 = Sunday)
const firstDayOfMonth = computed(() => {
  const day = new Date(selectedYear.value, selectedMonth.value, 1).getDay();
  return day === 0 ? 7 : day; // Convert Sunday (0) to 7
});

// Generate the calendar grid
const calendarDays = computed(() => {
  const days = [];
  const totalDays = daysInMonth.value;
  const firstDay = firstDayOfMonth.value - 1; // 0-based index for Monday start

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  const weeksNeeded = Math.ceil((firstDay + totalDays) / 7);
  const totalSlots = weeksNeeded * 7;
  while (days.length < totalSlots) {
    days.push(null);
  }

  return days;
});

// Filter and sort tours using the imported function
const filterAndSortTours = computed(() => {
  return applyFilters(
    tours.value,
    selectedCountries.value,
    selectedDate.value,
    selectedMonth.value,
    selectedYear.value,
    selectedDurationRange.value,
    sortOption.value
  );
});

// Navigate to previous month
const prevMonth = () => {
  selectedMonth.value--;
  if (selectedMonth.value < 0) {
    selectedMonth.value = 11;
    selectedYear.value--;
  }
};

// Navigate to next month
const nextMonth = () => {
  selectedMonth.value++;
  if (selectedMonth.value > 11) {
    selectedMonth.value = 0;
    selectedYear.value++;
  }
};

// Select a month directly
const selectMonth = (monthIndex) => {
  selectedMonth.value = monthIndex;
};

// Select a date
const selectDate = (day) => {
  selectedDate.value = day;
};

// Select a duration range
const selectDurationRange = (range) => {
  selectedDurationRange.value = range;
};

// Toggle country selection
const toggleCountry = (country) => {
  const index = selectedCountries.value.indexOf(country);
  if (index > -1) {
    selectedCountries.value.splice(index, 1);
  } else {
    selectedCountries.value.push(country);
  }
};

// Toggle sort option
const toggleSort = (option) => {
  sortOption.value = option;
};

onMounted(async () => {
  tours.value = (await getAllTours()).data;
  console.log(tours.value);
  currLang.value = sessionStorage.getItem('lang') || 'ru';
});

// Function to toggle filter panels
const toggleFilter = (filter) => {
  activeFilter.value = activeFilter.value === filter ? null : filter;
};

// Activate filters when "Принять" is clicked
const activateFilters = () => {
  filtersActive.value = true;
  activeFilter.value = null;
};

// Reset filters when "Отмена" is clicked
const cancelFilters = () => {
  selectedCountries.value = [];
  selectedDate.value = null;
  selectedDurationRange.value = 'ЛЮБОЕ';
  filtersActive.value = false;
  activeFilter.value = null;
};
</script>

<template>
  <main class="relative">
    <div class="tours-bg pt-[23px] pb-[120px]">
      <div class="flex items-center justify-center">
        <img src="/images/tours/logo.png" />
      </div>

      <div class="pt-[150px] px-[260px] text-white main-font text-[72px] font-semibold drop-shadow-lg">
        <h1 class="">
          ТУРЫ <br>
          В СРЕДНЮЮ АЗИЮ
        </h1>
      </div>

      <div class="px-[260px] pt-[105px]">
        <button
          class="px-[73px] py-4 border-2 border-white text-white uppercase font-bold bg-white/20 backdrop-blur-none hover:bg-white hover:text-gray-800 transition rounded main-font text-[18px]"
        >
          Отправить запрос
        </button>
      </div>
    </div>

    <router-link to="/lenin" class="px-[260px] pt-[29px] pb-[93px]">
      <div class="flex gap-[12px] px-[260px]">
        <img src="/images/clearsnow/arrow.svg" class="w-[15px]" />
        <div class="main-font text-[15px] text-[#888]">(ПРЕДЫДУЩАЯ СТРАНИЦА)</div>
      </div>
    </router-link>

    <div class="relative px-[260px]">
      <div class="flex gap-[2px] items-center justify-between">
        <div class="w-[25%]">
          <button
            @click="toggleFilter('country')"
            :class="{ 'active': activeFilter === 'country' }"
            class="bg-[#f9f6ed] hover:bg-[#e9a83a] cursor-pointer group flex items-center justify-center w-full py-[18px] gap-[21px] transition"
          >
            <img src="/icons/ukaz-sm.png" class="w-[25px]" />
            <div class="main-font text-center">
              <div class="text-[#444] group-hover:text-white font-semibold text-[15px]">
                СТРАНА
              </div>
              <div class="text-[#888] group-hover:text-white text-[12px]">
                КУДА ПОЕХАТЬ
              </div>
            </div>
          </button>
        </div>

        <div class="w-[25%]">
          <button
            @click="toggleFilter('type')"
            :class="{ 'active': activeFilter === 'type' }"
            class="bg-[#f9f6ed] flex items-center justify-center w-full py-[18px] gap-[21px] cursor-pointer hover:bg-[#e9a83a] group transition"
          >
            <img src="/icons/type-sm.png" class="w-[25px]" />
            <div class="main-font text-center">
              <div class="text-[#444] group-hover:text-white font-semibold text-[15px]">
                ТИП ПУТЕШЕСТВИЯ
              </div>
              <div class="text-[#888] group-hover:text-white text-[12px]">
                КАТЕГОРИЯ ТУРА
              </div>
            </div>
          </button>
        </div>

        <div class="w-[25%]">
          <div
            @click="toggleFilter('time')"
            :class="{ 'active': activeFilter === 'time' }"
            class="bg-[#f9f6ed] flex items-center justify-center w-full py-[18px] gap-[21px] cursor-pointer hover:bg-[#e9a83a] group transition"
          >
            <img src="/icons/cal2.png" class="w-[25px]" />
            <div class="main-font text-center">
              <div class="text-[#444] group-hover:text-white font-semibold text-[15px]">
                ВРЕМЯ ПУТЕШЕСТВИЯ
              </div>
              <div class="text-[#888] group-hover:text-white text-[12px]">
                ДАТЫ
              </div>
            </div>
          </div>
        </div>

        <div class="w-[25%]">
          <div
            @click="toggleFilter('duration')"
            :class="{ 'active': activeFilter === 'duration' }"
            class="bg-[#f9f6ed] flex items-center justify-center w-full py-[18px] gap-[21px] cursor-pointer hover:bg-[#e9a83a] group transition"
          >
            <img src="/icons/moon.png" class="w-[25px]" />
            <div class="main-font text-center">
              <div class="text-[#444] group-hover:text-white font-semibold text-[15px]">
                ДИТЕЛЬНОСТЬ
              </div>
              <div class="text-[#888] group-hover:text-white text-[12px]">
                КОЛИЧЕСТВО НОЧЕЙ
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Panels -->
      <div
        v-if="activeFilter"
        class="absolute top-full left-0 right-0 bg-[#f9f6ed] py-6 z-10 shadow-lg mx-[260px] mt-[3px] px-[20px]"
      >
        <!-- Country Filter Panel -->
        <div v-if="activeFilter === 'country'">
          <div class="grid grid-cols-4 gap-4">
            <label class="flex items-center justify-center gap-2">
              <input type="checkbox" v-model="selectedCountries" :value="'КЫРГЫЗСТАН'" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">КЫРГЫЗСТАН</span>
            </label>

            <label class="flex items-center justify-center gap-2">
              <input type="checkbox" v-model="selectedCountries" :value="'ТАДЖИКИСТАН'" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ТАДЖИКИСТАН</span>
            </label>

            <label class="flex items-center justify-center gap-2">
              <input type="checkbox" v-model="selectedCountries" :value="'КИТАЙ'" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">КИТАЙ</span>
            </label>

            <label class="flex items-center justify-center gap-2">
              <input type="checkbox" v-model="selectedCountries" :value="'УЗБЕКИСТАН'" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">УЗБЕКИСТАН</span>
            </label>

            <label class="flex items-center justify-center gap-2">
              <input type="checkbox" v-model="selectedCountries" :value="'КАЗАХСТАН'" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">КАЗАХСТАН</span>
            </label>

            <label class="flex items-center justify-center gap-2">
              <input type="checkbox" v-model="selectedCountries" :value="'ТУРКМЕНИСТАН'" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ТУРКМЕНИСТАН</span>
            </label>

            <label class="flex items-center justify-center gap-2">
              <input type="checkbox" v-model="selectedCountries" :value="'АЗЕРБАЙДЖАН'" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">АЗЕРБАЙДЖАН</span>
            </label>
          </div>

          <div class="mt-5 flex justify-center gap-4">
            <button
              @click="cancelFilters"
              class="px-6 py-2 bg-white border border-gray-300 text-[#444] uppercase main-font text-[16px]"
            >
              Отмена
            </button>
            <button
              @click="activateFilters"
              class="px-6 py-2 bg-[#d35400] text-white uppercase main-font text-[16px]"
            >
              Принять
            </button>
          </div>
        </div>

        <!-- Type Filter Panel -->
        <div v-if="activeFilter === 'type'">
          <div class="grid grid-cols-4 gap-4">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ПРАЗДНИЧНЫЕ ТУРЫ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">4 WD ТУРЫ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ЛЫЖНЫЕ ТУРЫ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ЭКСКУРСИОННЫЕ ТУРЫ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ПРИРОДНЫЕ ТУРЫ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ТЕМАТИЧЕСКИЕ ТУРЫ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">СЕМЕЙНЫЙ ОТДЫХ В ГОРАХ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ТУРЫ НА ВЕРТОЛЕТАХ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">РЫБОЛОВНЫЕ ТУРЫ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ОЗДОРОВИТЕЛЬНЫЕ ТУРЫ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">M.I.C.E</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">АЛЬПИНИЗМ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">КОННЫЕ ТУРЫ</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5" />
              <span class="text-[#444] text-[16px] main-font">ПАРАПЛАНЕРИЗМ</span>
            </label>
          </div>
          <div class="mt-4 flex justify-end gap-4">
            <button
              @click="cancelFilters"
              class="px-6 py-2 bg-white border border-gray-300 text-[#444] uppercase main-font text-[16px]"
            >
              Отмена
            </button>
            <button
              @click="activateFilters"
              class="px-6 py-2 bg-[#d35400] text-white uppercase main-font text-[16px]"
            >
              Принять
            </button>
          </div>
        </div>

        <!-- Time Filter Panel -->
        <div v-if="activeFilter === 'time'">
          <div class="grid grid-cols-2 gap-4">
            <!-- Calendar Section -->
            <div class="col-span-1">
              <div class="flex justify-between items-center mb-4">
                <button @click="prevMonth" class="text-[#444] text-[16px] main-font"><</button>
                <span class="text-[#444] text-[16px] main-font font-semibold">
                  {{ months[selectedMonth] }} {{ selectedYear }}
                </span>
                <button @click="nextMonth" class="text-[#444] text-[16px] main-font">></button>
              </div>
              <div class="grid grid-cols-7 gap-1 text-center">
                <div class="text-[#444] text-[12px] main-font">ПН</div>
                <div class="text-[#444] text-[12px] main-font">ВТ</div>
                <div class="text-[#444] text-[12px] main-font">СР</div>
                <div class="text-[#444] text-[12px] main-font">ЧТ</div>
                <div class="text-[#444] text-[12px] main-font">ПТ</div>
                <div class="text-[#444] text-[12px] main-font">СБ</div>
                <div class="text-[#444] text-[12px] main-font">ВС</div>
                <div
                  v-for="(day, index) in calendarDays"
                  :key="index"
                  @click="day && selectDate(day)"
                  :class="{
                    'text-[#444]': day,
                    'bg-[#e9a83a] text-white': selectedDate === day,
                    'cursor-pointer': day,
                    'hover:bg-gray-200': day && selectedDate !== day
                  }"
                  class="text-[14px] main-font p-1 rounded w-8 h-8 flex items-center justify-center"
                >
                  {{ day || '' }}
                </div>
              </div>
            </div>

            <!-- Month Selection -->
            <div class="col-span-1">
              <div class="text-[#444] text-[14px] main-font mb-4">
                Выберите предпочтительное время для поездки или укажите точную дату начала путешествия
              </div>
              <div class="grid grid-cols-3 gap-1">
                <button
                  v-for="(month, index) in months"
                  :key="index"
                  @click="selectMonth(index)"
                  :class="{ 'bg-[#e9a83a] text-white': selectedMonth === index }"
                  class="text-[#444] text-[14px] main-font p-2 rounded hover:bg-gray-200 w-full text-left"
                >
                  {{ month }}
                </button>
              </div>
            </div>
          </div>
          <div class="mt-4 flex justify-end gap-4">
            <button
              @click="cancelFilters"
              class="px-6 py-2 bg-white border border-gray-300 text-[#444] uppercase main-font text-[16px]"
            >
              Отмена
            </button>
            <button
              @click="activateFilters"
              class="px-6 py-2 bg-[#d35400] text-white uppercase main-font text-[16px]"
            >
              Принять
            </button>
          </div>
        </div>

        <!-- Duration Filter Panel -->
        <div v-if="activeFilter === 'duration'">
          <div class="grid grid-cols-1 gap-4">
            <div class="text-[#444] text-[14px] main-font mb-4">
              Выберите длительность поездки
            </div>
            <div class="flex items-center justify-between gap-4">
              <div class="flex-1 border-b border-gray-300"></div>
              <button
                v-for="(range, index) in durationRanges"
                :key="index"
                @click="selectDurationRange(range)"
                :class="{ 'bg-[#e9a83a] text-white': selectedDurationRange === range }"
                class="text-[#444] text-[14px] main-font px-4 py-2 rounded hover:bg-gray-200 focus:outline-none"
              >
                {{ range }}
              </button>
              <div class="flex-1 border-b border-gray-300"></div>
            </div>
          </div>
          <div class="mt-4 flex justify-end gap-4">
            <button
              @click="cancelFilters"
              class="px-6 py-2 bg-white border border-gray-300 text-[#444] uppercase main-font text-[16px]"
            >
              Отмена
            </button>
            <button
              @click="activateFilters"
              class="px-6 py-2 bg-[#d35400] text-white uppercase main-font text-[16px]"
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-[30px] px-[260px] font-main flex items-center gap-8">
      <div class="text-[#444] font-bold text-[18px]">
        Всего найдено туров: {{ filterAndSortTours.length }}
      </div>

      <div class="text-[#888] text-[17px]">
        Сортировать по:
        <span :class="{ 'text-[#e9a83a]': sortOption === 'price' }" @click="toggleSort('price')" class="cursor-pointer">цене</span>
        | <span :class="{ 'text-[#e9a83a]': sortOption === 'duration' }" @click="toggleSort('duration')" class="cursor-pointer">длительности</span>
      </div>
    </div>

    <div class="mt-[46px] gap-[10px] grid grid-cols-4 max-lp:grid-cols-3 justify-stretch px-[260px]" v-auto-animate>
      <router-link
        class="max-w-[328px] mx-auto cursor-pointer"
        v-for="tour in filterAndSortTours"
        :key="tour.id"
        :to="'/tours/' + tour.id"
      >
        <div class="relative overflow-hidden">
          <img
            :src="'/images/main-page/Aral Sea.jpg'"
            class="h-[337px] object-cover object-left"
          />
          <div class="absolute top-1 right-1 bg-[#e9a83a] rounded-2xl p-[6px] pb-[11px]">
            <img src="/images/main-page/small-group.png" />
          </div>
          <div
            class="absolute bottom-1 left-[50%] translate-x-[-50%] text-white text-[16px] letter-spacing-[.1em] main-font"
          >
            {{ tour.duration }} дней: <span class="font-semibold">{{ tour.price }}</span>
          </div>
        </div>
        <div class="pt-[20px] bg-white border-1 border-[#c7c7c7] text-center pb-[18px]">
          <div class="flex justify-center gap-1">
            <span class="text-[#d35400] text-[12px] letter-spacing-[.25em] main-font">
              {{ tour.tags.join(' #') }}
            </span>
          </div>
          <div class="pt-5 text-[#444] text-[20px] main-font letter-spacing-[0.05em]">
            {{ currLang === 'ru' ? tour.name_ru : tour.name_en }}
          </div>
          <!-- <div class="pt-7 text-[#888] text-[16px] main-font">{{ currLang === 'ru' ? tour.description_ru : tour.description_en }}</div> -->
        </div>
      </router-link>
    </div>

    <div class="mt-[72px] mb-[93px] flex justify-center">
      <button
        class="uppercase text-[#3b3534] hover:text-[#e9a83a] hover:border-[#e9a83a] cursor-pointer transition-all duration-300 text-[18px] font-light main-font px-[142px] py-[17px] border-1 border-[#888]"
      >
        показать больше
      </button>
    </div>

    <HeaderTrigger />
  </main>
</template>

<style scoped>
  .tours-bg {
    background-image: url('/images/tours/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .active {
    background-color: #e9a83a !important;
  }

  .active div {
    color: white !important;
  }
</style>
