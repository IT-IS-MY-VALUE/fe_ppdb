// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  // Mengatur agar Nuxt membaca struktur dari folder 'src'
  srcDir: './src',

  // Untuk menjaga kompatibilitas DevTools (auto-set saat install)
  compatibilityDate: '2025-05-15',

  // Aktifkan Nuxt DevTools (hanya saat development)
  devtools: { enabled: true },

  // CSS global yang akan dimuat ke seluruh aplikasi
  // css: ['~/assets/css/main.css'],
  css: ['./assets/css/tailwind.css'],

  // // Module yang digunakan, misal Pinia untuk state management
  // modules: [
  //   '@pinia/nuxt',
  //   // Tambahkan module lain jika perlu, contoh:
  //   // '@nuxtjs/tailwindcss',
  //   // '@vueuse/nuxt',
  // ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
