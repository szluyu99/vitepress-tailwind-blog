<script setup>
import { computed, onMounted, onUpdated, ref } from 'vue'
import { useData } from 'vitepress'
import OutLink from '../components/OutLink.vue'
import { getNameFromPath } from '../utils.js'

const emits = defineEmits(['contentUpdated'])

const { theme, page } = useData()

const flatPages = ref(null)
const prevPage = ref(null)
const nextPage = ref(null)

const buildEditURL = computed(() => `${theme.value.repo}/edit/main/${page.value.relativePath}`)

function getPrevNextPage() {
  const pageIndex = flatPages.value.indexOf(
    getNameFromPath(page.value.relativePath),
  )

  const prevPageID = pageIndex > 0 ? flatPages.value[pageIndex - 1] : null
  const nextPageID
        = pageIndex < flatPages.value.length - 1
          ? flatPages.value[pageIndex + 1]
          : null

  prevPage.value = theme.value.pages[prevPageID]
  nextPage.value = theme.value.pages[nextPageID]
}

onUpdated(() => {
  emits('contentUpdated')
  getPrevNextPage()
})

onMounted(() => {
  flatPages.value = Object.values(theme.value.collections)
    .map(item => Object.values(item))
    .flat()
  getPrevNextPage()
})
</script>

<template>
  <div class="flex-auto min-w-0 px-4 pt-10 pb-24 sm:px-6 xl:px-8 lg:pb-16">
    <div class="pb-10 mb-10 border-b border-gray-200">
      <h1
        class="inline-block text-3xl font-extrabold tracking-tight text-gray-900"
      >
        {{ $page.title }}
      </h1>
      <p class="mt-1 text-lg text-gray-500">
        {{ $page.description }}
      </p>
    </div>

    <Content class="prose" />

    <div class="flex mt-16 font-medium leading-6 text-gray-500">
      <a
        v-if="prevPage"
        :href="prevPage.href"
        class="flex mr-8 transition-colors duration-200 hover:text-gray-900"
      >
        <span aria-hidden="true" class="mr-2">←</span>
        {{ prevPage.title }}
      </a>
      <a
        v-if="nextPage"
        :href="nextPage.href"
        class="flex ml-auto text-right transition-colors duration-200 hover:text-gray-900"
      >
        {{ nextPage.title }}
        <span aria-hidden="true" class="ml-2">→</span>
      </a>
    </div>

    <div class="pt-6 mt-12 text-right border-t border-gray-200">
      <OutLink
        class="mt-10 text-sm text-gray-500 hover:text-gray-900"
        :href="buildEditURL"
      >
        Edit this page on GitHub
      </OutLink>
    </div>
  </div>
</template>
