import type { TodoItem } from '~~/types/todo.ts'

export const useTodoListStore = defineStore('todoStore', () => {
  const taskList = ref<TodoItem[]>([])

  const totalCount = computed(() => taskList.value.length)

  if (import.meta.client) {
    const storedList = localStorage.getItem('todoList')
    if (storedList) {
      taskList.value = JSON.parse(storedList)
    }
  }

  const addTaskToList = (task: TodoItem) => {
    // task.id = totalCount.value + 1
    taskList.value.push({ ...task })
    saveTaskListToLocalStorage()
  }

  const removeTaskFromList = (id: TodoItem['id']) => {
    taskList.value = taskList.value.filter(task => task.id !== id)
    saveTaskListToLocalStorage()
  }

  const completeTask = (id: TodoItem['id']) => {
    const task = taskList.value.find(task => task.id === id)
    if (task) {
      task.completed = true
      saveTaskListToLocalStorage()
    }
  }

  const saveTaskListToLocalStorage = () => {
    if (import.meta.client) {
      console.log(taskList.value.length)
      localStorage.setItem('todoList', JSON.stringify(taskList.value))
    }
  }

  const loadTaskListFromLocalStorage = () => {
    if (import.meta.client) {
      const storedList = localStorage.getItem('todoList')
      if (storedList) {
        taskList.value = JSON.parse(storedList)
      }
    }
  }

  return {
    taskList,
    totalCount,
    addTaskToList,
    removeTaskFromList,
    completeTask,
    loadTaskListFromLocalStorage
  }
})
