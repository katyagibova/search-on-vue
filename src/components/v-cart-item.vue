<template>
  <div>
      <p>opa</p>
    <p>{{ cart_item_data.name }}</p>
    <p>{{ cart_item_data.category }}</p>
    <p>{{ cart_item_data.dimension }}</p>
    <v-btn
    class="buttn"
    style="background-color: #e0e0e0; margin-left: 20px"
    @click="addToCart"
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
  data() {
    return {};
  },
  computed: {},
  
};
</script>
<style>
</style>