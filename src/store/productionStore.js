import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import parametersJSON from '../common/data/robot-parameters.json';
import { useCoinsStore } from './coinsStore';

export const useProductionStore = defineStore('productionStore', () => {
  const parameters = reactive(parametersJSON);
  const type = ref('frontend');
  const stabilizer = ref('female');
  const isProduced = ref(false);
  const constructorTemplate = reactive([
    {
      id: '1',
      name: 'biohand',
      values: [],
      cellsQuantity: 4,
    },
    {
      id: '2',
      name: 'chip',
      values: [],
      cellsQuantity: 4,
    },
    {
      id: '3',
      name: 'soul',
      values: [],
      cellsQuantity: 1,
    },
  ]);

  const allComponentsAdded = computed(() => {
    return constructorTemplate.every((component) => component.cellsQuantity === component.values.length);
  });

  const robotStatus = computed(() => {
    const coinsStore = useCoinsStore();
    const statusObject = {
      title: 'Нельзя произвести',
      value: 'unavailable',
    }

    if (isProduced.value) {
      statusObject.title = 'Произведен';
      statusObject.value = 'produced';
    }

    if (allComponentsAdded.value && coinsStore.balance >= 10) {
      statusObject.title = 'Готов к производству';
      statusObject.value = 'available';
    }

    return statusObject;
  })

  const robotConstructorClass = computed(() => {
    return `constructor__robot--${type.value}-${stabilizer.value}-${robotStatus.value.value}`
  });
  return {
    parameters,
    type,
    stabilizer,
    constructorTemplate,
    robotConstructorClass,
    robotStatus,
  }
})