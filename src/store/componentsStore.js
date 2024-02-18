/* eslint-disable import/prefer-default-export */

import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { useDataStore } from './dataStore';
import { useCoinsStore } from './coinsStore';

export const useComponentsStore = defineStore('componentsStore', () => {
  const componentsInStock = reactive([]);

  const getComponentQuantity = (componentId) => {
    const currentComponent = componentsInStock.find((component) => component.id === componentId);
    return currentComponent?.quantity || 0;
  };

  const buyComponent = (componentId) => {
    const dataStore = useDataStore();
    const coinsStore = useCoinsStore();

    const currentComponentPrice = dataStore.components.find((component) => component.id === componentId).priceForBuy;
    coinsStore.coinsBalance -= currentComponentPrice;
    increaseComponentQuantity(componentId);
  };

  const sellComponent = (componentId) => {
    const dataStore = useDataStore();
    const coinsStore = useCoinsStore();

    const currentComponentPrice = dataStore.components.find((component) => component.id === componentId).priceForSell;
    if (coinsStore.coinsBalance + currentComponentPrice > coinsStore.limit) {
      coinsStore.coinsBalance = coinsStore.limit;
      return;
    }

    coinsStore.coinsBalance += currentComponentPrice;
    decreaseComponentQuantity(componentId);
  };

  const increaseComponentQuantity = (componentId) => {
    const componentIndex = componentsInStock.findIndex((component) => component.id === componentId);

    if (componentIndex === -1) {
      componentsInStock.push({
        id: componentId,
        quantity: 1,
      });
      return;
    }

    componentsInStock[componentIndex].quantity += 1;
  };

  const decreaseComponentQuantity = (componentId) => {
    const componentIndex = componentsInStock.findIndex((component) => component.id === componentId);

    if (componentIndex === -1) return;

    if (componentsInStock[componentIndex].quantity - 1 <= 0) {
      componentsInStock.splice(componentIndex, 1);
      return;
    }

    componentsInStock[componentIndex].quantity -= 1;
  };

  return {
    componentsInStock,
    getComponentQuantity,
    increaseComponentQuantity,
    decreaseComponentQuantity,
    buyComponent,
    sellComponent,
  };
});
