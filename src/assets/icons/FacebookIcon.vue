<template>
  <svg
    :class="className"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="facebook-mask">
      <rect width="24" height="24" rx="6" fill="white" />
      <path
        d="M13.5 20V12H15.8L16.3 10H13.5V7.5c0-.8.2-1 1.1-1h1.6V4c-.3 0-1.4-.1-2.5-.1-2.1 0-3.8 1.3-3.8 3.8V10H7.5v2h2.4v8h3.6z"
        fill="black"
      />
    </mask>
    <rect width="24" height="24" rx="6" fill="white" mask="url(#facebook-mask)" />
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
