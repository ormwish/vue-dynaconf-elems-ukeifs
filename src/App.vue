<template>
  <div id="app">
    <DynamicComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DynamicComponent from './components/DynamicComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    DynamicComponent,
  },
});
</script>

<style scoped>
/* Add styles for your app here */
</style>