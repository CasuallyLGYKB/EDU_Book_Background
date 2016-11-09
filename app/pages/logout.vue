<template>
  <div>
    <navheader></navheader>
    <p>{{pageText}}</p>
    <button v-on:click="submit">注销</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import navheader from '../components/navheader.vue'
export default {
  data() {
    return {
      pageText: 'Logout Page'
    }
  },
  components: {
    navheader
  },
  methods: {
    ...mapActions(['logout']),
    submit() {
      this.logout();
    }
  }
}
</script>

<style lang="sass">

</style>