// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      extends: ['@nuxt/eslint-config'],
      rules: {
        'comma-dangle': 'off',
        'brace-style': 'off',
        semi: 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        'no-extra-semi': 'off',
        'semi-spacing': 'off',
        quotes: 'off',
        indent: 'off',
        'arrow-spacing': 'off',
        'prettier/prettier': 'error',
      },
    },
  },
})
