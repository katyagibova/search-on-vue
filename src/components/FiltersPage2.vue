<template>
  <v-container>
    <v-row>
      <h1>uchby</h1>
      <h1>uchby</h1>
      <h1>uchby</h1>
      <h1>uchby</h1>
      <h1>uchby</h1>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'FiltersPage2',
    components: {
    },
    data () {
        return {
            
        }
    },
    methods:{
        ...mapActions([
            'GET_FILTERS',
        ]),        
    },
    computed: {
        ...mapGetters([
            'FILTERS',
        ]),
    },
    mounted(){
      this.GET_FILTERS();
    }
  }
</script>
