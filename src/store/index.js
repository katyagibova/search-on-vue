import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skates:[],
    products:[],
    all_filters:[]
  },
  mutations: {
    SET_SKATES: (state, skates) => {
      state.skates = skates
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_FILTERS: (state, all_filters) => {
      state.all_filters = all_filters
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
    GET_FILTERS({commit}){
      return Axios('http://localhost:3000/all_filters',{
        method: "GET"
      })
      .then((all_filters) => {
        commit('SET_FILTERS', all_filters.data)
        return all_filters
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
  },
  getters:{
    SKATES(state) {
      return state.skates
    },
    PRODUCTS(state) {
      return state.products
    },
    FILTERS(state) {
      return state.all_filters
    },
  },
  modules: {
  },
  plugins:[createPersistedState()]
})
