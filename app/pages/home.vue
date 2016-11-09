<template>
  <div>
    <navheader></navheader>
    <div class="home-page">
      <carousel></carousel>
      <ul>
        <li v-for="book in books">
          {{ book.bookName }} - {{ book.price }} - {{ book.swapMode }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import navheader from '../components/navheader.vue'
import carousel from '../components/carousel.vue'


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
    navheader,
    carousel
  },
  created () {
    this.$store.dispatch('findAllBook')
  }

}
</script>

<style lang="sass">
.home-page {
  padding-top: 50px;
}
</style>