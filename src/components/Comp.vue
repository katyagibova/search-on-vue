<template>
        <v-container fluid>
            <h1 class="on_center" >Фильтр по радио-кнопке</h1>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <h3 class="on_center">Какой бренд?</h3>
                <label
                v-for="(item, i) in brand"
                :key="i"
                class="in_colomn">
                    <input
                    @click="concealCard"                   
                    type="radio"
                    v-model="radioBrand"
                    :value="`${item}`" 
                    class="on_center"> {{item}}
                </label>
                
                <!-- <v-radio-group
                column
                >
                    <v-radio  
                    v-for="(item, i) in brand"
                    :key="i"                    
                    v-model="radio"
                    color="orange"
                    :value="`${item}`"
                    :label="`${item}`"
                    ></v-radio>
                </v-radio-group> -->
            </v-col>
            <v-col cols="2">
                <h3 class="on_center">Какая одежда?</h3>
                <label
                v-for="(item, i) in clothes"
                :key="i"
                class="in_colomn">
                    <input
                    @click="concealCard"                 
                    type="radio"
                    v-model="radioClothes"
                    :value="`${item}`"
                    class="on_center"> {{item}}
                </label>
                <!-- <v-radio-group
                column
                >
                    <v-radio  
                    v-for="(item, i) in clothes"
                    :key="i"                    
                    v-model="radioClothes"
                    color="orange"
                    v-bind:value="`${item}`"
                    :label="`${item}`"
                    ></v-radio>
                </v-radio-group> -->
            </v-col>
            <v-col cols="2">
                <h4>Бренд: {{radioBrand}}</h4>
                <h4>Одежда: {{radioClothes}}</h4>
                <v-btn
                @click="toFind"
                elevation="1"
                >Search</v-btn>
            </v-col>
            <v-col cols="2">
                <h3 class="on_center">То, что мы нашли:</h3>
                <v-row
                v-for="(item, i) in products"
                :key="i">
                    <v-col
                    cols="12"
                    v-if="radioBrand == item.brand && radioClothes == item.clothes">
                        <v-card
                        class="mx-auto"
                        max-width="344"
                        outlined
                        v-if="selectedCard"
                        >
                            <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="text-h5 mb-1">
                                {{item.name}}
                                </v-list-item-title>
                                <v-list-item-subtitle>Бренд: {{item.brand}}</v-list-item-subtitle>
                                <v-list-item-subtitle>Одежда: {{item.clothes}}</v-list-item-subtitle>
                            </v-list-item-content>
                            </v-list-item>
                        </v-card>

                    </v-col>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="4">
                <v-card
                    class="mx-auto"
                    max-width="344"
                    style="margin-bottom: 15px"
                    outlined
                    v-for="(item,i) in products"
                    :key="i"
                >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1">
                        {{item.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle>Бренд: {{item.brand}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Одежда: {{item.clothes}}</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'Page2',
    components: {
    },
    data () {
      return {
        selectedCard: false,
        radioBrand: '',
        radioClothes: '',
        selected: [],
        brand: [ 'Zara', 'Bershka', 'Mango', 'Stradivarius', 'H&M'],
        clothes: [ 'футболка', 'джинсы', 'кепка', 'куртка', 'обувь'],
        allWords: [ 'конструкция', 'суд', 'взрыв', 'товарищ', 'оплата', 'кресло', 'структура', 'стена', 'ремонт', 'чиновник', 'поездка', 'поезд', 'чайка', 'стол' ],
        products:[
            {
                id: 0,
                name: "Товар 1",
                brand: "Mango",
                clothes: "кепка"
            },
            {
                id: 1,
                name: "Товар 2",
                brand: "H&M",
                clothes: "обувь"
            },
            {
                id: 2,
                name: "Товар 3",
                brand: "H&M",
                clothes: "куртка"
            },
            {
                id: 3,
                name: "Товар 4",
                brand: "Bershka",
                clothes: "обувь"
            },
            {
                id: 4,
                name: "Товар 5",
                brand: "Mango",
                clothes: "футболка"
            },
            {
                id: 5,
                name: "Товар 6",
                brand: "Bershka",
                clothes: "кепка"
            },
            {
                id: 6,
                name: "Товар 7",
                brand: "Stradivarius",
                clothes: "куртка"
            },
            {
                id: 7,
                name: "Товар 8",
                brand: "Mango",
                clothes: "футболка"
            },
            {
                id: 8,
                name: "Товар 9",
                brand: "Bershka",
                clothes: "кепка"
            },
            {
                id: 9,
                name: "Товар 10",
                brand: "Zara",
                clothes: "футболка"
            },
        ]
      }
    },
    methods:{
        toFind(){
            this.selectedCard = true
        },
        concealCard(){
            this.selectedCard = false
        }
        
    },
    computed: {
    filterBrands(){
      return this.products.brand.filter(elementB => {
        return elementB.indexOf(this.radioBrand) !== -1
      }) 
    },
    filterClothes(){
      return this.products.clothes.filter(elementC => {
        return elementC.indexOf(this.radioClothes) !== -1
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

.in_colomn{
    display: grid;
    grid-template-columns: 20px 50px;
}

</style>