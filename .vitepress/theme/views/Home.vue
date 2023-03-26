<script setup>
import HText from '../components/HighlightText.vue'
import Header from '../layout/Header.vue'
</script>

<template>
  <header>
    <Header />

    <div class="max-w-5xl pt-20 mx-auto sm:pt-24 lg:pt-32">
      <h1
        class="text-4xl font-extrabold tracking-tight text-center text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
      >
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <p
        class="max-w-3xl mx-auto mt-6 text-lg text-center text-slate-600 dark:text-slate-400"
      >
        A utility-first CSS framework packed with classes like
        <HText>flex</HText>, <HText>pt-4</HText>, <HText>text-center</HText> and
        <HText>rotate-90</HText>
        that can be composed to build any design, directly in your markup.
      </p>
      <div class="flex justify-center mt-6 space-x-6 text-sm sm:mt-10">
        <!-- <route-link to="/docs/"></route-link> -->
        <a
          href="/docs/"
          class="flex items-center justify-center w-full h-12 px-6 font-semibold text-white rounded-lg dark:highlight-white/20 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto"
        >
          Get started
        </a>
        <!-- TODO: search box -->
      </div>
    </div>
  </header>
</template>
