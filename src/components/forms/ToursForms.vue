<template>
  <div class="mt-6 bg-white rounded shadow-md p-5 max-h-[calc(100vh-150px)] overflow-y-auto">
    <div class="flex justify-between border-b-2 border-gray-500 pb-10 rounded bg-gray-50 p-4">
      <div class="w-2/5">
        <h2 class="text-30 font-bold text-gray-800">Информация о туре</h2>
        <p class="text-16 text-gray-600 mt-2">ID: {{ tourData.id }}</p>
        <p class="text-16 text-gray-600">Создано: {{ new Date(tourData.created_at).toLocaleString() }}</p>
      </div>
      <div class="w-full flex flex-col gap-8 pt-10">
        <div class="flex flex-col gap-2 w-4/5">
          <label for="name_ru" class="text-20 text-gray-800">Название на русском</label>
          <input
            type="text"
            placeholder="Название"
            v-model="tourData.name_ru"
            id="name_ru"
            class="w-full p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
            required
          />
        </div>
        <div class="flex flex-col gap-2 w-4/5">
          <label for="name_en" class="text-20 text-gray-800">Название на английском</label>
          <input
            type="text"
            placeholder="Название"
            v-model="tourData.name_en"
            id="name_en"
            class="w-full p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
            required
          />
        </div>
        <div class="flex flex-col gap-2 w-4/5">
          <label for="countries" class="text-20 text-gray-800">Страны (через запятую)</label>
          <input
            type="text"
            placeholder="Страны"
            v-model="countriesInput"
            id="countries"
            class="w-full p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
            required
          />
        </div>
        <div class="flex flex-col gap-2 w-4/5">
          <label for="image" class="text-20 text-gray-800">Главное фото тура</label>
          <div v-if="tourData.image_path" class="mb-2">
            <img :src="tourData.image_path" alt="Current Tour Image" class="w-32 h-32 object-cover rounded" />
          </div>
          <input
            type="file"
            accept="image/*"
            @change="handleImageUpload"
            id="image"
            class="w-full p-2 border border-gray-500 rounded"
          />
        </div>
        <div class="flex flex-col gap-2 w-4/5">
          <label for="description_ru" class="text-20 text-gray-800">Описание (ру)</label>
          <QuillEditor
            v-model:content="tourData.description_ru"
            contentType="html"
            :toolbar="toolbarOptions"
            class="rounded overflow-hidden"
            id="description_ru"
            required
          />
        </div>
        <div class="flex flex-col gap-2 w-4/5">
          <label for="description_en" class="text-20 text-gray-800">Описание (en)</label>
          <QuillEditor
            v-model:content="tourData.description_en"
            contentType="html"
            :toolbar="toolbarOptions"
            class="rounded overflow-hidden"
            id="description_en"
            required
          />
        </div>
        <div class="flex flex-col gap-2 w-4/5">
          <label for="category" class="text-20 text-gray-800">Категория тура</label>
          <select
            v-model="tourData.category"
            id="category"
            class="w-full p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
            required
          >
            <option value="adventure">Приключенческий</option>
            <option value="excursion">Экскурсионный</option>
            <option value="theme">Тематический</option>
            <option value="holiday">Праздничный</option>
            <option value="mice">M.I.C.E</option>
            <option value="alpinism">Альпинизм</option>
          </select>
        </div>
        <div class="flex flex-col gap-2 w-4/5">
          <p class="text-20 text-gray-800">Теги тура</p>
          <div class="grid grid-cols-2 gap-5">
            <div v-for="tag in availableTags" :key="tag" class="flex items-center gap-5">
              <input type="checkbox" :id="tag" :value="tag" v-model="tourData.tags" class="w-6 h-6" />
              <label :for="tag" class="text-16 text-gray-800">{{ tag }}</label>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-4/5">
          <label for="accommodation" class="text-20 text-gray-800">Проживание (через запятую)</label>
          <input
            type="text"
            placeholder="Проживание"
            v-model="accommodationInput"
            id="accommodation"
            class="w-full p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
            required
          />
        </div>
      </div>
    </div>

    <div class="flex justify-between border-b-2 border-gray-500 pb-10 rounded bg-gray-50 p-4 mt-6">
      <div class="w-2/5">
        <h2 class="text-30 font-bold text-gray-800">Даты тура</h2>
      </div>
      <div class="w-full flex flex-col gap-8 pt-10">
        <div class="flex flex-col gap-2 w-4/5">
          <label for="duration" class="text-20 text-gray-800">Продолжительность</label>
          <input
            type="number"
            placeholder="Дни"
            v-model="tourData.duration"
            id="duration"
            class="w-full p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
            required
          />
        </div>
        <div class="flex flex-col gap-2 w-4/5">
          <button
            class="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
            @click="addDate"
            type="button"
          >
            Добавить даты
          </button>
          <div v-for="(date, index) in tourData.dates" :key="index" class="flex gap-5 mt-5 items-end">
            <div class="flex flex-col gap-2 w-1/3">
              <label class="text-16 text-gray-800">Дата начала</label>
              <input
                type="date"
                v-model="date.start_date"
                @change="validateDate(index)"
                class="p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
                required
              />
            </div>
            <div class="flex flex-col gap-2 w-1/3">
              <label class="text-16 text-gray-800">Дата окончания</label>
              <input
                type="date"
                v-model="date.end_date"
                @change="validateDate(index)"
                class="p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
                required
              />
            </div>
            <button
              class="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
              @click="removeDate(index)"
              type="button"
            >
              Удалить
            </button>
            <p v-if="date.error" class="text-red-500 text-14 mt-1">{{ date.error }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between border-b-2 border-gray-500 pb-10 rounded bg-gray-50 p-4 mt-6">
      <div class="w-2/5">
        <h2 class="text-30 font-bold text-gray-800">Цена</h2>
      </div>
      <div class="w-full flex flex-col gap-8 pt-10">
        <div class="flex flex-col gap-2 w-4/5">
          <label for="price" class="text-20 text-gray-800">Цена (USD)</label>
          <input
            type="number"
            placeholder="Цена"
            v-model="tourData.price"
            id="price"
            class="w-2/5 p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
            required
          />
        </div>
      </div>
    </div>

    <div class="flex justify-between border-b-2 border-gray-500 pb-10 rounded bg-gray-50 p-4 mt-6">
      <div class="w-2/5">
        <h2 class="text-30 font-bold text-gray-800">Дополнительные расходы</h2>
      </div>
      <div class="w-full flex flex-col gap-8 pt-10">
        <div class="flex flex-col gap-2 w-4/5">
          <button
            class="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
            @click="addExtraCost"
            type="button"
          >
            Добавить
          </button>
          <div v-for="(cost, index) in tourData.extra_costs_ru" :key="index" class="flex gap-5 mt-5">
            <div class="flex flex-col gap-2 w-3/5">
              <label class="text-16 text-gray-800">Название (ру)</label>
              <input
                type="text"
                placeholder="Название"
                v-model="cost.name"
                class="p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
                required
              />
            </div>
            <div class="flex flex-col gap-2 w-1/5">
              <label class="text-16 text-gray-800">Цена</label>
              <input
                type="text"
                placeholder="Цена"
                v-model="cost.price"
                class="p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
                required
              />
            </div>
          </div>
          <div v-for="(cost, index) in tourData.extra_costs_en" :key="index" class="flex gap-5 mt-5">
            <div class="flex flex-col gap-2 w-3/5">
              <label class="text-16 text-gray-800">Название (en)</label>
              <input
                type="text"
                placeholder="Название"
                v-model="cost.name"
                class="p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
                required
              />
            </div>
            <div class="flex flex-col gap-2 w-1/5">
              <label class="text-16 text-gray-800">Цена</label>
              <input
                type="text"
                placeholder="Цена"
                v-model="cost.price"
                class="p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between border-b-2 border-gray-500 pb-10 rounded bg-gray-50 p-4 mt-6">
      <div class="w-2/5">
        <h2 class="text-30 font-bold text-gray-800">Маршруты</h2>
      </div>
      <div class="w-full">
        <div class="flex justify-end">
          <button
            class="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
            @click="addRoute"
            type="button"
          >
            Добавить маршрут
          </button>
        </div>
        <div v-for="(route, index) in tourData.routes" :key="index" class="border-b border-gray-500 pb-12">
          <div class="flex flex-col gap-2 w-4/5">
            <label for="route_ru" class="text-20 text-gray-800">Маршрут (ру)</label>
            <input
              type="text"
              placeholder="Маршрут"
              v-model="route.route_ru"
              id="route_ru"
              class="w-full p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
              required
            />
          </div>
          <div class="flex flex-col gap-2 w-4/5 pt-5">
            <label for="route_en" class="text-20 text-gray-800">Маршрут (en)</label>
            <input
              type="text"
              placeholder="Маршрут"
              v-model="route.route_en"
              id="route_en"
              class="w-full p-2 border border-gray-500 rounded focus:outline focus:outline-2 focus:outline-orange-500"
              required
            />
          </div>
          <div class="flex flex-col gap-2 w-4/5 pt-5">
            <label for="description_ru" class="text-20 text-gray-800">Описание (ру)</label>
            <QuillEditor
              v-model:content="route.description_ru"
              contentType="html"
              :toolbar="toolbarOptions"
              class="rounded overflow-hidden"
              id="description_ru"
              required
            />
          </div>
          <div class="flex flex-col gap-2 w-4/5 pt-5">
            <label for="description_en" class="text-20 text-gray-800">Описание (en)</label>
            <QuillEditor
              v-model:content="route.description_en"
              contentType="html"
              :toolbar="toolbarOptions"
              class="rounded overflow-hidden"
              id="description_en"
              required
            />
          </div>
          <div class="flex justify-between items-center mt-12">
            <h3 class="text-24 text-gray-800">Расписание</h3>
            <button
              class="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
              @click="addSchedule(index)"
              type="button"
            >
              Добавить день
            </button>
          </div>
          <div v-for="(schedule, sIndex) in route.schedules" :key="sIndex">
            <div class="flex flex-col gap-2 w-4/5 pt-5">
              <label class="text-20 text-gray-800">День {{ schedule.day_number }}</label>
            </div>
            <div class="flex flex-col gap-2 w-4/5 pt-5">
              <label for="image" class="text-20 text-gray-800">Фото</label>
              <div v-if="schedule.image_path" class="mb-2">
                <img :src="schedule.image_path" alt="Schedule Image" class="w-32 h-32 object-cover rounded" />
              </div>
              <input
                type="file"
                accept="image/*"
                @change="handleScheduleImageUpload($event, index, sIndex)"
                :id="'image-' + index + '-' + sIndex"
                class="w-full p-2 border border-gray-500 rounded"
              />
            </div>
            <div class="flex flex-col gap-2 w-4/5 pt-5">
              <label for="schedule_ru" class="text-20 text-gray-800">Описание (ру)</label>
              <QuillEditor
                v-model:content="schedule.schedule_ru"
                contentType="html"
                :toolbar="toolbarOptions"
                class="rounded overflow-hidden"
                id="schedule_ru"
                required
              />
            </div>
            <div class="flex flex-col gap-2 w-4/5 pt-5">
              <label for="schedule_en" class="text-20 text-gray-800">Описание (en)</label>
              <QuillEditor
                v-model:content="schedule.schedule_en"
                contentType="html"
                :toolbar="toolbarOptions"
                class="rounded overflow-hidden"
                id="schedule_en"
                required
              />
            </div>
            <div class="flex flex-col gap-2 w-4/5 pt-5">
              <label for="activities_ru" class="text-20 text-gray-800">Подробно (ру)</label>
              <QuillEditor
                v-model:content="schedule.activities_ru"
                contentType="html"
                :toolbar="toolbarOptions"
                class="rounded overflow-hidden"
                id="activities_ru"
                required
              />
            </div>
            <div class="flex flex-col gap-2 w-4/5 pt-5">
              <label for="activities_en" class="text-20 text-gray-800">Подробно (en)</label>
              <QuillEditor
                v-model:content="schedule.activities_en"
                contentType="html"
                :toolbar="toolbarOptions"
                class="rounded overflow-hidden"
                id="activities_en"
                required
              />
            </div>
          </div>
        </div>
        <div class="mt-10 flex justify-end">
          <button
            class="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
            @click="submitTour"
          >
            Сохранить тур
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { createTour, updateTour } from '@/utils/api';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const emit = defineEmits(['close']);

// Separate ref to store schedule images non-reactively
const scheduleImages = ref({});

const tourData = ref({
  id: '',
  name_ru: '',
  name_en: '',
  countries: [],
  duration: 0,
  dates: [],
  image: null,
  image_path: '',
  description_ru: '',
  description_en: '',
  price: 0,
  extra_costs_ru: [],
  extra_costs_en: [],
  accommodation: [],
  category: '',
  tags: [],
  routes: [],
  created_at: '',
});

const countriesInput = ref('');
const accommodationInput = ref('');
const availableTags = [
  'Лыжные',
  'Экскурсионные туры',
  'Природные туры',
  'Тематические туры',
  '4WD туры',
  'Семейный отдых в горах',
  'Туры на вертолетах',
  'Рыболовные туры',
  'Оздоровительные туры',
  'M.I.C.E.',
  'Альпинизм',
  'Конные туры',
  'Парапланеризм',
];

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ header: 1 }, { header: 2 }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  ['clean'],
];

const props = defineProps({
  tour: {
    type: Object,
    default: null,
  },
});

onMounted(() => {
  if (props.tour) {
    tourData.value = { ...props.tour };
    countriesInput.value = tourData.value.countries.join(', ');
    accommodationInput.value = tourData.value.accommodation.join(', ');
    tourData.value.dates = tourData.value.dates.map(date => {
      const [start_date, end_date] = date.split(' - ');
      return { start_date, end_date, error: '' };
    });
    tourData.value.routes = tourData.value.routes.map(route => ({
      route_ru: route.route_ru || '',
      route_en: route.route_en || '',
      description_ru: route.description_ru || '',
      description_en: route.description_en || '',
      schedules: route.schedules || [],
    }));
    console.log('Initial tourData:', tourData.value);
  } else {
    addDate();
  }
});

// Watch for changes in routes and tags to debug
watch(() => tourData.value.routes, (newRoutes) => {
  console.log('Routes updated:', newRoutes);
}, { deep: true });

watch(() => tourData.value.tags, (newTags) => {
  console.log('Tags updated:', newTags);
}, { deep: true });

const addDate = () => {
  tourData.value.dates.push({
    start_date: '',
    end_date: '',
    error: '',
  });
};

const removeDate = (index) => {
  tourData.value.dates.splice(index, 1);
  if (tourData.value.dates.length === 0) {
    addDate();
  }
};

const validateDate = (index) => {
  const date = tourData.value.dates[index];
  if (date.start_date && date.end_date) {
    const start = new Date(date.start_date);
    const end = new Date(date.end_date);
    if (end < start) {
      date.error = 'Дата окончания не может быть раньше даты начала';
    } else {
      date.error = '';
    }
  } else {
    date.error = 'Обе даты должны быть заполнены';
  }
};

const handleImageUpload = (event) => {
  tourData.value.image = event.target.files[0];
  console.log('Main image uploaded:', tourData.value.image);
};

const handleScheduleImageUpload = (event, routeIndex, scheduleIndex) => {
  const file = event.target.files[0];
  if (file) {
    // Store the file in a non-reactive object to avoid reactivity issues
    const key = `${routeIndex}_${scheduleIndex}`;
    scheduleImages.value[key] = file;
    // Also update tourData for UI purposes (e.g., to trigger reactivity if needed)
    tourData.value.routes[routeIndex].schedules[scheduleIndex].image = file;
    console.log(`Schedule image uploaded for route ${routeIndex}, schedule ${scheduleIndex}:`, file);
    console.log(`Stored in scheduleImages[${key}]:`, scheduleImages.value[key]);
  }
};

const addRoute = () => {
  tourData.value.routes.push({
    route_ru: '',
    route_en: '',
    description_ru: '',
    description_en: '',
    schedules: [],
  });
};

const addSchedule = (routeIndex) => {
  const newDayNumber = tourData.value.routes[routeIndex].schedules.length + 1;
  tourData.value.routes[routeIndex].schedules.push({
    day_number: newDayNumber,
    schedule_ru: '',
    schedule_en: '',
    activities_ru: '',
    activities_en: '',
    image: null,
    image_path: '',
  });
};

const addExtraCost = () => {
  tourData.value.extra_costs_ru.push({ name: '', price: '' });
  tourData.value.extra_costs_en.push({ name: '', price: '' });
};

const submitTour = async () => {
  try {
    // Validate dates
    let hasDateError = false;
    tourData.value.dates.forEach((date, index) => {
      validateDate(index);
      if (date.error) hasDateError = true;
    });
    if (hasDateError) {
      alert('Пожалуйста, исправьте ошибки в датах перед отправкой.');
      return;
    }

    // Validate countries
    const countries = countriesInput.value
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);
    if (countries.length === 0) {
      alert('Пожалуйста, укажите хотя бы одну страну.');
      return;
    }

    // Validate dates array
    const formattedDates = tourData.value.dates
      .map(date => {
        if (!date.start_date || !date.end_date) return null;
        const start = new Date(date.start_date);
        const end = new Date(date.end_date);
        return end >= start ? `${date.start_date} - ${date.end_date}` : null;
      })
      .filter(date => date !== null);
    if (formattedDates.length === 0) {
      alert('Пожалуйста, добавьте и заполните хотя бы одну дату.');
      return;
    }

    // Prepare accommodation
    const accommodation = accommodationInput.value
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    // Prepare routes for submission (remove image and image_path to handle separately)
    const routesForSubmission = tourData.value.routes.map(route => ({
      route_ru: route.route_ru,
      route_en: route.route_en,
      description_ru: route.description_ru,
      description_en: route.description_en,
      schedules: route.schedules.map(schedule => ({
        day_number: schedule.day_number,
        schedule_ru: schedule.schedule_ru,
        schedule_en: schedule.schedule_en,
        activities_ru: schedule.activities_ru,
        activities_en: schedule.activities_en,
      })),
    }));

    // Create FormData
    const formData = new FormData();

    // Add basic fields
    formData.append('name_ru', tourData.value.name_ru);
    formData.append('name_en', tourData.value.name_en);
    formData.append('description_ru', tourData.value.description_ru);
    formData.append('description_en', tourData.value.description_en);
    formData.append('duration', tourData.value.duration);
    formData.append('price', tourData.value.price);
    formData.append('category', tourData.value.category);

    // Add arrays as JSON strings
    formData.append('countries', JSON.stringify(countries));
    formData.append('dates', JSON.stringify(formattedDates));
    formData.append('tags', JSON.stringify(tourData.value.tags));
    formData.append('routes', JSON.stringify(routesForSubmission));

    // Add accommodation as individual entries
    accommodation.forEach((acc, index) => {
      formData.append(`accommodation[${index}]`, acc);
    });

    // Add extra costs as JSON strings
    formData.append('extra_costs_ru', JSON.stringify(tourData.value.extra_costs_ru));
    formData.append('extra_costs_en', JSON.stringify(tourData.value.extra_costs_en));

    // Add main image
    if (tourData.value.image) {
      formData.append('image', tourData.value.image);
      console.log('Main image appended to FormData:', tourData.value.image);
    }

    // Add schedule images using a nested structure
    tourData.value.routes.forEach((route, rIndex) => {
      route.schedules.forEach((schedule, sIndex) => {
        const key = `${rIndex}_${sIndex}`;
        const image = scheduleImages.value[key];
        if (image) {
          formData.append(`schedules[${rIndex}][${sIndex}][image]`, image);
          console.log(`Appended schedule image for route ${rIndex}, schedule ${sIndex}:`, image);
        } else {
          console.log(`No image found for route ${rIndex}, schedule ${sIndex}`);
        }
      });
    });

    // Log the data being sent
    console.log('Submitting tourData:', {
      ...tourData.value,
      countries,
      dates: formattedDates,
      routes: routesForSubmission,
    });

    // Log all FormData entries for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`FormData entry: ${key}`, value);
    }

    // Submit or update tour
    if (props.tour && props.tour.id) {
      await updateTour(tourData.value.id, formData);
      alert('Тур успешно обновлен!');
    } else {
      await createTour(formData);
      alert('Тур успешно добавлен!');
    }
    emit('close');
  } catch (error) {
    alert('Ошибка при сохранении тура: ' + (error.response?.data?.detail || error.message));
    console.error('Error details:', error);
  }
};
</script>

<style scoped>
.quill-editor .ql-container {
  border: 1px solid #6b7280;
  border-radius: 0 0 0.25rem 0.25rem;
  min-height: 100px;
}

.quill-editor .ql-toolbar {
  border: 1px solid #6b7280;
  border-bottom: none;
  border-radius: 0.25rem 0.25rem 0 0;
}

.quill-editor:focus-within {
  outline: 2px solid #f97316;
  outline-offset: -1px;
}

/* Responsive Adjustments */
@media (max-width: 420px) {
  .mt-6.bg-white.rounded.shadow-md.p-5.max-h-\[calc\(100vh-150px\)\].overflow-y-auto {
    padding: 0.5rem;
  }
  .flex.justify-between.border-b-2.border-gray-500.pb-10.rounded.bg-gray-50.p-4 {
    flex-direction: column;
  }
  .w-2\/5 {
    width: 100%;
    margin-bottom: 1rem;
  }
  .flex.flex-col.gap-2.w-4\/5 {
    width: 100%;
  }
  .w-full.flex.flex-col.gap-8.pt-10 {
    padding-top: 1rem;
    gap: 1rem;
  }
}

@media (min-width: 421px) and (max-width: 640px) {
  .mt-6.bg-white.rounded.shadow-md.p-5.max-h-\[calc\(100vh-150px\)\].overflow-y-auto {
    padding: 0.75rem;
  }
  .flex.justify-between.border-b-2.border-gray-500.pb-10.rounded.bg-gray-50.p-4 {
    flex-direction: column;
  }
  .w-2\/5 {
    width: 100%;
    margin-bottom: 1rem;
  }
  .flex.flex-col.gap-2.w-4\/5 {
    width: 100%;
  }
}

@media (min-width: 641px) and (max-width: 769px) {
  .mt-6.bg-white.rounded.shadow-md.p-5.max-h-\[calc\(100vh-150px\)\].overflow-y-auto {
    padding: 1rem;
  }
  .flex.justify-between.border-b-2.border-gray-500.pb-10.rounded.bg-gray-50.p-4 {
    flex-direction: row;
  }
  .w-2\/5 {
    width: 33.333333%;
  }
  .flex.flex-col.gap-2.w-4\/5 {
    width: 83.333333%;
  }
}

@media (min-width: 770px) {
  .mt-6.bg-white.rounded.shadow-md.p-5.max-h-\[calc\(100vh-150px\)\].overflow-y-auto {
    padding: 1.25rem;
  }
  .flex.justify-between.border-b-2.border-gray-500.pb-10.rounded.bg-gray-50.p-4 {
    flex-direction: row;
  }
  .w-2\/5 {
    width: 40%;
  }
  .flex.flex-col.gap-2.w-4\/5 {
    width: 80%;
  }
}
</style>  
