<script setup>
import UserPanel from './DashboardPanels/UserPanel.vue';
import ToursPanel from './DashboardPanels/ToursPanels.vue'
import ApplicationPanels from './DashboardPanels/ApplicationPanels.vue';

const props = defineProps(['curPanel'])
</script>

<template>
  <UserPanel v-if="props.curPanel === 'users'" />

  <ToursPanel v-if="props.curPanel === 'tours'" />

  <ApplicationPanels v-if="props.curPanel === 'requests'" />
</template>
