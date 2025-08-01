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
        v-for="todo in todos" 
        :key="todo.date"
        :class="{'completed': todo.completed}"
        >
          <label>
            <input type="checkbox" v-model="todo.completed">
            {{ todo.title }}
          </label>
        </li>
      </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');
 const todos = ref([]);

 const addTodo = () => {
  todos.value.push({
    date: Date.now(),
    title: newTodo.value,
    completed: false
  });
  newTodo.value = '';
 }
</script>

<style>
  .completed {
    opacity: 0.5;
    text-decoration: line-through;
  }
</style>