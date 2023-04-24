<template>
  <h1>Start</h1>
  <p>Strona domowa!</p>
  <button @click="test">Test</button>
  <h2>Loading</h2>
  <p>{{ loading }}</p>
  <h2>Data</h2>
  <p> {{ data }} </p>
  <h2>Error</h2>
  <p> {{ error }} </p>
</template>

<script setup>
import { useFetch } from '../composable/useFetch'
const { data, error, loading, fetchData } = useFetch('https://api.netum.pl/products')

function test() {
  fetchData()
}
</script>