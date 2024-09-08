<template>
  <div>
    <BaseComponent :metadata="metadata" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseComponent from './ BaseComponent.vue'; // Import BaseComponent

export default defineComponent({
  name: 'DynamicComponent',
  components: {
    BaseComponent,
  },
  setup() {
    // Example metadata for dynamic components
    const metadata = {
      ui: [
        { type: 'input', model: 'username', placeholder: 'Enter username', attributes: { type: 'text' } },
        { type: 'input', model: 'password', placeholder: 'Enter password', attributes: { type: 'password' } },
        { type: 'button', content: 'Submit', onClick: 'submitForm' }
      ],
      data: {
        username: '',
        password: ''
      },
      methods: {
        submitForm(data: any) {
          console.log('Form Submitted:', data);
        }
      },
      layout: {
        '@layout': 'grid',
        columns: 2
      }
    };

    return {
      metadata,
    };
  },
});
</script>

<style scoped>
/* Add any styles specific to the dynamic component */
</style>