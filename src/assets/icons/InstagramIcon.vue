<template>
  <svg
    :class="className"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="instagram-mask">
      <rect width="24" height="24" rx="6" fill="white" />
      <path
        d="M7 4c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3H7zm12 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
        fill="black"
      />
    </mask>
    <rect width="24" height="24" rx="6" fill="white" mask="url(#instagram-mask)" />
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
