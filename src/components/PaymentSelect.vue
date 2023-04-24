<template>

<select name="payment" id="payment" v-model="forma">
  <option value="gotówka">gotówka</option>
  <option value="karta">karta</option>
  <option value="przelew">przelew</option>
</select>
<p>{{ forma }}</p>
</template>

<script setup>
import { ref } from 'vue'
const forma = ref('')

</script>

<style scoped>
select { width: 100%; padding: .5rem }
</style>