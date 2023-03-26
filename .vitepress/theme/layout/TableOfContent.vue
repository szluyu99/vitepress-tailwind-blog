<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <div class="flex-none hidden w-64 pl-8 mr-8 xl:block xl:text-sm">
    <h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
      On this page
    </h5>
    <ul class="text-sm leading-6 text-slate-700">
      <li
        v-for="section in page.headers" :key="section"
        :class="{ 'ml-4': section.level === 3 }"
      >
        <a class="flex items-start py-1 group hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
          <template v-if="section.level === 3">
            <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
              <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </template>
          {{ section.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
