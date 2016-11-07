import Vue from 'vue'
const url = ''

export default {
  findAllBook(callback) {
    Vue.http.get(url + '')
      .then((books) => {
        console.log(books)
        callback(books)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  findOneBook(callback) {
    Vue.http.get(url + '')
      .then((book) => {
        console.log(book)
        callback(book)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}