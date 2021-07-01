import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skates:[],
    products:[],
    cart:[],
  },
  mutations: {
    SET_SKATES: (state, skates) => {
      state.skates = skates
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      let isProductExist = false
      state.cart.map(function (item) {
        if (item.key === product.key) {
          isProductExist = true
          item.quantity++
        }
      })
      isProductExist || state.cart.push({ ...product, quantity: 1 })
       /*
        * в данной строке мы сразу ставим quantity:1 для любого нового товара в корзине,
        * компоненты получают его сразу в пропсах
        */
  },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
  },
  actions: {
    GET_SKATES({commit}){
      return Axios('http://localhost:3000/skates',{
        method: "GET"
      })
      .then((skates) => {
        commit('SET_SKATES', skates.data)
        return skates
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
    GET_PRODUCTS({commit}){
      return Axios('http://localhost:3000/card',{
        method: "GET"
      })
      .then((products) => {
        commit('SET_PRODUCTS', products.data)
        return products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
    ADD_TO_CART({commit}, product){
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  getters:{
    SKATES(state) {
      return state.skates
    },
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
  },
  modules: {
  },
  plugins:[createPersistedState()]
})
