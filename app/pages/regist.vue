<template>
  <div>
    <navheader></navheader>
    <div class="page">
      <div class="container">
        <form v-on:submit.prevent="submit" class="col-lg-4 col-lg-offset-4">
          <div class="form-group">
            <label>邮箱</label>
            <input class="form-control" type="email" placeholder="输入你的邮箱" v-model="form.email">
          </div>
          <div class="form-group">
            <label>昵称</label>
            <input class="form-control" type="text" placeholder="输入你的昵称" v-model="form.name">
          </div>
          <div class="form-group">
            <label>密码</label>
            <input class="form-control" type="password" placeholder="输入你的密码" v-model="form.password">
          </div>
          <button type="submit" class="btn btn-default">注册</button>
        </form>
      </div>
    <div class="page">
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import navheader from '../components/navheader.vue'
export default {
  data() {
    return {
      pageText: 'Regiest Page',
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  components: {
    navheader
  },
  methods: {
    ...mapActions(['regist']),
    submit() {
      let arg = 'name=' + this.form.name + '&email=' + this.form.email + '&password=' + this.form.password
      this.regist(arg)
      this.$router.replace({path: '/login'})
    }
  }
}
</script>

<style lang="sass">

</style>