<template>
  <template v-if="product.id === undefined">
    <h1>Nie znaleziono produktu</h1>
    <p>Podano błędne id:  {{ id }} </p>
  </template>
  <template v-else>
    <h1>{{ product.name }}</h1>
    <p>To jest opis produktu {{ product.id }} </p>
  </template>
</template>

<script setup>
  import { ref } from 'vue'
  const props = defineProps(['id'])

  let product = ref(null)
  fetch('https://api.netum.pl/products/' + props.id)
  .then(response => response.json())
  .then(data => product.value = data)


</script>