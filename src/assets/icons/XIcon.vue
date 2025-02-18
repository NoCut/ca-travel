<template>
  <svg
    :class="className"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="x-mask">
      <rect width="24" height="24" rx="6" fill="white" />
      <path
        d="M17.7 6H15l-3 4.4L9 6H6.3l4.4 7-4.4 5H9l3-4.4 3 4.4h2.7l-4.4-7L17.7 6z"
        fill="black"
      />
    </mask>
    <rect width="24" height="24" rx="6" fill="white" mask="url(#x-mask)" />
  </svg>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: '',
  },
})
</script>
