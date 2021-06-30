<template>
    <div>
        <h1>Cart</h1>
      <v-cart-item 
          v-for = "(item, i) in cart_data"
          :key = "i"
          :cart_item_data = "item"
      />
    </div>
</template>
<script>
import vCartItem from './v-cart-item.vue'
export default {
  components: { vCartItem },
  name: "v-carte",
  props: {
      cart_data: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data () {
        return {}
    },
  computed: {}
}
</script>
<style>
    
</style>