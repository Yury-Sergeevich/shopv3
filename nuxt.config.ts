// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: 'Интернет-магазин',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Магазин для покупки товаров онлайн',
        },
      ],
    },
  },
  css: ['@/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-icons',
    '@nuxt/eslint',
    '@nuxtjs/web-vitals',
    '@vite-pwa/nuxt',
    '@nuxt/image',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
});
