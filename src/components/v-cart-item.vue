<template>
  <div
   style="margin-left: 50px"
   >
    <p>{{ cart_item_data.name }}</p>
    <p>{{ cart_item_data.category }}</p>
    <p>{{ cart_item_data.dimension }}</p>
    <div>

        <p>Кол-во:</p>
        <span>

            <span style="cursor: pointer;" 
            @click="decrementItem">-</span>

            <input v-model ="cart_item_data.quantity" id = "inp" type="text" class="in" @click="toggle()" maxlength="2"/>
            <!-- <span id = "spn" class="sp" contenteditable="true" @click="toggle()">{{cart_item_data.quantity}}</span> -->

            <span style="cursor: pointer;"
            type="input"
            @click="incrementItem">+</span>

        </span>
        
        
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
        return {
        };
      },
    },
  },
  methods: {
      deleteFromCart(){
          this.$emit('deleteFromCart')
      },
      decrementItem() {
          this.$emit('decrement')
      },
      incrementItem() {
          this.$emit('increment')
      },
    },
  data() {
    return {
    };
  },
  mounted() {
  },
  
  computed: {},
  
};
</script>
<style>
.in{
 text-align: center;
   width:30px;
}

</style>