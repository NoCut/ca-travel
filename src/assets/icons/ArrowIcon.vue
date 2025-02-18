<script setup>
defineProps({
  className: {
    type: String,
    default: '',
  },
})
</script>

<template>
<svg :class="className" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="w-12 h-12 fill-current">
  <!-- Создаём маску, которая вырежет стрелку -->
  <mask id="arrow-mask">
    <!-- Полностью закрашенный круг -->
    <circle cx="25" cy="25" r="24" fill="white"/>
    <!-- Вырезаем стрелку (чёрный цвет делает область прозрачной) -->
    <polyline points="30,15 18,25 30,35" stroke="black" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </mask>

  <!-- Круг с применённой маской -->
  <circle cx="25" cy="25" r="24" mask="url(#arrow-mask)" />
</svg>
</template>


