<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getNameFromPath } from '../utils.js'

const props = defineProps({
  fileName: {
    type: String,
    required: true,
  },
})

const { page } = useData()
const isActive = computed(() => getNameFromPath(page.value.relativePath) === props.fileName)
</script>

<template>
  <a
    :href="$themeConfig.pages[fileName].href"
    class="relative block px-3 py-2 transition-colors duration-200 rounded-md"
    :class="[
      isActive
        ? 'text-cyan-700 bg-cyan-50'
        : 'hover:text-gray-900 text-gray-500',
    ]"
  >
    <span>{{ $themeConfig.pages[fileName].title }}</span>
  </a>
</template>
