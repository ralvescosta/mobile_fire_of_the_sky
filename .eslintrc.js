module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  extends: ['@react-native-community', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    "import/export": "off",
    "jest/no-export": "off"
  },
};
