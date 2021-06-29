<template>
  <v-container fluid class="all_container">
    <v-row>
      <v-col cols="4">
        <v-card elevation="0" tile style="margin: 15px">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="11">
              <v-btn @click="toFind">Отфильтровать</v-btn>

              <v-carte 
              v-if="CART.length" 
              :cart_data="CART"
              />

            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="11">
              <h3>Цена</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="5">
              <v-text-field
                label="От"
                placeholder="От"
                dense
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="5">
              <v-text-field
                label="До"
                placeholder="До"
                dense
                solo
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="11">
              <h3>Тип товара</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="11">
              <label
                v-for="(item, i) in SKATES.type"
                :key="i"
                class="in_colomn"
              >
                <input
                  v-model="type"
                  type="radio"
                  :value="`${item}`"
                  class="on_center"
                />
                {{ item }}
              </label>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="11">
              <p>{{ type }}</p>
            </v-col>
          </v-row>

          <v-row style="margin-bottom: 10px">
            <v-spacer></v-spacer>
            <v-col cols="11">
              <h3>Профессионализм</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="10">
              <v-checkbox
                v-for="(item, i) in SKATES.professionalism"
                :key="i"
                :label="`${item}`"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="11">
              <h3>Размерность</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="10">
              <v-checkbox
                v-for="(item, i) in SKATES.dimension"
                :key="i"
                :label="`${item}`"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="11">
              <h3>Цвет</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="10">
              <v-checkbox
                v-for="(item, i) in SKATES.color"
                :key="i"
                :label="`${item}`"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="11">
              <h3>Размеры</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="10">
              <v-checkbox
                v-for="(item, i) in SKATES.size_characteristic"
                :key="i"
                :label="`${item}`"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-row style="margin-top: 15px">
          <v-text-field
            label="Поиск"
            placeholder="Поиск"
            dense
            solo
          ></v-text-field>
          <v-btn>Найти</v-btn>
        </v-row>
        <v-row v-if="watchCards">
          <v-card
            elevation="1"
            tile
            v-for="(item, i) in PRODUCTS"
            :key="i"
            color="rgb(240, 239, 239)"
            style="margin-bottom: 20px"
          >
            <v-list-item three-line>
              <v-list-item-avatar
                tile
                size="120"
                color="#fff"
                style="margin-right: 15px"
              ></v-list-item-avatar>
              <v-list-item-content>
                <div class="overline mb-3">
                  {{ item.date }}
                </div>
                <h2>
                  {{ item.name }}
                </h2>
                <v-row>
                  <v-col cols="3">
                    <v-list-item-subtitle
                      >Год выпуска:
                      {{ item.year_of_production }}</v-list-item-subtitle
                    >
                  </v-col>
                  <v-col cols="3">
                    <v-list-item-subtitle
                      >Тип товара: {{ item.type }}</v-list-item-subtitle
                    >
                  </v-col>
                  <v-col cols="3">
                    <v-list-item-subtitle
                      >Категория: {{ item.category }}</v-list-item-subtitle
                    >
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-list-item-subtitle
                      >Размерность: {{ item.dimension }}</v-list-item-subtitle
                    >
                  </v-col>
                  <v-col cols="4">
                    <v-list-item-subtitle
                      >Проффесиональность:
                      {{ item.professionalism }}</v-list-item-subtitle
                    >
                  </v-col>
                  <v-col cols="3">
                    <v-list-item-subtitle
                      >Бренд: {{ item.brand }}</v-list-item-subtitle
                    >
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-list-item-subtitle
                      >Рейтинг товара:
                      {{ item.product_rating }}</v-list-item-subtitle
                    >
                  </v-col>
                  <v-col cols="4">
                    <v-list-item-subtitle
                      >Рейтинг продавца:
                      {{ item.seller_rating }}</v-list-item-subtitle
                    >
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
               

               <div>
                     <h3
                     style=" float: left;"
                     >{{ item.price }} РУБ</h3>
                     
                <v-btn
                class="buttn"
                  style="
                    background-color: #e0e0e0;
                    margin-left:20px;
                  "
                  @click="addToCart"
                >
                 Добавить в корзину
                </v-btn>
                </div>
                
               
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-row>
        <!-- <v-row
                v-for="(item, i) in PRODUCTS"
                :key="i"
                >
                <v-col
                v-if="type == item.type">
                    <v-card                
                    elevation="1"
                    tile                    
                    color="rgb(240, 239, 239)"
                    style="margin-bottom: 20px"
                    v-if="filteredType">
                    <v-list-item three-line>
                        <v-list-item-avatar
                        tile
                        size="120"
                        color="#fff"
                        style="margin-right: 15px"
                        ></v-list-item-avatar>
                        <v-list-item-content>
                        <div class="overline mb-3">
                            {{item.date}}
                        </div>
                        <h2>
                        {{item.name}}
                        </h2>
                        <v-row>
                            <v-col cols="3">
                                <v-list-item-subtitle>Год выпуска: {{item.year_of_production}}</v-list-item-subtitle>
                            </v-col>
                            <v-col cols="3">
                                <v-list-item-subtitle>Тип товара: {{item.type}}</v-list-item-subtitle>
                            </v-col>
                            <v-col cols="3">
                                <v-list-item-subtitle>Категория: {{item.category}}</v-list-item-subtitle>
                            </v-col>
                            <v-spacer></v-spacer>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                                <v-list-item-subtitle>Размерность: {{item.dimension}}</v-list-item-subtitle>
                            </v-col>
                            <v-col cols="4">
                                <v-list-item-subtitle>Проффесиональность: {{item.professionalism}}</v-list-item-subtitle>
                            </v-col>
                            <v-col cols="3">
                                <v-list-item-subtitle>Бренд: {{item.brand}}</v-list-item-subtitle>
                            </v-col>
                            <v-spacer></v-spacer>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                                <v-list-item-subtitle>Рейтинг товара: {{item.product_rating}}</v-list-item-subtitle>
                            </v-col>
                            <v-col cols="4">
                                <v-list-item-subtitle>Рейтинг продавца: {{item.seller_rating}}</v-list-item-subtitle>
                            </v-col>
                            <v-spacer></v-spacer>
                        </v-row>
                        <h3> {{item.price}} РУБ</h3>
                        </v-list-item-content>
                    </v-list-item>
                    </v-card>  
                    </v-col>
                </v-row>              ff -->

            
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VCarte from './v-carte.vue';

export default {
  name: "mainPage",
  components: {VCarte},
  data() {
    return {
      checkbox3: true,
      checkbox4: false,
      checkbox5: false,
      type: "",
      filteredType: false,
      watchCards: true,
    };
  },
  methods: {
    ...mapActions(["GET_SKATES",
     "GET_PRODUCTS",
     "ADD_TO_CART"]),
    toFind() {
      this.filteredType = true;
      this.watchCards = false;
    },
    props: {
        card: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    addToCart(){
       
        this.ADD_TO_CART(this.card)
    }
  },
  computed: {
    ...mapGetters(["SKATES",
     "PRODUCTS", 
     "CART"]),
    filterType() {
      return this.PRODUCTS.type.filter((elType) => {
        return elType.indexOf(this.type) !== -1;
      });
    },
  },
  mounted() {
    this.GET_SKATES();
    this.GET_PRODUCTS();
  },
};
</script>

<style lang="scss" scoped>
.buttn
{

	display: inline-block;
	width: 50%;
}
.all_container {
  max-width: 1060px;
  margin: 0 auto;
}

.on_center {
  text-align: center;
  margin-bottom: 15px;
}

.in_colomn {
  display: grid;
  grid-template-columns: 20px 100px;
}

.col-11 {
  padding-top: 15px;
  padding-bottom: 0;
}

.col-10 {
  margin-left: 15px;
  padding-top: 10px;
}
</style>