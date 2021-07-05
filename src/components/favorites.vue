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

      <favorite-item
          v-for = "(item, i) in favorite_data"
          :key = "i"
          :favorite_item_data = "item"
          @deleteFromFavorite = "deleteFromFavorite(i)"   
      />
    </div>
</template>
<script> 

import favoriteItem from './favorite-item.vue'
import {mapActions} from 'vuex'

export default {
  components: { favoriteItem },
  name: "favorites",
  props: {
      favorite_data: {
          type: Array,
          default() {
              return []
          }
      }
  },
  methods: {
      ...mapActions([
          'DELETE_FROM_FAVORITE'
      ]),
      deleteFromFavorite(index){
        this.DELETE_FROM_FAVORITE(index)
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