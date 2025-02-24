<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderPanel from './components/HeaderPanel.vue'
import FooterPanel from './components/FooterPanel.vue';
</script>

<template>
  <HeaderPanel />

  <RouterView />

  <FooterPanel />
</template>


<style>

</style>
