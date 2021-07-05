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
    favorite:[],
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
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    SET_FAVORITE: (state, product) => {
      let isProductExists = false;
      if (state.favorite.length) {
        state.favorite.map(function (item) {
          if (item.key === product.key) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.favorite.push(product)
        }
      } else {
        state.favorite.push(product)
      }
    },
    REMOVE_FROM_FAVORITE: (state, index) => {
      state.favorite.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if(state.cart[index].quantity > 1){
        state.cart[index].quantity--
      }
    }
    
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
    },
    ADD_TO_FAVORITE({commit}, product){
      commit('SET_FAVORITE', product);
    },
    DELETE_FROM_FAVORITE({commit}, index) {
      commit('REMOVE_FAVORITE', index)
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT', index)
    },
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
    FAVORITE(state) {
      return state.favorite
    },
  },
  modules: {
  },
  plugins:[createPersistedState()]
})
