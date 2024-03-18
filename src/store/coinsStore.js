import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCoinsStore = defineStore("coinsStore", () => {
  const balance = ref(0);
  const modificator = ref(5);
  const isUseModificator = ref(false);
  const limit = ref(100);

  return {
    balance,
    modificator,
    isUseModificator,
    limit,
  }
})