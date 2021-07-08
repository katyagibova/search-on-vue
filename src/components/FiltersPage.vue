<template>
  <v-container>
    <v-row>
      <v-col
      v-for="(item,i) in oneStepCategory"
      :key="i"
      cols="2"
      >
        <router-link style="text-decoration: none" :to="{name: 'mainPage', params: {category: item}}">
          <v-card
          tile
          class="tile"> {{item}} </v-card>
        </router-link>
      </v-col>
      <v-col
      v-for="(item,i) in twoStepCategory"
      :key="i"
      cols="2"
      >
        <v-card
        tile
        v-model="categoryValue"
        @click="openDialog(item)"
        class="tile"> {{item}} </v-card>
      </v-col>
    </v-row>

    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card
        color="#b5cee7"
        tile>
            <v-btn
              icon
              @click="dialog = false"
            >
              <v-icon color="#000">mdi-close</v-icon>
            </v-btn>
            
          <v-card-text>
            <v-list
              three-line
              subheader
              v-if="categoryValue == 'Вратарская форма'">
              <v-row
              style="background-color: #b5cee7">
                <v-col
                v-for="(item, i) in goaliesUniformCategories"
                :key="i"
                cols="2">
                  <router-link style="text-decoration: none" :to="{name: 'mainPage', params: {category: item}}">
                    <v-list-item>
                      <v-card
                      tile
                      class="tile"> {{item}} </v-card>
                    </v-list-item>
                  </router-link>
                </v-col>
              </v-row>              
            </v-list>
            <v-list
              three-line
              subheader
              v-if="categoryValue == 'Аксессуары'">
              <v-row
              style="background-color: #b5cee7">
                <v-col
                v-for="(item, i) in accessoriesCategories"
                :key="i"
                cols="2">
                  <router-link style="text-decoration: none" :to="{name: 'mainPage', params: {category: item}}">
                    <v-list-item>
                      <v-card
                      tile
                      class="tile"> {{item}} </v-card>
                    </v-list-item>
                  </router-link>
                </v-col>
              </v-row>              
            </v-list>
            <v-list
              three-line
              subheader
              v-if="categoryValue == 'Бельё'">
              <v-row
              style="background-color: #b5cee7">
                <v-col
                v-for="(item, i) in underwearCategories"
                :key="i"
                cols="2">
                  <router-link style="text-decoration: none" :to="{name: 'mainPage', params: {category: item}}">
                    <v-list-item>
                      <v-card
                      tile
                      class="tile"> {{item}} </v-card>
                    </v-list-item>
                  </router-link>
                </v-col>
              </v-row>              
            </v-list>
            <v-list
              three-line
              subheader
              v-if="categoryValue == 'Запасные части (коньки хоккейные)'">
              <v-row
              style="background-color: #b5cee7">
                <v-col
                v-for="(item, i) in sparePartsCategories"
                :key="i"
                cols="2">
                  <router-link style="text-decoration: none" :to="{name: 'mainPage', params: {category: item}}">
                    <v-list-item>
                      <v-card
                      tile
                      class="tile"> {{item}} </v-card>
                    </v-list-item>
                  </router-link>
                </v-col>
              </v-row>              
            </v-list>
            <v-list
              three-line
              subheader
              v-if="categoryValue == 'Сумки'">
              <v-row
              style="background-color: #b5cee7">
                <v-col
                v-for="(item, i) in bagsCategories"
                :key="i"
                cols="2">
                  <router-link style="text-decoration: none" :to="{name: 'mainPage', params: {category: item}}">
                    <v-list-item>
                      <v-card
                      tile
                      class="tile"> {{item}} </v-card>
                    </v-list-item>
                  </router-link>
                </v-col>
              </v-row>              
            </v-list>
            <v-list
              three-line
              subheader
              v-if="categoryValue == 'Одежда'">
              <v-row
              style="background-color: #b5cee7">
                <v-col
                v-for="(item, i) in clothesCategories"
                :key="i"
                cols="2">
                  <router-link style="text-decoration: none" :to="{name: 'mainPage', params: {category: item}}">
                    <v-list-item>
                      <v-card
                      tile
                      class="tile"> {{item}} </v-card>
                    </v-list-item>
                  </router-link>
                </v-col>
              </v-row>              
            </v-list>
          </v-card-text>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>

  export default {
    name: 'FiltersPage',
    components: {
    },
    data () {
        return {
          oneStepCategory: ["Коньки", "Клюшки", "Перчатки", "Трусы", "Нагрудники", "Щитки", "Маски", "Шлемы", "Майки", "Гамаши", "Рейтузы", "Налокотники", "Флорбол", "Шлемы с маской", "Хоккей роликовый", "Bandy", "Крюки", "Обувь", "Судейская форма", "Палки хоккейные", "Сувениры"],
          twoStepCategory: ["Вратарская форма", "Аксессуары", "Бельё", "Запасные части (коньки хоккейные)", "Сумки", "Одежда"],
          categoryValue: [],
          dialog: false,
          goaliesUniformCategories: ["Клюшки вратарские", "Щитки вратарские", "Аксессуары вратаря", "Блины", "Ловушки", "Трусы вратарские", "Нагрудники вратарские", "Сумки вратарские", "Коньки вратарские", "Маски вратарские", "Майки вратарские", "Шлемы с маской вратарские"],
          accessoriesCategories: ["Шайбы и мячи", "Лента для клюшек/щитков", "Бутылки", "Разное", "Бандажи", "Чехлы для коньков", "Шнурки", "Защита шеи игрока", "Пояса для гамаш", "Подтяжки", "Защита кисти", "Надставки", "Липучки"],  
          underwearCategories: ["Бельё без бандажа", "Бельё с бандажом"],
          sparePartsCategories: ["Железки", "Стаканы", "Стельки", "Лезвия"],
          bagsCategories: ["Сумки для коньков", "Сумки для шайб", "Сумки для шлема", "Сумки и баулы", "Сумки-рюкзаки", "Сумки для клюшек"],
          clothesCategories: ["Бейсболки", "Шапки", "Носки", "Куртки", "Футболки", "Толстовки", "Брюки", "Шорты", "Костюмы"]
        }
    },
    methods:{    
      openDialog(data){
        this.dialog = true
        this.categoryValue = data
      }   
    },
    computed: {
      
    },
    mounted(){
    }
  }
</script>

<style scoped>
.tile{
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  text-decoration: none;
}
</style>