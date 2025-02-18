<script setup>
 defineProps({
  className: String
 })
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" :class="className" xmlns="http://www.w3.org/2000/svg">
    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" stroke-width="2"/>
    <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" stroke-width="2"/>
  </svg>
</template>
