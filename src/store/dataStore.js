/* eslint-disable import/prefer-default-export */

import { reactive } from 'vue';
import { defineStore } from 'pinia';

import componentsJSON from '../common/data/components.json';
import robotParametersJSON from '../common/data/robot-parameters.json';

export const useDataStore = defineStore('dataStore', () => {
  const components = reactive(componentsJSON);
  const robotParameters = reactive(robotParametersJSON);

  return {
    components,
    robotParameters,
  };
});
