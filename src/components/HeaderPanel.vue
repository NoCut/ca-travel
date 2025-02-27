<script setup>
import HeaderTop from './HeaderTop.vue';
import UkazIcon from '@/assets/icons/UkazIcon.vue';
import MapIcon from '@/assets/icons/MapIcon.vue';
import WorldIcon from '@/assets/icons/WorldIcon.vue';
import AboutIcon from '@/assets/icons/AboutIcon.vue';
import ContactsIcon from '@/assets/icons/ContactsIcon.vue';
import SearchIcon from '@/assets/icons/SearchIcon.vue';
</script>

<template>
  <header id="header" class="hidden fixed top-0 left-0 w-full z-100">
    <HeaderTop />

    <div class="bg-[#FAF8EE] px-[250px]">
      <div class="flex justify-between align-center px-4 uppercase py-[20px] main-font font-semibold text-[15px] text-[#444444] border-b-2 border-[#b8b6b2]">
        <div class="flex gap-[12px] hover:text-[#d35400] text-[#d35400]">
          <UkazIcon />
          <span>Куда поехать</span>
        </div>

        <div class="flex gap-[12px] hover:text-[#d35400]">
          <MapIcon />
          <span>Тип путешествия</span>
        </div>

        <div class="flex gap-[12px] hover:text-[#d35400]">
          <WorldIcon />
          <span>Подбор тура</span>
        </div>

        <div class="flex gap-[12px] hover:text-[#d35400]">
          <AboutIcon />
          <span>О нас</span>
        </div>

        <div class="flex gap-[12px] hover:text-[#d35400]">
          <ContactsIcon />
          <span>Контакты</span>
        </div>

        <div class="flex gap-[12px] hover:text-[#d35400]">
          <SearchIcon className="text-[#d35400]" />
          <span>Поиск по сайт</span>
        </div>
      </div>

      <div class="flex justify-between items-center px-[100px] text-[#444444] pb-[30px] pt-[25px] border-b-2 border-[#b8b6b2] main-font text-[15px]">
        <div class="flex flex-col items-center justify-center">
          <img src="/images/maps/uz-map.png" class="w-[100px] h-[80px]" />
          <div>
            Узбекистан
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src="/images/maps/kg-map.png" class="w-[100px] h-[80px]"/>
          <div>
            Кыргызстан
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src="/images/maps/kz-map.png" class="w-[100px] h-[80px]"/>
          <div>
            Казахстан
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src="/images/maps/tj-map.png" class="w-[100px] h-[80px]"/>
          <div>
            Таджикистан
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src="/images/maps/tm-map.png" class="w-[100px] h-[80px]"/>
          <div>
            Туркменистан
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src="/images/maps/cn-map.png" class="w-[100px] h-[80px]"/>
          <div>
            Китай
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src="/images/maps/az-map.png" class="w-[100px] h-[80px]"/>
          <div>
            Азербайджан
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <div>

        </div>

        <div>

        </div>
      </div>
    </div>
  </header>
</template>


