<template>
  <div>
    <navheader></navheader>
    <ul>
      <li v-for="book in books">
        {{ book.bookName }} - {{ book.price }} - {{ book.swapMode }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import navheader from '../components/navheader.vue'


export default {
  computed: mapGetters({
    books: 'allBooks'
  }),
  data() {
    return {
      pageText: 'Home Page'
    }
  },
  components: {
    navheader
  },
  created () {
    this.$store.dispatch('findAllBook')
  }

}
</script>

<style lang="sass">

</style>