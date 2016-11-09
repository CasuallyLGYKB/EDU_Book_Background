import Vue from 'vue'

export default {
  findAllBook(callback) {
    Vue.http.get('/find/book/all/?swapMode=快递&order=price_des')
      .then((res) => {
        console.log(res.body)
        callback(res.body)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  findOneBook(callback) {
    Vue.http.get('', opt)
      .then((book) => {
        console.log(book)
        callback(book)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}