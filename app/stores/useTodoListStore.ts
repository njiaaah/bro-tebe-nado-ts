import type { TodoItem } from '~~/types/todo.ts'

export const useTodoListStore = defineStore('todoStore', () => {
  const taskList = ref<TodoItem[]>([])

  const addTaskToList = (task: TodoItem) => {
    taskList.value.push(task)
  }
  const removeTaskFromList = (id: TodoItem['id']) => {
    taskList.value = taskList.value.filter(task => task.id !== id)
  }
  const completeTask = (id: TodoItem['id']) => {
    const task = taskList.value.find(task => task.id === id)
    if (task) {
      task.completed = true
    }
  }
  return {
    taskList,
    addTaskToList,
    removeTaskFromList,
    completeTask,
  }
})
