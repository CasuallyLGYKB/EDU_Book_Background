import * as types from '../mutation-types'

const state = {
  allBooks: [],
  curBook: Object
}

const mutation = {
  [types.FIND_ALL_BOOK](state, {books}) {
    state.allBook = books
  },
  [types.FIND_ONE_BOOK](state, {book}) {
    state.curBook = book
  }
}

export default {
  state,
  mutation
}