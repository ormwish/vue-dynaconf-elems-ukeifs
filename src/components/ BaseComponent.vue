<template>
  <div>
    <div v-for="(element, index) in metadata.ui" :key="index">
      <component
        :is="element.type"
        v-bind="element.attributes"
        v-model="formData[element.model]"
        @click="handleClick(element.onClick)"
      >
        {{ element.content }}
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'BaseComponent',
  props: {
    metadata: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // Reactive form data based on metadata
    const formData = reactive(props.metadata?.data || {});

    const handleClick = (method: string | undefined) => {
      if (method && typeof props.metadata.methods[method] === 'function') {
        props.metadata.methods[method](formData);
      }
    };

    return {
      formData,
      handleClick,
    };
  },
});
</script>

<style scoped>
/* Add any styles needed for the base component */
</style>