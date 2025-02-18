<script setup>
defineProps({
  className: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <svg width="29" height="27" viewBox="0 0 29 27" xmlns="http://www.w3.org/2000/svg" :class="className">
    <g class="icon">
      <path d="M5 10H20L23 7L20 4H5V10Z" />
      <path d="M5 17H20L23 20L20 23H5V17Z" />
      <rect x="13" y="4" width="3" height="19" />
    </g>
  </svg>
</template>
