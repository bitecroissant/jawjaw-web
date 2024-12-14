import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { svgsprites } from './vite_plugins/svgstore'

// https://vite.dev/config/
export default defineConfig(({ command }: ConfigEnv) => ({
  define: {
    isDev: command === 'serve',
  },
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    }),
    UnoCSS(),
    svgsprites()
  ],
}))
