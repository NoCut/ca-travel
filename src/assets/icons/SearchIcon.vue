<script setup>
defineProps({
  className: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <svg
    :class="className"

    viewBox="0 0 25 23"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
>
    <path d="M10 2C6.13 2 3 5.13 3 9C3 12.87 6.13 16 10 16C11.65 16 13.18 15.5 14.43 14.57L19.17 19.31C19.56 19.7 20.19 19.7 20.58 19.31C20.97 18.92 20.97 18.29 20.58 17.9L15.84 13.16C16.77 11.91 17.27 10.38 17.27 8.73C17.27 4.86 14.14 2 10 2ZM5 9C5 6.24 7.24 4 10 4C12.76 4 15 6.24 15 9C15 11.76 12.76 14 10 14C7.24 14 5 11.76 5 9Z"/>
</svg>
</template>

