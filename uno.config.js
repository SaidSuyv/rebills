import presetWind4 from '@unocss/preset-wind4'
import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind4(),
    presetIcons({})
  ]
})