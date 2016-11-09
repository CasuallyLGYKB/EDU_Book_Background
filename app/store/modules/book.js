import * as types from '../mutation-types'

const state = {
  allBooks: [],
  curBook: Object
}

const mutations = {
  [types.FIND_ALL_BOOK](state, {books}) {
    state.allBooks = books
  },
  [types.FIND_ONE_BOOK](state, {book}) {
    state.curBook = book
  }
}

export default {
  state,
  mutations
}