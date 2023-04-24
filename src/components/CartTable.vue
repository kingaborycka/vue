<template>
<table class="cart">
  <thead>
    <tr>
      <th>Produkt</th>
      <th>Ilość</th>
      <th>Wartość</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="p of cart.items" :key="p.id">
      <td><router-link :to="{ name: 'Product', params: { id: p.id } }">{{ p.name }}</router-link></td>
      <td>{{ p.quantity }} </td>
      <td>{{ p.value }} </td>
      <td><button @click="cart.addItem(p)">+</button></td>
      <td><button @click="cart.removeItem(p)">-</button></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Razem</td>
      <td></td>
      <td>{{ cart.sum }}</td>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</table>
</template>

<script setup>
import { useCartStore } from '../store/cart'
const cart = useCartStore()
</script>

<style lang="scss">
table.cart { 
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
  td, th { 
    border-bottom: 1px solid black;
    padding: .5em;
  }
  td:first-child { width: 100% }
  td:nth-child(2), td:nth-child(3) { text-align: right }
  td:last-child { text-align: center }
  tfoot td { font-weight: 700 }
}
</style>