import Vue from 'vue'

var opt = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded' 
  }
}

export default {
  login(arg, callback) {
    Vue.http.post('/login', arg, opt) 
      .then((res) => {
        callback(res.body)
        console.log(res.body)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  regist(arg, callback) {
    Vue.http.post('/regist', arg, opt)
      .then((res) => {
        callback(res)
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  logout(callback) {
    Vue.http.post('/logout', opt) 
      .then((res) => {
        callback(res)
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}