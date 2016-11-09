import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import book from './modules/book'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    book,
    user
  }
})