<template>
    <div>
        <h1>Cart</h1>
      <v-cart-item> 
          v-for = "item in cart_data"
          :cart_item_data = "item"
      </v-cart-item>
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