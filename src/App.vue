<script setup>
import { RouterView } from 'vue-router'
import HeaderPanel from './components/HeaderPanel.vue'
import FooterPanel from './components/FooterPanel.vue';
import HeaderMobile from './components/HeaderMobile.vue';
import SecondMenu from './components/SecondMenu.vue';
import { ref, onMounted } from 'vue';

const supportedLangs = ['ru', 'en', 'es', 'fr', 'de']

const getSystemLang = () => {
  const storedLang = sessionStorage.getItem("selectedLanguage");
  if (storedLang && supportedLangs.includes(storedLang)) {
    return storedLang;
  }

  const systemLang = navigator.language.slice(0, 2);
  return supportedLangs.includes(systemLang) ? systemLang : "en";
};

const userWidth = ref(window.innerWidth);

onMounted(() => {
  sessionStorage.setItem("selectedLanguage", getSystemLang());
})
</script>

<template>
  <HeaderPanel class="hidden tb:block" v-if="userWidth > 1025"/>
  <HeaderMobile class="block tb:hidden" v-else />
  <SecondMenu />

  <RouterView />

  <FooterPanel class="hidden" />
</template>


<style>

</style>
