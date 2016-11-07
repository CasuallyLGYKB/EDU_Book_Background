import Vue from 'vue'
import Vuex from 'vuex'
import * as action from './action'
import * as getters from './getters'
import book from './modules/book'

Vue.use(Vuex)

export default new Vuex.Store({
  action,
  getters,
  modules: {
    book
  }
})