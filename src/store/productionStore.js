import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';

import parametersJSON from '../common/data/robot-parameters.json';

export const useProductionStore = defineStore("productionStore", () => {
  const parameters = reactive(parametersJSON);
  const constructorTemplate = reactive([
    {
      name: "biohand",
      values: ["biohand-1"],
      cellsQuantity: 4,
    },
    {
      name: "chip",
      values: [],
      cellsQuantity: 4,
    },
    {
      name: "soul",
      values: [],
      cellsQuantity: 1,
    },
  ])
  const type = ref("frontend");
  const stabilizer = ref("female");
  return {
    parameters,
    constructorTemplate,
    type,
    stabilizer,
  }
})