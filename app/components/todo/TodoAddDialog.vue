<template>
  <UModal v-model:open="open">
    <UButton
      label="New task"
      color="success"
      variant="subtle"
      @click="open = true"
    />

    <template #header>
      <h3>Add new task</h3>
      <u-badge
        :label="'Next ID: ' + (totalCount + 1)"
        color="info"
        variant="subtle"
      />
    </template>

    <template #body>
      <u-form>
        <u-form-field title="Title">
          <u-input v-model="state.title" placeholder="Title" class="w-full" />
        </u-form-field>
      </u-form>
    </template>

    <template #footer>
      <div class="flex justify-between w-full">
        <UButton
          label="Save"
          color="success"
          variant="subtle"
          :loading="loading"
          :disabled="!state.title?.trim() || loading"
          @click="handleAddTask"
        />
        <UButton
          label="Cancel"
          color="error"
          variant="subtle"
          :disabled="loading"
          @click="handleCancelTask"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { useTodoListStore } from '~/stores/useTodoListStore'
import type { TodoItem } from '~~/types/todo.ts'

const todoListStore = useTodoListStore()
const { totalCount } = storeToRefs(todoListStore)
const { addTaskToList } = todoListStore

const open = ref<boolean>(false)

const state = ref<Pick<TodoItem, 'title' | 'completed'>>({
  title: '',
  completed: false
})

const handleAddTask = async () => {
  const newTask: TodoItem = {
    id: totalCount.value + 1,
    title: state.value.title.trim(),
    completed: false,
    createdAt: new Date()
  }
  addTaskToList(newTask)
  open.value = false
}

const handleCancelTask = () => {
  open.value = false
  state.value.title = ''
}
</script>
