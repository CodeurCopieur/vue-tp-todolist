<template>
  <Layout>
    <template #header>
      <h1>Todo List</h1>
    </template>
    <template #aside>
      aside
    </template>
    <template #main>
    </template>
    <template #footer>
      footer
    </template>
  </Layout>

  <button @click="showTimer = !showTimer">
    {{ showTimer ? 'Stop' : 'Start' }}
  </button>
  <Timer v-if="showTimer" />
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
            <Checkbox 
              :label="todo.title"
              v-model="todo.completed"
            />
            <!-- <Checkbox 
              :label="todo.title"
              v-model:value="todo.completed"
            /> -->
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
import { ref, computed, onMounted } from 'vue';
import Checkbox from './components/Checkbox.vue';
import Button from './components/Button.vue';
import Layout from './Layout.vue';
import Timer from './components/Timer.vue';

const showTimer = ref(false);
const newTodo = ref('');
 const todos = ref([]);
 const hideCompleted = ref(false);

 onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    todos.value = data.map(todo => ({
      ...todo,
      completed: false
    }));
  });
 });

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