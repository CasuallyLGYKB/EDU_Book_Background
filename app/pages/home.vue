<template>
  <div>
    <navheader></navheader>
    <div class="home-page">
      <carousel></carousel>
      <template v-if="curUser.name">
        <div v-for="book in books">
          <div class="row li-book-item">
            <div class="col-xs-12 col-s-6 col-md-6 col-lg-5">
              <router-link class="li-book-link" to="/login">
                <div class="li-book-img">
                  <img class="img-responsive img-rounded" src="https://img.alicdn.com/bao/uploaded/i6/TB1lu0DJXXXXXbpXpXXipY88FXX_030314.jpg_250x250Q30s50.jpg_.webp">
                </div>
                <div class="li-book-info">
                  <h3>{{ book.bookName }}</h3>
                  <h5>{{ book.bookIntroduce }}</h5>
                  <h5>{{ book.school }}</h5>
                  <h6>￥{{ book.price }}&nbsp&nbsp{{ book.swapMode }}</h6>
                </div>
              </router-link>
            </div>
        </div>
      </template>
      <template v-else>
        <span>用户未登陆</span>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import navheader from '../components/navheader.vue'
import carousel from '../components/carousel.vue'


export default {
  computed: mapGetters({
    books: 'allBooks',
    curUser: 'curUser'
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
    if(this.curUser.name)
      this.$store.dispatch('findAllBook')
  },
  methods: {

  },
  watch: {
    curUser: function() {
      this.$store.dispatch('findAllBook')
    }
  }
}
</script>

<style lang="sass">
.home-page {
  padding-top: 50px;
  .li-book-item {
    display: block;
    border-bottom-style:solid;
    border-bottom-width: thin;
    border-bottom-color: rgba(0,0,0,0.2);
    .li-book-link { 
      .li-book-img {
        width: 35%;
        height: 35%;
        float: left;
      }
      .li-book-info {
        width: 65%;
        float: left;
      }
    }
  }
}



</style>