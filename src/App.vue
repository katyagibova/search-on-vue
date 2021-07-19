<template>
  <v-app>
    <div id="app">
      <h1 class="on_center">Поиск и фильтрация</h1>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-btn
          color="#625AD8"
          style="color: #fff; width: 100%"
          :to="`/page2`">Фильтрация</v-btn>
        </v-col>
        <!-- <v-col cols="2">
          <v-btn
          color="#625AD8"
          style="color: #fff"
          :to="`/mainpage`">На главную</v-btn>
        </v-col> -->
        <v-col cols="2">
          <v-btn
          color="#625AD8"
          style="color: #fff; width: 100%"
          :to="`/`">Поиск</v-btn>
          </v-col>
        <v-col cols="2">
          <v-btn
          color="#625AD8"
          style="color: #fff; width: 100%"
          :to="`/filterspage`">Категории</v-btn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <router-view></router-view> 
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
      return {
        
      }
  },
  methods:{
    
  },
  computed: {
  }
      
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #b5cee7;
}
.on_center{
  text-align: center;
  margin-bottom: 15px;
}
</style>
