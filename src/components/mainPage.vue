<template>
    <v-container fluid class="all_container">
        <v-row>
            <v-col cols="3">
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
                    <v-spacer></v-spacer>
                    <v-col cols="11">
                        <label
                        class="in_colomn">
                            <input                   
                            type="radio"
                            :value="новый" 
                            class="on_center"> новый
                        </label>
                        <label
                        class="in_colomn">
                            <input                   
                            type="radio"
                            :value="бу" 
                            class="on_center"> б/у
                        </label>
                        <label
                        class="in_colomn">
                            <input                   
                            type="radio"
                            :value="все" 
                            class="on_center"> новый и б/у
                        </label>
                    </v-col>
                    </v-row>
                    
                    <v-row
                    style="margin-bottom: 10px">
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <h3>Категория товаров</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <v-checkbox
                            v-model="checkbox1"
                            :label="`Checkbox 1: ${checkbox1.toString()}`"
                            hide-details></v-checkbox>
                            <v-checkbox
                            v-model="checkbox2"
                            :label="`Checkbox 2: ${checkbox2.toString()}`"
                            hide-details></v-checkbox>
                        </v-col>                    
                    </v-row>
                    <v-row 
                    style="margin-bottom: 10px">
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <h3 >Размерность</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="11">
                            <v-checkbox
                            v-model="checkbox3"
                            :label="`Детские: ${checkbox3.toString()}`"
                            hide-details></v-checkbox>
                            <v-checkbox
                            v-model="checkbox4"
                            :label="`Юношеские: ${checkbox4.toString()}`"
                            hide-details></v-checkbox>
                            <v-checkbox
                            v-model="checkbox5"
                            :label="`Взрослые: ${checkbox5.toString()}`"
                            hide-details></v-checkbox>
                        </v-col>                    
                    </v-row>
                    <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="11">
                        <h3>Бренд</h3>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="10">
                        <v-text-field
                        solo
                        dense
                        label="Поиск"
                        prepend-inner-icon="mdi-magnify"
                        ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    </v-row>
                    <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="10" >
                        
                    </v-col>
                    <v-spacer></v-spacer>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="9">
                <v-row
                style="margin-top: 15px">
                <v-text-field
                label="Поиск"
                placeholder="Поиск"
                dense
                solo></v-text-field>
                <v-btn>Найти</v-btn>
                </v-row>
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
                        Дата размещения: date
                    </div>
                    <h2>
                        HEADLINE
                    </h2>
                    <v-row>
                        <v-col cols="3">
                            <v-list-item-subtitle>Год выпуска: 2001</v-list-item-subtitle>
                        </v-col>
                        <v-col cols="3">
                            <v-list-item-subtitle>Тип товара: новый</v-list-item-subtitle>
                        </v-col>
                        <v-col cols="3">
                            <v-list-item-subtitle>Категория: клюшки</v-list-item-subtitle>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-list-item-subtitle>Размерность: взрослые</v-list-item-subtitle>
                        </v-col>
                        <v-col cols="4">
                            <v-list-item-subtitle>Проффесиональность: проффесиональные</v-list-item-subtitle>
                        </v-col>
                        <v-col cols="3">
                            <v-list-item-subtitle>Бренд: BAUER</v-list-item-subtitle>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-list-item-subtitle>Рейтинг товара: 8.0</v-list-item-subtitle>
                        </v-col>
                        <v-col cols="4">
                            <v-list-item-subtitle>Рейтинг продавца: 9.0</v-list-item-subtitle>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <h3> 17000 РУБ</h3>
                    </v-list-item-content>
                </v-list-item>
                </v-card>                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'mainPage',
    components: {
    },
    data () {
      return {
        checkbox1: true,
        checkbox2: false,
        checkbox3: true,
        checkbox4: false,
        checkbox5: false,
      }
    },
    methods:{
        
    },
    computed: {

  }
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

</style>