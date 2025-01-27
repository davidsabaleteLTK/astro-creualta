import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
// import tailwind from '@astrojs/tailwind'
// import vue from '@astrojs/vue'
// import react from '@astrojs/react'
// import svelte from '@astrojs/svelte'
// import lit from '@astrojs/lit'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  // integrations: [mdx(), sitemap(), tailwind(), vue(), react(), svelte(), lit()]
  integrations: [mdx(), sitemap()]
})
