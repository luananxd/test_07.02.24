require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    '@vue/eslint-config-airbnb',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'linebreak-style': 0,
  },
};
