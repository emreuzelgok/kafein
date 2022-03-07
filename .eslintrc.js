module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': 'error',
  },
};