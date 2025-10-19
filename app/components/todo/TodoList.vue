<template>
  <div class="min-w-[560px] outline-slate-800 outline p-4 rounded-xl">
    <todo-header class="mb-12" />
    <ul v-if="taskList.length" class="outline outline-slate-800 p-4 rounded-xl">
      <todo-list-item v-for="item in taskList" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import todoHeader from '~/components/todo/TodoListHeader.vue'
import todoListItem from '~/components/todo/TodoListItem.vue'
const todoListStore = useTodoListStore()

const { taskList } = storeToRefs(todoListStore)
</script>
