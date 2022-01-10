module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  ignorePatterns: ['lib/*', 'dist/*', '.nuxt/*', '.vscode/*'],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'vue/no-template-shadow': 'off',
  },
}
