<script setup>
defineProps(['item'])
</script>

<template>
  <tr :class="item.id % 2 === 0 ? 'bg-[#fffffc]' : 'bg-[#f9f6ed]'">
    <td class="p-4 w-[5%]">{{ item.id }}</td>
    <td class="px-6 py-3 w-[75%]">{{ item.name }}</td>
    <td class="flex justify-center gap-[10px] px-6 py-3">
      <button class="px-[20px] py-[10px] border-1 rounded-xl transition-all duration-300 border-[#4285B4] text-[#4285B4] hover:bg-[#4285B4] hover:text-white cursor-pointer">Изменить</button>
      <button class="px-[20px] py-[10px] border-1 rounded-xl transition-all duration-300 border-[#EE204D] text-[#EE204D] hover:bg-[#EE204D] hover:text-white cursor-pointer">Удалить</button>
    </td>
  </tr>
</template>
