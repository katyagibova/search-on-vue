<template>
    <v-container fluid class="all_container">
        <v-row>
            <v-col cols="4">
                <v-card
                elevation="0"
                tile
                style="margin: 15px">
                    <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="11">
                        <h3>Цена</h3>
                    </v-col>      
                    </v-row>      
                    <v-row>
                    <v-spacer></v-spacer>
                    <v-col
                    cols="12"
                    sm="5"
                    >
                        <v-text-field
                        label="От"
                        placeholder="От"
                        dense
                        solo
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="5"
                    >
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
                        <v-col cols="10">
                            <v-checkbox
                            v-for="(item, i) in SKATES.type"
                            :key="i"
                            @click="snackbar = true"
                            v-model="type"
                            color="#625AD8"
                            :value="`${item}`" 
                            :label="`${item}`"
                            hide-details></v-checkbox> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <p>{{type}}</p>
                        </v-col>
                    </v-row>
                    
                    <v-row
                    style="margin-bottom: 10px">
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
                            @click="snackbar = true"
                            v-model="professionalism"
                            color="#625AD8"
                            :value="`${item}`" 
                            :label="`${item}`"
                            hide-details></v-checkbox>                           
                        </v-col>                    
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <p>{{professionalism}}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <h3 >Размерность</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10">
                            <v-checkbox
                            v-for="(item, i) in SKATES.dimension"
                            :key="i"
                            @click="snackbar = true"
                            v-model="dimension"
                            color="#625AD8"
                            :value="`${item}`" 
                            :label="`${item}`"
                            hide-details></v-checkbox>
                        </v-col>                    
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <p>{{dimension}}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <h3>Цвет</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" >
                            <v-checkbox
                            v-for="(item, i) in SKATES.color"
                            :key="i"
                            @click="snackbar = true"
                            v-model="color"
                            color="#625AD8"
                            :value="`${item}`"
                            :label="`${item}`"
                            hide-details></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <h3>Размеры</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" >
                            <v-checkbox
                            v-for="(item, i) in SKATES.size_characteristic"
                            :key="i"
                            color="#625AD8"
                            :label="`${item}`"
                            hide-details></v-checkbox>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-row
                style="margin-top: 15px">
                <v-text-field
                label="Поиск"
                placeholder="Поиск"
                dense
                solo></v-text-field>
                <v-btn
                color="#625AD8"
                style="color: #fff">Найти</v-btn>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-select
                        v-model="dateSelect"
                        :items="dateItems"
                        label="По дате"
                        color="#625AD8"
                        @change="sortedByDate"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                        v-model="priceSelect"
                        :items="priceItems"
                        label="По стоимости"
                        color="#625AD8"
                        @change="sortedByPrice"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-checkbox
                        v-model="rating_checkbox"
                        color="#625AD8"
                        :label="`С начала с лучшей оценкой`"
                        @click="sortedByEstimation"
                        ></v-checkbox>
                    </v-col>
                </v-row>
                <div
                v-if="category.trim() == ''">
                    <h2>Так как вы обновили страницу, то настройки сбросились.</h2>
                    <h2>Пожалуйста выберите категорию во вкладке "Категории"</h2>
                </div>
                <div
                v-else>
                    <v-row
                    v-if="allCards && noCategory == false">
                        <div
                        v-for="(item, i) in PRODUCTS"
                        :key="i">
                            <div
                            v-if="category == item.category">
                                <v-card                
                                elevation="1"
                                tile                    
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
                            </div>
                        </div>
                    </v-row>
                </div>
                <div v-if="noCategory">
                    <h2>К сожалению товаров из этой категории нет</h2>
                </div>
                <v-row
                v-for="(item, i) in PRODUCTS"
                :key="i"
                >
                <div
                v-for="(type, t) in selectedType"
                :key="t">
                <div
                v-for="(prof, p) in selectedProfessionalism"
                :key="p">
                <div
                v-for="(dim, d) in selectedDimension"
                :key="d">                
                <!-- <div
                v-for="(col, c) in selectedColor"
                :key="c"> -->
                <div
                v-if=" category == item.category && type == item.type &&  prof == item.professionalism && dim == item.dimension"> 
                    <v-card                   
                    elevation="1"
                    tile                    
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
                    </div>
                    </div>
                    </div>
                    </div>
                    <!-- </div>  -->
                </v-row>
            </v-col>
        </v-row>
        <v-snackbar
        v-model="snackbar"
        rounded="pill">
            <template>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="7">
                        <v-btn
                        color="#625AD8"
                        @click="toFind">Отфильтровать</v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>                
            </template>
        </v-snackbar>            
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'mainPage',
    components: {
    },
    props: {
        category: {
            type: String,
            default() {
                return "";
            },
        },
    },
    data () {
      return {
        counter: 0,
        noCategory: false,
        dateSelect: "",
        priceSelect: "",
        rating_checkbox: false,
        snackbar: false,
        allCards: true,
        type: [],
        selectedType: [],
        professionalism: [],
        selectedProfessionalism: [],
        dimension: [],
        selectedDimension: [],
        color: [],
        selectedColor: [],
        dateItems: ["По умолчанию", "По возрастанию", "По убыванию"],
        priceItems: ["По умолчанию", "По возрастанию", "По убыванию"]
      }
    },
    methods:{
        ...mapActions([
            'GET_SKATES',
            'GET_PRODUCTS'
        ]),
        toFind(){
            if(this.type.length == 0 && this.professionalism.length == 0 && this.dimension.length == 0 && this.color.length == 0){
                this.allCards = true
                this.snackbar = false
            }else{
                this.allCards = false
                this.snackbar = true
            }
            
            if(this.type.length == 0){
                this.selectedType = this.SKATES.type
            } else{
                this.selectedType = this.type
            }
            
            if(this.professionalism.length == 0){
                this.selectedProfessionalism = this.SKATES.professionalism
            } else{
                this.selectedProfessionalism = this.professionalism
            }
            
            if(this.dimension.length == 0){
                this.selectedDimension = this.SKATES.dimension
            } else{
                this.selectedDimension = this.dimension
            }

            if(this.color.length == 0){
                this.selectedColor = this.SKATES.color
            } else{
                this.selectedColor = this.color
            }
        },
        counterCategories(){
            if(this.category.trim() == ''){
                this.noCategory = false
            } else{
                for( let i = 0;  i< 15; i++){
                    if(this.PRODUCTS[i].category != this.category){
                        this.counter++
                    }
                }
                if(this.counter == 15){
                    this.noCategory = true;
                }
            }
        },
        sortedByDate(){
            if(this.dateSelect == "По возрастанию"){
                this.PRODUCTS.sort((a, b) => new Date(a.date) - new Date(b.date))
            } else if(this.dateSelect == "По убыванию"){
                this.PRODUCTS.sort( (a,b) => new Date(b.date) - new Date(a.date))
            } else{
                this.PRODUCTS.sort( (a,b) => a.name.localeCompare(b.name))
            }
        },
        sortedByPrice(){
            if(this.priceSelect == "По возрастанию"){
                this.PRODUCTS.sort( (a,b) => a.price - b.price )
            } else if(this.priceSelect == "По убыванию"){
                this.PRODUCTS.sort( (a,b) => b.price - a.price )
            } else{
                this.PRODUCTS.sort( (a,b) => a.name.localeCompare(b.name))
            }
        },
        sortedByEstimation(){
            if(this.rating_checkbox == true){
                this.PRODUCTS.sort( (a,b) => b.product_rating - a.product_rating )
            } else{
                this.PRODUCTS.sort( (a,b) => a.name.localeCompare(b.name))
            }
        },
    },
    computed: {
        ...mapGetters([
            'SKATES',
            'PRODUCTS'
        ]),
        filterType(){
            return this.PRODUCTS.type.filter(elType => {
                return elType.indexOf(this.type) !== -1
            }) 
        },
        filterProfessionalism(){
            return this.PRODUCTS.professionalism.filter(elProfessionalism => {
                return elProfessionalism.indexOf(this.professionalism) !== -1
            }) 
        },
        filterDimension(){
            return this.PRODUCTS.dimension.filter(elDimension => {
                return elDimension.indexOf(this.dimension) !== -1
            }) 
        },
        filterColor(){
            return this.PRODUCTS.color.filter(elColor => {
                return elColor.indexOf(this.color) !== -1
            }) 
        },
        
    },
    mounted(){
      this.GET_SKATES();
      this.GET_PRODUCTS();
      this.counterCategories();
    },
}
</script>

<style lang="scss" scoped>
.all_container{
    max-width: 1060px;
    margin: 0 auto;
}

.on_center{
  text-align: center;
  margin-bottom: 15px;
}

.in_colomn{
    display: grid;
    grid-template-columns: 20px 100px;
}

.col-11{
    padding-top: 15px;
    padding-bottom: 0;
}

.col-10{
    margin-left: 15px;
    padding-top: 10px;
}
</style>