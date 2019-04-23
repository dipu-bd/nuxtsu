module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs'],
  rules: {
    // https://eslint.org/docs/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],

    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'only-multiline'],

    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: true, after: false }],

    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],

    // https://eslint.org/docs/rules/no-console
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],

    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',
  },
}
