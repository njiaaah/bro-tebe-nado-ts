<template>
  <header class="flex justify-between">
    <h2 class="text-xl">
      {{ totalCount ? 'I have shit to do' : 'Free as fuck' }} - {{ totalCount }}
      tasks
    </h2>
    <div>
      <todo-add-dialog />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTodoListStore } from '~/stores/useTodoListStore'
import TodoAddDialog from './TodoAddDialog.vue'

const todoListStore = useTodoListStore()

const { totalCount } = storeToRefs(todoListStore)

onMounted(() => {
  console.log(totalCount)
})
</script>
