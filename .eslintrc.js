module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // parserOptions: {
  //   parser: ['@babel/eslint-parser'],
  //   requireConfigFile: false
  // },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    '@nuxtjs/eslint-config-typescript',
  ],
  // add your custom rules here
  rules: {
    'no-useless-constructor': 0,
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    semi: ['error', 'never'],
    'no-console': 0,
    'vue/attribute-hyphenation': 'off',
    'no-tabs': 0,
    'space-before-function-paren': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
  },
}
