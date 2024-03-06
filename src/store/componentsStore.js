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

  const getComponentQuantity = (componentId) => {
    return components.find((component) => component.id === componentId).quantity;
  }

  const addComponent = (componentId, quantity) => {
    const currentComponentIndex = components.findIndex((component) => component.id === componentId);
    components[currentComponentIndex].quantity += quantity;
  }

  const removeComponent = (componentId, quantity) => {
    const currentComponentIndex = components.findIndex((component) => component.id === componentId);
    if(components[currentComponentIndex].quantity - quantity > 0) {
      components[currentComponentIndex].quantity -= quantity;
    } else {
      components[currentComponentIndex].quantity = 0;
    }
  }

  return {
    components,
    getComponentQuantity,
    addComponent,
    removeComponent,
  }
})