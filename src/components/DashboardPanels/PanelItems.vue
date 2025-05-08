<script setup>
defineProps(['item', 'editButton'])

const emit = defineEmits(['deleteItem', 'editItem'])

</script>

<template>
  <tr :class="item.id % 2 === 0 ? 'bg-[#fffffc]' : 'bg-[#f9f6ed]'">
    <td class="p-4 w-[5%]">{{ item.id }}</td>
    <td class="px-6 py-3 w-[75%]">{{ item.name_ru ? item.name_ru : item.email }}</td>
    <td class="flex justify-center gap-[10px] px-6 py-3">
      <button
        class="px-[20px] py-[10px] border-1 rounded-xl transition-all duration-300 border-[#EE204D] text-[#EE204D] hover:bg-[#EE204D] hover:text-white cursor-pointer"
        @click="$emit('deleteItem', item)"
      >
        Удалить
      </button>
      <button
        class="px-[20px] py-[10px] border-1 rounded-xl transition-all duration-300 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer"
        @click="$emit('editItem', item)"
      >
        {{ editButton }}
      </button>
    </td>
  </tr>
</template>
