<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">EDUBOOK</router-link>
        <a class="navbar-toggle glyphicon glyphicon-th-list" data-toggle="collapse" data-target="#NavbarCollapse"/>
      </div>
      <div class="navbar-collapse collapse" id="NavbarCollapse">
        <ul class="nav navbar-nav navbar-right">
          <template v-if="curUser.name">
            <li><router-link to="center">个人中心</router-link></li>
            <li><a to="logout" v-on:click="logoutSubmit">退出</a></li>
          </template>
          <template v-else>
            <li><router-link to="login">登陆</router-link></li>
            <li><router-link to="regist">注册</router-link></li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    curUser: 'curUser'
  }),
  methods: {
    ...mapActions(['logout']),
    logoutSubmit() {
      this.logout();
      this.$router.replace({path: '/login'})
    }
  },
  create() {
    this.$store.dispatch('')
  }
}
</script>

<style lang="sass">

</style>