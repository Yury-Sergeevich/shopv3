// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  css: ['@/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-icons',
    '@nuxt/eslint',
    '@nuxtjs/web-vitals',
    '@vite-pwa/nuxt',
    '@nuxt/image',
    "@nuxtjs/robots', '@nuxtjs/sitemap",
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
});
