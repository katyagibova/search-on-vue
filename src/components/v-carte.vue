<template>
    <div>
        <h1>Cart</h1>
      <v-cart-item 
          v-for = "(item, i) in cart_data"
          :key = "i"
          :cart_item_data = "item"
          @deleteFromCart = "deleteFromCart(i)"
      />
    </div>
</template>
<script> 
import vCartItem from './v-cart-item.vue'
import {mapActions} from 'vuex'
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
  methods: {
      ...mapActions([
          'DELETE_FROM_CART'
      ]),
      deleteFromCart(index){
        this.DELETE_FROM_CART(index)
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