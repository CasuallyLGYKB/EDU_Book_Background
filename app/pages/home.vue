<template>
  <div>
    <navheader></navheader>
    <div class="home-page">
      <carousel></carousel>
      <div class="container">
        <div v-for="book in books">
          <div class="row">
            <div class="col-xs-6 col-md-3 col-lg-3 col-lg-offset-1">
              <a class="thumbnail">
                <img class="img-responsive img-rounded" src="images/carousel_1.jpg">
                <label>{{ book.bookName }}</label>
                <label>{{ book.price }}￥</label>
              </a>
            </div>
        </div>
      </div>
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
  created() {
    this.$store.dispatch('findAllBook')
  }
}
</script>

<style lang="sass">
.home-page {
  padding-top: 50px;
}
</style>