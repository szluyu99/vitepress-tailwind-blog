<script setup>
import Header from '../layout/Header.vue'
import SideBar from '../layout/SideBar.vue'
import TableOfContent from '../layout/TableOfContent.vue'
</script>

<template>
  <div class="h-full mx-auto max-w-8xl">
    <div class="z-10 fixed top-0 w-full backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75 lg:border-b">
      <Header class="py-4" />
    </div>

    <div class="w-full mt-16 lg:flex">
      <div>
        <div class="sticky h-screen overflow-y-auto hide-scroll top-20">
          <SideBar />
        </div>
      </div>

      <div class="flex min-w-0 pt-10 lg:static lg:max-h-full">
        <div class="flex-auto min-w-0 px-6">
          <header>
            <h1 class="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
              {{ $frontmatter.title }}
            </h1>
            <p class="mt-2 text-lg text-slate-700 dark:text-slate-400">
              {{ $frontmatter.description }}
            </p>
          </header>
          <Content class="mt-8 prose prose-slate dark:prose-dark" />
        </div>
        <div>
          <div class="sticky w-full h-screen overflow-y-auto hide-scroll top-20">
            <TableOfContent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hide-scroll::-webkit-scrollbar {
    display: none;
}
</style>
