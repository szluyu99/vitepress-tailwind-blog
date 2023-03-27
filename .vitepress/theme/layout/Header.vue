<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import Logo from '../components/Logo.vue'
import OutLink from '../components/OutLink.vue'
import IconGitHub from '../icons/IconGitHub.vue'
// Same code for Layout.vue, not sure how to properly reuse

const { theme } = useData()
const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>

<template>
  <div
    class="flex items-center justify-between text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200"
    :class="{ 'pt-6 lg:pt-8': isIndex }"
  >
    <a :class="{ 'pl-8': !isIndex }" href="/">
      <Logo class="w-auto h-5 text-slate-900 dark:text-white" />
    </a>

    <div class="flex items-center">
      <nav>
        <ul class="flex items-center space-x-8">
          <!-- TODO: switch to links -->
          <li>
            <a href="docs/" class="hover:text-sky-500 dark:hover:text-sky-400">
              Docs
            </a>
          </li>
          <li>
            Blog
          </li>
        </ul>
      </nav>
      <div
        class="flex items-center pl-6 ml-6 border-l border-slate-200 dark:border-slate-800"
      >
        <!-- TODO: dark theme button -->
        <OutLink :href="theme.repo">
          <IconGitHub />
        </OutLink>
      </div>
    </div>
  </div>
</template>
