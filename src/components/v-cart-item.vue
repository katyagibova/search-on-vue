<template>
  <div>
    <p>{{ cart_item_data.name }}</p>
    <p>{{ cart_item_data.category }}</p>
    <p>{{ cart_item_data.dimension }}</p>
    <div>
        <p>Qty:</p>
        {{cart_item_data.quantity}}
        
    </div>
    <v-btn
    class="buttn"
    style="background-color: #e0e0e0; margin-left: 20px"
    @click="deleteFromCart"
  >
    Удалить
  </v-btn>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
      deleteFromCart(){
          this.$emit('deleteFromCart')
      }
  },
  data() {
    return {};
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  },
  
  computed: {},
  
};
</script>
<style>
</style>