<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderPanel from './components/HeaderPanel.vue'
import FooterPanel from './components/FooterPanel.vue';
import HeaderMobile from './components/HeaderMobile.vue';
import { ref } from 'vue';

const userWidth = ref(window.innerWidth);
</script>

<template>
  <HeaderPanel class="hidden tb:block" v-if="userWidth > 1025"/>
  <HeaderMobile class="block tb:hidden" v-else />

  <RouterView />

  <FooterPanel class="hidden" />
</template>


<style>

</style>
