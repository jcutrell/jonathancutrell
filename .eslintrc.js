module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['react', 'unused-imports'],
  globals: {
    graphql: false,
  },
  rules: {
    'react/no-unescaped-entities': 0,
    'react/no-unknown-property': 0,
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
