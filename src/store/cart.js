import { defineStore } from 'pinia'

function saveState(state) {
  localStorage.setItem('cart', JSON.stringify(state.items))
  localStorage.setItem('sum', JSON.stringify(state.sum))
}

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    items: [],
    sum: 0
  }),
  actions:{
    addItem: function(p) { 
      const index = this.items.findIndex(i => i.id == p.id)
      if (index == -1) {
        this.items.push({
          id: p.id,
          name: p.name,
          price: p.price,
          quantity: 1,
          value: p.price
        }) 
      }
      else {
        this.items[index].quantity++
        this.items[index].value += p.price
      }
      this.sum += p.price

      saveState(this)
    },
    removeItem: function(p) {
      const index = this.items.findIndex(i => i.id == p.id)
      if (index == -1) return
      if (this.items[index].quantity == 1) this.items.splice(index, 1)
      else this.items[index].quantity--
      this.sum -= p.price

      saveState(this)
    }
  }
})