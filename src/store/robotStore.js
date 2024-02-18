/* eslint-disable import/prefer-default-export */

import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { useDataStore } from './dataStore';
import { useCoinsStore } from './coinsStore';
import { useComponentsStore } from './componentsStore';

import { getComponentDescription } from '../common/helpers';

export const useRobotStore = defineStore('robotStore', () => {
  const type = ref('design');
  const stabilizer = ref('male');
  const installedComponents = reactive([]);
  const productionCost = ref(10);
  const isProduced = ref(false);

  const allComponentsInstalled = computed(() => {
    const dataStore = useDataStore();
    return !dataStore.components.filter(
      (component) => component.requiredQuantity > getComponentQuantity(component.id),
    ).length;
  });

  const canProduce = computed(() => {
    const coinsStore = useCoinsStore();
    return coinsStore.coinsBalance >= 10 && allComponentsInstalled.value;
  });

  const robotStatus = computed(() => {
    if (canProduce.value) {
      return {
        value: 'available',
        title: 'Доступен для производства',
      };
    }
    return {
      value: 'unavailable',
      title: 'Недоступен для производства',
    };
  });

  const robotStatusDescription = computed(() => {
    const dataStore = useDataStore();
    const coinsStore = useCoinsStore();

    let finalString = 'Для производства биоробота не хватает';
    const requiredComponents = dataStore.components
      .filter(
        (component) => component.requiredQuantity > getComponentQuantity(component.id),
      )
      .map((component) => ({
        id: component.id,
        quantity:
            component.requiredQuantity - getComponentQuantity(component.id),
      }));

    if (coinsStore.coinsBalance < productionCost.value) {
      requiredComponents.push({
        id: 'coins',
      });
    }

    if (installedComponents.length === 0) {
      requiredComponents.pop();
      requiredComponents.forEach((component, index) => {
        let currentComponentString = '';
        if (index + 1 === requiredComponents.length && requiredComponents.length > 1) {
          currentComponentString += ' и';
        }

        if (index + 1 === requiredComponents.length && requiredComponents.length === 1) {
          currentComponentString += ' ';
        }

        if (index + 1 === requiredComponents.length - 1 && requiredComponents.length > 1) {
          currentComponentString += ` ${getComponentDescription(component.id, 0)}`;
        } else if (index + 1 === requiredComponents.length && requiredComponents.length > 1) {
          currentComponentString += ` ${getComponentDescription(component.id, 0)}`;
        } else {
          currentComponentString += ` ${getComponentDescription(component.id, 0)},`;
        }

        finalString += currentComponentString;
      });
    } else {
      requiredComponents.forEach((component, index) => {
        let currentComponentString = '';
        if (index + 1 === requiredComponents.length && requiredComponents.length > 1) {
          currentComponentString += ' и';
        }

        if (index + 1 === requiredComponents.length && requiredComponents.length === 1) {
          currentComponentString += ' ';
        }

        if (index + 1 === requiredComponents.length - 1 && requiredComponents.length > 1) {
          currentComponentString += ` ${component.quantity} ${getComponentDescription(component.id, component.quantity)}`;
        } else if (index + 1 === requiredComponents.length && requiredComponents.length > 1) {
          currentComponentString += component.id === 'coins' ? ' денег' : ` ${component.quantity} ${getComponentDescription(component.id, component.quantity)}`;
        } else {
          currentComponentString += component.id === 'coins' ? ' денег' : ` ${component.quantity} ${getComponentDescription(component.id, component.quantity)},`;
        }

        finalString += currentComponentString;
      });
    }

    return finalString;
  });

  const robotClass = computed(() => `constructor__robot--${type.value}-${stabilizer.value}-${isProduced.value ? 'produced' : robotStatus.value.value}`);

  const getComponentQuantity = (componentId) => (
    installedComponents.find((component) => component.id === componentId)
      ?.quantity || 0
  );

  const setComponent = (componentId) => {
    const componentsStore = useComponentsStore();
    const currentComponentIndex = installedComponents.findIndex(
      (component) => component.id === componentId,
    );
    if (currentComponentIndex !== -1) {
      installedComponents[currentComponentIndex].quantity += 1;
    } else {
      installedComponents.push({
        id: componentId,
        quantity: 1,
      });
    }
  };

  const removeComponent = (componentId) => {
    const componentsStore = useComponentsStore();
    const currentComponentIndex = installedComponents.findIndex(
      (component) => component.id === componentId,
    );
    if (installedComponents[currentComponentIndex].quantity - 1 > 0) {
      installedComponents[currentComponentIndex].quantity -= 1;
    } else {
      installedComponents.splice(currentComponentIndex, 1);
    }
  };

  const manageComponents = (event) => {
    if (event.target.checked) {
      robotStore.setComponent(event.target.dataset.componentId);
    } else {
      robotStore.removeComponent(event.target.dataset.componentId);
    }
  };

  return {
    type,
    stabilizer,
    installedComponents,
    productionCost,
    isProduced,
    canProduce,
    robotStatus,
    robotClass,
    robotStatusDescription,
    getComponentQuantity,
    setComponent,
    removeComponent,
  };
});
