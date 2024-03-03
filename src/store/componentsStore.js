import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';

import componentsJSON from '../common/data/components.json';

export const useComponentsStore = defineStore("componentsStore", () => {
  const components = reactive(componentsJSON.map((component) => {
    return {
      ...component,
      quantity: 0,
    }
  }));

  return {
    components,
  }
})