<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },

})
</script>

<template>
  <a :href="href" target="_blank" rel="noopnener noreferrer">
    <slot />
  </a>
</template>
