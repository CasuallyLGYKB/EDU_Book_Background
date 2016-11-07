import Vue from 'vue'
const url = ''

export default {
  login(arg, callback) {
    Vue.http.post(url + '', arg) 
      .then((res) => {
        callback(res)
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  regiest(arg, callback) {
    Vue.http.post(url + '', arg) 
      .then((res) => {
        callback(res)
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}