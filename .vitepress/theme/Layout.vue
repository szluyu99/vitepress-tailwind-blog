<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './views/Home.vue'
import Page from './views/Page.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>

<template>
  <div class="min-h-screen px-4 bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400 sm:px-6 md:px-8">
    <Home v-if="isIndex" />
    <Page v-else />
  </div>
</template>
