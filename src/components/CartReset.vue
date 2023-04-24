<template>
<p>
  <button @click="cart.$reset()">Wyczyść koszyk</button>
</p>
</template>

<script setup>
import { useCartStore } from '../store/cart'
const cart = useCartStore()
</script>

<style scoped>
  p { text-align: center }
  button { padding: .5rem }
</style>