<template>
    <div>
  
        <router-link :to="{name: 'mainPage'}" >
          <div
          style="
          background: #676f73a6;
          border: solid 1px #4f4a4a;
           margin-left: 20px;margin-bottom: 30px;
           margin-right: 85%
           "
          >Вернуться в каталог</div>
       </router-link>
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