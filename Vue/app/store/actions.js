import book from '../api/book'
import auth from '../api/auth'
import * as types from './mutation-types'

export const findAllBook = ({ commit }) => {
  book.findAllBook(books => {
    commit(types.FIND_ALL_BOOK, { books })
  })
}

export const findOneBook = ({ commit }) => {
  book.findOneBook(book => {
    commit(types.FIND_ONE_BOOK, { book })
  })
}

export const login = ({ commit }, arg) => {
  auth.login(arg, (user) => {
    commit(types.AUTH_LOGIN, { user })
  })
}

export const regiest = ({ commit }, arg) => {
  auth.login(arg, (res) => {
    commit(types.AUTH_REGIEST, {res})
  })
} 