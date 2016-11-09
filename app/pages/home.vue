<template>
  <div>
    <p>{{pageText}}</p>
    <ul>
      <li v-for="book in books">
        {{ book.bookName }} - {{ book.price }} - {{ book.swapMode }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    books: 'allBooks'
  }),
  data() {
    return {
      pageText: 'Home Page'
    }
  },
  created () {
    this.$store.dispatch('findAllBook')
  }
}
</script>