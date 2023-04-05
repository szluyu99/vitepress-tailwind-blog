import { defineConfig } from 'vitepress'
import { fetchDocs } from './fetchDocs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // github page
  // base: '/vitepress-tailwind-blog/',
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    repo: 'https://github.com/szluyu99/vitepress-tailwind-blog',
    pages: fetchDocs(),
    collections: {
      'Getting started': [
        'installation',
        'upgrading-to-v2',
        'using-with-preprocessors',
        'optimizing-for-production',
        'browser-support',
        'intellisense',
      ],
      'Core Concepts': [
        'responsive-design',
        'dark-mode',
        'adding-base-styles',
        'extracting-components',
        'adding-new-utilities',
      ],
    },
  } as any,
  markdown: {
    headers: true,
  },
})
