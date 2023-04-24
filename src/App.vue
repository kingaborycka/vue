<template>
  <div class="wrapper">
    <page-header>Sklep</page-header>
    <page-nav>
      <router-link :to="{ name: 'Home' }">Start</router-link>
      <router-link :to="{ name: 'Products' }">Produkty</router-link>
      <router-link :to="{ name: 'About' }">Kontakt</router-link>
    </page-nav>
    <page-main>
      <router-view></router-view>
    </page-main>
    <page-aside>
      <h2>Koszyk</h2>
      <div v-show="cart.sum">
        <cart-table></cart-table>
        <cart-reset></cart-reset>
        <h3>Forma płatności</h3>
        <payment-select></payment-select>
      </div>
      <p v-show="!cart.sum">Na razie koszyk jest pusty.</p>
    </page-aside>
    <page-footer>&copy;VUEK 2022</page-footer>
  </div>
</template>

<script setup>
  import PageHeader from './layout/PageHeader.vue'
  import PageFooter from './layout/PageFooter.vue'
  import PageMain from './layout/PageMain.vue'
  import PageNav from './layout/PageNav.vue'
  import PageAside from './layout/PageAside.vue'
  import CartTable from './components/CartTable.vue'
  import CartReset from './components/CartReset.vue'
  import PaymentSelect from './components/PaymentSelect.vue'
  import { useCartStore } from './store/cart'
  const cart = useCartStore()
</script>

<style>
  body { 
      margin: 0; 
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  }
  .wrapper { 
    display: grid;
    grid-template-rows: min-content min-content 1fr min-content;
    grid-template-columns: 75% 25%;
    height: calc(100vh - 1rem);
    padding: .5rem;
  }

  @media all and (max-width: 1000px) {
    .wrapper {
      grid-template-columns: 100%;
    }
    .wrapper > * {
      grid-column: 1 / -1
    }
  }

  .wrapper > * {
    padding: 1rem;
  }

  header {
    grid-column: 1 / 3;
    background-color: blue;
    color: white
  }
  nav a+a {
    margin-left: 1rem
  }
  nav {
    grid-column: 1 / 3;
    background-color: aquamarine;
  }
  main { 
    grid-column: 1 / 2;
    background-color: beige;
  }
  aside {
    grid-column: 2 / 3;
    background-color: gold;
  }
  footer {
    grid-column: 1 / 3;
    background-color: yellowgreen;
    text-align: center;
  }
</style>
