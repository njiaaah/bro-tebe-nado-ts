<template>
  <li>cock: {{ item }}</li>
</template>

<script setup lang="ts">
import type { TodoItem } from '~~/types/todo.ts'

const _props = defineProps({
  item: {
    type: Object as () => TodoItem,
    required: true
  }
})
</script>
