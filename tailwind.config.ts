import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    '.src/components/**/*.{vue,js,ts}',
    '.src/layouts/**/*.vue',
    '.src/pages/**/*.vue',
    '.src/app.vue',
    '.src/node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

export default config
