<template>
<table class="products">
  <thead>
    <tr>
      <th>Produkt</th>
      <th>Cena</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="p of products" :key="p.id">
      <td><router-link :to="{ name: 'Product', params: { id: p.id } }">{{ p.name }}</router-link></td>
      <td>{{ p.price }} </td>
      <td><button @click="cart.addItem(p)">+</button></td>
    </tr>
  </tbody>
</table>
</template>

<script setup>


//import products from '../data.js'
import { reactive, ref } from 'vue'
import { useCartStore } from '../store/cart'

// import { useFetch } from '../composable/useFetch'
// const { data: products } = useFetch('https://api.netum.pl/products')

 let products = ref(null)
 fetch('https://api.netum.pl/products')
 .then(response => response.json())
 .then(data => products.value = data)



const cart = useCartStore()
</script>

<style lang="scss">
table.products { 
  margin: 0 auto;
  width: 600px;
  border-collapse: collapse;
  td, th { 
    border-bottom: 1px solid black;
    padding: .5em;
  }
  td:first-child { width: 100% }
  td:nth-child(2) { text-align: right }
  td:last-child { text-align: center }
}
</style>