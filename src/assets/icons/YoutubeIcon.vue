<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="-143 145 512 512" xml:space="preserve">

  <g id="SVGRepo_bgCarrier" stroke-width="0"/>

  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

  <g id="SVGRepo_iconCarrier"> <g> <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 "/> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M241,446.8L241,446.8c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8 c44.1,0,44.1,44.1,44.1,44.1V446.8z"/> </g> </g>

  </svg>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: "",
  },
});
</script>
