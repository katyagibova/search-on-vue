<template>
  <div
   style="margin-left: 50px"
   >
    <p>opaafda</p>
    <p>{{ favorite_item_data.name }}</p>
    <p>{{ favorite_item_data.category }}</p>
    <p>{{ favorite_item_data.dimension }}</p>
    <v-btn
    class="buttn"
    style="background-color: #e0e0e0; margin-left: 20px"
    @click="deleteFromFavorite"
  >
    Удалить
  </v-btn>
  </div>
</template>

<script>

export default {
  name: "favorite-item",
  props: {
    favorite_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
      deleteFromFavorite(){
          this.$emit('deleteFromFavorite')
      }
  },
  data() {
    return {};
  },
  mounted() {
  },
  
  computed: {},
  
};
</script>
<style>
</style>