<template>
  <div class="home">
    <h1 class="on_center">Поиск</h1>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="2">
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="3">
        <v-text-field
          label="Что ты хочешь найти?"
          v-model="searchCategories"
        ></v-text-field>
        </v-col>
      <v-col cols="1">
        <v-btn
        @click="toFind"
        elevation="1"
        >Search</v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    
    <p class="on_center">Вы набираете: {{searchCategories}}</p>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="3">
        <h3 class="on_center">Все, что доступно для поиска:</h3>
        <ul
        v-for="(item,i) in categories"
        :key="i">
          <li>{{item}}</li>
        </ul>
        <ul
        v-for="(item,i) in allWords"
        :key="i">
          <li>{{item}}</li>
        </ul>
      </v-col>
      <v-col cols="3">
        <h3 class="on_center">То, что мы нашли:</h3>
        <div v-if="filtered.length == 0 ">
          <ul
          v-for="(item,i) in categories"
          :key="i">
            <li>{{item}}</li>
          </ul>
          <ul
          v-for="(item,i) in allWords"
          :key="i">
            <li>{{item}}</li>
          </ul>
        </div>
        <div v-else>
          <ul
          v-for="(item,i) in filtered"
          :key="i">
            <li>{{item}}</li>
          </ul>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
      
  },
  data () {
      return {
        searchCategories: '',
        categories:['категория1', 'привет', 'дела', 'Ещё', 'категория5', 'категория6', 'категория7', 'категория8', 'категория9', 'категория10', 'категория11' ],
        allWords: [ 'конструкция', 'суд', 'взрыв', 'товарищ', 'оплата', 'кресло', 'структура', 'стена', 'ремонт', 'чиновник', 'поездка', 'поезд', 'чайка', 'стол' ],
        filtered:[],
      }
  },
  methods:{
    toFind(){
      this.filtered = this.filterCategories.concat(this.filterWords) 
    },
  },
  computed: {
    filterCategories(){
      return this.categories.filter(categ => {
        return categ.toUpperCase().indexOf(this.searchCategories.toUpperCase()) !== -1
      }) 
    },
    filterWords(){
      return this.allWords.filter(word => {
        return word.toUpperCase().indexOf(this.searchCategories.toUpperCase()) !== -1
      })
    }

  }
      
}
</script>

<style lang="scss" scoped>
.on_center{
  text-align: center;
  margin-bottom: 15px;
}
</style>
