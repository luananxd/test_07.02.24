import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCoinsStore = defineStore("coinsStore", () => {
  const balance = ref(25);
  const modificator = ref(5);
  const isUseModificator = ref(false);
  const limit = ref(100);

  const addCoins = (quantity) => {
    balance.value += quantity;
  }

  const removeCoins = (quantity) => {
    balance.value -= quantity;
  }

  return {
    balance,
    modificator,
    isUseModificator,
    limit,
    addCoins,
    removeCoins,
  }
})