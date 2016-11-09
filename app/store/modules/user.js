import * as types from '../mutation-types'

const state = {
  user: JSON.parse(sessionStorage.getItem('user')) || {}
}

const mutations = {
  [types.AUTH_LOGIN](state, {user}) {
    sessionStorage.setItem('user', JSON.stringify(user))
    Object.assign(state, user)
  },

  [types.AUTH_LOGOUT](state) {
    sessionStorage.removeItem('user')
    Object.keys(state).forEach(k => Vue.delete(state, k))
  },

  [types.AUTH_REGIST](state) {
    console.log("注册成功");
  }
}

export default {
  state,
  mutations
}