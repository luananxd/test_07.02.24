import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import parametersJSON from '../common/data/robot-parameters.json';
import { useCoinsStore } from './coinsStore';
import { getComponentDescription } from '../common/helpers';

export const useProductionStore = defineStore('productionStore', () => {
  const parameters = reactive(parametersJSON);
  const type = ref('frontend');
  const stabilizer = ref('female');
  const isProduced = ref(false);
  const robotProducePrice = ref(10);
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

  const getComponentQuantity = (componentId) => {
    return constructorTemplate.find((component) => component.id === componentId).values.length;
  }

  const allComponentsAdded = computed(() => {
    return constructorTemplate.every((component) => component.cellsQuantity === component.values.length);
  });

  const robotStatus = computed(() => {
    const coinsStore = useCoinsStore();
    const statusObject = {
      title: 'Нельзя произвести',
      value: 'unavailable',
    }

    if (allComponentsAdded.value && coinsStore.balance >= 10) {
      statusObject.title = 'Готов к производству';
      statusObject.value = 'available';
    }

    if (isProduced.value) {
      statusObject.title = 'Произведен';
      statusObject.value = 'produced';
    }

    return statusObject;
  })

  const robotConstructorClass = computed(() => {
    return `constructor__robot--${type.value}-${stabilizer.value}-${robotStatus.value.value}`
  });

  const constructorDescription = computed(() => {
    const coinsStore = useCoinsStore();
    const componentsArray = [];
    let description = 'Для производства биоробота не хватает ';
    
    if(componentsArray.length === 1) {
      description += componentsArray[0];
      return;
    }

    constructorTemplate.forEach((component) => {
      let neededQuantity = component.cellsQuantity - component.values.length;
      if (neededQuantity === 0) return;
      if (component.values.length === 0) {
        componentsArray.push(`${getComponentDescription(component.id, 0)}`);
      } else {
        componentsArray.push(`${neededQuantity} ${getComponentDescription(component.id, neededQuantity)}`);
      }
    });

    if(coinsStore.balance < 10) {
      componentsArray.push('денег');
    }

    componentsArray.forEach((component, index) => {
      if(index + 1 === componentsArray.length && componentsArray.length > 1) {
        description = description.slice(0, -2);
        description += ` и ${component}`;
        return
      }
      description += `${component}, `;
    })

    return description;
  });

  return {
    parameters,
    type,
    stabilizer,
    isProduced,
    robotProducePrice,
    constructorTemplate,
    robotConstructorClass,
    robotStatus,
    constructorDescription,
    getComponentQuantity,
  }
})