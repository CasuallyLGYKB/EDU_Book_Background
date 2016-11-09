<template>
  <div>
    <p>{{pageText}}</p>
    <button v-on:click="submit">注销</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      pageText: 'Logout Page'
    }
  },
  methods: {
    ...mapActions(['logout']),
    submit() {
      this.logout();
    }
  }
}
</script>