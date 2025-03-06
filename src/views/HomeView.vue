<template>
  <div class="home">
    <h1>Home</h1>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useMainStore } from '@/store'
import { storeToRefs } from 'pinia'

const store = useMainStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 2rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>