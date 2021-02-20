module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {project: './tsconfig.json'},
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
};
