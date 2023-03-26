<script setup>
import { useData } from 'vitepress'
const { theme, page } = useData()
</script>

<template>
  <div
    class="fixed inset-0 flex-none hidden w-full h-full px-8 pb-10 lg:static lg:block lg:w-60 lg:overflow-y-visible lg:pt-0 xl:w-72"
  >
    <nav class="lg:text-sm lg:leading-6">
      <!-- TODO: search box -->
      <ul>
        <li
          v-for="(titles, section) in theme.collections"
          :key="titles"
          class="mt-12 lg:mt-8"
        >
          <h5
            class="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3"
          >
            {{ section }}
          </h5>
          <ul
            class="space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2"
          >
            <li v-for="title in titles" :key="title">
              <a
                :href="theme.pages[title].href"
                class="block pl-4 -ml-px border-l text-slate-700"
                :class="[
                  page.relativePath.split('/').pop().split('.')[0] === title
                    ? 'border-current font-semibold text-sky-500 dark:text-sky-400'
                    : 'border-transparent hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300',
                ]"
              >
                {{ title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
