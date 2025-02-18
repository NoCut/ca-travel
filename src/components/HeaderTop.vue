<script setup>
  import CrossIcon from '@/assets/icons/CrossIcon.vue';
  import XIcon from '@/assets/icons/XIcon.vue';
  import FacebookIcon from '@/assets/icons/FacebookIcon.vue';
  import YoutubeIcon from '@/assets/icons/YoutubeIcon.vue';
  import InstagramIcon from '@/assets/icons/InstagramIcon.vue';
</script>


<template>
  <div class="flex justify-between items-center bg-[#C74E1C] pt-[20px] pb-[27px] px-[250px]">
    <button class="flex gap-[26px] cursor-pointer text-white main-font text-[18px] border-0">
      <CrossIcon className="text-white w-[24px] h-[24px]" />
      <span class="hover:underline">ЗАКРЫТЬ</span>
    </button>

    <div><img src="/images/logo.png" /></div>

    <div class="flex gap-[9px]">
      <FacebookIcon className="w-[20px] h-[20px]" />
      <YoutubeIcon className="w-[20px] h-[20px] rounded" />
      <InstagramIcon className="w-[20px] h-[20px]" />
      <XIcon className="w-[20px] h-[20px]" />
    </div>
  </div>
</template>
