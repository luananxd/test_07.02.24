/* eslint-disable import/prefer-default-export */

import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCoinsStore = defineStore('coinsStore', () => {
  const coinsBalance = ref(5);
  const modificator = ref(5);
  const limit = ref(100);
  const useModificator = ref(false);

  const disableButton = computed(() => {
    if (useModificator.value) {
      return coinsBalance.value + modificator.value > limit.value;
    }

    return coinsBalance.value + 1 > limit.value;
  });

  const isCoinsLimit = computed(() => coinsBalance.value >= limit.value);

  const addCoins = () => {
    if (useModificator.value) {
      coinsBalance.value += modificator.value;
      return;
    }

    coinsBalance.value += 1;
  };

  return {
    coinsBalance,
    modificator,
    limit,
    useModificator,
    disableButton,
    isCoinsLimit,
    addCoins,
  };
});
