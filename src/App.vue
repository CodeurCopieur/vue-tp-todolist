<template>
    <form @submit.prevent="addTodo" style="display: block;">
      <fieldset>
        <input 
          type="text" 
          placeholder="Ajouter une tâche"
          v-model="newTodo"
        >
        <button :disabled="newTodo.length === 0">Ajouter</button>
      </fieldset>
    </form>
    <div v-if="todos.length === 0">
      Vous n'avez pas de tâches à faire !!!
    </div>
    <div v-else>
      <ul>
        <li 
        v-for="todo in sortedTodos" 
        :key="todo.date"
        :class="{'completed': todo.completed}"
        >
          <label>
            <input type="checkbox" v-model="todo.completed">
            {{ todo.title }}
          </label>
        </li>
      </ul>
      <label>
        <input type="checkbox" v-model="hideCompleted">
        Masquer les tâches complétées
      </label>
      <p>Il reste {{ remainingTodos }} tâches à faire</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const newTodo = ref('');
 const todos = ref([]);
 const hideCompleted = ref(false);

 const addTodo = () => {
  todos.value.push({
    date: Date.now(),
    title: newTodo.value,
    completed: false
  });
  newTodo.value = '';
 };
 const sortedTodos = computed(() =>  {
  const sortedTodos = todos.value.toSorted((a, b) => a.completed > b.completed ? 1 : -1);
  
  if (hideCompleted.value) {
    return sortedTodos.filter(todo => !todo.completed);
  }
  return sortedTodos;
 });

 const remainingTodos = computed(() => {
  return todos.value.filter(todo => !todo.completed).length;
 });
</script>

<style>
  .completed {
    opacity: 0.5;
    text-decoration: line-through;
  }
</style>